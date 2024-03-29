<?php
header('Content-Type: text/html; charset=utf-8');
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
    $sql = "SELECT vi_tri FROM caro WHERE stt = {$stt};";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0){
        $row = mysqli_fetch_assoc($query);
        $result = $row;
    }
    return $result;
}

$chon = isset($_POST['stt']) ? $_POST['stt']:'';

$load = get($chon);

if($load){
    //load lấy chuỗi
    foreach ($load as $key){
        $z = ($key);
    }
    //chuyển chuỗi thành mảng
    $d = json_decode($z);

    $result = array();
    foreach ($d as $item){
       $result[] = array(
           'x' => $item->x,
           'y' => $item->y,
           'z' => $item->gt
       );
    }

    echo json_encode($result);
}
