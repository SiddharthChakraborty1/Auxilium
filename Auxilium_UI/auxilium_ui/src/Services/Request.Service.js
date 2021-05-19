import axios from "axios";

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
    const returnedData = await response.data;
    console.log(returnedData);
}