import CarouselOrganism from "../organism/CarouselOrganism";
import TestimonialsOrganism from "../organism/TestimonialsOrganism";
import PageTitleMolecule from "../molecule/PageTitleMolecule";

/**
 * Represents the landing page component.
 * @returns {React.Component} - The rendered landing page component.
 */
const LandingPage = () => {
  return (
    <>
      <PageTitleMolecule />
      <CarouselOrganism />
      <TestimonialsOrganism />
    </>
  );
};

export default LandingPage;
