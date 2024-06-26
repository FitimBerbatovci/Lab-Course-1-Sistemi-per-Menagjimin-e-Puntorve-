import axios from "axios";
import React, {useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom";

const AddEmployee = () => {
    const[employee,setEmployee]=useState({
        name:'',
        email:'',
        password:'',
        salary:'',
        address:'',
        category:'',
        image:''

    });

    const[department,setDepartment]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{ /**qetu eshte pjesa e API */
      axios.get('http://localhost:5173/auth/department')
      .then(result=>{
        if(result.data.Status){
          setDepartment(result.data.Result);
        }else{
          alert(result.data.Error)
        }
      }).catch(err=>console.log(err))
        },[]);

        const handleSubmit = (e) => {
            e.preventDefault()
            const formData = new FormData();
            FormData.append('name', employee.name );
            FormData.append('email', employee.email );
            FormData.append('password', employee.password );
            FormData.append('address', employee.address );
            FormData.append('salary', employee.salary );
            FormData.append('image', employee.image );
            FormData.append('department_id', employee.department_id );
            
            axios.post('http://localhost:5173/auth/add_employee',formData)
            .then(result => {
                if(result.data.Status){
                    navigate('/dashboard/employee')
                }else{
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
        }
      

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
    <div className="p-3 rounded w-50 border">
      <h3 className="text-center">Add Employee</h3>
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            onChange={(e)=> setEmployee({...employee, name: e.target.value})}
           
            
          />
        </div>
        <div className="col-12">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e)=> setEmployee({...employee, email: e.target.value})}
           
          />
        </div>
        <div className="col-12">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-0"
            id="inputPassword4"
            placeholder="Enter Password"
            onChange={(e)=> setEmployee({...employee, password: e.target.value})}
           
          />
          <label for="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            onChange={(e)=> setEmployee({...employee, salary: e.target.value})}
          
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputAddress"
            placeholder="1234 Main St"
            autoComplete="off"
            onChange={(e)=> setEmployee({...employee, address: e.target.value})}
           
          />
        </div>

        <div className="col-12">
          <label for="department" className="form-label">
          Department
          </label>
         <select name="department" id="department" className="from-select" 
         onChange={(e)=> setEmployee({...employee, name: e.target.value})}>
            
         {department.map(d=> {
            return <option value={d.id}>{d.name}</option>
         })}
         </select>
        </div>
      
        <div className="col-12 mb-3">
          <label className="form-label" for="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control rounded-0"
            id="inputGroupFile01"
            name="image"
            onChange={(e)=> setEmployee({...employee, image: e.target.files[0]})}
           
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddEmployee
