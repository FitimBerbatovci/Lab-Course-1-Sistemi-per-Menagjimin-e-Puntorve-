

namespace EmployeeManagementSystem
{
    public class Employee
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public decimal Salary { get; set; }
    }
}