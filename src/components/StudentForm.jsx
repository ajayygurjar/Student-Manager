import  { useState, useContext } from 'react';
import CustomModal from './CustomModal';
import { StudentContext } from '../store/StudentContext';

const StudentForm = () => {
    const { addStudent, updateStudent, closeModal, currentStudent, showModal } = useContext(StudentContext);

    const [student, setStudent] = useState(currentStudent);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    };//multiple changes at once

    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.id) {
            updateStudent(student);
        } else {
            addStudent({ ...student, id: Date.now() });
        }
        closeModal();
    };

    return (
        <CustomModal show={showModal} handleClose={closeModal}>
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={student.name} onChange={handleChange} required />
                
                <label>Mobile</label>
                <input type="number" name="mobile" value={student.mobile} onChange={handleChange} required />
                
                <label>Address</label>
                <input type="text" name="address" value={student.address} onChange={handleChange} required />
                
                <button type="submit">Add</button>
                <button type="button" onClick={closeModal}>Close</button> 
            </form>
        </CustomModal>
    );
};

export default StudentForm;
