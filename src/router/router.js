import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import('../views/Index.vue')
    },
    {
        path: "/home",
        name: "Home",
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: "/introduction",
                name: "Introduction",
                component: () => import('../components/Introduction.vue')
            },
            {
                path: "/background-image",
                name: "background-image 属性",
                component: () => import('../components/ch2/backgroundImage.vue')
            },
            {
                path: "/mask-image",
                name: "mask-image 属性",
                component: () => import('../components/ch2/maskImage.vue')
            },
            {
                path: "/shape-outside",
                name: "shape-outside 属性",
                component: () => import('../components/ch2/shapeOutside.vue')
            },
            {
                path: "/color",
                name: "color 数据类型",
                component: () => import('../components/ch2/color.vue')
            },
            {
                path: "/linear-gradient",
                name: "linear-gradient",
                component: () => import('../components/ch2/linear-gradient.vue')
            },
        ]
    }
]

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router