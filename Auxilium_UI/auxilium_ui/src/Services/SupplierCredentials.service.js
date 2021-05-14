import axios from "axios"

export async function registerSupplier(data)
{
    let url = 'http://localhost:17014/api/suppliers'
    // note: use your own url 
    let supplier = {
        SupplierName: data.name,
        SupplierPassword: data.password,
        SupplierUsername: data.name,
        SupplierEmail: data.email,
        SupplierContact: data.phone,
        SupplierState: data.state,
        SupplierCity: data.city,
        SupplierAddress: data.address
    }
    let response = await axios.post(url,supplier)
    let returnedData = await response.data;
    return returnedData.supplierId;
}

export async function getSuppliers(data)
{   let supplierCheck = false;
    let supplierId = null;
    let suppliersArray = []
    let url = 'http://localhost:17014/api/suppliers'
    // note use your own url 
    let response = await axios.get(url);
    let returnedData = await response.data;
    suppliersArray = returnedData;
    suppliersArray.forEach(ele=>{
        if((ele.supplierEmail === data.email) && (ele.supplierPassword === data.password))
        {
            supplierCheck = true;
            supplierId = ele.supplierId;
        }
    })
    if(supplierCheck === true && supplierId != null)
    {
        
        return supplierId;
    }
    else{
        return null
    }
}