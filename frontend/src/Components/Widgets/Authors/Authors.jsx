import React from "react";
import "./Authors.css";
import Anant from '../images/anant.jpg'

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="roundedview">
          <div className="profileContainer">
          <img src={Anant} alt="profilepic" className="pic" />
          </div>
          <div className="text">
            <b>Anant Kumar</b>
            <p>
              This is Anant from B.Tech CSE Sem I <br /> adipisicing elit.
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
