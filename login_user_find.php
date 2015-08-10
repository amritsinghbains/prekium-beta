<?php

include("config.php");
session_start();



$user_check=$_SESSION['login_user'];

$ses_sql=mysql_query("select username from admin where username='$user_check' ");

$row=mysql_fetch_array($ses_sql);

$login_session=$row['username'];

if(isset($login_session))
{
header("Location: welcome.php");
}





if($_SERVER["REQUEST_METHOD"] == "POST")
{
// username and password sent from form 

$myusername=addslashes($_POST['username']); 
$mypassword=addslashes($_POST['password']); 


$sql="SELECT id FROM admin WHERE username='$myusername' and passcode='$mypassword'";
$result=mysql_query($sql);
$row=mysql_fetch_array($result);
$active=$row['active'];

$count=mysql_num_rows($result);


// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1)
{

$_SESSION['login_user']=$myusername;

header("location: user_find.php");
}
else 
{
$error="Your Login Name or Password is invalid";
}
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Prekium Login</title>

<style type="text/css">
body
{
font-family:Arial, Helvetica, sans-serif;
font-size:14px;

}
label
{
font-weight:bold;

width:100px;
font-size:14px;

}
.box
{
border:#666666 solid 1px;

}
</style>
</head>
<body bgcolor="#FFFFFF">
<div align=left><h1>Welcome to Prekium 
</h1>
</div>


<div align="center">
<div style="width:600px; border: solid 1px #333333; " align="left">
<div style="background-color:#333333; color:#FFFFFF; padding:3px;"><b>Login 
</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="signup.php" target="_blank">Sign Up</a> </div>



<form action="" method="post">
<label>UserName  :</label><input type="text" name="username" class="box"/>
<label>Password  :</label><input type="password" name="password" class="box" />
<input type="submit" value=" Submit "/><br />

</form>


<div style="font-size:11px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
</div>

</div>

</body>
</html>
