import { heading } from "../atom/elements";
import CardMolecule from "../molecule/CardMolecule";
import { subheading } from "../atom/elements/subheading";

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
