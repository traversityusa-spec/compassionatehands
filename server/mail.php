<?php
if (file_exists(__DIR__ . "/../.env")) {
    foreach (file(__DIR__ . "/../.env", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === "" || $line[0] === "#") continue;
        $eq = strpos($line, "=");
        if ($eq === false) continue;
        putenv(trim(substr($line, 0, $eq)) . "=" . trim(substr($line, $eq + 1)));
    }
}

$smtpUser = getenv("SMTP_USER");
$smtpPass = getenv("SMTP_PASS");

if (!$smtpUser || !$smtpPass) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail server not configured"]);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit;
}

$name = trim($input["name"] ?? "");
$email = trim($input["email"] ?? "");
$phone = trim($input["phone"] ?? "");
$message = trim($input["message"] ?? "");

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name, email, and message are required"]);
    exit;
}

$service = trim($input["service"] ?? "");
$isQuick = empty($service);

$subject = $isQuick
    ? "Quick Contact from $name"
    : "New Contact Form Submission from $name";

$html = "<h2>" . ($isQuick ? "Quick Contact" : "New Contact Form Submission") . "</h2>";
$html .= "<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;'>";
$fields = [
    "Name"    => $name,
    "Email"   => $email,
    "Phone"   => $phone ?: "Not specified",
];
if (!$isQuick) {
    $fields["Service"] = $service;
}
$fields["Message"] = $message;

foreach ($fields as $label => $val) {
    $val = htmlspecialchars($val);
    $html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>$label:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>$val</td></tr>";
}
$html .= "</table>";

require_once __DIR__ . "/phpmailer/PHPMailer.php";
require_once __DIR__ . "/phpmailer/SMTP.php";
require_once __DIR__ . "/phpmailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$configs = [
    ["host" => "smtp.gmail.com", "port" => 587, "secure" => PHPMailer::ENCRYPTION_STARTTLS],
    ["host" => "smtp.gmail.com", "port" => 465, "secure" => PHPMailer::ENCRYPTION_SMTPS],
];

$lastError = "";
$sent = false;

foreach ($configs as $cfg) {
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = $cfg["host"];
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUser;
        $mail->Password   = $smtpPass;
        $mail->SMTPSecure = $cfg["secure"];
        $mail->Port       = $cfg["port"];
        $mail->setFrom($smtpUser, $name);
        $mail->addReplyTo($email, $name);
        $mail->addAddress($smtpUser);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = $html;
        $mail->SMTPOptions = [
            "ssl" => [
                "verify_peer"       => false,
                "verify_peer_name"  => false,
                "allow_self_signed" => true,
            ],
        ];
        $mail->send();
        $sent = true;
        break;
    } catch (Exception $e) {
        $lastError = $mail->ErrorInfo;
    }
}

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $lastError]);
}
