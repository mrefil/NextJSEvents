import EvenItem from "./event-item";

function EventList(props) {
    const {items} = props;

    return(
        <ul>
            {items.map(event => <EvenItem />)}
        </ul>
    )
}

export default EventList;