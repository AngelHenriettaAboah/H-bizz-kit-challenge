export interface ProductImage {
	sm: string;
	lg: string;
}

export interface ProductSpecification {
	name: string;
	value: string;
}

export interface Product {
	id: number;
	brand: string;
	name: string;
	description: string;
	image: ProductImage;
	price: number;
	specifications: ProductSpecification[];
}
