import React, { use } from "react";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  console.log(jobs);
  return <div>Total Jobs: {jobs.length}</div>;
};

export default HotJobs;
