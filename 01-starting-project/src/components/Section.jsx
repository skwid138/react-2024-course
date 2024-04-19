// Use JS 'Rest property' to catch all undeclared arguments
export default function ({ title, children, ...attributes }) {
  // props.children is the value between a component opening and closing tags
  return (
    // Spread all undeclared args, this is helpful for whatever attributes you may add anywhere this is used
      <section {...attributes}>
        <h2>{title}</h2>
        {children}
      </section>
  );
}
