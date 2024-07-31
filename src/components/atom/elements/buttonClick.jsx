import Button from "react-bootstrap/Button";

/**
 * Creates a button element with click handler, text and variant.
 * @param {function} clickHandler - The click handler function for the button.
 * @param {string} text - The text to be displayed on the button.
 * @param {string} variant - The variant of the button (e.g., "primary", "secondary", etc.).
 * @returns {element} - The button element with click handler, text and variant.
 */
export const buttonClick = (clickHandler, text, variant) => (
  <Button variant={variant} onClick={clickHandler}>
    {text}
  </Button>
);
