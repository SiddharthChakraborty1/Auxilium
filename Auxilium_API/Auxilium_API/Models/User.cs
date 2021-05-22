using System;
using System.Collections.Generic;

#nullable disable

//THE UsersController.cs AND User.cs FILES ARE FOR FUTURE SCOPE. THESE ARE NOT USED CURRENTLY BUT MAY BE USED IN THE FUTURE.

namespace Auxilium_API.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserPassword { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserContact { get; set; }
        public string UserState { get; set; }
        public string UserCity { get; set; }
    }
}
