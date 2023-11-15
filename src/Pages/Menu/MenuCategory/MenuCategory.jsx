
import MenuItems from './../../Shared/MenuItems/MenuItems';
import Cover from './../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div className='mb-12 pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {
           items.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
        }
        
    </div> 
    <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-0 border-b-4 flex items-center justify-center text-black mx-auto">ORDER YOUR FAVOURITE FOOD</button>
    </Link>
        </div>
    );
};

export default MenuCategory;