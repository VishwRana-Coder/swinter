//Importing Components
import SideBar from "@/components/SideBar";
import Feed from "@/components/Feed";


const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[25%] w-full md:mt-5 mb-10 md:fixed md:left-0 md:top-0 md:h-full">
          <SideBar />
        </div>
        <div className="md:w-[60%] text-center flex justify-center md:block w-full mt-5 md:ml-[35%]">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default page;
