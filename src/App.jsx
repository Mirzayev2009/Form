// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileForm } from "./components/Form"; // Adjust path accordingly
import Results from "./components/Results"; // Adjust path accordingly
import React, { createContext, useContext, useState } from 'react';
export const useData = () => {
  return useContext(DataContext);
};
const DataContext = createContext();


function App() {

  const [details, setDetails] = useState([]);
  window.console.log(details)
  


  return (
    <BrowserRouter>
      <DataContext.Provider value={{ details, setDetails }} >
        <Routes>
          <Route path="/" element={<ProfileForm />} />
          <Route path="/information" element={<Results />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;

