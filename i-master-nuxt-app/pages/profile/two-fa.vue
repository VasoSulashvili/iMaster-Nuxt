<template>
    <div>
		
		<div class="dashboard-widg-bar d-block">
			
			<div class="card">
				<div class="card-header">
					<h4>Manage 2 FA</h4>
				</div>
				<div class="card-body">
                    <div class="row">

                        <form-input-select title="Current Password" type="password" v-model="type" >
                            <option value="">None</option>
                            <option value="authenticator">Authenticator</option>
                            <option value="sms">OTP SMS</option>
                            <option value="email">OTP Email</option>
                        </form-input-select>                       
                                               
                    </div>

                    <div class="row" v-if="type === 'sms' || type === 'email'">

                        <form-input-text title="Pin" type="text" v-model="pin" />

                        <div class="col-xl-6 col-lg-6 col-md-12 d-flex mt-3">
                            <button @click="sendPin" class="btn ft--medium btn-secondary mt-2">Send Pin</button>
                            <!-- <button @click="submitPin" class="btn ft--medium btn-primary mt-2 ms-4">Submit Pin</button> -->
                        </div>

                    </div>

                    <div class="row" v-if="type === 'authenticator'">

                        2FA Authenticator

                    </div>
                    
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<button @click="update2FA" class="btn ft--medium btn-primary">Update</button>
				</div>	
			</div>

		</div>

	</div>
</template>
<script setup>
    definePageMeta({
        layout: 'profile',
        middleware: ['sanctum:auth'],
    })
    import { toast } from 'vue3-toastify';
    import { ref, onMounted } from 'vue';

    const user = useSanctumUser();

    const pin = ref('');
    const type = ref(null);

    onMounted(() => {
        type.value = user.value.data.two_fa_type;
    });


    async function sendPin() {
        
        const { data, error } = await useSanctumFetch('http://imaster.local/ka/api/iAuth/otp/send', {
            method: 'POST',
            body: {
                type: type.value,
            },
        });

        if (error.value) {
            toast.error('Operation failed!');
        } else {
            toast.success('Pin sent successfully!');
        }
    }

    async function update2FA() {

            const { data, error } = await useSanctumFetch('http://imaster.local/ka/api/iAuth/2fa/update', {
                method: 'POST',
                body: {
                    type: type.value,
                    pin: pin.value
                },
            });

            if (error.value) {
                toast.error(error.value.data.message);
            } else {
                toast.success('2FA updated successfully!');
                type.value = '';
                pin.value = '';
            }
        
    }


</script>