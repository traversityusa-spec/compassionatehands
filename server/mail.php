<?php
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

$to = "compassionatehandsltd@gmail.com";
$subject = $isQuick
    ? "Quick Contact from $name"
    : "New Contact Form Submission from $name";

$html = "<h2>" . ($isQuick ? "Quick Contact" : "New Contact Form Submission") . "</h2>";
$html .= "<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;'>";
$html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>Name:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>" . htmlspecialchars($name) . "</td></tr>";
$html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>Email:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>" . htmlspecialchars($email) . "</td></tr>";
$html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>Phone:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>" . htmlspecialchars($phone ?: "Not specified") . "</td></tr>";

if (!$isQuick) {
    $html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>Service:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>" . htmlspecialchars($service) . "</td></tr>";
}

$html .= "<tr><td style='padding:8px;font-weight:bold;border-bottom:1px solid #ddd;'>Message:</td><td style='padding:8px;border-bottom:1px solid #ddd;'>" . nl2br(htmlspecialchars($message)) . "</td></tr>";
$html .= "</table>";

$headers = "From: $name <$to>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$sent = mail($to, $subject, $html, $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email"]);
}
