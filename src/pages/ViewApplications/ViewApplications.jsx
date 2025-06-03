import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, application) => {
    console.log(e.target.value, application);

    axios
      .patch(``, { status: e.target.value })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-4xl">
        {applications.length} Applications for: {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application) => (
              <tr key={application._id}>
                <th>1</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Under Review</option>
                    <option>Call for Interview</option>
                    <option>Hire</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
