import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css';

const Featured = () => {
  return (
    <div className="featured-image bg-fixed text-white my-20 pt-8">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FEATURED ITEMS"}
      ></SectionTitle>
      <div  className="md:flex justify-center items-center bg-slate-500
       bg-opacity-50 py-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>
           <p> March 20, 2023 <br /></p>
           <p> WHERE CAN I GET SOME?<br /></p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />
            voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br />
            Eaque repellat recusandae ad laudantium tempore <br /> consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
