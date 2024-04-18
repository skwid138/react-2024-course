export default function (props) {
    function clickHandler() {
        console.log('suh dude');
    }

    // props.children is the value between a component opening and closing tags
    return (
        <li>
            <button onClick={clickHandler}>{props.children}</button>
        </li>
    );
}
