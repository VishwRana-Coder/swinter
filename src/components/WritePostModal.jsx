import React, { useState, useEffect } from "react";
import { Modal, Upload, Button } from "antd";
import { ShadcnButton } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FaEdit } from "react-icons/fa";
import { getData } from "@/db/FirebaseDB";
import { uploadImages } from "@/config/uploadImages"; // Firebase storage
import { addPost } from "@/app/_actions/postActions"; // Import the addPost action
import moment from "moment";

const WritePost = () => {
  const [textValue, setTextValue] = useState("");
  const [userData, setUserData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [showText, setShowText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data (replace with actual function)
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getData();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleChange = async (fileList) => {
    setSelectedFiles(fileList);

    // If files are selected, upload them
    if (fileList && fileList.length > 0) {
      const urls = await uploadImages(fileList); // Upload files and get URLs
      setImageUrls(urls);
      setShowText(true);
    }
  };

  const handlePostSubmit = async () => {
    if (!textValue || !userData || imageUrls.length === 0) return;

    setIsLoading(true);

    try {
      const { userName, userPhoto } = userData; // Assuming user data has userName and userPhoto
      const timeStamp = moment().format("LL");

      // Use the addPost action instead of fetch API
      const result = await addPost({
        userName,
        userPhoto,
        textValue,
        timeStamp,
        postImage: imageUrls,
      });

      if (result.success) {
        setModalOpen(false); // Close modal after successful post
        setTextValue(""); // Clear text
        setImageUrls([]); // Clear images
        setShowText(false); // Reset state
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      } else {
        console.error(result.errMsg);
      }
    } catch (error) {
      console.error("Error posting:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        title="Write your Post"
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            disabled={textValue.length === 0 || isLoading}
            onClick={handlePostSubmit}
          >
            {isLoading ? "Posting..." : "Post it"}
          </Button>,
        ]}
      >
        {showText ? (
          <div className="mt-5">
            <Textarea
              placeholder="Write your thoughts ....."
              className="rounded-[10px] h-[200px] text-[15px] outline-0 resize-none"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <Upload.Dragger
              multiple
              listType="picture"
              accept=".png, .jpeg, .jpg, .avif, .webp"
              maxCount={10}
              beforeUpload={() => false} // To prevent automatic upload by Ant Design
              onChange={(info) => handleChange(info.fileList)} // Pass selected files
            >
              <div className="text-center h-[100px] flex justify-center items-center">
                Drag or Upload Files
              </div>
            </Upload.Dragger>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default WritePost;
