<?php
// Allow cross-origin requests (optional, if you are using a different domain for frontend and backend)
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

// Get the raw POST data
$data = file_get_contents("php://input");

// Decode the JSON data
$json = json_decode($data, true);

// Check if email is provided
if (isset($json['email']) && filter_var($json['email'], FILTER_VALIDATE_EMAIL)) {
    $email = $json['email'];

    // Database connection (replace with your own database connection details)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "newsletter";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    // Execute the statement
    if ($stmt->execute()) {
        $response = array("status" => "success", "message" => "Subscription successful.");
    } else {
        $response = array("status" => "error", "message" => "Subscription failed.");
    }

    // Close connections
    $stmt->close();
    $conn->close();

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);

} else {
    // Invalid email
    $response = array("status" => "error", "message" => "Invalid email address.");
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
