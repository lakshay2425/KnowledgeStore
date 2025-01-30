import  { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/modal';
import axiosInstance from "../../utils/Axios";
import Cookies from 'js-cookie';
import useAlert  from "../../utils/setAlert";
import { useNavigation } from 'react-router-dom';

export default function DeleteUser() {
  const navigate = useNavigation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userName, setUserName] = useState(localStorage.getItem("username"));
  const {handleError} = useAlert();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUserName(localStorage.getItem("username"));
    }
  }, [localStorage.getItem('username')]);

  const deleteUser = async () => {
    try {
      const response = await axiosInstance.delete(`${import.meta.env.VITE_BACKEND_URL}/user/deleteAccount?username=${userName}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      if (response.data.success) {
        await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`);
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("role", "");
        localStorage.setItem("gmail", "");
        localStorage.setItem("fullName", "");
        localStorage.setItem("username", "");
        Cookies.remove('token');  // Remove the token cookie
        navigate("/");
      }else{
        handleError("Cannot delete account, Either you have pending or incoming orders");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  }
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
                <Button color="danger" variant="light" onClick={async () => {
                  try {
                    await deleteUser();
                  } catch (error) {
                    console.error("Error deleting user:", error);
                    // Optionally, you can show an error message to the user here
                  }
                }}>
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
