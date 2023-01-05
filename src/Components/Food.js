import React from "react";
import Navbar from "./Navbar";

// import react from 'react';
const Food = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row mt-4">
        <div className="div">
          <ul className="list-group list-group-flush">
            <li className="list-group-item  active font-weight-bold">
              <center>Food Related Guidelines :</center>
            </li>
            <li className="list-group-item">
              1. Pagal fatttu ache seh khavo naa yaar besttieee
            </li>
            <li className="list-group-item">
              2. See if you not eat properly naa then you will be not much fit
              and strong
            </li>
            <li className="list-group-item">
              3. khanee keh kuch bhi nakhreh nakoh karo plsss humble request hai
            </li>
            <li className="list-group-item">
              4. joh hai voh khaneh ni aadat daloh acha rehta kyu apni maanmaani
              chala te
            </li>
            <li className="list-group-item">
              5. voh 2 roti seh kuch bhi stomatch fill nai hota soo eat food
              ache seh
            </li>
            <li className="list-group-item">
              6. if your lazy to eat some day toh apke mamma koh boldoh she will
              feed you ache seh with her hands
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Food;
