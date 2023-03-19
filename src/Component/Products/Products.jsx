import React, { useContext } from 'react'
import "./product.css"
import { context } from '../../App'
import { Link } from 'react-router-dom'


const Products = () => {
   
    let dataFromContext = useContext(context)
    const {getData , data} = dataFromContext

    const fetchData = (value) => {
        getData(value)
    }
    
  return (
    <>
        <div className='container'>
        <div className='products_container'>
            <div className='products_category'>
                <ul>
                    <li onClick={() => {fetchData("electronics")}}>Electronics</li>
                    <li onClick={() => {fetchData("jewelery")}}>Jewelery's</li>
                    <li onClick={() => {fetchData("men's clothing")}}>Mens Clothing</li>
                    <li onClick={() => {fetchData("women's clothing")}}>Women's Clothing</li>
                </ul>
            </div>
            <div className='products_list'>
            <ul>
            {data.map((ele, ind) => {
                    return <Link  key={ind} to={`/productdetails/${ele.id}`}> <ul> <li title='Click For More Info'>  {ele.title} </li></ul> </Link>
                })}
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default Products