<template>
    <div class="account">
        <BubbleBackground />

        <div class="container-acc" :class="event">
            <div class="forms-container">
                <div class="signin-signup">
                    <v-form action="#" class="sign-in-form" ref="form1" v-model="signinValid" lazy-validation>
                        <div class="text-center">
                            <h1 class="mb-4 ct--text" right>Sign in</h1>
                            <v-text-field
                                outlined
                                required
                                v-model="signinEmail"
                                label="Email"
                                prepend-inner-icon="mdi-account-outline"
                                class="mb-3 input-width"
                                :rules="emailRules"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                v-model="signinPassword"
                                :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                :type="show ? 'text' : 'password'"
                                label="Password"
                                prepend-inner-icon="mdi-lock-outline"
                                class="input-width"
                                @click:append="show = !show"
                                :rules="passwordRules"
                            ></v-text-field>

                            <v-btn elevation="0" class="primary px-8 py-5" :disabled="!signinValid" @click="onLogin"
                                >Sign in</v-btn
                            >
                        </div>
                    </v-form>
                    <v-form action="#" class="sign-up-form" ref="form2" v-model="signupValid" lazy-validation>
                        <!-- <v-dialog v-model="dialog" width="500">
                            <v-card>
                                <v-card-actions fixed class="justify-space-between mx-0 my-0">
                                    <v-spacer></v-spacer>
                                    <v-card-title class="text-capitalize ct--text font-big"
                                        >Verify your Email
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                </v-card-actions>

                                <v-card-text>
                                    <v-alert border="top" color="green" dense icon="mdi-account" outlined prominent
                                        >We've sent a verification code to your email to {{ signupEmail }}.
                                        <div>Please enter the OTP below to validate your Email Address.</div></v-alert
                                    >
                                </v-card-text>
                                <v-text-field
                                    v-model="otp"
                                    outlined
                                    label="One Time Password"
                                    type="number"
                                    class="mx-6"
                                >
                                </v-text-field>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="success" class="px-5 mb-5 text-capitalize" @click="validateUser">
                                        Validate OTP
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog> -->
                        <div class="text-center">
                            <h1 class="mb-4 ct--text">Sign up</h1>
                            <v-text-field
                                outlined
                                v-model="name"
                                type="text"
                                label="Username"
                                prepend-inner-icon="mdi-at"
                                class="mb-2 input-width"
                                :rules="nameRules"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                v-model="signupEmail"
                                type="email"
                                label="Email"
                                prepend-inner-icon="mdi-account-outline"
                                class="mb-2 input-width"
                                :rules="emailRules"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                v-model="signupPassword"
                                :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                :type="show ? 'text' : 'password'"
                                label="Password"
                                prepend-inner-icon="mdi-lock-outline"
                                @click:append="show = !show"
                                class="mb-2"
                                :rules="passwordRules"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                type="password"
                                v-model="confirmPassword"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-outline"
                                @click:append="show = !show"
                                :rules="confirmRules"
                            ></v-text-field>
                            <div class="mb-2">
                                <v-btn v-show="register" x-small color="success" outlined @click="dialog = true"
                                    >Enter OTP</v-btn
                                >
                            </div>
                            <v-btn elevation="0" class="primary px-8 py-5" :disabled="!signupValid" @click="onRegister"
                                >Sign up</v-btn
                            >
                        </div>
                    </v-form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>Enter your details and start journey with us</p>
                        <v-btn class="ct--text px-8" @click="login = !login">Sign up</v-btn>
                    </div>
                    <img src="@/assets/images/login-svg.svg" class="image" />
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>Sign in and get access to your work</p>
                        <v-btn class="ct--text px-8" @click="login = !login">Sign in</v-btn>
                    </div>
                    <img src="@/assets/images/register-svg.svg" class="image image-2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login, register /* validate*/ } from '@/services/auth.services'
import { mapMutations, mapActions } from 'vuex'
import BubbleBackground from '@/components/utils/BubbleBackground.vue'

export default {
    name: 'AccountPage',
    components: { BubbleBackground },

    data() {
        return {
            dialog: false,
            login: true,
            show: false,
            register: false,
            signinValid: true,
            signupValid: true,
            name: '',
            signinEmail: '',
            signinPassword: '',
            signupEmail: '',
            signupPassword: '',
            confirmPassword: '',
            otp: '',
            nameRules: [(v) => !!v || 'Username is required'],
            emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
            passwordRules: [
                (v) => !!v || 'Password is required',
                (v) => /.{8,}/.test(v) || 'Password must contain at least 8 Caracter',
                (v) => /(?=.*?[A-Z])/.test(v) || 'Password must contain 1 Upper case Character',
                (v) => /(?=.*?[a-z])/.test(v) || 'Password must contain 1 Lower case Characterper',
                (v) => /(?=.*?[0-9])/.test(v) || 'Password must contain 1 Digit',
                (v) => /(?=.*?[#?!@$%^&*-])/.test(v) || 'Password must contain 1 special Character',
            ],
            confirmRules: [
                (v) => !!v || 'Confirm password is Required',
                (v) => v === this.signupPassword || 'Confirm password Not matching',
            ],
        }
    },
    computed: {
        event() {
            if (!this.login) return 'sign-up-mode'
            return ''
        },
    },
    mounted() {
        this.setCurrPage('')
    },
    methods: {
        ...mapActions(['getUserDetails']),
        ...mapMutations(['setCurrPage']),
        async onLogin() {
            if (this.$refs.form1.validate()) {
                // this.setIsLoading(true);
                const userDetails = {
                    email: this.signinEmail,
                    password: this.signinPassword,
                }
                const response = await login(userDetails)
                if (response.success) {
                    localStorage.setItem('token', response.token)
                    await this.getUserDetails()
                    this.$router.push('/dashboard')
                } else {
                    console.log(response)
                }
                this.$refs.form1.reset()
                // this.setIsLoading(false);
            }
        },
        async onRegister() {
            if (this.$refs.form2.validate()) {
                this.register = true
                // this.setIsLoading(true);
                const userDetails = {
                    email: this.signupEmail,
                    password: this.signupPassword,
                    name: this.name,
                }
                const response = await register(userDetails)
                if (response.success) {
                    this.dialog = true
                } else {
                    console.log(response)
                }
                // this.setIsLoading(false);
            }
        },
        // async validateUser() {
        //     // this.setIsLoading(true);
        //     const userDetails = {
        //         email: this.signupEmail,
        //         password: this.signupPassword,
        //         name: this.name,
        //         otp: this.otp,
        //     };
        //     const response = await validate(userDetails);
        //     if (response.success) {
        //         console.log(response);
        //         this.$toast.success('Sign up Successful');
        //         this.login = true;
        //     } else {
        //         this.$toast.error('response.msg');
        //         console.log(response);
        //     }
        //     this.dialog = false;
        //     // this.setIsLoading(false);
        // },
    },
}
</script>

<style scoped>
@import '@/assets/css/account.css';
.font-big {
    font-size: 25px;
}
</style>
