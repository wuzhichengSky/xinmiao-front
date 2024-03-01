//引入二次封装的axios
import request from "@/utils/request";
import type { ResponseData, AdminLogin } from './type';
//枚举地址

enum API {
    //管理员登录
    ADMIN_LOGIN_URL = '/admin/login',
    //获取用户信息
    STUDENT_URL = '/user/info/',
    //获取学生总数
    STUDENT_TOTAL_URL = '/student/total',
    //获取已认证人数
    STUDENT_IDENTIFY_TOTAL_URL = '/student/identify_total'

}


export const reqAdminLogin = (data: AdminLogin) => request.post<any, ResponseData>(API.ADMIN_LOGIN_URL, data);

export const reqStudentInfo = (id: string) => request.get<any, ResponseData>(API.STUDENT_URL + id);

export const reqStudentTotal = () => request.get<any, ResponseData>(API.STUDENT_TOTAL_URL);

export const reqStudentIdentifyTotal = () => request.get<any, ResponseData>(API.STUDENT_IDENTIFY_TOTAL_URL);


