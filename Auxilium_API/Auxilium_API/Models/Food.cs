using System;
using System.Collections.Generic;

#nullable disable

namespace Auxilium_API.Models
{
    public partial class Food
    {
        public Food()
        {
            Requests = new HashSet<Request>();
        }

        public int FoodId { get; set; }
        public int SupplierId { get; set; }
        public string FoodDesc { get; set; }
        public string FoodPackaging { get; set; }
        public int FoodAvailability { get; set; }
        public DateTime FoodLastModifyDate { get; set; }
        public string FoodLicenseNumber { get; set; }
        public string FoodServiceAddress { get; set; }

        public virtual Supplier Supplier { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
    }
}
