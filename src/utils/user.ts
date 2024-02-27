//本地存储操作用户信息的方法
export const SET_TOKEN = (userInfo: string) => {
    localStorage.setItem('ADMININFO', userInfo);
}

export const GET_TOKEN = () => {
    return localStorage.getItem('ADMININFO');
}

//清除本地存储用户相关的数据
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('ADMININFO');
}