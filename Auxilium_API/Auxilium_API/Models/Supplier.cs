using System;
using System.Collections.Generic;

#nullable disable

namespace Auxilium_API.Models
{
    public partial class Supplier
    {
        public Supplier()
        {
            Foods = new HashSet<Food>();
            Products = new HashSet<Product>();
        }

        public int SupplierId { get; set; }
        public string SupplierUsername { get; set; }
        public string SupplierPassword { get; set; }
        public string SupplierName { get; set; }
        public string SupplierEmail { get; set; }
        public string SupplierContact { get; set; }
        public string SupplierState { get; set; }
        public string SupplierCity { get; set; }
        public string SupplierAddress { get; set; }

        public virtual ICollection<Food> Foods { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
