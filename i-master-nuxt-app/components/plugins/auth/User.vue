<template>
    <!-- <ul class="nav-menu nav-menu-social align-to-right"> -->
        <li class="user-menu-wrapper">
            <a  href="#" @click="showUserMenu = !showUserMenu" >
                <i class="fa-solid fa-user">
                    
                </i>{{ user.data.email }}
            </a>
            <div v-if="showUserMenu" class="user-menu">
                <NuxtLink to="/profile" class="d-block my-2">
                    <i class="fa-solid fa-user me-2"></i>Profile
                </NuxtLink>
                <button @click="tokenLogout" class="logout-btn">
                    Logout
                </button>
            </div>
        </li>
        <!-- <li class="list-buttons ms-2">
            <a href="signup.html"><i class="fa-solid fa-cloud-arrow-up me-2"></i>Upload Resume</a>

        </li> -->
        
    <!-- </ul> -->
</template>
<script setup>

const { login, isAuthenticated, user, logout } = useSanctumAuth();

import { ref } from 'vue';
const showUserMenu = ref(false);

function tokenLogout() {
    logout()
    .then(() => {
        console.log('Logged out successfully');
        showUserMenu.value = false; // Hide the user menu after logout
    }).catch(err => {
        console.error('Logout error:', err);
    });
}

    
</script>



<style scoped>
.user-menu-wrapper {
    position: relative;
    display: inline-block;
}
.user-menu {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    min-width: 200px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    top: 50px;
    right: 0;
    z-index: 1000;
    text-align: left;
}
.logout-btn {
    background-color: #f1f1f1; /* Red color */
    color: #424242;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}
</style>
