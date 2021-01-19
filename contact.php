

 <?php

$msg = ''; 
$msgClass = '';

if(filter_has_var(INPUT_POST, 'submit')) {

    htmlspecialchars($name = $_POST['name']);
    htmlspecialchars($mailFrom = $_POST['mail']);
    htmlspecialchars($subject = $_POST['subject']);
    htmlspecialchars($phoneNumber = $_POST['phone-number']);
    htmlspecialchars($message = $_POST['message']);

    

    if(!empty($name) && !empty($mailFrom) && !empty($subject) && !empty($phoneNumber)) {

        if(preg_match('/http|www/i',$message)) {
            $msg = 'we do not allow URL';
            $msgClass = 'alert-danger';
          }

          $mailFrom = filter_var($mailFrom, FILTER_SANITIZE_EMAIL);

          if(filter_var($mailFrom, FILTER_VALIDATE_EMAIL) === false ){

            $msg = 'Please fill in a vaild email';
            $msgClass = 'alert-danger';

          } else {

             $mailTo = 'jennifer.gray@traceliterary.com';
             $headers = "From: ".$mailFrom;
             $txt = "you have received an email from ".$name.".\n\n".$mailFrom.".\n\n".$phoneNumber.".\n\n".$message;

             if(mail($mailTo, $headers, $txt)) {
                $msg = 'Your email has been sent';
                $msgClass = 'alert-success';
                $_POST = array();
             } else {
                $msg = 'Your email was not sent';
                $msgClass = 'alert-danger';
             }

          }



    } else {

        $msg = 'Please fill in all fields';
        $msgClass = 'alert-danger';
    }



}

?>
 
 
 
 
 

