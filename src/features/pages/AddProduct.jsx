import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillExclamationCircle } from 'react-icons/ai'
import { Textbox, Buttons } from "../../components/Index";
import { selectAllProduct } from "../reducers/AddProductSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addProduct, updateProducts, deleteProduct } from "../reducers/AddProductSlice";

export default function AddProduct() {
    const getProduct = useSelector(selectAllProduct)
    const product = getProduct
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [editId, setEditId] = useState(null);
    const [errors, setErrors] = useState({});

    const clearAllState =()=>{
        setPrice('')
        setTitle('')
        setUrl('')
    }
    const submitProduct = (e) => {
        e.preventDefault();
        let productDetails = {
            product: title,
            price: price,
            url: url,
            id: nanoid()
        }
        const validationErrors = {}
        setErrors(validationErrors)
        if (title == "") {
            validationErrors.title = "Enter a Product Name"
            return
        }
        if (price == 0 && price == "") {
            validationErrors.price = "Enter an amount"
            return
        }
        if (url == "") {
            validationErrors.url = "Enter an url"
            return
        }
        
        dispatch(addProduct(productDetails))
        clearAllState()
    }
    const edit = (id) => {
        const value = product.map((itm) => itm)
        const getValue = value.filter(itm => itm.id === id)
        setTitle(getValue[0].product)
        setPrice(getValue[0].price)
        setUrl(getValue[0].url)
        setEditId(getValue[0].id)
    }
    const updateProduct = (e) => {
        e.preventDefault()
        console.log(title, price, url,editId,'y');
        dispatch(updateProducts(title, price, url,editId))
        clearAllState()
        setEditId(null)
    }
    const deleteRow = (id) => {
        dispatch(deleteProduct(id));
    }
    return (
        <div style={{ position: 'relative' }}>
            <form className='form-product'>
                <div>
                    <Textbox type='text' placeholder='Title' value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                    {errors.title && <p style={{ fontFamily: "'pinPops', sans-serif", fontSize: 12, color: 'red' }}><AiFillExclamationCircle /> {errors.title}</p>}
                </div>
                <div>
                    <Textbox type='number' placeholder='Enter the price' value={price || ""} onChange={(e) => setPrice(e.target.value)} />
                    {errors.price && <p style={{ fontFamily: "'pinPops', sans-serif", fontSize: 12, color: 'red' }}><AiFillExclamationCircle /> {errors.price}</p>}

                </div>
                <div>
                    <Textbox type='text' placeholder='Url' value={url || ""} onChange={(e) => setUrl(e.target.value)} />
                    {errors.url && <p style={{ fontFamily: "'pinPops', sans-serif", fontSize: 12, color: 'red' }}><AiFillExclamationCircle /> {errors.url}</p>}

                </div>
                
                <Buttons onClick={editId === null ? submitProduct : updateProduct} name={editId === null ? "Submit" : "Update"} className='submit' />
            </form>
            <table className='table-product'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Url</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.length > 0 && product.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <span>{item.product}</span>
                                    </td>
                                    <td><span>{item.price}</span> </td>
                                    <td className='ellipsis1' >
                                        <span className='ellipsis ' >{item.url}</span>
                                    </td>
                                    
                                    <td>
                                        <Buttons onClick={() => edit(item.id)} className='edit-button' name="Edit" />
                                        <Buttons onClick={() => deleteRow(item.id)} name="Delete" className='delete-button ' />
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
