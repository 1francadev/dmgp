<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: sensor-page.html");
    exit();
}

echo "Bem-vindo, " . $_SESSION['username'] . "!";
?>
