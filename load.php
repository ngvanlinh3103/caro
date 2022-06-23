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
$load = get(1);

if($load){
    foreach ($load as $key){
        $z = ($key);

    }
    $d = json_decode($z);

//    var_dump($d[26]->x);die();
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
