<?php
 
include('lock.php');
 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Prekium </title>
</head>
 
<body>
 
<div align=center><h1>Welcome to Prekium 
</h1></div>
<h1>User : <?php echo $login_session; ?></h1> 
 
<?php
 
$con=mysqli_connect("localhost","695107","lollol1","695107");
//get zip code
$sql="select zipcode from admin_merchant where username='$login_session'";
$sql2=mysqli_query($con,$sql);
$row=mysqli_fetch_array($sql2);
echo "<div align=right><h1>Zip Code : $row[0] </h1></div>";
 
$sql="select username from admin";
$sql2=mysqli_query($con,$sql);
$count=mysqli_num_rows($sql2);
 
 
 
 
echo "<center><table width=100% border=1> 
 
 
 
 
 
 
 
 
<tr><td align=center>
<b>
User</td>
<td align=center>
<b>
Category</td><td align=center ><b>
Product</td><td align=center><b>
Brand</td><td align=center><b>
Store</td><td align=center><b>
Size</td><td align=center><b>
Colour</td><td align=center><b>
Regular Price</td align=center><td><b>
Your Price</td><td align=center><b>
Where to find it</td><td align=center><b>
Promo Code</td>
</tr> <b>";
 
 
 
 
 
 
 
 
while($count>0){
 
$row=mysqli_fetch_array($sql2);
$count--;
 
 
 
 
 
$sub_sql="select * from $row[0] where brand='$login_session'";
$sub_sql2=mysqli_query($con,$sub_sql);
$sub_count=mysqli_num_rows($sub_sql2);
 
 
 
 
 
 
 
 
 
 
while($sub_count>0){
 
$sub_row=mysqli_fetch_array($sub_sql2);
$sub_count--;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
echo "<tr> <td> $row[0]</td><td >$sub_row[0]</td>  <td >$sub_row[1]</td>  <td>$sub_row[2]</td> <td>$sub_row[3]</td> <td>$sub_row[4]</td> <td>$sub_row[5]</td> <td align=center>$sub_row[6]</td> <td align=center>$sub_row[7]</td> <td align=center>$sub_row[8]</td>  <td align=center>$sub_row[9]</td> </tr>";
 
 
 
 
 
}
 
 
}
 
echo "</table></center>";
 
 
?>
 
 
 
<h2><a href="logout.php">Sign Out</a></h2>
</body>
</html>
 