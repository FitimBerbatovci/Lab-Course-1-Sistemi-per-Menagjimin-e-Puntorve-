import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        name: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5173/auth/add_department", department);
            navigate("/dashboard/department");
        } catch (err) {
            console.log(err);
            alert("Error adding department. Please try again.");
        }
    };

  return (
    <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Add Department</h3>
                    <form onChange={handleChange}>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                placeholder="Enter Department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-2">
                            Add Department
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default AddDepartment;