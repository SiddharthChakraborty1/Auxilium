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

export const AddFood = async (foodObject) => {
    let url = 'http://localhost:17014/api/Foods'

    let food = {
        SupplierId: foodObject.supplierId,
        FoodDesc: foodObject.foodDesc,
        FoodPackaging: foodObject.foodPackaging,
        FoodAvailability: foodObject.foodAvailability,
        FoodLastModifyDate: foodObject.foodLastModifyDate,
        FoodLicenseNumber: foodObject.foodLicenseNumber,
        FoodServiceAddress: foodObject.foodServiceAddress
    }

    let res = await axios.post(url, food).catch(e => console.log(e))

}


export const GetProductsBySupplierId = async (supplierId) => {

    let url = 'http://localhost:17014/api/products/supplierId/'+supplierId
    
    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);
    return retData;
}

export const GetFoodsBySupplierId = async (supplierId) => {

    let url = 'http://localhost:17014/api/foods/supplierId/'+supplierId
    
    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);
    return retData;
}

export const DeleteProductByProductId = async (productId) => {
    let url = `http://localhost:17014/api/Products/` + productId
    //console.log(url);

    let res = await axios.delete(url)
}

export const DeleteFoodByFoodId = async (foodId) => {
    let url = `http://localhost:17014/api/Foods/` + foodId
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

export const GetRequestsByProductId = async (id,flag) => {
    //if flag == 1, then it is food else it is product.
    let url = "http://localhost:17014/api/Requests/productId/" + id + "/" + flag

    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);

    return retData;
}