
import axiosInstance from "./AxiosInstance";

const signUp = (name, email, phone, password) => {
    return axiosInstance.post("register", {
        name,
        phone,
        email,
        password,
    });
};
const verify_phone = (userid, otp) => {
    return axiosInstance.post("register/checkotp", {
        userid,
        otp,
    });
};

const login = (phone, password) => {
    return axiosInstance.post("login", {
        phone,
        password,
    })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const forgot = (store_id, phone) => {
    return axiosInstance.post("forget-pass", {
        store_id,
        phone,

    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    forgot,
    signUp,
    verify_phone,
    login,
    logout,
};
export default authService;