// props.children is the value between a component opening and closing tags
// Use JS 'Rest property' to catch all undeclared arguments
export default function ({ buttons, children, ...attributes }) {
  return (
    // Spread all undeclared args, this is helpful for whatever attributes you may add anywhere this is used
    <>
      <menu {...attributes}>
        {buttons}
      </menu>
      {children}
    </>
  );
}
