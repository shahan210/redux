import { selectAllProduct } from "../reducers/AddProductSlice";
import { Buttons } from "../../components/Index";
import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function indiProduct() {
    const products = useSelector(selectAllProduct)
    const { id } = useParams()
    const getProduct = products.find((pro => pro.id === id))
    return (
        <>
            <div className="arrange">
                <div className="container">
                    <img className="indi-img" src={getProduct.url} />
                    <button className="bg-primary ">holaa</button>
                </div>
            </div>
        </>
    )
}
