<template>
	<div>
		<!-- ================= Our Mission ================= -->
		<section class="bg-light">
			<div class="container">
				<div class="row d-flex justify-content-center">					
					<div class="col-lg-4 col-md-4 col-sm-12 ">

							<div  class="d-flex justify-content-between">

								<FormInputText v-model="pin" placeholder="Pin" wrapper-style="" />

								<button @click="sendPin" class="btn btn-secondary font--bold btn-m ms-2 mt-4">Send Pin</button>

							</div>


							<div class="form-group d-flex justify-conent-center">

								<button  @click="submitPin" class="btn btn-primary full-width font--bold btn-lg">Login</button>

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
		middleware: ['sanctum:auth'],
	});
	import { ref } from 'vue';
	import { toast } from 'vue3-toastify';
	const apiBase = useApiBase();
	const { isAuthenticated, user, error  } = useSanctumAuth();
	const router = useRouter()


	const type = ref();
	const pin = ref()

    onMounted(() => {
		if (isAuthenticated.value) {
			type.value = user.value.data.two_fa_type;
		}
        
    });

	const sendPin = async () => {

        const { data, error } = await useSanctumFetch(apiBase + '/ka/api/iAuth/otp/send', {
        method: 'POST',
        body: {
			type: type.value
		},
        });

        if (error.value) {
            toast.error('Operation failed!');
        } else {
            toast.success('Pin sent successfully! Please check ' + type.value);
        }

    };

	const submitPin = async () => {

        const { data, error } = await useSanctumFetch(apiBase + '/ka/api/iAuth/2fa/login', {
        method: 'POST',
        body: {
			pin: pin.value
		},
        });

        if (error.value) {
            toast.error(error.value.data.message);
        } else {
			useCookie('sanctum.token.cookie').value = data.value.token;
			useCookie('twoFactorPassed').value = true;
			router.back()
            toast.success('Wellcome!');
        }

    };

</script>

