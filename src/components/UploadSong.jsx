import Navbar from "./Navbar";
export default function UploadSong() {
  return (
    <div className="bg-[#10061E] w-[100%] h-[100vh] ">
      <img
        src="Ellipse 2.svg"
        className="w-[100%] h-[100vh] relative z-0 blur-2xl"
      />
      <div className="absolute inset-0  z-10">
        <div>
          <Navbar />
          <div className="w-full mt-[2vh]">
            <p className="text-6xl font-semibold text-white text-center ">
              Add Songs
            </p>
          </div>
          <div className="w-full">
            <div className="text-center flex flex-col gap-9 mt-[9vh]">
              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Song Name"
                />
              </div>

              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Artist Name"
                />
              </div>
              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 

                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Song IPFS Hash"
                />
              </div>
              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Preffered Tip"
                />
              </div>
              <div className="flex gap-6 w-full justify-center mt-[3vh]">
                <a
                  href="#_"
                  class="flex items-center text-[1.2rem] justify-center w-[240px] px-4 py-3 font-medium leading-6 text-white whitespace-no-wrap bg-red-400 border-2 border-transparent rounded-md shadow-sm hover:bg-transparent  hover:border-red-400 focus:outline-none"
                >
                  Add your song
                </a>
                <a
                  href="#_"
                  class="flex items-center text-[1.2rem] justify-center w-[240px] px-4 py-3 font-medium leading-6 text-white whitespace-no-wrap bg-red-400 border-2 border-transparent rounded-md shadow-sm hover:bg-transparent  hover:border-red-400 focus:outline-none"
                >
                  Upload Song to IPFS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <a
                  href="#"
                  class="relative items-center justify-start inline-block px-[2vw] py-[2vh] overflow-hidden font-bold rounded-md group"
                >
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0  left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-[35deg] -translate-x-56 -translate-y-24 bg-red-400  opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Upload Song to IPFS
                  </span>
                  <span class="absolute inset-0 border-2 border-red-400 rounded-md"></span>
                </a> */
}
