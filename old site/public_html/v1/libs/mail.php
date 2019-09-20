<?php
ob_start();
session_start();

require_once 'PHPMailerAutoload.php';

$errors = [];

if(isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
    
    $fields = [
        'name' => $_POST['name'],
        'email' => $_POST['email'],
        'subject' => $_POST['subject'],
        'message' => $_POST ['message']     
    ];
    
    foreach($fields as $field => $data){
        if(empty($data)) {
            $errors[] = 'The ' . $field . ' field is required.';
        }
    }
    
    if(empty($errors)) {
        
        $m = new PHPMailer;
        
        $m->isSMTP();
        $m->SMTPAuth = true;
        
        $m->SMTPDebug = 2;
        
        $m->Host = 'smtp.gmail.com';
        $m->Username = 'ut.seismic@gmail.com';
        $m->Password = 'sdc2015ut';
        $m->SMTPSecure = 'tls';
        $m->Port = 587;
        
        $m->isHTML();
        
        $m->Subject = 'SUBJECT: ' . $fields['subject'] . '';
        $m->Body = 'From: ' . $fields['name'] . ' (' . $fields['email'] . ')<p>' . $fields['message'] . '</p>';
        
        $m->FromName = '' . $fields['name'] . '';
        
        $m->AddReplyTo($fields['email'], $fields['name']);
        
        $m->AddAddress('ut.seismic@gmail.com', 'Seismic Design Team');
        
        if($m->send()) {
            header ('Location: thanks.php');
            die();
        } else {
            $errors[] = 'Sorry, could not send email. Try again later.';  
        }
        
    }
    
} else {
    $errors[] = 'Something went wrong.';  
}

$_SESSION ['errors'] = $errors;
$_SESSION['fields'] = $fields;

header ('Location: ../contact.php');
?>