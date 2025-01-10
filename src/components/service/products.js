export const getProducts = async(search) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const data = await response.json();

        // Natijalarni cheklash
        if (data.products && data.products.length > 101) {
            data.products = data.products.slice(0, 100);
        }

        return data;
    } catch (error) {
        // console.clear(error);

        return [];
    }
};