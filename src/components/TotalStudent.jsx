import  { useContext } from 'react';
import { StudentContext } from '../store/StudentContext';

const TotalStudents = () => {
    const { students } = useContext(StudentContext);

    return (
        <h2>Total Students: {students.length}</h2>
    );
};

export default TotalStudents;
