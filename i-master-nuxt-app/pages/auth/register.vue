<template>
	<div>
		<!-- ================= Our Mission ================= -->
		<section class="bg-light">
			<div class="container">
				<div class="row d-flex justify-content-center">					
					<div class="col-lg-4 col-md-4 col-sm-12 ">

							<FormInputText type="email" v-model="credentials.email" title="Email" wrapper-style="" />
							<FormInputText type="password" v-model="credentials.password" title="Password" wrapper-style="" />
							<FormInputText type="password" v-model="credentials.password_confirmation" title="Confirm Password" wrapper-style="" />

							<div class="form-group d-flex justify-conent-center">

								<button @click="signUp" class="btn btn-primary full-width font--bold btn-lg">Register</button>

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
		password: '',
		password_confirmation: ''
	});

	async function signUp() {

		const { data: data, error } = await useFetch('http://imaster.local/ka/api/iAuth/register', {
			method: 'post',
			body: credentials.value
		})

		if (error.value) {
			toast.error('Registration failed!')
		} else {
			toast.success('You are wellcome!')
			login(credentials.value)
			navigateTo('/')
		}

		console.log(
			responseData,
			// responseData.value.data.token,
			error.value );
	};
</script>

