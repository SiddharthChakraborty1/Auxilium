import axios from 'axios'

export const AddProduct = async (productObject) =>{
    //console.log(productObject);
    let url = 'http://localhost:17014/api/Products'

    let product = {
        SupplierId: productObject.supplierId,
        ProductType: productObject.productType,
        ProductDesc: productObject.productDesc,
        ProductAvailability: productObject.productAvailability,
        ProductLastModifyDate: productObject.productLastModifyDate,
        ProductGstn: productObject.productGstn,
        ProductServiceAddress: productObject.productServiceAddress
    }

    let res = await axios.post(url, product).catch(e => console.log(e))
}


export const GetProductsBySupplierId = async (supplierId) => {

    let url = 'http://localhost:17014/api/Products'
    
    let res = await axios.get(url)
    
    let retData = await res.data;
    return retData
}

export const DeleteProductByProductId = async (productId) => {
    let url = `http://localhost:17014/api/Products/` + productId
    //console.log(url);

    let res = await axios.delete(url)
}

export const ModifyProductByProductId = async (productObject, id) => {
    let product = {
        ProductId: id,
        SupplierId: productObject.supplierId,
        ProductType: productObject.productType,
        ProductDesc: productObject.productDesc,
        ProductAvailability: productObject.productAvailability,
        ProductLastModifyDate: productObject.productLastModifyDate,
        ProductGstn: productObject.productGstn,
        ProductServiceAddress: productObject.productServiceAddress
    }

    let url = `http://localhost:17014/api/Products/`+id

    await axios.put(url, product).catch((e) => console.log(e))
}