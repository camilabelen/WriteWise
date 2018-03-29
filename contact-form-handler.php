<?php 
  
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $insitution = $_POST['institution'];
    $position = $_POST['position'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "levineridesigner@outlook.com";
    $headers = "From: ".$email;
    $txt = "You have received and e-mail from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);

    header("Location: index.html?mailsend");
  }
  
?>