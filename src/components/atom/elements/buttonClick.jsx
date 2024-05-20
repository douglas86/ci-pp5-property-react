import Button from "react-bootstrap/Button";

export const buttonClick = (clickHandler, text, variant) => (
  <Button variant={variant} onClick={clickHandler}>
    {text}
  </Button>
);
