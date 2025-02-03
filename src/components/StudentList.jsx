import  { useContext } from 'react';
import { StudentContext } from '../store/StudentContext';
import StudentForm from './StudentForm';

const StudentList = () => {
    const { students, deleteStudent, openModal, showModal, currentStudent } = useContext(StudentContext);

    return (
        <div>
            <button onClick={() => openModal()}>Add Student</button>
            <h2>All Students</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        <div>
                            <p>Name:{student.name} Mobile: {student.mobile} Address: {student.address}</p>
                            
                            <button onClick={() => openModal(student)}>Edit</button>
                            <button onClick={() => deleteStudent(student.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {showModal && <StudentForm currentStudent={currentStudent} />}
        </div>
    );
};

export default StudentList;
