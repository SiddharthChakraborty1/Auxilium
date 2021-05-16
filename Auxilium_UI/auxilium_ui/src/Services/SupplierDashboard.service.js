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

    let res = await axios.post(url, product)
    let retData = await res.data;
}
