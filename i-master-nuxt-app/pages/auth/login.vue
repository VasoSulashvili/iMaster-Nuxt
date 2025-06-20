<template>
	<div>
		<!-- ================= Our Mission ================= -->
		<section class="bg-light">
			<div class="container">
				<div class="row d-flex justify-content-center">					
					<div class="col-lg-4 col-md-4 col-sm-12 ">

							<FormInputText type="email" v-model="credentials.email" title="Email" wrapper-style="" />
							<FormInputText type="password" v-model="credentials.password" title="Password" wrapper-style="" />

							<div class="form-group d-flex justify-conent-center">

								<button @click="authLogin" class="btn btn-primary full-width font--bold btn-lg">Login</button>
								
							</div>
							<div>
								<p>
									Don't have an account! <NuxtLink to="/auth/register">Register</NuxtLink>
								</p>
								
							</div>

					</div>
				</div>
			</div>
		</section>
		<!-- ================= Our Mission ================= -->
	</div>			
</template>
<script setup>
	definePageMeta({
		middleware: ['sanctum:guest'],
	});
	import { ref } from 'vue';
	import { toast } from 'vue3-toastify';
	const { login } = useSanctumAuth();
	const router = useRouter()

	const credentials = ref({
		email: '',
		password: ''
	});

	const authLogin = async () => {
        const res = await login(credentials.value)
			.then(response => {
				console.log(response.user)
				if (response.user.two_fa_type != null) {
					navigateTo('auth/two-fa-login')
				} else {
					router.back();
				}
				return response;
			})
			.catch(err => {
				console.error('Login error:', err);
				return null;
			});

    };

</script>

