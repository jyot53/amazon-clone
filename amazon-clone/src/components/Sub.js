import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../reducer';
const Sub = () => {
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items) : 
                        <strong className="subtotal__value">{value}</strong>
                    </p>
                    <p className="subtotal__gift">
                        <input type="checkbox"/> 
                        <p>This Order Contains a Gift</p>
                    </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={e => history.push('/payment')}  className="subtotal__btn">Proceed To Checkout</button>
        </div>
    )
}

export default Sub
