"use client";
import { createNewProject } from "@/lib/api";
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";
Modal.setAppElement("#modal");

const NewProject = (): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [name, setName] = useState<string>("");
  const [projects, setProjects] = useState<any[]>([]);
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const newProject = await createNewProject(name);
      setProjects((prevProjects) => [...prevProjects, newProject]);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

return (
  <div className='px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center'>
    <Button onClick={openModal}>+ New Project</Button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName='bg-[rgba(0,0,0,.4)] flex justify-center items-center fixed inset-0 z-50'
      className='bg-white rounded-xl p-8 mx-auto w-full max-w-md'>
      <h1 className='text-3xl mb-6 text-center'>New Project</h1>
      <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
        <Input
          placeholder='Project Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
        <Button
          type='submit'
          className='bg-blue-500 text-white py-2 rounded-md'>
          Create
        </Button>
      </form>
    </Modal>
  </div>
);

};

export default NewProject;
