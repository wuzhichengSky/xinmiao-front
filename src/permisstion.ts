//路由鉴权:就是路由能不能被访问到权限设置->全局守卫完成
//引入路由器
import router from "./router";
//引入进度条
import Nprogress from 'nprogress';
//引入用户相关的仓库
import useUserStore from '@/store/modules/user';
//引入大仓库
import pinia from '@/store'
import { ElMessage } from 'element-plus'
//引入进度条的样式
import "nprogress/nprogress.css"

let userStore = useUserStore(pinia);
//进度条的加载小圆球不要
Nprogress.configure({ showSpinner: false });
//存储用户未登录可以访问路由得路径
let whiteList = ["/login"];
//添加相应的全局守卫
//前置守卫
router.beforeEach((to, from, next) => {
    Nprogress.start();
    //动态设置网页左上角的标题
    document.title = `新苗同学-${to.meta.title}`;

    let account = userStore.adminInfo.account;

    if (account) {
        console.log("进来了")

        let nowtime = new Date().getTime();//获取当前时间戳  毫秒
        let sessiontime = nowtime - localStorage.logintime//当前时间  -  登录时间
        // 数据保存时间只有1个小时，超过1个小时，清除
        if (sessiontime > 3600000) {
            userStore.logout();
            next({ path: '/login' })

            ElMessage({
                message: '未登录',
                type: 'warning',
            })
        } else {
            console.log("我正常登陆了")
            next();
        }

    }
    else {
        console.log("to.path:", to.path)

        if (whiteList.includes(to.path)) {
            next();
        }
        else {
            console.log("我来了")

            next({ path: '/login' })
            ElMessage({
                message: '未登录',
                type: 'warning',
            })
        }
    }

});

//后置路由
router.afterEach((to, from) => {
    //访问路由组件成功,进度条消息
    Nprogress.done();
})