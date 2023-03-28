import AllJobsScreen from "../screens/AllJobsScreen/AllJobsScreen";
import JobDetailedScreen from "../screens/JobDetailedScreen/JobDetailedScreen";

export const routes = [
  {
    label: "Default",
    path: "/",
    element: AllJobsScreen,
  },
  {
    label: "Jobs",
    path: "/jobs",
    element: AllJobsScreen,
  },
  {
    label: "JobDetail",
    path: "/:id",
    element: JobDetailedScreen,
  },
];
