import { FaHome } from 'react-icons/fa';
import { FaBellConcierge } from 'react-icons/fa6';
import { IoReceiptSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="ml-2 text-sm font-bold">KOKA POS</span>
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
              <FaHome className="w-6 h-6 stroke-current"/>
              <span className="ml-2 text-sm font-medium">POS</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
              <FaBellConcierge className="w-6 h-6 stroke-current"/>
              <span className="ml-2 text-sm font-medium">Orders</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
              <IoReceiptSharp className="w-6 h-6 stroke-current"/>
              <span className="ml-2 text-sm font-medium">Receipts</span>
            </a> 
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
          </div>
        </div>
        <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
          <svg className="w-8 h-8 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-2 text-sm font-medium">User</span>
        </a>
      </div>
    </>
  )
}

export default Sidebar

// <div classNameName="flex flex-col items-center w-16 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
//   <a classNameName="flex items-center justify-center mt-3" href="#">
//     <svg classNameName="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
//     </svg>
//   </a>
//   <div classNameName="flex flex-col items-center mt-3 border-t border-gray-300">
//     <a classNameName="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
//       <FaHome classNameName="w-6 h-6 stroke-current"/>
      
//     </a>
    
//     <a classNameName="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
//       <FaBellConcierge classNameName="w-6 h-6 stroke-current"/>
//     </a>

//     <a classNameName="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
//       <IoReceiptSharp classNameName="w-6 h-6 stroke-current"/>
//     </a>
//   </div>
//   <a classNameName="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
//     <CgProfile classNameName="w-7 h-7 stroke-current"/>
//   </a>
// </div>