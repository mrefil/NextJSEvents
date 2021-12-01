import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/event-search';
import { Fragment } from 'react';
import {useRouter} from 'next/router';

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();
    

    function findEventsearch(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return(
        <Fragment>
            <EventsSearch onSearch={findEventsearch}/>
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage;