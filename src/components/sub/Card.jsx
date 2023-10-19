import { useDispatch, useSelector } from "react-redux"
import { addToCart, increment, decrement,removeFromCart } from "../../features/reducers/CartSlice"
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { Buttons } from "../Index"
import { selectAllCart } from "../../features/reducers/CartSlice"
import { Link } from "react-router-dom"

export default function Card({ data, ...rest }) {
    const cart = useSelector(selectAllCart)
    const inCart = cart.find((itm) => itm.id === data.id)
    const dispatch = useDispatch()
    const addToCartAction = (product) => {
        dispatch(addToCart(product))
    }
    const incrementByOne = (id) => {
        dispatch(increment(id))
    }
    const decrementByOne = (id) => {
        dispatch(decrement(id))
    }
    return (
        <div {...rest} >
            <div className="card">
                <Link to={`/indiProduct/${data.id}`}>
                <img className='image-card' src={data.url}></img>
                </Link>
                <h4 style={{ paddingLeft: 8 }}>{data.product}</h4>
                <div style={{ paddingLeft: 5 }}><FaIndianRupeeSign className='rs-icon' />{data.price}</div>
                <div className='block'>
                    {
                        !inCart && <Buttons className='add-cart' onClick={() => addToCartAction(data)} name='Add to cart' />
                    }
                    {
                        inCart && <div className="count-btn">
                            <Buttons onClick={() => inCart.cartCount==1?dispatch(removeFromCart(inCart.id)): decrementByOne(inCart.id)} style={{ alignItems: 'center' }} className='counter' name='-' />
                            <p className="input">{inCart.cartCount}</p>
                            <Buttons onClick={() => incrementByOne(inCart.id)} className='counter' name='+' />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}