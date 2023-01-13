import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Register from '../views/Register.vue'
import Nav from '../views/Nav.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/nav',
            component: Nav
        },
    ]
});

export default router;
