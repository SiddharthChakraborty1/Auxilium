import axios from "axios"

//used to get all the food services
export async function getFood()
{
    let url = 'http://localhost:17014/api/foods'
    let  response = await axios.get(url);
    let returnedData = await response.data;
    console.log(returnedData);
}