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

function save($name,$chuoi){
    global $conn;

    connect_db();
    $sql = "insert into caro(name,vi_tri) values ('".$name."','" . $chuoi . "')";
    $query=mysqli_query($conn, $sql);
    return $query;
}

$name = isset($_POST['name']) ? $_POST['name']:'';

//loi neu ko co name
/*if (!$name){
    die('{error:"loi roi"}');
}

$error = array(
    'error'=> 'success',
    'name'=>''
);

if ($name){
    connect_db();
    $mysql = 'select count(*) as count from caro where name ="'.addslashes($name).'"';
    $query = mysqli_query($conn,$mysql);
    if ($query){
        $row = mysqli_fetch_array($query,MYSQLI_ASSOC);
        if ((int)$row['count'] > 0){
            $error['name'] = 'ten nay da ton tai';
        }
    }
    else
        die('{error:"loi roi"}');
}*/

$x = $_POST['x'];
$y = json_encode($x);
save($name, $y);
