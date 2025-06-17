<template>
    <div>
        <div class="form-floating mb-4">
            <input v-model="email" type="email" class="form-control" placeholder="name@example.com">
            <label>User Email</label>
        </div>
                
        <div class="form-floating mb-4">
            <input v-model="password" type="password" class="form-control" placeholder="Password">
            <label>Password</label>
        </div>

        <div class="form-floating mb-4">
            <input v-model="password_confirmation" type="password" class="form-control" placeholder="Password">
            <label>Password Confirmation</label>
        </div>
        
        <div class="form-group">
            <button @click="signUp" class="btn btn-primary full-width font--bold btn-lg">Sign Up</button>
        </div>
                
        <div class="modal-flex-item mb-3">
            <div class="modal-flex-first">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="savepassword" value="option1">
                    <label class="form-check-label" for="savepassword">Save Password</label>
                </div>
            </div>
            <div class="modal-flex-last">
                <a href="JavaScript:Void(0);">Forget Password?</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

async function signUp() {
    const formData = {
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value
    };

    const { data: responseData, error } = await useFetch('http://imaster.local/ka/api/iAuth/register', {
        method: 'post',
        body: { 
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value, 
        }
    })

    console.log(
        responseData,
        // responseData.value.data.token,
        error.value );
};
</script>