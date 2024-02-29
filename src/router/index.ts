import { createRouter, createWebHistory } from 'vue-router';
//createRouter方法,用于创建路由器实例，可以管理多个路由
export default createRouter({
    //路由的模式的设置
    history: createWebHistory(),
    //管理路由
    routes: [
        {
            // 重定向到首页
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('@/pages/login/index.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
            meta: {
                title: '首页'
            },
            children: [
                {
                    path: 'index',
                    component: () => import('@/pages/home/index/index.vue'),
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: 'student',
                    component: () => import('@/pages/home/student/index.vue'),
                    meta: {
                        title: '学生管理'
                    },
                    children: [
                        {
                            path: 'register',
                            component: () => import('@/pages/home/student/register/index.vue'),
                            meta: {
                                title: '注册情况'
                            }
                        },
                        {
                            path: 'verify',
                            component: () => import('@/pages/home/student/verify/index.vue'),
                            meta: {
                                title: '注册审核'
                            }
                        },
                        {
                            path: 'message',
                            component: () => import('@/pages/home/student/message/index.vue'),
                            meta: {
                                title: '信息管理'
                            }
                        },
                        {
                            path: 'add',
                            component: () => import('@/pages/home/student/message/add/index.vue'),
                            meta: {
                                title: '学生管理'
                            }
                        }
                    ]
                },
                {
                    path: 'task',
                    component: () => import('@/pages/home/task/index.vue'),
                    meta: {
                        title: '任务管理'
                    }
                },
                {
                    path: 'advertisement',
                    component: () => import('@/pages/home/advertisement/index.vue'),
                    meta: {
                        title: '广告管理'
                    }
                },
                {
                    path: 'other',
                    component: () => import('@/pages/home/other/index.vue'),
                    meta: {
                        title: '其他'
                    }
                }
            ]
        },



        // {
        //     path: '/hospital',
        //     component: () => import('@/pages/hospital/index.vue'),

        // },
        // {
        //     path: '/wxlogin',
        //     component: () => import('@/pages/wxlogin/index.vue')
        // },
        // {
        //     path: '/user',
        //     component: () => import('@/pages/user/index.vue'),
        //     children: [
        //         {
        //             path: 'certification',
        //             component: () => import('@/pages/user/certification/index.vue'),
        //             meta: {
        //                 title: '实名认证'
        //             }
        //         },
        //         {
        //             path: 'order',
        //             component: () => import('@/pages/user/order/index.vue'),
        //             meta: {
        //                 title: '挂号订单'
        //             }
        //         },
        //         {
        //             path: 'patient',
        //             component: () => import('@/pages/user/patient/index.vue'),
        //             meta: {
        //                 title: '就诊人管理'
        //             }
        //         },
        //         {
        //             path: 'profile',
        //             component: () => import('@/pages/user/profile/index.vue'),
        //             meta: {
        //                 title: '账号信息'
        //             }
        //         },
        //         {
        //             path: 'feedback',
        //             component: () => import('@/pages/user/feedback/index.vue'),
        //             meta: {
        //                 title: '信息反馈'
        //             }
        //         }
        //     ]
        // }
    ],
    //滚动行为:控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
