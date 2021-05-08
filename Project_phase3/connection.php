<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "SWE445_Project";

if(!$con = mysqli_connect($host, $user, $password, $database)){
	die("Failed to connect!");
}

