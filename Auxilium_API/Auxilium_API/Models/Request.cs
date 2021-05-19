using System;
using System.Collections.Generic;

#nullable disable

namespace Auxilium_API.Models
{
    public partial class Request
    {
        public int RequestId { get; set; }
        public int? ProductId { get; set; }
        public int SupplierId { get; set; }
        public int? FoodId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserContact { get; set; }

        public virtual Food Food { get; set; }
        public virtual Product Product { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}
