import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index'
import member from '@/view/member_info'
import gains from '@/view/gains_form'
import center from '@/view/center'
import activity from '@/view/activity'
import userinfo from '@/view/userinfo'
import membership from '@/view/membership'
import renew from '@/view/renew'
import audit from '@/view/audit'
import payrecord from '@/view/payment_record'
import guest from '@/view/my_guest'
import register from '@/view/register'
import sign from '@/view/sign'
import telUpdate from '@/view/tel_update'
import telBind from '@/view/tel_bind'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        }, {
            path: '/member/:id',
            name: 'member',
            component: member
        }, {
            path: '/gains/:id',
            name: 'gains',
            component: gains
        }, {
            path: '/activity',
            name: 'activity',
            component: activity
        }, {
            path: '/center',
            name: 'center',
            component: center
        }, {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo
        }, {
            path: '/membership',
            name: 'membership',
            component: membership
        }, {
            path: '/renew',
            name: 'renew',
            component: renew
        }, {
            path: '/payrecord',
            name: 'payrecord',
            component: payrecord
        }, {
            path: '/guest',
            name: 'guest',
            component: guest
        }, {
            path: '/register',
            name: 'register',
            component: register
        }, {
            path: '/audit',
            name: 'audit',
            component: audit
        },{
            path: '/sign/:id',
            name: 'sign',
            component: sign
        },{
            path: '/tel_update',
            name: 'tel_update',
            component: telUpdate
        },{
            path: '/tel_bind',
            name: 'tel_bind',
            component: telBind
        },
    ]
})
