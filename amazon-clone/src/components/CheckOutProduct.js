import React from 'react'
import {useStateValue} from '../StateProvider';

const CheckOutProduct = ({id,image,title,price,rating , hideButton}) => {

    const [{basket} , dispatch] = useStateValue();

    const removeFromBasket = () =>  {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutproduct">
            <img src={image} className="checkoutproduct__image" alt="CheckOutProduct"/>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutproduct__rating">{  
                    Array(rating).fill().map( ()=>(
                        <p>⭐</p>
                    ) )                       
                }</p>
                {
                    !hideButton && <button className="checkoutproduct__RemoveToCart" onClick={removeFromBasket}>Remove From Basket</button>
                }
            </div>
        </div>
    )
}

export default CheckOutProduct
