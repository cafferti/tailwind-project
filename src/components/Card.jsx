import { LiaUserSolid } from "react-icons/lia";
//<LiaUserSolid />
import { PiUsers } from "react-icons/pi";
//<PiUsers />
import { PiUsersThree } from "react-icons/pi";
//<PiUsersThree 
const Card = () => {
    return (  
       <div className="bg-white">
        <LiaUserSolid size={50}/>
        <PiUsers size={50}/>
        <PiUsersThree size={50}/>
       </div>
    );
}
 
export default Card;
