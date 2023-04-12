import {Button, Modal} from 'react-bootstrap';
import './Modal.css'

function ModalPosted(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <>
                <h1 className="text-center">
                    Challenge posted. Good luck to others!
                </h1>
                
               <Button onClick={props.buttonFunction}>
                    Close
               </Button>
            </>
        </Modal.Body>
    </Modal>
  );
}

export default ModalPosted;