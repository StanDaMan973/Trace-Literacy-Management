<?php

if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $phoneNumber = $_POST['phone-number'];
    $message = $_POST['message'];

    $mailTo = 'jennifer.gray@traceliterary.com';
    $headers = "From: ".$mailFrom;
    $txt = "you have received an email from ".$name.".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers, $phoneNumber);
    header("location: index.php?mailsend");
}

?>