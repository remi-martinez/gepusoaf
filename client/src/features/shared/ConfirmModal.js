import React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    SIZE,
    ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";

function ConfirmModal(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Modal
            onClose={() => {
                setIsOpen(false);
                props.callback(true);
            }}
            closeable
            isOpen={isOpen}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.dialog}
        >
            <ModalHeader>Hello world</ModalHeader>
            <ModalBody>
                Proin ut dui sed metus pharetra hend rerit vel non
                mi. Nulla ornare faucibus ex, non facilisis nisl.
                Maecenas aliquet mauris ut tempus.
            </ModalBody>
            <ModalFooter>
                <ModalButton kind={ButtonKind.tertiary}>
                    Cancel
                </ModalButton>
                <ModalButton>Okay</ModalButton>
            </ModalFooter>
        </Modal>
    );
}

export default ConfirmModal;
