import { Dashboard } from "@mui/icons-material";
import NavigationBar from "../Navigation/NavigationBar";
import SideBarDashboard from "./SideBarDashboard";

const DashBoradTwo = () => {
  return (
    <>
      <div className="w-full flex">
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Main Components */}
        <main className="grow">
          <SideBarDashboard />
        </main>
      </div>
    </>
  );
};

export default DashBoradTwo;
