using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YourNamespace.Models;

namespace Department.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private static List<Department> _departments = new List<Department>
        {
            new Department { Id = 1, Name = "Department A" },
            new Department { Id = 2, Name = "Department B" },
            new Department { Id = 3, Name = "Department C" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Department>> GetDepartments()
        {
            return Ok(_departments);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDepartment(int id)
        {
            var department = _departments.Find(d => d.Id == id);
            if (department == null)
            {
                return NotFound();
            }

            _departments.Remove(department);
            return Ok(new { Status = true });
        }
    }
}
