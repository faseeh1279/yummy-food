export interface ItemDetails{ 
    id : string, 
    name: string, 
    price: number, 
    description: string, 
    category: string 
    images: { 
        fileName: string,
        filePath: string 
    }[]
}


