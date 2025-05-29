import React, { use } from "react";
import JobCard from "../shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  console.log(jobs);
  return (
    <div>
      <h2 className="text-4xl my-6 font-semibold">Hot Jobs of the Day!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
