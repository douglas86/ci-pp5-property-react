import CardMolecule from "../molecule/CardMolecule";

import { heading, subheading } from "../atom/elements";

/**
 * TestimonialsOrganism is a functional component that displays testimonials.
 *
 * @returns {ReactElement} The TestimonialsOrganism component
 */
const TestimonialsOrganism = () => {
  return (
    <div>
      {heading("Testimonials")}
      {subheading("Have a look what previous customers are saying")}
      <CardMolecule />
    </div>
  );
};

export default TestimonialsOrganism;
