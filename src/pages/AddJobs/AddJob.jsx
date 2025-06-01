import React from "react";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);

    // process requirement data
    const requirementsDirty = newJob.requirements.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // process responsibilities data
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((resp) => resp.trim());
  };
  return (
    <div>
      <h2>Please add a job</h2>
      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            name="company"
            type="text"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            name="location"
            type="text"
            className="input"
            placeholder="Company Location"
          />
          <label className="label">Company Logo</label>
          <input
            name="company_logo"
            type="text"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>
        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
              value={"All"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value={"On-Site"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value={"Remote"}
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value={"Hybrid"}
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <select
            defaultValue="Pick a color"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="">
              <label className="label">Minimum Salary</label>
              <input
                name="min"
                type="text"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>
            <div className="">
              <label className="label">Maximum Salary</label>
              <input
                name="max"
                type="text"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div className="">
              <label className="label">Currency</label>
              <select
                defaultValue="Pick a color"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>Euro</option>
                <option>Pound</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            name="description"
            className="textarea"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            name="requirements"
            className="textarea"
            placeholder="Requirements (separated by comma)"
          ></textarea>
        </fieldset>{" "}
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            name="responsibilities"
            className="textarea"
            placeholder="Responsibilities (separated by comma)"
          ></textarea>
        </fieldset>
        {/* HR Related Information */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            name="hr_name"
            type="text"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            name="hr_email"
            type="email"
            className="input"
            placeholder="HR Email"
            defaultValue={user.email}
          />
        </fieldset>
        <input type="submit" value="Add Job" className="btn" />
      </form>
    </div>
  );
};

export default AddJob;
