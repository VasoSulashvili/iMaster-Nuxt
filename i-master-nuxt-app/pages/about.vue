<template>
    <div>
<!-- ============================ Page Title Start================================== -->
    <!-- <page-title-section title="About Us" /> -->
    <!-- ============================ Page Title End ================================== -->
    
    <!-- ============================ Our Story Start ================================== -->
    <section>
    
        <div class="container">
        
            <!-- row Start -->
            <div class="row align-items-center justify-content-between my-5">
                <div class="col-lg-6 col-md-6">
                    <div class="story-wrap explore-content">
                        <h2>Our Vision</h2>
                        <p>{{ about.data.vision }}</p>
                        <!-- <button type="button" class="btn fw-medium btn-primary">Start Today Now</button> -->
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 parallax img-1">
                    <!-- <img src="https://placehold.co/960x1100" class="img-fluid" alt=""> -->
                </div>
            </div>
            <!-- /row -->

            <!-- row Start -->
            <div class="row align-items-center justify-content-between my-5">
                <div class="col-lg-5 col-md-6 parallax img-1">
                    <!-- <img src="https://placehold.co/960x1100" class="img-fluid" alt=""> -->
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="story-wrap explore-content">
                        <h2>Our Mission</h2>
                        <p>{{ about.data.mission }}</p>
                        <!-- <button type="button" class="btn fw-medium btn-primary">Start Today Now</button> -->
                    </div>
                </div>
            </div>
            <!-- /row -->
            
            <!-- row Start -->
            <div class="row align-items-center justify-content-between my-5">
                <div class="col-lg-6 col-md-6">
                    <div class="story-wrap explore-content">
                        <h2>Our Goal</h2>
                        <p>{{ about.data.goal }}</p>
                        <!-- <button type="button" class="btn fw-medium btn-primary">Start Today Now</button> -->
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 parallax img-1">
                    <!-- <img src="https://placehold.co/960x1100" class="img-fluid" alt=""> -->
                </div>
            </div>
            <!-- /row -->
            
        </div>               
    </section>
    <!-- ============================ Our Story End ================================== -->

    </div>
</template>
<script setup>
    const nuxtApp = useNuxtApp();
    const apiBase = useApiBase();
    const { data: about, pending, error } = await useAsyncData(
		'about', 
		() => $fetch(`${apiBase}/ka/api/about/us`),
		{
			getCachedData(key) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
			},
			default: () => ({
				data: []
			}),
		}
	);

    // const { data: about, error} = await useFetch(`${apiBase}/ka/api/about/us`, {
    //     key: 'about',
    //     getCachedData(key) {
    //         return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    //     },
    //     default: () => ({
    //         data: []
    //     }),
    //     onError(error) {
    //         console.error('Error fetching About Us:', error);
    //     }
    // });

</script>

<style scoped>
	.parallax {
	/* The image used */
	/* background-image: url("https://picsum.photos/1920/500"); */

	/* Set a specific height */
	min-height: 500px; 

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	}
    .img-1 {
        background-image: url("https://picsum.photos/1920/500");
    }
    .img-2 {
        background-image: url("https://picsum.photos/1920/500");
    }
</style>