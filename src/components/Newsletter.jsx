const Newsletter = () => {
    return ( 
    <div className="w-full py-16 text-white px-4">
      <div className="grid  max-w-[1240px] mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 ">
            <h1 className="md:text-4 font-bold text-2xl py-2 " > Want tips & tricks to optimise your flow??</h1>
            <p>Sign up to newsletting and stay up to date</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between " >
                <input className="p-3 text-black rounded-md w-full" type="email" placeholder="Enter Email" />
                <button className="bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto py-3 text-black ml-4 " >Notify me</button>
            </div>
            <p>We care about the protection of your data.Read our <span className="text-[#00df9a] " > Privacy Privacy</span></p>
        </div>

      </div>
    </div>
     );
}
 
export default Newsletter;