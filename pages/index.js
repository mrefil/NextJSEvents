import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
    // get data
    const featuredEvents = getFeaturedEvents();
    
    return(
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default HomePage;