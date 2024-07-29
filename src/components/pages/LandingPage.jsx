// components
import CarouselOrganism from "../organism/CarouselOrganism";
import TestimonialsOrganism from "../organism/TestimonialsOrganism";
import PageTitleMolecule from "../molecule/PageTitleMolecule";
import axios from "axios";
import Cookies from "js-cookie";

const LandingPage = () => {
  const heroku = "https://ci-pp5-property-api-958077e8a5b4.herokuapp.com/";

  const refresh = Cookies.get("refresh-token");
  const access = Cookies.get("auth-token");

  const a =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODgwMjQwLCJpYXQiOjE3MjIyNzU0NDAsImp0aSI6ImY1NjgyMjZhOGZiNjRjNWE4ODc2N2Y4YWYzZTBjODczIiwidXNlcl9pZCI6NX0.5Zrtg25So6legvT-Zhc4HdALmOQr9WscgTG0w-Fz-lc";

  console.log("access", access);

  const handleProfile = async () => {
    try {
      return await axios.get(`profiles/5/`, {
        baseURL: heroku,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
          // credentials: "include",
        },
      });
    } catch (error) {
      return error;
    }
  };

  handleProfile()
    .then(async (res) => {
      const results = await res;
      console.log("results", results);
    })
    .catch((error) => {
      console.log("error", error);
    });

  return (
    <>
      <PageTitleMolecule />
      <CarouselOrganism />
      <TestimonialsOrganism />
    </>
  );
};

export default LandingPage;
