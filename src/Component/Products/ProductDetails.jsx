import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct , removeProduct} from '../../redux/action'
import Loading from '../Loading/Loading'
import "./product.css"

const ProductDetails = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.productDetails.product
    })

    console.log(data)

    const {id} = useParams()

    const getProducts = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(api => dispatch(getProduct(api)))
    }

    useEffect(() => {
        if(id && id !== "")
        getProducts(id)
        return (() => {
            dispatch(removeProduct())
        })
    },[id])

  return (
    <>
    
    {data === undefined ? (
        <div className='loading_container'> {<Loading />} </div>
    ) : (
        <div className='product_container'>
        <div className='product_info'>
        <h2> {data.category} Category</h2>
        <div className='image_info'>
            <div className='image'>
                <img src={data.image} />
            </div>
            <div className='text_info'>
                <div className='product_text'>
                    <p>Product Name </p>
                    <p> {data.title}</p>
                </div>
                <div className='product_text'>
                    <p>Product Price </p>
                    <p>$ {data.price}</p>
                </div>
                <div className='product_text'>
                    <p>Product Description </p>
                    <p> {data.description}</p>
                </div>
                <div className='product_text'>
                    <p>Product Rating </p>
                    <p> {data.rating.rate}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )}
    </>
  )
}

export default ProductDetails