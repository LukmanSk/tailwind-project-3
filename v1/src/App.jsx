import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { IoNotifications, IoAppsSharp } from "react-icons/io5";
import { BsMessenger, BsShop } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOndemandVideo } from "react-icons/md";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="border-b border-b-gray-200">
        <nav className="flex justify-between items-center gap-4  | px-4">
          <div className="block_1 flex items-center">
            <div className="logo w-[60px] h-[45px]  ">
              <img
                className="w-full h-full "
                src="https://i.imgur.com/I8yXqtK.png"
                alt=""
              />
            </div>
            <div className="search flex items-center bg-[#F0F2F5] px-2 rounded-[999px] ml-4">
              <AiOutlineSearch className="h-full w-full text-[20px] text-[#514f4f]" />
              <input
                className="bg-[#F0F2F5] py-[7px] px-[10px] outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="block_2">
            <ul className="list flex gap-14 items-center ">
              <li className="transition-all duration-[.1s] | border-b-2 border-b-[#1B74E4] py-3 px-[2rem]">
                <a href="">
                  <AiFillHome className="text-[1.7rem] text-[#1B74E4]" />
                </a>
              </li>
              <li className="transition-all duration-[.1s] | hover:border-b-2 hover:border-b-[#1B74E4] py-3 px-[2rem]">
                <a href="">
                  <HiOutlineUsers className="text-[1.7rem] text-[#1B74E4]" />
                </a>
              </li>
              <li className="transition-all duration-[.1s] | hover:border-b-2 hover:border-b-[#1B74E4] py-3 px-[2rem]">
                <a href="">
                  <MdOndemandVideo className="text-[1.7rem] text-[#1B74E4]" />
                </a>
              </li>
              <li className="transition-all duration-[.1s] | hover:border-b-2 hover:border-b-[#1B74E4] py-3 px-[2rem]">
                <a href="">
                  <BsShop className="text-[1.7rem] text-[#1B74E4]" />
                </a>
              </li>
            </ul>
          </div>
          <div className="block_3">
            <div className="flex gap-6  items-center ">
              <div className="flex items-center h-[38px] p-2  rounded-[999px] bg-[#F0F2F5]  hover:bg-[#c2c3c5] cursor-pointer transition-all duration-[.3s] ">
                <IoAppsSharp className="text-[21px]" />
              </div>
              <div className="flex items-center h-[38px] p-2  rounded-[999px] bg-[#F0F2F5] hover:bg-[#c2c3c5] cursor-pointer transition-all duration-[.3s] ">
                <BsMessenger className="text-[21px]" />
              </div>
              <div className="flex items-center h-[38px]  p-2  rounded-[999px] bg-[#F0F2F5] hover:bg-[#c2c3c5] cursor-pointer transition-all duration-[.3s] ">
                <IoNotifications className="text-[21px]" />
              </div>
              <div className="">
                <div className="w-[40px] overflow-hidden rounded-[999px]">
                  <img
                    className="h-full w-full"
                    src="https://randomuser.me/api/portraits/thumb/women/74.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default App;
