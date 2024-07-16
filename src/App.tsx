import { useState } from "react";
import "./App.scss";
import MainPage from "./components/mainPage/mainPage";

function App() {
  const [urlUser, setUrlUser] = useState<string>(
    "https://api.github.com/users/mojombo"
  );
  return (
    <>
      {/* <FetchUrl useUrl={urlUser} />
      <p>second commit? or first commit on new branch</p>
      <p>okey seccond commit and see changed</p> */}
      <MainPage />
    </>
  );
}

export default App;
