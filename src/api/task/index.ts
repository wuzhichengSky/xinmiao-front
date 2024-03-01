//引入二次封装的axios
import request from "@/utils/request";
import type { ResponseData, AdminLogin } from '../user/type';
//枚举地址

enum API {
    //获取发布任务总数
    TASK_TOTAL_URL = '/task_admin/total',

}


export const reqTaskTotal = () => request.get<any, ResponseData>(API.TASK_TOTAL_URL);

