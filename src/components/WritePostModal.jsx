//Importing Compoenents
import React, { useState } from 'react';
import { Modal } from 'antd';
import { ShadcnButton } from './ui/button';
import { Button } from 'antd/es/radio';
import ReactQuill from 'react-quill';


//Importing Icons
import { FaEdit } from 'react-icons/fa';


const WritePost = () => {


  const handleOk = () => {
    setOpen(false);
    addPost();
  };
  const [value, setValue] = useState('');



  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='flex w-full justify-center mt-10'>
      <ShadcnButton  onClick={() => setModalOpen(true)} className="gap-2 w-full rounded-[10px]">
        <FaEdit />Write your Post
      </ShadcnButton>
      <Modal
        title={<span className='flex gap-1 items-center'><FaEdit /> Write your Post</span>}
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        footer={[
          <Button
            key="link"
            onClick={handleOk}
            className="mt-[60px] md:mt-3"
          >
            Post it
          </Button>,
        ]}
        onCancel={() => setModalOpen(false)}
      >
        <ReactQuill />
      </Modal>
    </div>
  );
};
export default WritePost;