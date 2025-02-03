import { createContext, useState } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    const updateStudent = (updatedStudent) => {
        setStudents(
            students.map((student) => 
                student.id === updatedStudent.id ? updatedStudent : student
            )
        );
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    
    const [showModal, setShowModal] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null);

    const openModal = (student = null) => {
        setCurrentStudent(student || {
            id: null,
            name: '',
            mobile: '',
            address: ''
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentStudent(null);
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent, showModal, openModal, closeModal, currentStudent }}>
            {children}
        </StudentContext.Provider>
    );
};

export { StudentContext, StudentProvider };
