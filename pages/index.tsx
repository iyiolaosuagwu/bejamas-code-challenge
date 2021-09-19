import Image from 'next/image'
import Logo from '../public/logo.svg'
import CartIcon from '../public/shopping-cart.svg'
import SortIcon from '../public/sort_icon.svg'
import MobileFilterIcon from '../public/mobile_filter.svg'
import Xicon from '../public/x_icon.svg'
import CartBox from '../components/CartBox.tsx'
import ProductCard from '../components/ProductCard.tsx'
import { useState, useEffect, useMemo } from 'react'
import Pagination from '../components/Pagination.tsx'
import { db } from "../services/firebase"
import { collection, query, getDocs } from "firebase/firestore"

import { fetchProductData, fetchCartData, addTocart, clearCartState } from "../services/actions"


const Home: React.FunctionComponent = () => {

  const [toggleCart, updateToggleCart] = useState<boolean>(false)
  const [toggleModal, updateToggleModal] = useState<boolean>(false)
  const [loading, updateLoading] = useState<boolean>(false)
  const [cartItems, updateCartItems] = useState<any>([])
  const [featured, updateFeatured] = useState<any>([]);
  const [products, setProduct] = useState<any>([]);
  const [category, updateCategory] = useState<any>(["People", "Food", "Landmarks"]);
  const [selectedOption, updateSelectedOption] = useState('')
  const [activeFilter, setActiveFilter] = useState([]);

  useEffect(() => {

    if (localStorage.getItem("cart")) {
      updateCartItems(JSON.parse(localStorage.getItem('cart')))
    }
    handleFetchProductData()
  }, []);

  // fetch product from database
  const handleFetchProductData = async () => {
    updateLoading(true)
    const response = await fetchProductData()

    if (response && response != null) {
      updateFeatured(response?.find((el: any) => el?.featured == true))

      setProduct(response?.map((el, index) => ({
        ...el,
        id: index
      })))

      updateLoading(false)
    }

    if (!response && response == null) {
      console.log("error", "something went wrong, please check your internet connection")
    }
  }

  // add item to cart
  const addTCart = async (item: any) => {
    const existingItem = cartItems.length > 0 && cartItems.find(el => el.id === item.id)

    if (existingItem) {
      updateCartItems(cartItems)
    } else {

      const payload = {
        name: item?.name,
        price: parseInt(item?.price),
        image: {
          src: item?.image?.src,
          alt: item?.image?.alt,
        },
        id: item.id
      }

      updateCartItems([payload, ...cartItems])
      localStorage.setItem("cart", JSON.stringify([payload, ...cartItems]))

      updateToggleCart(true)
    }
  }

  // toggle modal
  const openModal = () => {
    updateToggleModal(prev => !prev)
  }

  // toggle cart box
  const handleToggleCart = () => {
    updateToggleCart(prev => !prev)
  }

  // clears cart items 
  const clearCartItems = async () => {
    updateCartItems([])
    localStorage.setItem("cart", JSON.stringify([]))
    updateToggleCart(false)
  }

  const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  // calculate total cart item
  const calculateTotal = () => {
    if (cartItems?.length > 0) {
      return addDecimals(cartItems?.reduce((acc, item) => acc + item.price, 0))
    }
  }

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    updateSelectedOption(value)
  };

  const sortPriceByAscending = () => {
    if (products?.length > 0) {
      return products?.sort((a: any, b: any) => b.price - a.price)
    }
  }

  const sortAlphabeticallyByAscending = () => {
    if (products?.length > 0) {
      products?.sort((a: any, b: any) => {
        var textA = a.name.toLowerCase();
        var textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    }
  }

  const filterByCategory = (category: any) => {
    if (products?.length > 0) {
      return products?.filter(itm => itm?.category.toLowerCase() == category.toLowerCase())
    }
  }

  const handleChecked = (text: string) => (event: any) => {
    setActiveFilter((prev) => ({
      ...prev,
      [text]: event.target.checked,
    }));
  };

  const filterByPriceRange = (amount: number) => {
    // if(products?.length > 0) {
    //   products?.filter((item) => {
    //     if(item.price < amount) {
    //       return products
    //     } if else(item.price < amount) {

    //     }
    //   })
    // }
  }

  if (selectedOption === "A - Z") {
    sortAlphabeticallyByAscending()
  }

  if (selectedOption === "Price") {
    sortPriceByAscending()
  }

  const NavbarComponet = ({ toggle, cartItems }) => (
    <div className="navbar">
      <div className="logo">
        <Image
          src={Logo}
        />
      </div>
      <div onClick={toggle} className="cart_icon">
        <Image
          className="logo"
          src={CartIcon}
        />
        {cartItems?.length > 0 && <p className="cart_count">{cartItems?.length}</p>}
      </div>

    </div>
  )

  // displays loading component on data load
  const Loader = () => (
    <div className="loader">
      <Image width={100} src={(require("../public/Spinner-1s-200px.svg"))} />
    </div>
  )

  return (
    <>
      {loading ? <Loader /> : (
        <div className="page_body">
          <NavbarComponet cartItems={cartItems} toggle={handleToggleCart} />
          <div className="featured_post_container">
            {toggleCart && <CartBox cartItems={cartItems} total={calculateTotal()} toggle={handleToggleCart} clearCartItems={clearCartItems} />}
            <div className="flex_title_content">
              <h2 className="title">{featured?.name}</h2>
              <button className="add_to_cart_btn web" onClick={() => addTCart(featured)}>
                add to cart
              </button>
            </div>

            <div
              className="banner"
              style={{ backgroundImage: `url(${featured?.image?.src})` }}
            >
              <div className="tag">
                Photo of the day
          </div>
            </div>

            <button className="add_to_cart_btn mobile" onClick={() => addTCart(featured)}>
              add to cart
        </button>

            <div className="row mt-5">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="about_text">About the {featured?.name}</p>
                <p className="sub_title">{featured?.category}</p>
                <p className="description">
                  {featured?.details?.description}
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="fr">
                  <p className="about_text">People also buy</p>
                </div>
                <div className="also_bought_images_grid">
                  {featured?.details?.recommendations?.map((el: any, index: number) => (
                    <img
                      key={index}
                      src={el.src}
                      className="also_bought_images"
                      height={'100%'}
                      alt={el.alt}
                    />
                  ))}
                </div>
                <div className="details_size">
                  <h4>Deatils</h4>
                  <p>dimmention: {featured?.details?.dimmentions?.width} X {featured?.details?.dimmentions?.height} pixel</p>
                  <p>Size: {featured?.details?.size}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="premium_photo">
            <div>
              <h3>Photography / <span>Premium Photos</span></h3>
            </div>
            <div className="filter_icon" onClick={() => openModal()}>
              <Image src={MobileFilterIcon} />
            </div>
            <div className="flex_sort_by">
              <div className="sort_by">
                <Image src={SortIcon} />
                <span>Sort By</span>
              </div>
              <div>
                <span>
                  {selectedOption}
                </span>
                <select value={selectedOption} onChange={selectChange}>
                  {["Price", "A - Z"].map((el, index) => <option value={el} key={index}>{el}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col-md-3 filter">
                <h3 className="category">Category</h3>
                {category?.map((el: any, index: number) => (
                  <div className="check_list" key={index}>
                    <input
                      type="checkbox"
                      onChange={handleChecked(el)}
                    />
                    <label>{el}</label>
                  </div>
                ))}
                <div className="price_range">
                  <h3 className="category">Price range</h3>
                  {[0, 1, 2].map((el: any, index: number) => (
                    <div className="check_list" key={index}>
                      <input type="checkbox" />
                      <label>people</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-1" />
              <div className="col-md-8">
                <div className="row">
                  {products?.length > 0 ? (
                    <>
                      <Pagination
                        data={products}
                        RenderComponent={ProductCard}
                        pageLimit={4}
                        dataLimit={6}
                        addTCart={addTCart}
                      />
                    </>
                  ) : (
                      <h1>No Posts to display</h1>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`mobile_modal ${toggleModal ? 'show' : ''}`}>
        <div className="mobile_content">
          <div className="mobile_modal_top">
            <div className="close_mobile_modal" onClick={() => openModal()}>
              <Image
                src={Xicon}
              />
            </div>
            <h3 className="filter_text">Filter</h3>
            {category?.map((el: any, index: number) => (
              <div className="check_list" key={index}>
                <input
                  type="checkbox"
                  onChange={handleChecked(el)}
                />
                <label>{el}</label>
              </div>
            ))}

            <div className="price_range">
              <h3 className="filter_text">Price range</h3>
              {[0, 1, 2, 3].map((el: any, index: number) => (
                <div className="check_list" key={index}>
                  <input type="checkbox" />
                  <label>people</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mobile_modal_footer">
            <div className="clear_btn_mobile_clear">
              clear
          </div>
            <div className="clear_btn_mobile_save">
              save
          </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Home