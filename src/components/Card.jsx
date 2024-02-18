import { LiaUserSolid } from "react-icons/lia";
//<LiaUserSolid />
import { PiUsers } from "react-icons/pi";
//<PiUsers />
import { PiUsersThree } from "react-icons/pi";
//<PiUsersThree
const Card = () => {
  return (
    <div className="bg-white w-full py-[10rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 text-center">
          <LiaUserSolid size={50} className="mx-auto mt-[-3rem] bg-white" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-0">see GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up To 2 GB</p>
          </div>
          <button className="bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto py-3 text-black ml-4 ">
            Start Trial
          </button>
        </div>
        <div className="w-full  shadow-xl p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 text-center bg-gray-100">
          <PiUsers size={50} className="mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-0">see GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up To 2 GB</p>
          </div>
          <button className="text-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto py-3 bg-black ml-4 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 text-center">
          <PiUsersThree size={50} className="mx-auto mt-[-3rem] bg-white" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-0">see GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up To 2 GB</p>
          </div>
          <button className="bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto py-3 text-black ml-4 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
