//DESAFIO

class ProductManager{
static ultimo_id = 0
constructor(){
    this.products = []
}
getProducts(){
    console.log(this.products)
}
addProduct(title, description,price,thumbnail,code,stock){
    ProductManager.ultimo_id = ProductManager.ultimo_id +1
    const producto_nuevo = {
    id: ProductManager.ultimo_id,
    title: title,
    description: description,
    price:price,
    thumbnail: thumbnail,
    code:code,
    stock:stock
    }
    
    if(this.products.length>0){
    this.products.map((prod)=>(
    prod.code === producto_nuevo.code
    ? console.log("Error")
    : this.products.push(producto_nuevo)
    ))
    }else{
    this.products.push(producto_nuevo)
    }
}
getProductById(id){

    return this.products.filter((prod)=> (prod.id == id)) || console.log("Error") 

}
}

const manager = new ProductManager()
manager.getProducts()
manager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
manager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
manager.getProducts()


console.log(manager.getProductById(2))