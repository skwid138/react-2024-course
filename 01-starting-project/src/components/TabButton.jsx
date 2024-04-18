export default function (props) {
    // props.children is the value between a component opening and closing tags
    return (
        <li><button>{props.children}</button></li>
    );
}
