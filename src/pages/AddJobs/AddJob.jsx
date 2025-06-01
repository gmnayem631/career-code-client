import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2>Please add a job</h2>
      <form>
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
          <legend className="fieldset-legend">Basic Info</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
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
                name="salaryMin"
                type="text"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>
            <div className="">
              <label className="label">Maximum Salary</label>
              <input
                name="salaryMax"
                type="text"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div className="">
              <label className="label">Currency</label>
              <select
                defaultValue="Pick a color"
                name="category"
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
      </form>
    </div>
  );
};

export default AddJob;
