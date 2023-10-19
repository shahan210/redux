import { useDispatch, useSelector } from 'react-redux'
// import { FaIndianRupeeSign } from 'react-icons/fa6'
import { selectAllProduct } from '../reducers/AddProductSlice'
import { useEffect } from 'react'
// import { addToCart } from '../reducers/CartSlice'
import { selectAllCart } from '../reducers/CartSlice'
import {  Card } from '../../components/Index'
// import { increment, decrement } from '../reducers/CartSlice'

export default function Products() {
    const product = useSelector(selectAllProduct)
    const cart = useSelector(selectAllCart)
    useEffect(() => {
        productEmpty()
    }, [product, cart])
    const productEmpty = () => {
        if (product.length > 0) {
            document.getElementById('noData').style.display = 'none'
        } else {
            document.getElementById('noData').style.display = 'block'
        }
    }
    // const inCart = ()=> {
        
    // }
    // const decrementByOne = (id) => {
    //     dispatch(decrement(id))
    // }
    // const incrementByOne = (id) => {
    //     dispatch(increment(id))
    // }
    // const dispatch = useDispatch()
    // const addToCartAction = (product) => {
    //     dispatch(addToCart(product))
    // }
    return (
        <>
            <img src='https://bagbazaars.com/assets/img/no-product-found.png' className="cart-image1 " id='noData' />
            <div className='grid-display'>
            {product.map((pro)=>{
                return(
                    
                    <Card key={pro.id} data={pro} />
                )
            })}
            </div>
           
        </>
    )
}

