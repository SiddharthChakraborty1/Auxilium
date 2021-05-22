import axios from "axios";

//used to register a new supplier
export async function registerSupplier(data) {
  // note: use your own url
  let emailTaken = false;
  let url = "http://localhost:17014/api/suppliers";
  let supplierArray = await getSuppliersArray();
  supplierArray.forEach((element) => {
    if (element.supplierEmail === data.email) {
      emailTaken = true;
    }
  });
  if (emailTaken === false) {
    let supplier = {
      SupplierName: data.name,
      SupplierPassword: data.password,
     
      SupplierEmail: data.email,
      SupplierContact: data.phone,
      SupplierState: data.state,
      SupplierCity: data.city,
     
    };

    let response = await axios.post(url,supplier);
    let returnedData = await response.data;
    console.log(returnedData);
    return returnedData.supplierId;
  }
  else{
      return -1;
  }
}

//used to get a specific supplier by Id
export async function getSupplierById(supplierId)
{
  let url = 'http://localhost:17014/api/suppliers/'+supplierId;
  const response = await axios.get(url);
  const returnedData = await response.data;
  return returnedData;
}

//used to retrive all the suppliers
export async function getSuppliersArray() {
  let supplierArray = [];
  let url = "http://localhost:17014/api/suppliers";
  let response = await axios.get(url);
  let returnedData = await response.data;
  supplierArray = await returnedData;
  console.log(supplierArray);
  return supplierArray;
  
}

export async function getSuppliers(data) {
  let supplierCheck = false;
  let supplierId = null;
  let suppliersArray = [];
  let url = "http://localhost:17014/api/suppliers";
  // note use your own url
  let response = await axios.get(url);
  let returnedData = await response.data;
  suppliersArray = returnedData;
  suppliersArray.forEach((ele) => {
    if (
      ele.supplierEmail === data.email &&
      ele.supplierPassword === data.password
    ) {
      supplierCheck = true;
      supplierId = ele.supplierId;
    }
  });
  if (supplierCheck === true && supplierId != null) {
    return supplierId;
  } else {
    return null;
  }
}
