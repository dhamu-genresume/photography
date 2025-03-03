import "./App.css";
import Sidebar from "./component/Sidebar"
import GoogleDriveImages from "./component/GoogleDriveImages";
import { useEffect, useState } from "react";

import LiveStream from "./component/LiveStream";

function App() {
  const [selected, setSelectedOption] = useState("home");
  const [folderId, setFolderId] = useState("1cvJMpMS48zN6_5L6BoPWgNxuaj1bZVzS");

  const home = "1cvJMpMS48zN6_5L6BoPWgNxuaj1bZVzS";
  const marriage = "1-9TmRkm6SvuYuCYLeQ76hSa550_QOUi0";
  const baby = "1u1H1bSK7T4MFaVGCVgrdf6Uc5GqDuMOZ";
  const family = "1l1vr_-0KSXJYfFuxtN1WgEFMf3LD4T_P";
  const preWedding = "1pWHkKET65bD8TGwGR4yj-YEZsgQnfIM6";

  useEffect(() => {
    if (selected !== "live") {
      switch (selected) {
        case "home":
          setFolderId(home);
          break;
        case "marriage":
          setFolderId(marriage);
          break;
        case "baby":
          setFolderId(baby);
          break;
        case "family":
          setFolderId(family);
          break;
        case "preWedding":
          setFolderId(preWedding);
          break;
        default:
          setFolderId(home);
          break;
      }
    }
  }, [selected]);

  return (
    <>
      <Sidebar setSelectedOption={setSelectedOption} />
      <div className="ml-[250px] p-5 bg-neutral-800 h-[100%]">
        {selected === "live" ? <LiveStream /> : <GoogleDriveImages folderId={folderId} />}
      </div>
     </>
  );
}

export default App;
