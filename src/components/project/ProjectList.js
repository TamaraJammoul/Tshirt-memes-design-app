import React from "react";
const img =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";
export default function ProjectList({ design }) {
  return (
    <div className="item text-center">
      <div className="card card-body">
        <img
          className="img-fluid"
          src={`${img}${design.tshirtcolor}`}
          alt="Tshirt"
        />
        <p>design.name</p>
        <button className="btn btn-sm btn-primary">View</button>
      </div>
    </div>
  );
}
