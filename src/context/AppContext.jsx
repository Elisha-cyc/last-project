import AppContext from "./CreateAppContext.jsx";
import { useState } from "react";

const AppProvider = ({ children }) => {
  const [showHotelReg, setShowHotelReg] = useState(false);
  return (
    <AppContext.Provider value={{ showHotelReg, setShowHotelReg }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
