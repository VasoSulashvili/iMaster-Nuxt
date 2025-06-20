<template>
    <div>
		
		<div class="dashboard-widg-bar d-block">
			
			<div class="card">
				<div class="card-header">
					<h4>Update Password</h4>
				</div>
				<div class="card-body">
                    <div class="row">

                        <form-input-text title="Current Password" type="password" v-model="formData.current_password" />

                        <hr />

                        <form-input-text title="New Password" type="password" v-model="formData.password" />

                        <form-input-text title="Repeat Password" type="password" v-model="formData.password_confirmation" />
                    </div>
                    
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<button @click="updatePassword" class="btn ft--medium btn-primary">Update Password</button>
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
    import { ref } from 'vue';
    const apiBase = useApiBase();

    const formData = ref({
        current_password: '',
        password: '',
        password_confirmation: ''
    });

    async function updatePassword() {
        console.log('Updating password with data:', formData.value);
        const { data, error } = await useSanctumFetch(apiBase + '/ka/api/iAuth/password/update', {
        method: 'POST',
        body: formData.value,
        });

        if (error.value) {
            toast.error('Operation failed!');
        } else {
            toast.success('Password updated successfully!');
            formData.value = {
                current_password: '',
                password: '',
                password_confirmation: ''
            };
        }
    }

</script>