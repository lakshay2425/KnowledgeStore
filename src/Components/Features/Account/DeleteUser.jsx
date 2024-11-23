import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/modal';

export default function DeleteUser() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
      <Button variant='ghost' className='block bg-transparent  m-0 border-none text-left text-base md:text-lg capitalize text-red-600 list-none rounded-full hover:font-medium md:w-40 mt-2' onPress={onOpen}>Delete Account</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Account</ModalHeader>
              <ModalBody>
                <p> 
                  Do you really Want to Delete your account
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Yes
                </Button>
                <Button color="primary" onPress={onClose}>
                  No
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    )
}
