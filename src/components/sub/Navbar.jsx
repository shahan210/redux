import { BiShoppingBag } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return (
            <nav className='navig'>
                <NavLink className='nav-itm1' to={'/addProduct'}>Add</NavLink>
                <NavLink className='nav-itm1' to={'/'}>Products</NavLink>
                <NavLink className='nav-itm' to={'/cart'} ><BiShoppingBag className='cart-icon' /></NavLink>
            </nav>
    )
}
