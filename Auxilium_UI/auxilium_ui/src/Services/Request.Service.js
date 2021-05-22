import axios from "axios";
import emailjs from 'emailjs-com';

//used to add a new request
export async function addRequest(data)
{
    let url = 'http://localhost:17014/api/Requests'
    let request = {
        ProductId: data.ProductId,
        SupplierId: data.SupplierId,
        FoodId: data.FoodId,
        UserName: data.UserName,
        UserEmail: data.UserEmail,
        UserContact: data.UserContact
    };

    const response = await axios.post(url, request);
    //const returnedData = await response.data;

    //add mailer here for user request processing
    console.log(response);
    
    // let supplierURL = "http://localhost:17014/api/Suppliers/" + data.SupplierId
    // const supplier = await axios.get(supplierURL)
    // const supplierData = await supplier.data;

    // console.log(supplierData);

    // var emailObject = {
    //     user_email : data.UserEmail,
    //     user_name : data.UserName,
    //     product: data.productType,
    //     supplier_name: data.supplierName,
    //     supplier_email: data.supplierEmail
    // }

    // emailjs.send()

}