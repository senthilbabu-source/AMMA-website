import EventsClient from "./EventsClient";

export const metadata = {
    title: "Events | AMMA Atlanta",
    description: "Upcoming events and gatherings for the AMMA community.",
};

export default function EventsPage() {
    return <EventsClient />;
}
