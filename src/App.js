import React from "react";
import "./App.css";
import { InterviewHome } from "./sim/views/interview-beincom";

function App() {
  // const handleCheckPoint = async () => {
  //   try {
  //     const response = await axios.post('https://simkinhdich.com/boi-kinh-dich?so=0394705333&ngay=23&thang=1&nam=1997&gio=5&phut=1&gioitinh=nam&lich=dl');
  //     const a = response.data.toString()

  //     console.log(a)

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // useEffect(() => {
  //   handleCheckPoint()
  // },[])

  return (
    <div className="App">
      {/*<HomeViews />*/}

      <InterviewHome />
    </div>
  );
}

export default App;
