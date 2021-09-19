import React from 'react'


interface Props {
    data: any,
    addTCart: (item: any) => void,
}

const ProductCard: React.FC<Props> = ({ data, addTCart }) => {
    const { name, category, price, image, bestseller } = data
    return (
        <>
            <div className="collection_item">
                {bestseller && (
                    <div className="best_seller_tag">Best Seller</div>
                )}
                <div
                    className="image"
                    style={{ backgroundImage: `url('${image.src}')` }}
                />
                <button
                    className="custom-button"
                    onClick={() => addTCart(data)}
                >
                    Add to cart
                 </button>
            </div>
            <div className="collection_footer">
                <p>{category}</p>
                <h2>{name}</h2>
                <span>${price}</span>
            </div>
        </>
    )
}

export default ProductCard
