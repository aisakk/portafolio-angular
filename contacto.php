<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
// Load Composer's autoloader

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// error_reporting(0);
$message = json_decode(file_get_contents("php://input"));
var_dump($message->name);
$mail = new PHPMailer(true);


if(!empty($message)){
    try{
        $mail->SMTPDebug = 2;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'aisakkdeveloper@gmail.com';                     // SMTP username
        $mail->Password   = 'mivida040598';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        $mail->SMTPSecure = 'tls';
        //Recipients
        $mail->setFrom($message->email, 'Correo enviado por');
        $mail->FromName = $message->name;
        $mail->addAddress($message->email, $message->name);     // Add a recipient
        //$mail->addAddress('aisakkdeveloper@gmail.com', 'aisakk');               // Name is optional
       // $mail->addReplyTo('info@example.com', 'Information');
        $mail->addCC('aisakkdeveloper@gmail.com', 'aisakk');
        //$mail->addBCC('bcc@example.com');
    
        // Attachments
       // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
       // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $message->title;
        $mail->Body    = "
        <div>
        <div style='background-color:#FFFFFF'>
                                <table height='100%' width='100%' cellpadding='0' cellspacing='0' border='0'>
                                <tr>
                                <td valign='top' align='left'>
                                <table cellpadding='0' cellspacing='0' border='0' width='100%'>
                                <tr>
                                <td width='100%'>

                                <table cellpadding='0' cellspacing='0' border='0' width='100%'>
                                <tr>
                                <td align='center' width='100%'>
                                <!--[if gte mso 9]><table width='600' cellpadding='0' cellspacing='0'><tr><td><![endif]-->
                                <table class='width600 main-container' cellpadding='0' cellspacing='0'border='0' width='100%' style='max-width:600px'>
                                <tr>
                                <td width='100%'>

                                <table cellpadding='0' cellspacing='0' border='0' width='100%'>
                                <tr>

                                <td valign='top' align='center'><!--[if gte mso 9]><table width='80' cellpadding='0' cellspacing='0'><tr><td><![endif]-->

                                <table cellpadding='0' cellspacing='0' border='0' width='80' style='max-width:100%' class='img-wrap'>
                                <tr>

                                <td valign='top' align='center'><img src='https://images.chamaileon.io/5ea0f67cd105ef01a07efb4d/5ea0f67cd105efdde77efb57/1587607545100_Ai4.png' width='80' height='110' alt='' border='0' style='display:block;font-size:14px;max-width:100%;height:auto;' class='width80' />
                                </td>
                                </tr>
                                </table>

                                <!--[if gte mso 9]></td></tr></table><![endif]-->
                                </td>
                                </tr>
                                </table>

                                <table cellpadding='0' cellspacing='0' border='0' width='100%'>
                                <tr>

                                <td style='padding:10px'>
                                <table cellpadding='0' cellspacing='0' border='0' width='100%' style='border-top:1px solid #D8D7D7'>
                                <tr>

                                <td>
                                </td>
                                </tr>
                                </table>

                                </td>
                                </tr>
                                </table>

                                <table cellpadding='0' cellspacing='0' border='0' width='100%'>
                                <tr>

                                <td valign='top' style='padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px'><div style='font-family:arial;font-size:18px;color:#131313;line-height:25px;text-align:left'><p style='padding: 0; margin: 0;'> $message->name , $message->email  Te envio este mensaje para ti Isaac:</p><p style='padding: 0; margin: 0;'>&nbsp;</p><p style='padding: 0; margin: 0;'> $message->message</p></div>
                                </td>
                                </tr>
                                </table>

                                </td>
                                </tr>
                                </table>
                                <!--[if gte mso 9]></td></tr></table><![endif]-->
                                </td>
                                </tr>
                                </table>

                                </td>
                                </tr>
                                </table>
                                </td>
                                </tr>
                                </table>
                        </div>
                        ";
        $mail->send();
        echo 'Message has been sent';
    }catch(Exception $e){
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}else{
    echo 'No existe ningun dato, Rellene todos los campos';
}