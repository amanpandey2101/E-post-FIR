import React from "react";
import "./Authors.css";
import Aman from '../images/amity_uniform_1-min-removebg-preview.png'

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="roundedview">
          <div className="profileContainer">
          <img src={Aman} alt="profilepic" className="pic" />
          </div>
          <div className="text">
            <b>Aman Kumar Pandey</b>
            <p>
              This is Aman Kumar Pandey from B.Tech CSE Sem I <br /> adipisicing elit.
              Voluptates distinctio numquam asperiores modi perspiciatis? Magnam
              maiores alias totam dolores possimus obcaecati dolorum ipsam
              exercitationem in, quaerat ad nostrum! At, deserunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
