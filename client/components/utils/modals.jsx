import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Show from './show'

const attributes = {
    size: 'xl',
    title: '', 
    isOpen: false, 
    toggle: null, 
    onClose: null, 
    children: null, 
    footer: '',
    centered: false,
}

export const SimpleModal = (props = attributes) => {

    return (
        <Modal {...props} toggle={null}>
            <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <Show condicion={props.footer?.length}>
                <ModalFooter>
                    {props.footer}
                </ModalFooter>
            </Show>
        </Modal>
    )
}