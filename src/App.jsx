import { IoMdSearch } from "react-icons/io";
import './App.css'
import Listitem from "./component/Listitem";
import { useState } from "react";
import { SiYoutubemusic } from "react-icons/si";
function App() {
  const [Data, setData] = useState([])
  const [filteredData, setFiltereddata] = useState([])
  const handleChange = (event) => {
    const enteredvalue = event.toLowerCase();
    const filteredvalue = Data.filter(item => item.title.toLowerCase().includes(enteredvalue))
    setFiltereddata(filteredvalue)
  }

  return (
    <>
      {/* {navbar} */}
      <nav className=' navbar w-full h-[5vh] lg:h-[8vh] flex justify-evenly items-center bg-blue-900 text-white'>
        <div className="left w-1/3 items-center flex ">
          <SiYoutubemusic className = "mr-2 text-xs lg:text-2xl" />
          <h2 className='font-bold font-serif'>Image List</h2>
        </div>
        <div className="w-1/3 right flex items-center">
          <IoMdSearch />
          <input onChange={(e) => handleChange(e.target.value)} className='bg-transparent hover:border-2 hover:border-grey-500 rounded-md w-[30vw] lg:w-[20vw] px-2 py-1' type="search" placeholder='Search..' />
        </div>
      </nav>
      {/* {Main content } */}
      {filteredData.length === 0 ? <Listitem Data={Data} setData={setData} /> :
        <Listitem Data={filteredData} />}

    </>
  )
}

export default App
