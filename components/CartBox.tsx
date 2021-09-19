import React from 'react'
import Image from 'next/image'
import Xicon from '../public/x_icon.svg'
import Banner from '../public/slide.jpg'

interface Props {
    toggle: () => void,
    cartItems: any[],
    total: number,
    clearCartItems: () => void,
}

const CartBox: React.FC<Props> = ({ toggle, cartItems, total, clearCartItems }) => {
    return (
        <div className="cart_box">
            <div className="x_icon" onClick={toggle}>
                <Image
                    src={Xicon}
                />
            </div>
            <div className="scroll">
                {cartItems?.length > 0 ? cartItems?.map((el, index) => (
                    <div className="cart_card">
                        <div>
                            <h3>{el.name}</h3>
                            <p>${el.price}</p>
                        </div>
                        <img
                            src={el?.image?.src}
                            className="cart_img"
                        />
                    </div>
                )) : (
                        <div className="no_item">
                            no item in cart
                        </div>
                    )}
            </div>
            {cartItems?.length > 0 && (
                <div className="total_container">
                    <h3>Total</h3>
                    <p>
                        ${total || 0}
                    </p>
                </div>
            )}

            {cartItems?.length > 0 && (
                <button className="clear_btn" onClick={clearCartItems}>
                    clear
                </button>
            )}
        </div>
    )
}

export default CartBox
