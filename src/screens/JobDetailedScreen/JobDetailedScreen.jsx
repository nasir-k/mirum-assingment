import { useState } from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { jobs } from "../../assets/jobs/jobs";
import Card from "../../components/Card/Card";
import JobApplyModal from "../../components/JobApplyModal/JobApplyModal";

const JobDetailedScreen = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const job = jobs.filter((job) => job.jobId == id);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card>
      {job.map((el) => {
        return (
          <div>
            <h1>{el.title}</h1>
            <h3>{el.department}</h3>
            <h4>{el.location}</h4>
            <p>{el.description}</p>
            <Button variant="contained" onClick={handleOpen}>
              Apply Now
            </Button>
            <JobApplyModal handleClose={handleClose} open={open} />
          </div>
        );
      })}
    </Card>
  );
};
export default JobDetailedScreen;
