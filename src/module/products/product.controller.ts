import { Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { strict } from "assert";
import { HttpMessage, HttpStatusCode } from "src/global/glocalEnum";
import { Product } from "src/models/product.model";


@Controller('products')
export class ProductController {

    constructor(private readonly productService : ProductService) {}
    
    @Get()
    getProduct(): ResponseData<Product[]> {
        try{
            return new ResponseData<Product[]>(this.productService.getProduct(), HttpStatusCode.SUCCESS, HttpMessage.SUCCESS)
        }catch(error){
            return new ResponseData<Product[]>(null, HttpStatusCode.ERROR, HttpMessage.ERROR)
        }
    }

    @Post()
    createProduct() : ResponseData<string> {
        try{
            return new ResponseData<string>(this.productService.createProduct(), HttpStatusCode.SUCCESS, HttpMessage.SUCCESS)
        }catch(error){
            return new ResponseData<string>(null, HttpStatusCode.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detaildProduct(@Param('id') id: number) :ResponseData<Product> {
        try{
            return new ResponseData<Product>(this.productService.detaildProduct(id), HttpStatusCode.SUCCESS, HttpMessage.SUCCESS)
        }catch(error){
            return new ResponseData<Product>(null, HttpStatusCode.ERROR, HttpMessage.ERROR)
        }
    }

    @Put('/:id')
    updateProduct() : ResponseData<string> {
        try{
            return new ResponseData<string>(this.productService.updateProduct(), HttpStatusCode.SUCCESS, HttpMessage.SUCCESS)
        }catch(error){
            return new ResponseData<string>(null, HttpStatusCode.ERROR, HttpMessage.ERROR)
        }
    }

    @Delete('/:id')
    deleteProduct() : ResponseData<string> {
        try{
            return new ResponseData<string>(this.productService.deleteProduct(), HttpStatusCode.SUCCESS, HttpMessage.SUCCESS)
        }catch(error){
            return new ResponseData<string>(null, HttpStatusCode.ERROR, HttpMessage.ERROR)
        } 
    }
}