<template>
	<div>
		<!-- ============================ Page Title Start================================== -->
		<page-title-section title="FAQ's" subTitle="get your all queries here" />
		<!-- ============================ Page Title End ================================== -->
		
		<!-- ================= Our Mission ================= -->
		<section class="bg-light">
			<div class="container">
				<div class="row">					
					<div class="col-lg-10 col-md-12 col-sm-12">					
						<div v-for="faq in faqs.data" :key="faq.id" class="single-faqs mb-5">
							<div class="faqs-title"><h5>{{ faq.name }}</h5></div>
							<div class="accordion" id="accountActivation">

								<div v-for="solution in faq.solutions" :key="solution.id" class="accordion-item">
									<h2 class="accordion-header" id="account1">
										<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accountOne" aria-expanded="true" aria-controls="accountOne">
										{{ solution.question }}
										</button>
									</h2>
									<div id="accountOne" class="accordion-collapse collapse show" aria-labelledby="account1" data-bs-parent="#accountActivation">
										<div class="accordion-body">
											{{ solution.answer }}
										</div>
									</div>
								</div>
							</div>
						</div>						
					</div>
				</div>
			</div>
		</section>
		<!-- ================= Our Mission ================= -->
	</div>			
</template>
<script setup>
	const apiBase = useApiBase();
	const nuxtApp = useNuxtApp()
	const { data: faqs, pending, error } = await useAsyncData(
		'faqs', 
		() => $fetch(`${apiBase}/ka/api/faqs`),
		{
			getCachedData(key) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
			},
			default: () => ({
				data: []
			}),
		}
	);
	// const { data: faqs } = await useAsyncData('faqs', () => $fetch('/api/faqs'));
	// const { data: faqs, error} = await useFetch('http://laravel.test/ka/api/faqs', {
	// 	key: 'faqs',
	// 	getCachedData(key) {
	// 		return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
	// 	},
	// 	default: () => ({
	// 		data: []
	// 	}),
	// 	onError(error) {
	// 		console.error('Error fetching FAQs:', error)
	// 	}
	// })
</script>

