import React from 'react'
import {useStateValue} from '../StateProvider';
// import {toast,ToastContainer} from 'react-toastify';
const Product = ({id,title,price,rating,image}) => {    

    const [{basket} , dispatch] = useStateValue();
    // console.log(basket);
    const addToBasket = () => {
        //dispatch the item
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id,title,price,rating,image
            }
        })

        // toast.success("Item added to basket", {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });
    }

    return (
        <>
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        
                            Array(rating).fill().map( (_,i)=>(
                                <p>⭐</p>
                             ) )                       
                    }   
                </div>
                <div className="product__image">
                    <img src={image} alt="Product" />
                </div>
                <div className="product__addToCart">
                    <button onClick={addToBasket}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product