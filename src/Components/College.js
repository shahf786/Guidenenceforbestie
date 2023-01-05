import React from "react";
import Navbar from "./Navbar";

// import react from 'react';
const College = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row mt-4">
        <div className="div">
          <ul className="list-group list-group-flush">
            <li className="list-group-item  active font-weight-bold">
              <center>College Guidelines :</center>
            </li>
            <li className="list-group-item">
              1. College time seh chale janaa pagal
            </li>
            <li className="list-group-item">
              2. Morning daily bath karkeh college janaa.
            </li>
            <li className="list-group-item">
              3. Daily dress uniform change karkeh hi janna.
            </li>
            <li className="list-group-item">
              4. If sockes wearing naaa toh daily daily sockes change karna hi
              must and should samje.
            </li>
            <li className="list-group-item">
              5. 9.50 tak college reach hojanaa
            </li>
            <li className="list-group-item">
              6. Breakfast karkeh hi nikal naaa and lunch box toh compulsory
              leke hi jaa naa hai
            </li>
            <li className="list-group-item">
              7. Daily no buck to class sometimes no problem
            </li>
            <li className="list-group-item">
              8. Bureh frnds seh toh bilkul hi stay away.
            </li>
            <li className="list-group-item">
              9. Joh cigarette pireh unseh toh pura hi duur reh naaa
            </li>
            <li className="list-group-item">
              10. *Buggu bilkul fast nai chalna samje
            </li>
            <li className="list-group-item">
              11. Colllg seh aakeh pahele hath mooh ache seh dhona then thoda
              khalena
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default College;
