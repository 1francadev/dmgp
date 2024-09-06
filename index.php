<?php
    // Delay para exibir a página de loading
    sleep(3); // Ajuste o tempo conforme necessário

    // Redirecionamento seguro para a página de login
    header("Location: assets/login.html");
    exit();
?>
