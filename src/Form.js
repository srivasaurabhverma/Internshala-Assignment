import React from "react";
import "./Form.css";

const checkPassword = () => {
  // console.log(1)
  //   e.preventDefault();
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  let err = false;
  let err2 = true;
  if (first != second) {
    document.getElementById("err").innerText = `Passwords do not match.`; // IF Password Does not Match

    err = true;
    let inp = document.getElementById("second");
    inp.style.border = "4px solid rgba(235, 87, 87, 1)";
  } else {
    if (first.length < 8) {
      err = true;
      document.getElementById("err").innerText = `Some Error Occurred`; //  If length is less then 8

      let inp = document.getElementById("second");
      inp.style.border = "4px solid rgba(235, 87, 87, 1)";
    } else {
      for (let i = 0; i < first.length; i++) {
        if (first[i] >= "a" && first[i] <= "z") {
        } else if (first[i] >= "A" && first[i] <= "Z") {
        } else {
          err2 = false;
        }
      }

      if (err2 == true) {
        document.getElementById("err").innerText = `Some Error Occurred`; //If only contains alphabets
        let inp = document.getElementById("second");
        inp.style.border = "4px solid rgba(235, 87, 87, 1)";
      }
    }
  }

  if (err == false && err2 == false) {
    document.getElementById("tit").innerHTML = `Password<span> Changed</span>`;
    document.getElementById(
      "main"
    ).innerHTML = ` <p id="p_tag">Your password has been updated! Now get back 
in the driver seat, racers are waiting for you!</p>`;

document.getElementById('btn').innerHTML = ` <button id="newbtn">
            <h6 id="rst">JOIN A RACE</h6>
          </button>`
  }
};
function Form() {
  return (
    <>
      <div className="form1" id="form">
        <div className="title2" id="tit">
          Password Reset
        </div>
        <div id="main">
          <div className="new">
            <h3>NEW PASSWORD</h3>
            <input type="password" name="" id="first" />
          </div>

          <div className="new">
            <h3>RE-ENTER NEW PASSWORD</h3>
            <input type="password" name="" id="second" />
            <p id="err"></p>
          </div>
        </div>
        <div id="btn">
          <button className="btnrest" onClick={checkPassword}>
            <h6 id="rst">RESET PASSWORD</h6>
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
