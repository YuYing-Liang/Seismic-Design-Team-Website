<?php

session_start();
require_once 'libs/security.php';

$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
$fields = isset($_SESSION['fields']) ? $_SESSION['fields'] : [];

?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

    <!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Seismic | Contact Us</title>
	<meta name="description" content="Free Responsive Html5 Css3 Templates | Zerotheme.com">
	<meta name="author" content="www.zerotheme.com">
	
    <!-- Mobile Specific Metas
	================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- CSS
	================================================== -->
  	<link rel="stylesheet" href="css/zerogrid.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/lightbox.css">
	
	<!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	
	
	<link rel="stylesheet" href="css/menu.css">
	<script src="js/jquery1111.min.js" type="text/javascript"></script>
	<script src="js/script.js"></script>
	
	        <link rel="shortcut icon" type="image/png" href="http://cdn.mysitemyway.com/icons-watermarks/simple-black/ocha-inv/ocha-inv_disaster-earthquake-inv/ocha-inv_disaster-earthquake-inv_simple-black_128x128.png"/>
	
	<!--[if lt IE 8]>
       <div style=' clear: both; text-align:center; position: relative;'>
         <a href="http://windows.microsoft.com/en-US/internet-explorer/Items/ie/home?ocid=ie6_countdown_bannercode">
           <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
        </a>
      </div>
    <![endif]-->
    <!--[if lt IE 9]>
		<script src="js/html5.js"></script>
		<script src="js/css3-mediaqueries.js"></script>
	<![endif]-->
		<style>
	    .widgetA {
	        float: left;
            height: 64px;
            width: 64px;
            margin-right: 8px;
	    }
	</style>
</head>

<body class="contact-page">
	<div class="wrap-body">
		<div class="header">
			<div id='cssmenu' >
				<ul>
				   <li class="active has-sub"><a href='index.html'><span>Home</span></a>
				    <ul>
				        <li><a href='index.html#gallery'><span>Gallery</span></a></li>
				    </ul>
				   </li>
				   <li><a href='about.html'><span>About</span></a></li>
				   <li class=' has-sub'><a href='design.html'><span>Design</span></a>
					  <ul>
						 <li class='has-sub'><a href='design.html#process'><span>Design Process</span></a>
							<ul>
							   <li><a href='design.html#testing'><span>Testing</span></a></li>
							   <li><a href='design.html#analysis'><span>Analysis</span></a></li>
							   <li class='last'><a href='design.html#construction'><span>Construction</span></a></li>
							</ul>
						 </li>
						 <li class='has-sub'><a href='design.html#past'><span>Past Years Designs</span></a>
							<ul>
							   <li><a href='design.html#2016'><span>2016</span></a></li>
							   <li class='last'><a href='design.html#2017'><span>2017</span></a></li>
							</ul>
						 </li>
					  </ul>
				   </li>
				   <li><a href='sponsors.html'><span>Sponsors</span></a></li>
				   <li class='last'><a href='contact.php'><span>Contact</span></a></li>
				</ul>
			</div>
		</div>

		<!--////////////////////////////////////Container-->
		<section id="container">
			<div class="wrap-container">
				<div class="zerogrid">
					<div class="row">
						<h1 class="t-center" style="margin: 40px 0;color: #212121;letter-spacing: 2px;font-weight: 500;">Contact Us</h1>
						<div class="col-full">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4305622589936!2d-79.3970285488499!3d43.66001445990539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b88edf158b%3A0x4513394276222c74!2s10+King&#39;s+College+Rd%2C+Toronto%2C+ON+M5S+3G8!5e0!3m2!1sen!2sca!4v1507608488238" width=100% height="450" frameborder="0" style="border:0"></iframe>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<h3 style="margin: 20px 0">Contact Info</h3>
								<strong>Interested in learning more about the team and how you can get involved? Feel free to shoot us an email! Make sure to leave a relevant subject line.</strong>
								<p>10 King's College Rd.<br>
									Toronto ON
									<br>M5S 3G4
								    </p>
								<p>ut.seismic@gmail.com</p>
							</div>
							<div class="widgetA">
				                                <a href="https://www.facebook.com/University-of-Toronto-Seismic-Design-Team-784888368289699" target = "blank"><img src="images/facebook-128.png" alt="Facebook" /></a>
                                            </div>
                                            <div class="widgetA">
				                                <a href="https://www.linkedin.com/groups/8462685/profile" target = "blank"><img src="images/linkedin-128.png" alt="LinkedIn" /></a>
                                            </div>
                                            <div class="widgetA">
				                                <a href="https://www.youtube.com/channel/UCugrQkMvhnQnwLsrQ_8Cvxg" target = "blank"><img src="images/youtube-128.png" alt="YouTube" /></a>
                                            </div>
						</div>
						<div class="col-2-3">
							<div class="wrap-col">
								<div class="contact">
									<h3 style="margin: 20px 0 20px 30px">Contact Form</h3>
									<div id="contact_form">
									    				<?php if(!empty($errors)): ?> 
					<div class=panel>
						<ul><li><?php echo implode('</li><li>', $errors); ?></li></ul>
					</div>
				<?php endif; ?>
										<form name="form1" id="ff" method="post" action="libs/mail.php">
											<label class="row">
												<div class="col-1-2">
													<div class="wrap-col">
														<input type="user" name="name" id="user" placeholder="Enter name" required="required" <?php echo isset ($fields['name']) ? 'value="' . e($fields['name']) . '"' : '' ?> />
													</div>
												</div>
												<div class="col-1-2">
													<div class="wrap-col">
														<input type="email" name="email" id="email" placeholder="Enter email" required="required" <?php echo isset ($fields['email']) ? 'value="' . e($fields['email']) . '"' : '' ?> />
													</div>
												</div>
											</label>
											<label class="row">
												<div class="col-full">
													<div class="wrap-col">
													<input type="text" name="subject" id="subject" placeholder="Subject" required="required" <?php echo isset ($fields['subject']) ? 'value="' . e($fields['subject']) . '"' : '' ?>/>
													</div>
												</div>
											</label>
											<label class="row">
												<div class="wrap-col">
													<textarea name="message" id="message" class="form-control" rows="4" cols="25" required="required"
													placeholder="Message"><?php echo isset ($fields['message']) ? e($fields['message']) : '' ?></textarea>
												</div>
											</label>
											<center><input class="sendButton" type="submit" name="submitcontact" value="Send"></center>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--////////////////////////////////////Footer-->
		<footer>
			<div class="copyright">
				<div class="zerogrid wrapper">
					Copyright @ zAnimal - Designed by <a href="https://www.zerotheme.com" title="free website templates">ZEROTHEME</a>
					<ul class="quick-link">
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms of Use</a></li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</body>
</html>
<?php

unset($_SESSION['errors']);
unset($_SESSION['fields']);
?>