
import './CustomModal.css';

const CustomModal = ({ show, handleClose, children }) => {
    if (!show) return null;

    const handleClick = (e) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={handleClick}>
                <button className="close-button" onClick={handleClose}></button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
