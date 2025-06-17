<template>
    <div class="modal-login-form">
        <div class="form-floating mb-4">
            <input v-model="credentials.email" type="email" class="form-control" placeholder="name@example.com">
            <label>User Email</label>
        </div>
        
        <div class="form-floating mb-4">
            <input v-model="credentials.password" type="password" class="form-control" placeholder="Password">
            <label>Password</label>
        </div>
        
        <div class="form-group">
            <button @click="authLogin" class="btn btn-primary full-width font--bold btn-lg">Log In</button>
        </div>
        
        <div class="modal-flex-item mb-3">
            <div class="modal-flex-first">
                <div class="form-check form-check-inline">
                    <input v-model="credentials.remember" class="form-check-input" type="checkbox" id="savepassword" value="option1">
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
    import { ref } from 'vue';
    const { login, isAuthenticated, user, error  } = useSanctumAuth();

    const credentials = ref({
        email: '',
        password: '',
        remember: false
    });

    const authLogin = async () => {
        console.log(credentials.value);
        const res = await login(credentials.value)
        .then(response => {
            console.log('Login successful:', response);
            return response;
        })
        .catch(err => {
            console.error('Login error:', err.data);
            return null;
        });

    };
</script>