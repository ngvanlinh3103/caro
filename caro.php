<?php
    global $conn;

    function connect_db(){
        global $conn;
        if (!$conn){
            $conn= new mysqli('localhost', 'root', '', 'caro') or die("can't connect db");
            mysqli_set_charset($conn,'utf8');
        }
    }

    function disconnect_db(){
        global $conn;
        if($conn){
            mysqli_close($conn);
        }
    }


