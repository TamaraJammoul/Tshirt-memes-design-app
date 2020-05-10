import React from "react";
import Display from "./Display";
const URLIMG =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";
export default function Setting({
  color,
  handelowerText,
  handeUpperText,
  handelmemimg,
  handelTextsize,
  handelTextcolor,
  save,
}) {
  return (
    <div className="card bg-light-gray container">
      <h3 className="text-center">Settings</h3>
      <h4>Change T-shirt Color</h4>
      <div className="tshirt-color">
        <img
          onClick={color}
          src={`${URLIMG}white.png`}
          alt="white tshirt"
          id="white"
        />
        <img
          onClick={color}
          src={`${URLIMG}black.png`}
          alt="black tshirt"
          id="black"
        />
        <img
          onClick={color}
          src={`${URLIMG}grey.png`}
          alt="grey tshirt"
          id="grey"
        />
        <img
          onClick={color}
          src={`${URLIMG}red.png`}
          alt="red tshirt"
          id="red"
        />
        <img
          onClick={color}
          src={`${URLIMG}blue.png`}
          alt="bluetshirt"
          id="blue"
        />
      </div>
      <hr />
      <h4>Write Text</h4>
      <input
        type="text"
        className="form-control form-control-sm mb-2"
        placeholder="upper text"
        onChange={handeUpperText}
      />
      <input
        type="text"
        className="form-control form-control-sm "
        placeholder="lower text"
        onChange={handelowerText}
      />
      <hr />
      <h4>Add image</h4>
      <div className="form-group">
        {" "}
        <input
          onChange={handelmemimg}
          type="file"
          className="form-control-file mb-2"
        />
      </div>
      <hr />
      <h4>Size Text</h4>
      <input type="range" onChange={handelTextsize} min="13" max="30" />
      <hr />
      <h4>Text Color</h4>
      <select
        className="form-control form-control-sm mb-2"
        onChange={handelTextcolor}
      >
        <option>White</option>
        <option>Black</option>
        <option>Grey</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <hr />
      <button className="btn btn-primary btn-sm " id="save" onClick={save}>
        {" "}
        Save
      </button>
    </div>
  );
}
