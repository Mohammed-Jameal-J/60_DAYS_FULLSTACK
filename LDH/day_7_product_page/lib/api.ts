import { ProductResponse } from "@/types/products";
import { cacheLife } from "next/cache";

export const fetchProducts = async (search?: string): Promise<ProductResponse> => {

    const url= search ? `https://dummyjson.com/products?q=${encodeURIComponent(search)}` : 'https://dummyjson.com/products';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}

