<?php
// subscribe.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    // Sanitize and validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Process the email, e.g., save to database or send confirmation email
        echo "Subscription successful!";
    } else {
        echo "Invalid email format.";
    }
}
?>
