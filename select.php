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

function getAllName(){
    global $conn;
    $result = array();

    connect_db();
    $sql = "SELECT stt, name FROM caro";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query)>0){
        while ($row = mysqli_fetch_assoc($query)){
            $result []= $row;
        }
    }
    return $result;
}

$result = array();
$results = getAllName();
echo '<option>Chon bản lưu.</option>';
foreach ($results as $key){

    echo '<option id="option" value="'.$key['stt'].'">'.$key['name'].'</option>';
    echo '</br>';
}
