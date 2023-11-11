import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import recImg from '../../../assets/home/slide1.jpg'

const Recomands = () => {
    return (
        <section className="my-10">
            <SectionTitle
            subHeading={"Should Try"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={recImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline border-0 border-b-4 flex items-center text-orange-400 mx-auto">Add to Cart</button>
    </div>
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={recImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline border-0 border-b-4 flex items-center text-orange-400 mx-auto">Add to Cart</button>
    </div>
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={recImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline border-0 border-b-4 flex items-center text-orange-400 mx-auto">Add to Cart</button>
    </div>
  </div>
</div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={recImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline border-0 border-b-4 flex items-center text-orange-400 mx-auto">Add to Cart</button>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default Recomands;