import { selectAllCart } from "../reducers/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { deleteFromCart } from "../reducers/CartSlice";
import { useEffect, useState } from "react";
import {  Buttons } from "../../components/Index";

export default function Cart() {
  const cartValues = useSelector(selectAllCart)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const [empty ,setEmpty] = useState(false)
  useEffect(()=>{
    totalPrice()
    cartEmpty()
    },[cartValues])
    const totalPrice=()=>{
      const price = cartValues.reduce(function(prev,current){
        return prev + + current.price
      },0)
      setTotal(price) 
    }
    const cartEmpty =()=>{
      if(cartValues.length > 0){
        document.getElementById('noData').style.display = 'none'
        document.getElementById('Tot').style.display = 'block'
        setEmpty(true)      
      }else{ 
        setEmpty(false)
        document.getElementById('noData').style.display = 'block'
        document.getElementById('Tot').style.display = 'none'
      }
    }
    console.log(empty); 
  const deleteCart = (id) => {
    dispatch(deleteFromCart(id))
  }
  return (
    <>
    <img src='https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg' className="cart-image" id ='noData'/>
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
                    <Buttons className='add-cart' onClick={() => deleteCart(product.id)} name={'Remove'}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2 id='Tot' style={{textAlign:'center'}}>Total = <FaIndianRupeeSign className='rs-icon' />{total}</h2>
      </div>
    </>
  )
}