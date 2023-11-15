
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from './../../../Hooks/useMenu';


const PopularMenu = () => {
    const [menu]=useMenu();
    const popular= menu.filter(item=>item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 flex items-center text-black mx-auto">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;