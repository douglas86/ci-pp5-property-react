// components
import CarouselOrganism from "../organism/CarouselOrganism";
import TestimonialsOrganism from "../organism/TestimonialsOrganism";
import PageTitleMolecule from "../molecule/PageTitleMolecule";

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
