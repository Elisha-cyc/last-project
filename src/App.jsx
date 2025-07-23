import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import HotelReg from "./Components/HotelReg";
import LayOut from "./Pages/HotelOwner/LayOut";
import AppContext from "./context/CreateAppContext";
import { useContext } from "react";
import DashBoard from "./Pages/HotelOwner/DashBoard";
import AddRoom from "./Pages/HotelOwner/AddRoom";
import ListRoom from "./Pages/HotelOwner/ListRoom";

export const App = () => {
  const isOwnerPath = useLocation().pathname.includes("Owner");
  const { showHotelReg } = useContext(AppContext);
  return (
    <div>
      {showHotelReg && <HotelReg /> }
      
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<LayOut />}></Route>
          <Route  element= {<DashBoard />}/>
          <Route path='add-room' element= {<AddRoom/>}/>
          <Route path='list-room' element= {< ListRoom/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
