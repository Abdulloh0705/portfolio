import { useQuery } from "@tanstack/react-query";
import { api } from "./api";  // API instance import

// Get products function
export const getProducts = (order, limit, offset, search) => {
    return useQuery({
        queryKey: ["product", order, limit, offset, search],  // Query key includes search term, order, limit, and offset
        queryFn: () => {
            // API call to fetch products based on the parameters
            return api.get(`/products?limit=${limit}&offset=${offset}&ordering=${order}&search=${search}`)
                .then((response) => response.data)  // Return the data from the API response
                .catch((error) => {
                    console.error("API error:", error);  // Log the error in case of failure
                    return [];  // Return an empty array if API call fails
                });
        }
    });
};
