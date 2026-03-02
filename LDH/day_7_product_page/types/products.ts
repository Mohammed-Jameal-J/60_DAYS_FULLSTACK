export interface Product {
    id: number;
    name: string;
    description: string;
    title: string;
    price: number;
    images: string[];
    thumbnail: string;
}

export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}