import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

import Home from '../views/Employeehome.vue'
import Requisition from '../views/Employeerequisition.vue'
import Attendancesummary from '../views/Employeeattendancesummary.vue'
import Overtimehistory from '../views/Employeeovertimehistory.vue'
import Employeeprofile from '../views/Employeeprofile.vue'


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
            path: '/employee',
            name: 'Home',
            component: Home
        },
        {
            path: '/employee',
            name: 'Home',
            component: Home
        },
        {
            path: '/requisition',
            name: 'Requisition',
            component: Requisition
        },
        {
            path: '/attendancesummary',
            name: 'Attendancesummary',
            component: Attendancesummary
        },
        {
            path: '/overtimehistory',
            name: 'Overtimehistory',
            component: Overtimehistory
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Employeeprofile
        },
    ]
});

export default router;
