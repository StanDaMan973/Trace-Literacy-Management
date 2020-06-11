<?php

if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phoneNumber = $_POST['phone-number'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    $mailTo = 'jennifer.gray@traceliterary.com';
    $headers = "From: ".$mail;
    $txt = "you have received an email from ".$name.".\n\n".$message;
    
    mail($mail ,$phoneNumber,$service, $message, $txt, $headers);
    header('location: index.php?mailsend');
}

?>