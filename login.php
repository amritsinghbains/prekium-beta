
<?php

include("config.php");
session_start();



$user_check=$_SESSION['login_user'];

$ses_sql=mysql_query("select username from admin where username='$user_check' ");

$row=mysql_fetch_array($ses_sql);

$login_session=$row['username'];

if(isset($login_session))
{
header("Location: sugalist.php");
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

header("location: sugalist.php");
}
else 
{
$error="Your Login Name or Password is invalid";
}
}
?>

<!DOCTYPE html>
<!-- saved from url=(0020)http://www.etsy.com/ -->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml" class="js"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=1024">
        <meta name="X-Recruiting" content="Is code your craft? http://www.etsy.com/careers">
        <meta name="csrf_nonce" content="">
    <meta name="uaid_nonce" content="2:1377129272:jaeQhc-SSKgPVRMl2WQoMIG7Pa9x:0EL-tt8uRCGlUfyqTDUMEqaCoE_7:63b526259ea137499d9a46c824f1916a1fe830d7">
    <meta property="fb:app_id" content="89186614300">
    <meta property="og:site_name" content="Prekium">
    <meta property="og:locale" content="en_GB">
    <meta name="apple-itunes-app" content="app-id=477128284">

        <title>Prekium</title>
	
	
	<meta name="js_dist_path" content="/assets/dist/js/">
	<meta name="css_dist_path" content="/assets/dist/css/">
	<meta name="dist" content="201308211377126577">


            <link href="http://img0.etsystatic.com/" rel="dns-prefetch">
            <link href="http://img1.etsystatic.com/" rel="dns-prefetch">
    
                <link rel="stylesheet" href="./sugalist_files/base.20130819181823.css" type="text/css">
    
    
                <link rel="stylesheet" href="./sugalist_files/homepage.20130816141228.css" type="text/css">

            <link rel="stylesheet" href="./sugalist_files/international-homepage.20130816141228.css" type="text/css">
    
    
    

    
    <script src="./sugalist_files/conversion_async.js"></script><script src="./sugalist_files/conversion_async.js"></script><script src="./sugalist_files/tag"></script><script src="./sugalist_files/tag(1)"></script><script async="" src="./sugalist_files/tag.js">{'site':'790xr8J'}</script><script type="text/javascript">window.Etsy=window.Etsy||{};window.Etsy.errorQueue=[];window.Etsy.warningQueue=[];window.onerror=function(msg,url,line){Etsy.errorQueue.push([msg, url, line, document.documentElement.innerHTML.split("\n").slice(Math.max(0, line-50), line+50).join("\n")]);return false;};


    
    
    
    <link rel="shortcut icon" href="http://www.etsy.com/images/favicon.ico">

                    
    
    <link type="application/opensearchdescription+xml" rel="search" href="http://www.etsy.com/osdd.php">
