<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == "admin" && $password == "admin") {
        $_SESSION['username_logado'] = $username;

        header("Location: dashboard.php");
        exit();
    } else {
        $_SESSION['login_error'] = "Usuário ou senha inválidos.";

        header("Location: login.html");
        exit();
    }
}
?>
