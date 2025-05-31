import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    description,
    category,
    company,
    company_logo,
    location,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-lg mt-5">
      <div className="flex items-center gap-5">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div className="">
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center mt-3">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{category}</div>
        </h2>

        <p>{description}</p>

        <p className="">
          Salary: {salaryRange.min} - {salaryRange.max}{" "}
          {salaryRange.currency.toUpperCase()}
        </p>

        <div className="card-actions justify-start mt-4">
          {requirements.map((skill, index) => (
            <div className="badge badge-outline cursor-pointer" key={index}>
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-3">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
