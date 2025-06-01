import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;

    console.log(linkedIn, gitHub, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      gitHub,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((response) => {
        // console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Submitted Successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl">
        Apply for This Job: <Link to={`/jobs/${jobId}`}>Details</Link>
      </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            name="linkedIn"
            type="url"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">GitHub Link</label>
          <input
            name="gitHub"
            type="url"
            className="input"
            placeholder="GitHub Link"
          />

          <label className="label">Resume Link</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume Link"
          />

          <input className="btn" type="submit" value={"Apply"} />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
