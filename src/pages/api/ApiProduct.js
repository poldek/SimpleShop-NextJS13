import axios from "axios";

/**
 * Get fake proiduct use Axios
 */
const apiProduct = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export const productsKey = "/products";

export const listProducts = async () => { 
    const result = await apiProduct.get(productsKey);
    return result.data;
}