import { Helmet } from "react-helmet-async";
import Boss from "../Boss/Boss";
import Category from "../Category";
import Contract from "../Contract/Contract";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recomands from "../Recomands/Recomands";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./../Banner/Banner";
import Featured from "./../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Boss></Boss>
      <PopularMenu></PopularMenu>
      <Contract></Contract>
      <Recomands></Recomands>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
