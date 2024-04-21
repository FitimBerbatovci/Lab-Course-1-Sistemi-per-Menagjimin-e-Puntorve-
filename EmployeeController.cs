using System.Collections.Generic;
using EmployeeManagementSystem;
using Microsoft.AspNetCore.Mvc;
using YourNamespace.Models;

namespace Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
       
        private static List<Employee> _employees = new List<Employee>()
        {
            new Employee { Id = 1, Name = "John Doe", Email = "john@example.com", Address = "123 Main St", Salary = 50000 },
            new Employee { Id = 2, Name = "Jane Smith", Email = "jane@example.com", Address = "456 Elm St", Salary = 60000 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_employees);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = _employees.Find(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            _employees.Remove(employee);
            return Ok(new { Status = true });
        }
    }
}
