import ReactDOM from 'react-dom';
import './CustomModal.css';

const Modal = ({ handleClose, children }) => {
    const handleClick = (e) => e.stopPropagation(); 

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={handleClick}>
                <button className="close-button" onClick={handleClose}></button>
                {children}
            </div>
        </div>
    );
}

const CustomModal = ({ show, handleClose, children }) => {
    if (!show) return null; 

    return ReactDOM.createPortal(
        <Modal handleClose={handleClose}>
            {children}
        </Modal>,
        document.getElementById('backdrop-root') 
    );
};

export default CustomModal;
