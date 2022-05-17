
import authHeader from "./auth-header";
import axiosInstance from "./AxiosInstance";
const getPublicContent = () => {
    return axiosInstance.get("all");
};
const getUserBoard = () => {
    return axiosInstance.get("user", { headers: authHeader() });
};
const getModeratorBoard = () => {
    return axiosInstance.get("mod", { headers: authHeader() });
};
const getAdminBoard = () => {
    return axiosInstance.get("admin", { headers: authHeader() });
};
const userService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
export default userService