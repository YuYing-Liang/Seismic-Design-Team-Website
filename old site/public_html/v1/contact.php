<?php

session_start();

require_once 'libs/security.php';

$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
$fields = isset($_SESSION['fields']) ? $_SESSION['fields'] : [];

?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Seismic | Contact Us</title>
	<meta name='description' content='Seismic Design Team, University of Toronto, Contact Us'/>
	<meta name='keywords' content='Seismic Design Team, University of Toronto, Contact Us, message, mail, email, e-mail, UofT, U of T, Civil Engineering, Engineering Science Infrastructure, Club'/>		
	<link rel="stylesheet" href="style.css" type="text/css" media="screen, projection" />
	<!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script>
	$(function(){
	$('a').each(function() {
	if ($(this).prop('href') == window.location.href) {
	$(this).addClass('current');
	}
	});
	});
	</script>
        <link rel="shortcut icon" type="image/png" href="http://cdn.mysitemyway.com/icons-watermarks/simple-black/ocha-inv/ocha-inv_disaster-earthquake-inv/ocha-inv_disaster-earthquake-inv_simple-black_128x128.png"/>
</head>
<body>
	<div id="wrapper">
	
		<!--========================== L O G O  &   N A V    B A R ============================-->
		<header>
			<div id="logo">
				<a href="index.html"><img src="images/seismic-logo.jpg" alt="Seismic" /></a>
			</div>
			<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About Us</a></li>
					<li><a href="portfolio.html">Portfolio</a></li>
					<li><a href="sponsors.html">Sponsors</a></li>
					<li><a href="contact.php" style="border-bottom: 2px solid #00BCF2;color: #00BCF2;">Contact Us</a></li>
				</ul>
			</nav>
		</header>
		
		<!--========================== M A I N   C O N T E N T =============================-->
		<!--Here goes the page title and tag line-->
		<div id="pagetitle">
			<h1>Contact US</h1>
			<p>Please feel free to send us an email or drop by our office. Make sure to include a relevant subject line!</p>
		</div>
		<div id="main" class="contact clearfix">
			<div id="contact-form">
				
				<?php if(!empty($errors)): ?> 
					<div class=panel>
						<ul><li><?php echo implode('</li><li>', $errors); ?></li></ul>
					</div>
				<?php endif; ?>
				<br>
				
				<form method="post" action="libs/mail.php">
					<p><input type="user" name="name" id="user"<?php echo isset ($fields['name']) ? 'value="' . e($fields['name']) . '"' : '' ?> ><label for="name">Name</label></p> 
					<p><input type="email" name="email" id="email"<?php echo isset ($fields['email']) ? 'value="' . e($fields['email']) . '"' : '' ?> ><label for="email">Email</label></p>
					<p><input type="text" name="subject" id="subject"<?php echo isset ($fields['subject']) ? 'value="' . e($fields['subject']) . '"' : '' ?> ><label for="email">Subject</label></p> 
					<p><textarea name="message" id="message"><?php echo isset ($fields['message']) ? e($fields['message']) : '' ?></textarea></p>
					<p><input class="submit" type="submit" name="contact_submitted" value="Send" ></p>
				</form>
			</div>
			<div id="contact-info">
				<h2>Our Address</h2>
				<p>10 King’s College Road <br>
                                    Toronto, Ontario, Canada M5S 3G4<br>
				    University of Toronto, St. George Campus</p>
				<h2>Contact Info</h2>
				<p>E-Mail: ut.seismic@gmail.com</p>
			</div>
		</div><!--End of Main-->

		<!--============================= F O O T E R  =======================================-->
		<footer>
			<div id="widget1">
				<a href="index.html"><img src="images/seismic-logo.jpg" alt="Seismic" /></a>
			</div>
			<div id="widget3">
				<h1>Explore</h1>
				<div id="footerarticle">
					<a href="design-meetings.html"><img src="images/announcement-1.jpg" alt="Design Meetings" />
					<div id="fainfo">
					<h2>Design Meetings</h2>
					<p></p></a>
					</div>
				</div>				
				<div id="footerarticle">
					<a href="graduate-seminars.html"><img src="images/announcement-2.jpg" alt="Graduate Seminars" />
					<div id="fainfo">
					<h2>Graduate Seminars</h2>
					<p></p></a>
					</div>
				</div>				
				<div id="footerarticle">
					<a href="guest-lectures.html"><img src="images/announcement-3.jpg" alt="Guest Lectures" />
					<div id="fainfo">
					<h2>Guest Lectures</h2>
					<p></p></a>
					</div>
				</div>				
				<div id="footerarticle">
					<a href="team-bonding.html"><img src="images/announcement-4.jpg" alt="Team Bonding" />
					<div id="fainfo">
					<h2>Team Bonding</h2>
					<p></p></a>
					</div>
				</div>
			</div>
		</footer>
                   <div id="widgetA">
				<a href="https://www.facebook.com/University-of-Toronto-Seismic-Design-Team-784888368289699" target = "blank">
				<img src="images/facebook-128.png" alt="Facebook" />

			</div>
                        <div id="widgetA">
				<a href="https://www.linkedin.com/groups/8462685/profile" target = "blank">
				<img src="images/linkedin-128.png" alt="LinkedIn" />

			</div>
                        <div id="widgetA">
				<a href="https://www.youtube.com/channel/UCugrQkMvhnQnwLsrQ_8Cvxg" target = "blank">
				<img src="images/youtube-128.png" alt="Youtube" />

			</div>

	</div>
</body>
</html>

<?php

unset($_SESSION['errors']);
unset($_SESSION['fields']);
?>