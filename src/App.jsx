
import { StudentProvider } from './store/StudentContext';
import StudentList from './components/StudentList';
import TotalStudents from './components/TotalStudent'; 

const App = () => {
    return (
        <StudentProvider>
            <div className="App">
                <h1>Student Manager</h1>
                <TotalStudents /> 
                <StudentList />
            </div>
        </StudentProvider>
    );
};

export default App;
