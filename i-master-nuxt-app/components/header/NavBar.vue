<template>
	<!-- Start Navigation -->
	<div class="header header-light">
		<div class="container">
			<nav id="navigation" class="navigation navigation-landscape">
				<div class="nav-header">
					<a class="nav-brand" href="#">
						<img src="assets/img/logo.png" class="logo" alt="">
					</a>
					<div class="nav-toggle"></div>
					<div class="mobile_nav">
						<ul>
							<li class="list-buttons">
								<a href="JavaScript:Void(0);" data-bs-toggle="modal" data-bs-target="#login"><i class="fas fa-sign-in-alt me-2"></i>Log In</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="nav-menus-wrapper">
					<ul class="nav-menu">
						<li><NuxtLink to="/">Home</NuxtLink></li>
						<li><NuxtLink to="/about">About</NuxtLink></li>
						<li><NuxtLink to="/faq">FAQ</NuxtLink></li>
						<li><NuxtLink to="/contact">Contact</NuxtLink></li>
					
						<!-- <li class="active"><a href="index.html">Home<span class="submenu-indicator"></span></a></li>
						<li><a href="about-us.html">About</a></li>
						<li><a href="faq.html">FAQ</a></li>
						<li><a href="contact.html">Contact</a></li> -->
						
					</ul>
					
					<ul class="nav-menu nav-menu-social align-to-right">
						<PluginsAuthGuest v-if="!isAuthenticated" />
						<PluginsAuthUser v-if="isAuthenticated"  />
						
						<!-- <li>
							<a href="JavaScript:Void(0);" data-bs-toggle="modal" data-bs-target="#login"><i class="fas fa-sign-in-alt me-2"></i>Sign In</a>
						</li> -->
						<li class="list-buttons ms-2">
							<a href="signup.html"><i class="fa-solid fa-cloud-arrow-up me-2"></i>Upload Resume</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	<!-- End Navigation -->
</template>
<script setup>
	const { isAuthenticated, user } = useSanctumAuth();
</script>