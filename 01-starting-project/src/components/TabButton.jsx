export default function ({ children, onSelect, isSelected }) {
    // props.children is the value between a component opening and closing tags
    return (
        <li>
            <button className={isSelected && 'active'} onClick={onSelect}>{children}</button>
        </li>
    );
}
