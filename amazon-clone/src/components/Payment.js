import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from '../axios';
import {useStateValue} from '../StateProvider';
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../reducer';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
// import {collection, doc, setDoc ,addDoc } from "firebase/firestore";  
import {db} from '../firebase';
const Payment = () => {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                //strips expects the total amount in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket)*100   }`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    },[basket])

    console.log("clientsecret " , clientSecret);

    const handleStripeSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            try{
                // const docRef = await addDoc(collection(db,'users') , user.uid );
                db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                    basket : basket,
                    amount : paymentIntent.amount,
                    created: paymentIntent.created
                })
                
            }catch(err){
                console.log("Catching Document Error " , err);
            }

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        } )
    }
    const handleStripeChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <section className="payment__title">
                {/* <p>Checkout ({basket.length} items)</p> */}
                <p>Checkout (<span>{basket.length} items</span>)</p>
            </section>
            <section className="payment__address">
                <h3>Delivery Address</h3>
                <div>
                    <p>1/8 sahyog appartment</p>
                    <p>Keshavnagar,Subhasbridge</p>
                    <p>Ahmedabad - 380027</p>
                </div>
            </section>
            <section className="payment__basket">
                <h3>Review items and delivery</h3>
                <div className="payment__basketitems">  
                    {
                        basket.map(item => (
                            <CheckOutProduct  id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />
                        ))
                    }
                </div>
            </section>
            <section className="payment__paymentmethod">
                <h3>Payment Method</h3>
                <div className="payment__stripecontainer">
                    <form onSubmit={handleStripeSubmit}>
                        <CardElement onChange={handleStripeChange} />
                        <div className="payment__pricecontainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <p>Total Price : <strong className="subtotal__value">{value}</strong></p>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </div>
                        <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Confirm"}</span>
                        </button>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Payment
