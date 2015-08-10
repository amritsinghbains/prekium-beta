<?php
$mysql_hostname = "localhost";
$mysql_user = "695107";
$mysql_password = "PASSWORD";
$mysql_database = "695107";

$bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Opps some thing went wrong");
mysql_select_db($mysql_database, $bd) or die("Opps some thing went wrong");

?>