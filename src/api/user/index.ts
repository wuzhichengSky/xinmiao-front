//引入二次封装的axios
import request from "@/utils/request";
import type { ResponseData, AdminLogin } from './type';
//枚举地址

enum API {
    //管理员登录
    ADMIN_LOGIN_URL = '/admin/login',

    //获取用户信息
    STUDENT_URL = '/user/info/'

    //提交订单,获取订单号码接口
    //SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
    //获取订单详情的数据
    //GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/'

}


export const reqAdminLogin = (data: AdminLogin) => request.post<any, ResponseData>(API.ADMIN_LOGIN_URL, data);


export const reqStudentInfo = (id: string) => request.get<any, ResponseData>(API.STUDENT_URL + id);

