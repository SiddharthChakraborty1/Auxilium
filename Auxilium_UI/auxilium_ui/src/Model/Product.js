class Product{
    constructor(id, supplierId,productType,productDesc,productAvailability,productLastModifyDate,productGstn,productServiceAddress)
    {   this.id = id;
        this.supplierId = supplierId;
        this.productType = productType;
        this.productDesc = productDesc;
        this.productAvailability = productAvailability;
        this.productLastModifyDate = productLastModifyDate;
        this.productGstn = productGstn;
        this.productServiceAddress = productServiceAddress;
    }
}
export default Product;