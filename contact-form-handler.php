<?php 
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $insitution = $_POST['institution'];
  $position = $_POST['position'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_form = 'ccornejoss@gmail.com';

  $email_subject = "New Form Submission";

  $email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "User Institution: $institution.\n".
                "User Position: $position.\n".
                "Email Subject: $subject.\n".
                "User Message: $message.\n";

  $to = "ccornejoss@gmail.com";

  $headers = "From: $email_from \r\n";
  $headers .= "Reply-to: $visitor_email\r\n";

  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");

?>