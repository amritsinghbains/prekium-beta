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
<div align=center><h1>Sign Up
</h1>
</div>


<div align="center">
<div style="width:500px; border: solid 1px #333333; " align="left">
<div style="background-color:#333333; color:#FFFFFF; padding:3px;"><b></b></div>



<form action="newsignup.php" method="post">
<label>UserName  :</label><input type="text" name="username" class="box"/><br/>
<label>Password  :</label><input type="password" name="password" class="box" /><br/>
<label>Zip Code :</label><input type="text" name="zipcode" class="box"/><br/>
<input type="submit" value=" Submit "/><br />

</form>


<div style="font-size:11px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
</div>

</div>

</body>
</html>
