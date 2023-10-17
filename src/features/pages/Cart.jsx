import { selectAllCart } from "../reducers/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { deleteFromCart } from "../reducers/CartSlice";
export default function Cart() {
  const cartValues = useSelector(selectAllCart)
  const dispatch = useDispatch()
  const deleteCart = (id) => {
    dispatch(deleteFromCart(id))
  }

  return (
    <>
      <div className='order'>
        <div className='grid-display'>
        {
          cartValues !== null && cartValues.map((product, i) => {
            return (
              <div className="card" key={i}>
                <img className='image-card' src={product.url}></img>
                <h4 style={{ paddingLeft: 10 }}>{product.product.slice(0, 25)}</h4>
                <div style={{ paddingLeft: 10 }}><FaIndianRupeeSign className='rs-icon' />{product.price}</div>
                <div>
                  <button className='add-cart' onClick={() => deleteCart(product)} >Remove</button>
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
