import axios from 'axios'

export const changeAvailabilityForProducts = async (product)=>{
    console.log(product);
    let url = 'http://localhost:17014/api/Products/'+product.ProductId;
    console.log(url);
    let response = await axios.put(url,product);
    let returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
   
}
export const changeAvailabilityForFood = async (food) =>{
    let url = 'http://localhost:17014/api/Foods/'+food.FoodId;
    let response = await axios.put(url, food);
    let returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
}

export const modifySupplier = async(supplier)=>{
    let url = 'http://localhost:17014/api/Suppliers/'+supplier.SupplierId;
    console.log(supplier);
    let response = await axios.put(url,supplier);
    let returnedData = await response.data;
    return returnedData;
}

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

    let res = await axios.post(url, product);
    let returnedData = await res.data;
    console.log(returnedData);
    return returnedData;
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

export const ModifyProductByProductId = async (product) => {

    let url = `http://localhost:17014/api/Products/`+product.ProductId;
    
    let response = await axios.put(url, product);
    let returnedData = await response.data;

    console.log(returnedData);
    return returnedData;
}

export const ModifyFoodByFoodId = async (food) => {
    
    console.log(food);
    let url = `http://localhost:17014/api/Foods/`+food.FoodId;
    console.log(url);
    const response = await axios.put(url, food);
    const returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
    
}

export const GetRequestsByProductId = async (id,flag) => {
    //if flag == 1, then it is food else it is product.
    let url = "http://localhost:17014/api/Requests/productId/" + id + "/" + flag

    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);

    return retData;
}