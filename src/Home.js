import React from 'react';
import CookieIcon from '@mui/icons-material/Cookie';
import 'animate.css';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Data } from './Data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';

export default function Home(props) {

    var totalSum = 0;

    var displayTotal = () => {
        props.cartArray.map((item) => {
            totalSum = totalSum + item.productTotal;
        })
        return totalSum;
    }

    return (
        <div className='homeContainer' onClick={(event) => props.closeSearch(event)}>

            {/* <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div> */}

            <div className='mainBanner'>

                <div className='navbarContainer'>

                    <div className='logoDiv'>

                        <img src="/logo2.png" className='logoImage' alt="" />
                        <p className='logoTitle'><i>Sweet</i> Tooth</p>

                    </div>

                    <div className='mainNavbar'>

                        <p>Products</p>

                        <div className='searchDiv'>

                            <input type="text" id="searchInput" placeholder='Search Dessert' onChange={(event) => props.searchHandler(event)} list="sweetSuggestions" />
                            <button className='searchBtn'><i class="fa-solid fa-magnifying-glass"></i></button>

                        </div>

                    </div>

                </div>

                <div className='suggestionsDiv' id="suggestionsDivID">

                    {props.searchResults.map((item) => {
                        var anchorID = "#sweet" + item.id;
                        return (
                            <a href={anchorID}>
                                <div className='suggestionDiv'>
                                    <div className='suggestionsDivOne'>
                                        <p className='suggestionName' key={item.id}>{item.name}</p>
                                        <p className='suggestionPrice'>{item.price}</p>
                                    </div>

                                    <div className='suggestionsDivTwo'>
                                        <img src={item.image} alt="" />
                                    </div>

                                </div>
                            </a>
                        )
                    })}

                </div>

                <div className='cloudDiv'>

                    <div className='cloudHalfOne'>

                        <img src="/pinkCloud3.png" alt="" className='cloudImage' />
                        {/* <button className='viewOffersBtn'>View Our Offers</button> */}
                        <p className='tagline'>You choose, we serve!<CookieIcon sx={{ fontSize: "4vw" }} /></p>

                    </div>

                    <div className='cloudHalfTwo'>

                        <img src="/cakeVector.png" alt="" />

                    </div>

                </div>

                <div id="carouselExampleControls" className="carousel slide carouselContainer" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/caro2.jpg" class="d-block w-100 carouselImage" alt="..." />
                            <div className='slideTextDiv'>
                                <p className='slideHeading'>Birthday Special</p>
                                <p className='slideSubheading'>40% OFF on Birthday Cakes</p>
                                <a href="#renderProductsID" className='carouselLink'>
                                    <button className='slideButton animate__animated animate__flash'>Order Now<CookieIcon sx={{ fontSize: "4vw" }} /></button>
                                </a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/temp2.jpg" class="d-block w-100 carouselImage" alt="..." />
                            <div className='slideTextDiv'>
                                <p className='slideHeading'>Doughnut Fridays</p>
                                <p className='slideSubheading'>Get 50% OFF on our Donuts</p>
                                <a href="#renderProductsID" className='carouselLink'>
                                    <button className='slideButton animate__animated animate__flash'>Order Now<CookieIcon sx={{ fontSize: "4vw" }} /></button>
                                </a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/temp1.jpg" class="d-block w-100 carouselImage" alt="..." />
                            <div className='slideTextDiv'>
                                <p className='slideHeading'>Daily Discounts</p>
                                <p className='slideSubheading'>20% on Purchase of Rs.500</p>
                                <a href="#renderProductsID" className='carouselLink'>
                                    <button className='slideButton animate__animated animate__flash'>Order Now<CookieIcon sx={{ fontSize: "4vw" }} /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div className='offersContainer'>

                    <div className='offerCards'>

                        <div className='offerHeader'>
                            <p>Birthday Special <i class="fa-solid fa-cake-candles"></i></p>
                        </div>

                        <div className='offerBody'>
                            <p>Get 40-50% OFF on Birthday Cake Orders</p>
                        </div>

                    </div>

                    <div className='offerCards'>

                        <div className='offerHeader'>
                            <p>Daily Discounts <i class="fa-solid fa-tags"></i></p>
                        </div>

                        <div className='offerBody'>
                            <p>Get 20% on a minimum Purchase of Rs.500</p>
                        </div>

                    </div>

                    <div className='offerCards'>

                        <div className='offerHeader'>
                            <p>Donut Fridays <i class="fa-solid fa-bowl-food"></i></p>
                        </div>

                        <div className='offerBody'>
                            <p>Get minimum 50% OFF on all Donuts</p>
                        </div>

                    </div>

                </div>



                <div className='categoryCardsDiv' id="categoryCardsDivID">

                    <div className='categoriesDivHeader'>

                        <p className='categoryMainHeading'>Categories</p>
                        <p className='categorySubHeading'>'Sweet Tooth' Provides a vast range of sweets in it's catalogue</p>

                    </div>

                    <div className='allCategoriesDiv'>

                        {Data.categories.map((item) => {
                            if (props.renderProducts.includes(item.name)) {
                                var categoryLink = "#category" + item.name;
                                return (

                                    <div className='categoryDiv'>
                                        <a href={categoryLink} className='categoryLink'>
                                            <img src={item.image} alt="" className='categoryImage' />
                                        </a>
                                        <p className='categoryTitle'>{item.name}</p>

                                    </div>
                                )
                            }

                        })}

                    </div>

                </div>


                <div className='renderProductsDiv' id="renderProductsID">

                    <div className='renderHeader'>

                        <p className='renderMainHeading'>Catalogue</p>
                        <p className='renderSubheading'>We provide the finest quality at the most reasonable price</p>

                    </div>

                    {props.renderProducts.map((item, index) => {
                        var categoryAnchor = "category" + item;
                        return (<>
                            <div className='eachCategoryDiv' id={categoryAnchor}>

                                <div className='categoryHeader' key={index}>
                                    <p>{item}</p>
                                </div>

                                <div className='eachCategoryProducts'>

                                    {props.dataHook.map((sweet) => {
                                        if (sweet.category === item) {
                                            var productID = "sweet" + sweet.id;
                                            return (
                                                <div className='eachProductDiv' id={productID}>
                                                    <img src={sweet.image} alt="" className='productImage' />
                                                    <p className='productName'>{sweet.name}</p>
                                                    <div className='priceDiv'>
                                                        <p className='productMRP'>Rs.<strike>{sweet.price + 100}</strike></p>
                                                        <p className='productPrice'>Rs.{sweet.price}</p>
                                                    </div>
                                                    {/* <p className='ingredientsHeading'>Ingredients</p>
                                                    <div className='ingredientsDiv'>
                                                        {sweet.ingredients.map((ingredient) => {
                                                            return (
                                                                <p>{ingredient}</p>
                                                            )
                                                        })}
                                                    </div> */}
                                                    <div className='addToCartDiv'>
                                                        <button className='cartBtn' id={sweet.id} onClick={(event) => props.addToCart(event)}>Add To Cart <i class="fa-solid fa-bag-shopping"></i></button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}

                                </div>

                            </div>
                        </>
                        )
                    })}

                </div>



            </div>

            <div className='drawerBar'>

                <p className='drawerBarBtn' onClick={(event) => props.openDrawer(event)}><i class="fa-solid fa-bars"></i></p>

                <p className='drawerCartBtn' onClick={(event) => props.openBottomDrawer(event)}><Badge badgeContent={props.cartArray.length} color="primary">
                    <ShoppingCartIcon sx={{ fontSize: "2.5vw" }} />
                </Badge></p>

            </div>

            <SwipeableDrawer open={props.drawerFlag} anchor='right' onClose={() => props.closeDrawer()} PaperProps={{ sx: { width: { xs: "50%", md: "30%" } } }}>

                <div className='drawerContainer'>

                    <div className='drawerHeader'>

                        <p>Find Your Dessert<i class="fa-solid fa-cookie"></i></p>

                    </div>

                    <div className='checkboxDiv'>

                        <div className='checkCol'>
                            {(props.renderProducts.includes('Cakes')) ? <input type="checkbox" id="0" name="cakes" value="Cakes" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="0" name="cakes" value="Cakes" onChange={(event) => props.checkEvent(event)} />}
                            <label for="cakes"> Cakes</label><br />

                            {(props.renderProducts.includes('Cookies')) ? <input type="checkbox" id="1" name="cookies" value="Cookies" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="1" name="cookies" value="Cookies" onChange={(event) => props.checkEvent(event)} />}
                            <label for="cookies"> Cookies</label><br />


                            {(props.renderProducts.includes('Doughnuts')) ? <input type="checkbox" id="2" name="donuts" value="Doughnuts" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="2" name="donuts" value="Doughnuts" onChange={(event) => props.checkEvent(event)} />}
                            <label for="donuts"> Doughnuts</label><br />
                        </div>

                        <div className='checkCol'>

                            {(props.renderProducts.includes('Truffles')) ? <input type="checkbox" id="3" name="truffle" value="Truffles" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="3" name="truffle" value="Truffles" onChange={(event) => props.checkEvent(event)} />}
                            <label for="truffle"> Truffle</label><br />

                            {(props.renderProducts.includes('Pancakes')) ? <input type="checkbox" id="4" name="pancakes" value="Pancakes" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="4" name="pancakes" value="Pancakes" onChange={(event) => props.checkEvent(event)} />}
                            <label for="cookies"> Pancakes</label><br />

                            {(props.renderProducts.includes('Icecreams')) ? <input type="checkbox" id="5" name="icecream" value="Icecreams" onChange={(event) => props.checkEvent(event)} checked /> : <input type="checkbox" id="5" name="icecream" value="Icecreams" onChange={(event) => props.checkEvent(event)} />}
                            <label for="icecream"> Icecream</label><br />
                        </div>

                    </div>

                    <div className='sortingDiv'>

                        <p id="sortBy">Sort From</p>

                        <select id="sortID" onChange={(event) => props.sortEvent(event)}>

                            {(props.sortBy === 'default') ? <option value="default" selected>-select-</option> : <option value="default">-select-</option>}
                            {(props.sortBy === 'Low To High') ? <option value="Low To High" selected>Low To High</option> : <option value="Low To High">Low To High</option>}
                            {(props.sortBy === 'High To Low') ? <option value="High To Low" selected>High To Low</option> : <option value="High To Low">High To Low</option>}

                        </select>

                    </div>

                </div>

            </SwipeableDrawer>


            <SwipeableDrawer open={props.bottomDrawerFlag} anchor='bottom' onClose={() => props.closeBottomDrawer()} className='bottomDrawerContainer' PaperProps={{ sx: { width: { xs: "90%", sm: "80%", md: "60%" }, margin: "auto", height: "fit-content", borderRadius: "12px 12px 0px 0px" } }}>

                <div className='drawerCartDiv'>

                    <div className='drawerCartHeader'>

                        <div className='drawerCartHeaderOne'>

                            <p className='drawerCartHeading'>
                                Your Cart <i class="fa-solid fa-cart-arrow-down"></i>
                            </p>
                            <p className='drawerCartSubheading'>
                                (Review Your Cart Carefully Before Checking Out)
                            </p>

                        </div>

                        <div className='drawerCartHeaderTwo'>

                            <div className='cartCheckoutBtnDiv'>

                                {(props.cartArray.length === 0) ? '' : <Link to={{ pathname: "/checkout" }} className='checkoutLink'><button className='checkoutBtn'>Proceed To Checkout <i class="fa-solid fa-right-to-bracket"></i></button></Link>}
                            </div>

                        </div>

                    </div>

                    <div className='drawerCartMain'>

                        {(props.cartArray.length === 0) ?
                            <><img src="/emptyCart.png" className='emptyCartImage' alt="" /><p className='emptyCartMsg'>(Your Cart Is Empty)</p></> : <table className='cartTable'>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>

                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Delete</th>
                                </tr>

                                {(props.cartArray.map((item3, index3) => {
                                    return (
                                        <tr>
                                            <td className='cartImage'><img src={item3.image} alt="" /></td>
                                            <td className='cartDescription'>
                                                <p className='cartName'>{item3.name}</p>
                                                <p className='cartCategory'>{item3.category}</p>
                                            </td>
                                            <td className='cartPrice'>{item3.price}</td>
                                            <td className='cartQuant'>
                                                <div className='quantFlex'>
                                                    <p className='quantBtn minusBtn' id={index3} onClick={(event) => props.changeQuant(event, "sub")}><i class="fa-solid fa-minus"></i></p>
                                                    <p className='quantNum'>{item3.quant}</p>
                                                    <p className='quantBtn plusBtn' id={index3} onClick={(event) => props.changeQuant(event, "add")}><i class="fa-solid fa-plus"></i></p>

                                                </div>
                                            </td>
                                            <td className='cartTotal'>{item3.productTotal}</td>
                                            <td className='cartDelete' id={index3} aria-describedby={props.id} variant="contained" onClick={(event) => props.openPopover(event, index3)}><i class="fa-solid fa-trash deleteIcon"></i></td>
                                        </tr>
                                    )
                                }))}

                                <tr className='totalTr'><td></td><td className='emptyCartTd'><button className='emptyCartBtn' onClick={(event) => props.emptyCart(event)}>Empty Cart <i class="fa-solid fa-trash-can"></i></button></td><td></td><td>Total</td><td>{displayTotal()}</td><td></td></tr>

                            </table>}

                        <Popover
                            id={props.id}
                            open={props.open}
                            anchorEl={props.anchorEl}
                            onClose={props.handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}>
                            <div className='popDiv'>

                                <p className='popMsg'>Are you sure you want to delete <u>{props.cartArray[props.deleteID]?.name}</u>?</p>
                                <div className='popBtnDiv'>

                                    <button className='popYes' onClick={(event) => props.deleteFromCart(event)}>Delete</button>
                                    <button className='popNo' onClick={(event) => props.handleClose(event)}>Cancel</button>

                                </div>

                            </div>
                        </Popover>

                    </div>

                </div>

            </SwipeableDrawer>


            {/* <button className='scrollBtn' id="scrollBtnID" onClick={(event) => props.scrollClicked(event)}><i class="fa-solid fa-up-long"></i></button> */}

            <button className='secondCartBtn' onClick={(event) => props.openBottomDrawer(event)}>

                <Badge badgeContent={props.cartArray.length} color="primary">
                    <ShoppingCartIcon />
                </Badge>

            </button>

        </div>
    )
}

