//Importing Compoenents
import React, { useState } from "react";
import { Modal } from "antd";
import { ShadcnButton } from "./ui/button";
import { Button } from "antd/es/radio";
import { Textarea } from "./ui/textarea";
import { useEffect } from "react";
import { getData } from "@/db/FirebaseDB";
import Image from "next/image";
import Loading from "./Spin";
import { Upload } from "antd";
import { UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";

//Importing Icons
import { FaEdit } from "react-icons/fa";

const WritePost = () => {
  const handleOk = () => {
    setOpen(false);
    addPost();
  };
  const [textValue, setTextValue] = useState("");
  const [userData, setUserData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [imageUploads, setImageUploads] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getData();
      setUserData(data);
    };

    fetchUserData();
  }, []);



  return (
    <div className="flex w-full justify-center mt-10">
      <ShadcnButton
        onClick={() => setModalOpen(true)}
        className="gap-2 w-full rounded-[10px]"
      >
        <FaEdit />
        Write your Post
      </ShadcnButton>
      <Modal
        title={
          <span className="flex gap-1 items-center">
            <FaEdit /> Write your Post
          </span>
        }
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        footer={[
          <Button
            key="link"
            onClick={handleOk}
            className="mt-[60px] md:mt-3"
            disabled={textValue.length == 0}
          >
            Post it
          </Button>,
        ]}
        onCancel={() => setModalOpen(false)}
      >
        <>
          {showText ? (
            <>
              {userData ? (
                <>
                  <div className="mt-5 flex gap-1 items-center">
                    <Image
                      src={userData.userPhoto}
                      alt={"UserPhoto"}
                      width={40}
                      height={40}
                    />
                    <span>{userData.userName}</span>
                  </div>
                  <div className="mt-5">
                    <Textarea
                      placeholder="Write your thoughts ....."
                      className="rounded-[10px] h-[200px] text-[15px] outline-0 resize-none"
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Loading />
                </>
              )}
            </>
          ) : (
            <>
              <Upload.Dragger
                multiple
                listType="picture"
                accept=".png, .jpeg, .jpg, .avif, .webp"
                maxCount={10}
                beforeUpload={() => false}
              >
                <div className="text-[15px] h-[100px] text-center flex items-center justify-center flex-col">
                  Drag or
                  <br />
                  <Button>Upload File</Button>
                </div>
              </Upload.Dragger>
            </>
          )}
        </>
      </Modal>
    </div>
  );
};
export default WritePost;
