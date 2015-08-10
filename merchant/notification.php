<?php
$merchant=$_GET["merchant"];
$msg=$_GET["noti"];


$con=mysqli_connect("localhost","695107","lollol1","695107");
$sql="insert into notification values('$merchant','$msg',NULL)";
$sql2=mysqli_query($con,$sql);

header('Location: sugalist.php');

?>
