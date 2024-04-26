import EventsNavigation from "../components/EventsNavigation";
import classes from "../components/EventsNavigation.module.css";

import { Outlet } from "react-router-dom";
const EventsRootLayout = () => {
  return (
    <>
      <h1>EventsRootPage</h1>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default EventsRootLayout;
