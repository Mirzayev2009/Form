import { useState } from "react";
import { ProfileForm } from "./components/Form";
import Results from "./components/Results";

function App() {
  const [details, setDetails] = useState([]);

  window.console.log(details); // Use window.console.log

  return (
    <div className="">
      <ProfileForm setDetails={setDetails} />
      <Results details={details} />
    </div>
  );
}

export default App;
