import axios from "axios"

export async function getFood()
{
    let url = 'http://localhost:17014/api/foods'
    let  response = await axios.get(url);
    let returnedData = await response.data;
    console.log(returnedData);
}