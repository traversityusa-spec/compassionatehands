<?php
function loadEnv() {
    $envFile = __DIR__ . "/../.env";
    if (file_exists($envFile)) {
        foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            if (str_starts_with(trim($line), "#")) continue;
            [$key, $val] = explode("=", $line, 2);
            putenv(trim($key) . "=" . trim($val));
        }
    }
}
loadEnv();

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

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->setFrom($smtpUser, $name);
    $mail->addReplyTo($email, $name);
    $mail->addAddress($smtpUser);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $html;
    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $mail->ErrorInfo]);
}
