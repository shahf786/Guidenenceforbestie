import React from "react";
import Navbar from "./Navbar";

// import react from 'react';
const Milk = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row mt-4">
        <div className="div">
          <ul className="list-group list-group-flush">
            <li className="list-group-item  active font-weight-bold">
              <center>Milk Guidelines :</center>
            </li>
            <li className="list-group-item">
              1. fattuuuu try to drink a milk daily samjeh naa
            </li>
            <li className="list-group-item">
              2. Don't Drink the a milk forcelfull infact pyar seh piyo naa toh
              you will get the taste
            </li>
            <li className="list-group-item">
              3. App koh kitne baar bhi boleh toh kal kal tommorrow bolkeh lyte
              le lete.
            </li>
            <li className="list-group-item">
              4. you know aaj keh generation koi uthna nai piche padta piloh
              bolkeh fatttuuu.
            </li>
            <li className="list-group-item">
              5. soh daily bs milk piya karoh tabhi apke vitamins etc will
              increases right, pahle hi your so nazuk bachi
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Milk;
