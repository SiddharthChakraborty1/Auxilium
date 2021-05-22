import axios from 'axios'
import emailjs from 'emailjs-com'

//Used to toggle availability of the products
export const changeAvailabilityForProducts = async (product)=>{
    console.log(product);
    let url = 'http://localhost:17014/api/Products/'+product.ProductId;
    console.log(url);
    let response = await axios.put(url,product);
    let returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
   
}

//Used to toggle availability of the food
export const changeAvailabilityForFood = async (food) =>{
    let url = 'http://localhost:17014/api/Foods/'+food.FoodId;
    let response = await axios.put(url, food);
    let returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
}

//Used to edit the supplier profile
export const modifySupplier = async(supplier)=>{
    let url = 'http://localhost:17014/api/Suppliers/'+supplier.SupplierId;
    console.log(supplier);
    let response = await axios.put(url,supplier);
    let returnedData = await response.data;
    return returnedData;
}

//Used to add a new product
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

//Used to add a new food
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

//used to get all the products by a specific supplier
export const GetProductsBySupplierId = async (supplierId) => {

    let url = 'http://localhost:17014/api/products/supplierId/'+supplierId
    
    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);
    return retData;
}

//used to get all the foods by a specific supplier
export const GetFoodsBySupplierId = async (supplierId) => {

    let url = 'http://localhost:17014/api/foods/supplierId/'+supplierId
    
    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);
    return retData;
}

//used to delete a specific product via productId
export const DeleteProductByProductId = async (productId) => {
    let url = `http://localhost:17014/api/Products/` + productId
    //console.log(url);

    let res = await axios.delete(url)
}

//used to delete a specific food via foodId
export const DeleteFoodByFoodId = async (foodId) => {
    let url = `http://localhost:17014/api/Foods/` + foodId
    //console.log(url);

    let res = await axios.delete(url)
}

//used to edit a product via productId
export const ModifyProductByProductId = async (product) => {

    let url = `http://localhost:17014/api/Products/`+product.ProductId;
    
    let response = await axios.put(url, product);
    let returnedData = await response.data;

    console.log(returnedData);
    return returnedData;
}

//used to edit a food via foodId
export const ModifyFoodByFoodId = async (food) => {
    
    console.log(food);
    let url = `http://localhost:17014/api/Foods/`+food.FoodId;
    console.log(url);
    const response = await axios.put(url, food);
    const returnedData = await response.data;
    console.log(returnedData);
    return returnedData;
    
}

//used to get all the requests for a specific product or food
export const GetRequestsByProductId = async (id,flag) => {
    //if flag == 1, then it is food else it is product.
    let url = "http://localhost:17014/api/Requests/productId/" + id + "/" + flag

    let res = await axios.get(url)
    
    let retData = await res.data;
    console.log(retData);

    return retData;
}

export const ApproveRequest=async(email,name,prod)=>{
    const emailObject={
        user_email:email,
        user_name:name,
        product:prod
    }
    //console.log(emailObject);
    
    //From here we set our service id , user id, and template id
    emailjs.send('auxilium_resources', 'user_request_accepted', emailObject,'user_uaOAS9LcjjWnSAB6BpDAw')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
     
}