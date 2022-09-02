import React from 'react';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Checkout(props) {
    return (
        <div className='checkoutPageContainer'>

            <div className='confirmModalDiv' id="confirmModalDivID">

                <p className='closeModalDiv'><button className='closeModalBtn' onClick={(event) => props.closeModal(event)}><i class="fa-solid fa-xmark"></i></button></p>
                <p className='confirmModalGreet'>Congratulations, {props.userDetails?.firstName}!</p>
                <p className='confirmModalMsg'>Your Order Has Been Placed and will be Delivered Shortly</p>

                <div className='confirmModalFooter'>
                    <div className='confirmModalAddressDiv'>
                        <p className='confirmModalAddress'>Address : {props.userDetails?.address}</p>
                        <p className='confirmModalAddress'>City : {props.userDetails?.city}</p>
                        <p className='confirmModalAddress'>Pincode : {props.userDetails?.pincode}</p>
                    </div>
                    <div className='confirmModalFooterImage'>
                        <img src="/cakeVector.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='navbarContainer'>

                <Link to={{ pathname: "/" }} className='checkoutLink'>
                    <div className='logoDivTwo'>

                        <img src="/logo2.png" className='logoImage' alt="" />
                        <p className='logoTitle'><i>Sweet</i> Tooth</p>

                    </div>
                </Link>

                <div className='mainNavbar'>

                    {/* <p>Products</p>
                    <p>Home</p>

                    <div className='searchDiv'>

                        <input type="text" id="searchInput" placeholder='Search Dessert' />
                        <button className='searchBtn'><i class="fa-solid fa-magnifying-glass"></i></button>

                    </div> */}

                </div>

            </div>

            <div className='checkoutMainContainer' id="checkoutMainContainerID">

                <div className='checkoutFormDiv'>

                    <div className='mainFormDiv'>

                        <div className='formHeader'>
                            <p className='formHeading'>Shipping Details <i class="fa-solid fa-truck"></i></p>
                        </div>

                        <div className='doubleInput'>
                            <TextField id="firstNameInput" label="First Name" variant="outlined" sx={{ margin: "0% 2%", width: "46%" }} />
                            <TextField id="lastNameInput" label="Last Name" variant="outlined" sx={{ margin: "0% 2%", width: "46%" }} />
                        </div>

                        <div className='singleInput'>

                            <TextField id="addressInput" label="Address" variant="outlined" sx={{ margin: "5% 2%", width: "96%", fontSize: "2vw" }} />

                        </div>

                        <div className='doubleInput'>
                            <TextField id="cityInput" label="City" variant="outlined" sx={{ margin: "0% 2%", width: "66%" }} />
                            <TextField id="pincodeInput" label="Pincode" variant="outlined" sx={{ margin: "0% 2%", width: "26%" }} />
                        </div>

                        <div className='singleInput'>

                            <TextField id="outlined-basic" label="E-mail" variant="outlined" sx={{ margin: "5% 2%", width: "96%" }} />

                        </div>

                        <div className='singleInput'>

                            <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{ margin: "0% 2%", width: "96%" }} />

                        </div>

                        <div className='finalBtnDiv'>

                            <button className='finalBtn' onClick={(event) => props.placeOrder(event)}>Place Order</button>

                        </div>

                    </div>

                </div>

                <div className='checkoutCartDiv'>

                    <div className='mainCheckoutCart'>

                        <div className='checkoutCartHeader'>
                            <p className='checkoutCartHeading'>
                                Here's Your Cart
                            </p>
                        </div>

                        <div className='checkoutCartBody'>

                            {props.cartArray.map((item) => {
                                return (
                                    <div className='checkoutCartProduct'>

                                        <div className='checkoutProductImageDiv'>
                                            <img src={item.image} alt="" />
                                        </div>

                                        <div className='checkoutProductDetailsDiv'>

                                            <div className='productDetailsDivOne'>
                                                <p className='checkoutProductName'><b>{item.name}</b></p>
                                                <p className='checkoutProductCategory'>Category: <b>{item.category}</b></p>
                                                <p className='checkoutProductQuant'>Quantity: <b>{item.quant}</b></p>
                                            </div>

                                            <div className='productDetailsDivTwo'>
                                                <p className='checkoutProductPrice'>Price: <b>Rs.{item.price}</b></p>
                                                <p className='checkoutProductTotal'>Total: <b>Rs.{item.productTotal}</b></p>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
