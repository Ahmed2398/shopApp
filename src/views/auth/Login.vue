<template>
  <!-- Login Form -->
    <div class="login-page bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <h3 class="mt-5 head-text">Login Now</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form @submit.prevent="handleSubmit" class="row g-4">
                                            <div class="col-12">
                                                <label>email<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="fa-regular fa-envelope"></i></div>
                                                    <input type="email" class="form-control" placeholder="Enter Email" v-model="email">
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="fa-solid fa-lock"></i></div>
                                                    <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
                                                </div>
                                            </div>
                                            <div v-if="error" class="error">{{error}}</div>

                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <a href="#" class="float-end text-danger">Forgot Password?</a>
                                            </div>

                                            <div class="col-12">
                                                <button class="btn btn-primary btn-form-login px-4 float-end mt-4" v-if="!isPending">Log in</button>
                                                <button v-if="isPending" disabled>Loading</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100  text-white text-center pt-5">
                                    <i class="fa-brands fa-shopify my-5"></i>
                                    <h2 class="fs-1">Welcome Back ❤  </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
<!-- END Login Form  -->
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from 'vue';
import {useRouter} from 'vue-router'
export default {
    setup() {
        const { error, login, isPending } = useLogin()

        // My Inputs
        const email = ref('')
        const password = ref('')
        const router = useRouter()

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
                router.push({name: 'home'})
            }
        }
        return {email, password, handleSubmit, error, isPending}
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.login-page {
    width: 100%;
    height: 100vh;
    display: inline-block;
    display: flex;
    align-items: center;
}
.form-right i {
    font-size: 100px;
}
.head-text{
    color: #FF6000;
}
.btn-form-login{
    background-color: #FF6000;
    border: 0;
}
.btn-form-login:hover{
    transition: 2s;
    transform: scale(1.1);
    background-color: #FFA800;
}
.form-right{
    background-color: #FF6000;
}
</style>

