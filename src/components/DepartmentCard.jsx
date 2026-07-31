import React from "react";

const DepartmentCard = ({ department }) => {
  return (
    <div className="department-card">
      <img
        src={department.image}
        alt={department.name}
        className="department-image"
      />

      <div className="department-content">
        <h2 className="department-title">{department.name}</h2>

        <p className="department-description">
          {department.description}
        </p>

        <div className="department-details">
          <p>
            <strong>Head:</strong> {department.head}
          </p>

          <p>
            <strong>Location:</strong> {department.location}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DepartmentCard;