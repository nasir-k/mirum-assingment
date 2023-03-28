import { Divider, Link, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { jobs } from "../../assets/jobs/jobs";
import Card from "../../components/Card/Card";
import "./AllJobsScreen.css";

const AllJobsScreen = () => {
  const navigate = useNavigate();
  return (
    <Card>
      {jobs.map((job) => {
        return (
          <div key={job.jobId} id={job.jobId}>
            <h3>{job.title}</h3>
            <div className="info">
              {" "}
              <p>Department : {job.department}</p>
              <p>Job Location : {job.location}</p>
            </div>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate(`/${job.jobId}`)}
            >
              View More
            </Link>
            <Divider />
          </div>
        );
      })}
    </Card>
  );
};
export default AllJobsScreen;
