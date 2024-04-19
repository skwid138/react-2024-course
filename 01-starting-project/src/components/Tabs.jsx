// props.children is the value between a component opening and closing tags
// Use JS 'Rest property' to catch all undeclared arguments
export default function ({ buttonContainer, buttons, children, ...attributes }) {
  const ButtonContainer = buttonContainer;
  return (
    // Spread all undeclared args, this is helpful for whatever attributes you may add anywhere this is used
    <>
    <ButtonContainer {...attributes}>
      {buttons}
    </ButtonContainer>
    {children}
    </>
  );
}
