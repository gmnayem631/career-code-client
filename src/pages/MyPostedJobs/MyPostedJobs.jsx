import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobsLists from "./JobsLists";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      My Posted Jobs
      <Suspense>
        <JobsLists
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobsLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
