import CarouselOrganism from "../organism/CarouselOrganism";
import TestimonialsOrganism from "../organism/TestimonialsOrganism";
import PageTitleMolecule from "../molecule/PageTitleMolecule";
import { useAppState } from "../../hooks/useAppContext";

/**
 * Represents the landing page component.
 * @returns {JSX.Element} - The rendered landing page component.
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
