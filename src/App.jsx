
import { StudentProvider } from './store/StudentContext';
import StudentList from './components/StudentList';
import TotalStudents from './components/TotalStudent'; // New component

const App = () => {
    return (
        <StudentProvider>
            <div className="App">
                <h1 className="mt-3">Student Manager</h1>
                <TotalStudents /> {/* Display total students */}
                <StudentList />
            </div>
        </StudentProvider>
    );
};

export default App;
