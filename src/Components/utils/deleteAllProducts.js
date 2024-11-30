import axiosInstance from "./Axios";

const deleteProducts = async (email, type) => {
    try {
        if (type === "wishlist") {
            const response = await axiosInstance.delete(`${import.meta.env.VITE_BACKEND_URL}/${type}/deleteAll?email=${email}`);
        }else if(type === "cart"){
            const response = await axiosInstance.delete(`${import.meta.env.VITE_BACKEND_URL}/${type}/deleteAll?email=${email}`);
        }
        console.log("All products deleted successfully");
    } catch (error) {
        console.error(error.message);
    }
}

export default deleteProducts;