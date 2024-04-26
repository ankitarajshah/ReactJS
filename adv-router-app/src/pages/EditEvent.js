import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventPage = ({ method, event }) => {
  const data = useRouteLoaderData("event-detail");
  // const event = data.event;
  return (
    <>
      <h1>EditEventPage</h1>

      <EventForm event={data.event} />
    </>
  );
};
export default EditEventPage;
