import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const ModalContainer = ( { isOpen = false, toggle, title = '', onSave = ()=>{}, ...props} ) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle} >
                <p className="text-gray-700 font-semibold text-center text-lg">{title}</p>
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={onSave} >Guardar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalContainer