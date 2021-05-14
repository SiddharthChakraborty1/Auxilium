using System;
using System.Collections.Generic;

#nullable disable

namespace Auxilium_API.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public int SupplierId { get; set; }
        public string ProductType { get; set; }
        public string ProductDesc { get; set; }
        public int ProductAvailability { get; set; }
        public DateTime ProductLastModifyDate { get; set; }
        public string ProductGstn { get; set; }
        public string ProductServiceAddress { get; set; }

        public virtual Supplier Supplier { get; set; }
    }
}
