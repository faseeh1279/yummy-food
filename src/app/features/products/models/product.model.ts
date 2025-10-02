export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  discount: number; 
  finalPrieWithDiscount: number; 
  images: {
    imageId: string;
    filePath: string;
  }[];
}

export interface ProductImage { 
  fileName: string; 
  filePath: string; 
}

export interface AddProductDTO {
  name: string,
  description: string,
  price: number,
  discount: number,
  category: string,
  // image: File | null
}

export interface AddProductImage { 
  ItemId: string, 
  File: File
}

export interface CategoryDTO { 
  id: string, 
  category: string 
}

