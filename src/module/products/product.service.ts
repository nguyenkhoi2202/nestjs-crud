import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";


@Injectable()
export class ProductService {
    private products : Product[] = [
        {id : 1, categoryId:2, productName:"Computer", price : 300000},
        {id : 2, categoryId:2, productName:"Monitor", price : 500000},
        {id : 3, categoryId:1, productName:"Table", price : 20000},
        {id : 4, categoryId:1, productName:"Chair", price : 100000}
    ]

   
    getProduct(): Product[] {
        return this.products;
    }

   
    createProduct() : string {
        return 'POST product list'
    }

   
    detaildProduct(id :number) : Product {
        return this.products.find(item => item.id === Number(id))
    }

  
    updateProduct() : string {
        return 'Update Product'
    }

    
    deleteProduct() : string {
        return 'Delete Product'
    }

};