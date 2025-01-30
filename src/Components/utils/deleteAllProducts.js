import axiosInstance from "./Axios";

const deleteProducts = async (email, type) => {
    try {
        if (type === "wishlist") {
            await axiosInstance.delete(`${import.meta.env.VITE_BACKEND_URL}/${type}/deleteAll?email=${email}`);
        }else if(type === "cart"){
            await axiosInstance.delete(`${import.meta.env.VITE_BACKEND_URL}/${type}/deleteAll?email=${email}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteProducts;