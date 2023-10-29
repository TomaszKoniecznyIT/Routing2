import { useLoaderData, useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  // const data = useLoaderData();
  const event = data.event;

  return <EventForm event={event} />;
}

export default EditEventPage;
