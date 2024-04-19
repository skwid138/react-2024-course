export default function ({ children, isSelected, ...attributes }) {
    // props.children is the value between a component opening and closing tags
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...attributes}>
                {children}
            </button>
        </li>
    );
}
