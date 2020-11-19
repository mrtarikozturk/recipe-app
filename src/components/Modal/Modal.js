import React from 'react';
import './Modal.css';

const Modal = ({ isVisible, close }) => {
    return (
        <>
            {isVisible ? <div onClick={close} className='back-drop'></div> : null}

            <div
                className='modal-wrapper'
                style={{
                    opacity: isVisible ? '1' : '0',
                    transform: isVisible ? 'translateY(0vh)' : 'translateY(-100vh)'
                }}>
                <div className='modal-header'>
                    <p>Welcome to Our Site</p>
                    <span onClick={close} className='close-modal-btn'>x</span>
                </div>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <h4>Modal</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn-cancel' onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
