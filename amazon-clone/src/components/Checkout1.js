import React from 'react';
import Subtotal from './Sub';
import CheckOutProduct from './CheckOutProduct';
import {useStateValue} from '../StateProvider';
import FlipMove from 'react-flip-move';
const Checkout1 = () => {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
           <div className="checkout__left">
               <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/ScanAndPay/Organized/More/IndependenceDay2019/OnSitePromotion/Updated/More_Page_Banner_1500x300.jpg" alt="Checkout Banner" className="checkout__ad"/>

               <div>
                   <h3> Hello, { user ? user.email : "Guest"}  </h3>
                   <h2 className="checkout__title">Your Shopping Basket</h2>              
               </div>
                <FlipMove>
                {   
                   basket.map(item => (
                        <CheckOutProduct  id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />
                    ))
                }
                </FlipMove>

           </div>

           <div className="checkout__right">
               {/* Sub total section */}
               <Subtotal/>
           </div>

        </div>
    )
}

export default Checkout1
