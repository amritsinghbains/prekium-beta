<?php

include("config.php");



$myusername=addslashes($_POST['username']); 
$mypassword=addslashes($_POST['password']); 
$zipcode=$_POST['zipcode']; 



$sql="SELECT id FROM admin WHERE username='$myusername' ";
$result=mysql_query($sql);
$row=mysql_fetch_array($result);
$active=$row['active'];

$count=mysql_num_rows($result);

if($count==0)
{

$sql="SELECT max(id) FROM admin";
$result=mysql_query($sql);

$row=mysql_fetch_array($result);
$idfetch=$row[0]+1;


   $sql="INSERT INTO admin values($idfetch, '$myusername', '$mypassword',$zipcode)";
$result=mysql_query($sql);

echo " Account Created ";
}
else
echo "username exists";

?>

<a href="login.php">Login</a>