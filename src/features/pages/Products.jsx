import { useDispatch,useSelector } from 'react-redux'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { addToCart } from '../reducers/CartSlice'
import { selectAllProduct } from '../reducers/AddProductSlice'
export default function Products() {
    const product = useSelector(selectAllProduct)
    const dispatch = useDispatch()
    const addToCartAction = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <div className='order'>
                <div className='grid-display'>
                    {
                        product !== null && product.map((product, i) => {
                            return (
                                <div className="card" key={i}>
                                    <img className='image-card' src={product.url}></img>
                                    <h4 style={{ paddingLeft: 10 }}>{product.product.slice(0, 25)}</h4>
                                    <div style={{ paddingLeft: 10 }}><FaIndianRupeeSign className='rs-icon' />{product.price}</div>
                                    <div>
                                        <button className='add-cart' onClick={() => addToCartAction(product)} >Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

