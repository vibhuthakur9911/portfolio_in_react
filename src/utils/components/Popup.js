import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

function InfoPopup() {
  const [show, setShow] = useState(false);

//   useEffect(() => {
//     const lastClosed = localStorage.getItem('modalLastClosed');
//     const now = new Date();
//     const oneDay = 24 * 60 * 60 * 1000;

//     if (!lastClosed || now - new Date(lastClosed) > oneDay) {
//       setShow(true);
//     }
//   }, []);

//   const handleClose = () => {
//     setShow(false);
//     localStorage.setItem('modalLastClosed', new Date());
//   };

useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose} className='myModal'>
        <Modal.Header closeButton className='myModal_header'>
          <Modal.Title>Website Under Construction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Thank you for visiting my website. Please note that it is currently under development, and some features may not be available. I appreciate your patience and look forward to bringing you an improved experience soon!</p>
          <p><strong>Disclaimer:</strong> This is a portfolio site to showcase my work. I am not selling any services through this site.</p>
        </Modal.Body>
        <Modal.Footer>
          <a href="javascript:void(0);" className="default-btn" onClick={handleClose}>
            <span>Close</span>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoPopup;
