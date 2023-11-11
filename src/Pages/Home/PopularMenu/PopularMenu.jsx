import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu,setMenu]= useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
         const popularItems=data.filter(item=>item.category === 'popular')   
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 flex items-center text-black mx-auto">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;