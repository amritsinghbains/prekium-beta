<?php 
$brand=$_GET["brand"];
$store=$_GET["store"];
include('config.php');
session_start();
$user_check=$_SESSION['login_user'];

$ses_sql=mysql_query("select username from admin where username='$user_check' ");

$row=mysql_fetch_array($ses_sql);

$login_session=$row['username'];

if(!isset($login_session))
{

echo "No body is logged on";
exit(0);
}






$enter = $login_session;


$con=mysqli_connect("localhost","695107","lollol1","695107");

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$sql="CREATE TABLE IF NOT EXISTS $enter (
  `category` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `Store` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `regularpriCe` varchar(50) NOT NULL,
  `yourprice` varchar(50) NOT NULL,
  `wheretofindit` varchar(50) NOT NULL,
  `promocode` varchar(50) NOT NULL
) ";


if (mysqli_query($con,$sql))
  {
  echo " ";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }





if($_POST["size1"]!="select"&&$_POST["colour1"]!="select"){


$size1=$_POST["size1"];
$colour1=$_POST["colour1"];

$sql="insert into $enter values('Tshirt',
'Bowery Slim in Oxford','$brand','$store',
'$size1',

'$colour1',
'128$','88$','Online','On Sale')";

if (mysqli_query($con,$sql))
  {
  echo " Added to wishlist ";
echo "<a href=/$brand/index.php>Add more to wishlist</a><br/><br/> <a href=sugalist.php>Login to Prekium</a>";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }


exit(0);



}

if($_POST["size2"]!="select"&&$_POST["colour2"]!="select"){



$size2=$_POST["size2"];
$colour2=$_POST["colour2"];

$sql="insert into $enter values('SweatShirt',
'Tailored','$brand','$store',
'$size2',

'$colour2',
'299 $','239$','Online','yes')";

if (mysqli_query($con,$sql))
  {
  echo " Added to wishlist ";
echo "<a href=/$brand/index.php>Add more to wishlist</a><br/><br/> <a href=sugalist.php>Login to Prekium</a>";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }


exit(0);






}


if($_POST["size3"]!="select"&&$_POST["colour3"]!="select"){




$size3=$_POST["size3"];
$colour3=$_POST["colour3"];

$sql="insert into $enter values('Pants',
'Melo M9','$brand','$store',
'$size3',

'$colour3',
'199 $','139$','Online','Jeff124')";

if (mysqli_query($con,$sql))
  {
  echo " Added to wishlist ";
echo "<a href=/$brand/index.php>Add more to wishlist</a><br/><br/> <a href=sugalist.php>Login to Prekium</a>";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }


exit(0);




}

$enter .="\n";




$file = 'people.txt';
// The new person to add to the file

// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($file, $enter, FILE_APPEND | LOCK_EX);

header('Location: people.txt');

 ?>



