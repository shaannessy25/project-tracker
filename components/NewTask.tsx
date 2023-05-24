"use client";
import { createNewTask } from "@/lib/api";
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";
import {useRouter} from "next/navigation";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
Modal.setAppElement("#task-modal");



const NewTask = ({ projectId }: {projectId: string}): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [task, setTask] = useState<any[]>([]);

  const handleCreateTask = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const newTask = await createNewTask(name, description, projectId);
      setTask((prevTask) => [...prevTask, newTask]);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center'>
      <Button intent='text' className='text-violet-600' onClick={openModal}>
        + New Task
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='bg-[rgba(0,0,0,.4)] flex justify-center items-center fixed inset-0 z-50'
        className='bg-white rounded-xl p-8 mx-auto w-full max-w-md'>
        <h1 className='text-3xl mb-6 text-center'>New Task</h1>
        <form className='flex flex-col space-y-4' onSubmit={handleCreateTask}>
          <Input
            placeholder='Task Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray border-2 px-4 py-2 rounded-3xl'
          />
          <Input
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border border-gray border-2 px-4 py-2 rounded-3xl '
          />
          <Button type="submit">
            Create Task
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default NewTask;
