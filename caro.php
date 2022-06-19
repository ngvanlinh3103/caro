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

function getAll(){
    global $conn;

    $resuilt = array();
    $sql = "select * from caro";
    $query = mysqli_query($conn, $sql);
    if ($query) {
        while ($row = mysqli_fetch_assoc($query)) {
            $resuilt[] = $row;
        }
    }
    return $resuilt;
}

function add($stt, $mang){
    global $conn;

    connect_db();
    $sql = "insert into caro( stt, mang) values (' $stt ',' $mang ')";
    $query = mysqli_query( $conn, $sql);
    return $query;
}

function back($stt){
    global $conn;

    connect_db();
    $sql = "delete from caro where stt = $stt";
    $query = mysqli_query( $conn, $sql);
    return $query;
}