<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery.appear" src="./sugalist_files/jquery.appear.20130816141227.js"></script><script type="text/javascript">(function(t,e){e.LocaleNag=function(){function i(){return"https:"==window.location.protocol?a:o}function n(n){h.fadeOut("fast"),t("#locale-nag-suggestion").hide(),h.fadeIn("fast"),t("#locale-nag-confirm").show(),t.ajax({type:"POST",url:i(),data:{_nnc:e.csrf_nonce,suggested_currency_code:u.currency.code,suggested_language_code:u.language.code,suggested_region_code:u.region.code,currency_code:c.currency.code,language_code:c.language.code,region_code:c.region.code,geo_ip_country_code:d.geo_ip_country_code},dataType:"json",error:function(){alert("An error occurred while saving your locale preference. Please try again later.")},success:function(){e.EventLogger.logEvent({php_event_name:"dismiss_locale_nag",action:n?"No thanks":"OK"}),setTimeout(function(){n?window.location.reload():h.fadeOut("slow")},3500)}})}function s(t){t.preventDefault();var e="cancel"==t.target.name;return e&&(c=l),n(e)}function r(e){e.preventDefault();var i=t("#locale-nag-message"),n=h.find(":submit[name=save]"),s=h.find(":submit[name=cancel]"),r=t(e.target),o=t("#locale-nag-confirm > h3");p=!p,p?(m||(m=i.html(),f=r.html(),g=n.val(),v=s.val(),_=o.html()),i.html(d.english_nag_message),t("#locale-nag-language").html(c.language.translation),t("#locale-nag-region").html(c.region.translation),n.val("Okay"),s.val("No thanks"),r.html("Show this message in "+c.language.translation),o.html(d.english_confirm_message)):(i.html(m),t("#locale-nag-language").html(c.language.name),t("#locale-nag-region").html(c.region.name),n.val(g),s.val(v),r.html(f),o.html(_))}var o="/api/v2/ajax/locale/preference",a="/api/v2/ajax/locale/preference-secure",l={currency:{code:"USD"},language:{code:"en-US"},region:{code:"XX"}},u=null,c=null,h=null,d={},p=!1,f="",m="",g="",v="",_="";return{init:function(i){d=t.extend(d,i||{}),c=d.locale||l,u=c,h=t("#locale-nag"),h.find(":submit").bind("click",s);var n=t("#locale-nag-language-switch");c.language.code==l.language.code?n.hide():n.bind("click",r),h.fadeIn("fast"),e.EventLogger.logEvent({php_event_name:"view_locale_nag",suggested_language:u.language.code,suggested_currency:u.currency.code,suggested_region:u.region.code,geo_code:d.geo_ip_country_code})}}}()})(jQuery,window.Etsy);</script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="etsy.storque-ticker" src="./sugalist_files/etsy.storque-ticker.20130816141227.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="etsy.listings-ticker" src="./sugalist_files/etsy.listings-ticker.20130816141227.js"></script></head>


<body class="transitional-wide
 guest en-GB" data-language="en-GB">

    <!--[if lte IE 7]>
    <div class="notice print-hidden">
                    <p>
                Etsy no longer supports Internet Explorer 7. It's easy to upgrade.

<a href="//www.etsy.com/help/article/319">Find out how.</a>
            </p>
            </div>
    <![endif]-->

        <div id="fb-root" data-locale="en_GB"></div>

    
    
    
    
                


<noscript>
    &lt;div id="javascript-nag" class="notice"&gt;
        &lt;p&gt;
            Take full advantage of our site features by enabling JavaScript. &lt;a href="http://www.etsy.com/help/article/372"&gt;Learn more&lt;/a&gt;.
        &lt;/p&gt;
    &lt;/div&gt;
</noscript>


<script type="text/template" id="tt-tpl" charset="utf-8">
    <div class="tt bottom tt-mini">
        <div class="tt-inner">
            <p><%=title%></p>
        </div>
        <span class="tt-arrow"></span>
    </div>
</script>


        
    
    <div id="header" data-as-version="10_6707430509" class="header-signed-out" data-as-extras="[]">

                <div id="meta-group" class="clear">

                                                                                                                                        
                       
				
            
        </div>
        <div id="navigation-group-wrapper">
        <div id="navigation-group" class="clear" role="navigation">
                                                           
                            
            
                
                                            <div class="nav-bar-cell nav-bar-cell-main-menu">
                                                <ul id="main-nav" class="nav-bar-cell nav-bar nav-left-rounded">
                                                        <li class="register-link nav-item nav-item-register nav-left-rounded">
                                
                                <a href="#" title="Register" id="register" class="inline-overlay-trigger" data-downtime-overlay-type="register">
                                        Welcome to Prekium
                                </a>
                                
                            </li>
                            <li class="sign-in-link nav-item nav-item-sign-in">
                                <a href="#" title="Sign in to your Etsy account" id="sign-in" class="inline-overlay-trigger">

  Customer Login

</a>
                            </li>
							
							 <li class="sign-in-link nav-item nav-item-sign-in">
                                <a href="merchant/login.php" id="sign-in" class="inline-overlay-trigger">

  Merchant Login

</a>
                            </li>
							
							 <li class="sign-in-link nav-item nav-item-sign-in">
                                <a href="signup.php" id="sign-in" class="inline-overlay-trigger">

  Sign Up

</a>
                            </li>
							
							
                                                    </ul>
                    </div>
                    
					
					
					
					
					 

									
									
									
									
									
									
                </div></div></div>
            






			
			
			
			
			
			
			
			
			
			
			
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
<div align=left><h1>Customer Login 
</h1>
</div>



<div align="center">
<div style="width:500px; border: solid 1px #333333; " align="left">




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
