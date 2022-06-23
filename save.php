<?php
global $conn;

function connect_db(){
    global $conn;

    if (!$conn) {
        $conn = new mysqli('localhost', 'root', '', 'caro') or die("can't connect db");
        mysqli_set_charset($conn, 'utf8');
    }
}

function disconnect_db(){
    global $conn;

    if ($conn) {
        mysqli_close($conn);
    }
}

function get($stt){
    global $conn;
    $result = array();

    connect_db();
    $sql = "SELECT `vi_tri` FROM `caro` WHERE stt = '.$stt.';";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0){
        $row = mysqli_fetch_assoc($query);
        $result = $row;
    }
    return $result;
}

function save($chuoi){
    global $conn;

    connect_db();
    $sql = "insert into caro(vi_tri) values ('" . $chuoi . "')";
    $query=mysqli_query($conn, $sql);
    return $query;
}

$x = $_POST['x'];
$y = json_encode($x);
save($y);



