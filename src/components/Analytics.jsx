import Labtop from "../assets/laptop.webp"

const Analytics = () => {
    return ( 
        <div className="w-full bg-white py-16 px-4 my-auto">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2" >
              <img className="w-[500px] mx-auto" src={Labtop} alt="/" />
              <div className="flex flex-col justify-center " >
                <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:4xl sm:3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
                <p className="" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tempore similique expedita pariatur neque eligendi in ratione nisi temporibus et, quis culpa rerum doloremque enim illum eveniet cumque inventore eum.</p>
                <button className="bg-black w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-bl text-[#00df9a]">
                    Get Started
                </button>
              </div>
            </div>

        </div>
     );
}
 
export default Analytics;