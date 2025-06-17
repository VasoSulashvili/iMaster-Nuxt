<template>
    <!-- <ul class="nav-menu nav-menu-social align-to-right"> -->
        <li>
            <a href="JavaScript:Void(0);" data-bs-toggle="modal" data-bs-target="#login"><i class="fas fa-sign-in-alt me-2"></i>Sign In</a>
            <!-- Log In Modal -->
            <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
                <div class  ="modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div class="modal-content" id="loginmodal">
                        <span class="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i class="fas fa-close"></i></span>
                        <div class="modal-header">
                            <div class="mdl-thumb"><img src="assets/img/ico.png" class="img-fluid" width="70" alt=""></div>
                            <div class="mdl-title"><h4 class="modal-header-title">Hello, Again</h4></div>
                        </div>
                        <div class="modal-body">
                            <div v-if="authForm === 'login'">
                                <PluginsAuthLoginForm />
                                <!-- <PlaginsAuthLoginForm /> -->
                            </div>
                            <div v-else>
                                <!-- <PlaginsAuthRegister /> -->
                            </div>
                            <div class="social-login">
                                <ul>
                                    <li><a href="JavaScript:Void(0);" class="btn connect-fb"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                                    <li><a href="JavaScript:Void(0);" class="btn connect-google"><i class="fa-brands fa-google"></i>Google+</a></li>
                                </ul>
                            </div>
                        
                        </div>
                        <div class="modal-footer">
                            <p>{{ authQuestion }}<a @click.prevent="toggleForm" class="text-primary font--bold ms-1 pointer">{{ authAction }}</a></p>
                            <!-- <p>Don't have an account yet?<a href="signup.html" class="text-primary font--bold ms-1">Sign Up</a></p> -->
                        </div>
                        
                    </div>
                </div>
            </div>
        <!-- End Modal -->
        </li>
        <!-- <li class="list-buttons ms-2">
            <a href="signup.html"><i class="fa-solid fa-cloud-arrow-up me-2"></i>Upload Resume</a>

        </li> -->
        
    <!-- </ul> -->
</template>
<script setup>

import { ref } from 'vue';
const authForm = ref('login'); // 'login' or 'register'
const authQuestion = ref('Don\'t have an account yet?');
const authAction = ref('Sign Up');
const toggleForm = () => {
    authForm.value = authForm.value === 'login' ? 'register' : 'login';
    authQuestion.value = authForm.value === 'login' ? 'Don\'t have an account yet?' : 'Have an account?';
    authAction.value = authForm.value === 'login' ? 'Sign Up' : 'Login';
};


    
</script>
