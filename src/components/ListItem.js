const ListItem = (props) => {
    return (
        <div>
            <li key={props.id}>{props.pName}</li>
        </div>
    )
}

export default ListItem;