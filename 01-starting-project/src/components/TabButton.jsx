export default function ({ children, onSelect }) {
    // props.children is the value between a component opening and closing tags
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}
