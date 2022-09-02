import React from 'react';
// import { Icecream } from '@mui/icons-material';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { Data } from './Data';
import Checkout from './Checkout';
// import Popover from '@mui/material/Popover';


function App() {

  const [dataHook, setDataHook] = useState(Data.desserts);

  const [drawerFlag, setDrawerFlag] = useState(false);

  const [renderProducts, setRenderProducts] = useState(['Cakes', 'Cookies', 'Doughnuts', 'Truffles', 'Pancakes', 'Icecreams']);

  const [sortBy, setSortBy] = useState('default');

  const [searchResults, setSearchResults] = useState([]);

  const [cartArray, setCartArray] = useState([]);

  const [bottomDrawerFlag, setBottomDrawerFlag] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [deleteID, setDeleteID] = useState(-1);

  const [userDetails, setUserDetails] = useState();

  var openPopover = (event, index3) => {
    setAnchorEl(event.currentTarget);
    setDeleteID(index3);
  }

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  var openDrawer = (event) => {
    setDrawerFlag(true);
  }

  var closeDrawer = (event) => {
    setDrawerFlag(false)
  }

  var checkEvent = (event) => {
    var tempArray = [];
    if (renderProducts.includes(event.currentTarget.value)) {
      renderProducts.map((item, index) => {
        if (item === event.currentTarget.value) {
          tempArray = renderProducts;
          tempArray.splice(index, 1);
          setRenderProducts([...tempArray]);
        }
      })
    }
    else {
      var tempIndex = event.currentTarget.id;
      var tempArray2 = renderProducts;
      tempArray2.splice(tempIndex, 0, event.currentTarget.value);
      setRenderProducts([...tempArray2]);
    }

  }


  var sortEvent = (event) => {

    var tempArray = dataHook;
    if (event.currentTarget.value === 'Low To High') {
      setSortBy('Low To High');
      tempArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setDataHook([...tempArray]);
    }
    else if (event.currentTarget.value === 'High To Low') {
      setSortBy('High To Low');
      tempArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setDataHook([...tempArray]);
    }
  }

  var searchHandler = (event) => {
    var substringCheck = '';
    var searchText = event.currentTarget.value;
    var matchedItems = [];

    if (searchText !== '') {
      dataHook.map((item, index) => {
        substringCheck = item.name.slice(0, searchText.length);
        if (substringCheck.toLocaleLowerCase() === searchText.toLocaleLowerCase()) {
          matchedItems.push(item);
        }
      })
      setSearchResults([...matchedItems]);
      document.getElementById("suggestionsDivID").style.display = "block";
    }
    else {
      document.getElementById("suggestionsDivID").style.display = "none";
      setSearchResults([]);
    }
  }

  var closeSearch = (event) => {
    document.getElementById("suggestionsDivID").style.display = "none";
    setSearchResults([]);
  }

  var openBottomDrawer = (event) => {
    setBottomDrawerFlag(true);
  }

  var closeBottomDrawer = (event) => {
    setBottomDrawerFlag(false);
  }

  var addToCart = (event) => {
    var flag = 0;
    var clickedID = event.currentTarget.id;

    dataHook.map((item) => {
      if (item.id == clickedID) {
        // checking if the product is already present inside the array 

        cartArray.map((item2, index) => {
          if (item2.id == clickedID) {
            var tempArray = cartArray;
            tempArray[index].quant++;
            tempArray[index].productTotal = tempArray[index].quant * tempArray[index].price;

            setCartArray([...tempArray]);
            flag = 1;
          }
        })

        // pushing the product into array if it is not present there 

        if (flag == 0) {
          setCartArray(prevArray => [...prevArray, {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            ingredients: item.ingredients,
            category: item.category,
            quant: 1,
            productTotal: 1 * item.price
          }]);
        }
      }
    })
  }


  var changeQuant = (event, op) => {
    var cartID = event.currentTarget.id;

    var tempArray = cartArray;
    if (op === 'add') {
      tempArray[cartID].quant++;
      tempArray[cartID].productTotal = tempArray[cartID].quant * tempArray[cartID].price;
      setCartArray([...tempArray]);
    }

    else if (op === 'sub') {
      // removing the product if the quantity is decremented to zero 

      if (cartArray[cartID].quant === 1) {
        tempArray.splice(cartID, 1);
        setCartArray([...tempArray]);
      }

      // removing one quantity at a time on decrement click 

      else {
        tempArray[cartID].quant--;
        tempArray[cartID].productTotal = tempArray[cartID].quant * tempArray[cartID].price;
        setCartArray([...tempArray]);
      }
    }
  }


  var deleteFromCart = (event) => {
    var tempArray = cartArray;
    tempArray.splice(deleteID, 1);
    setCartArray([...tempArray]);

    setAnchorEl(null);
  }

  var emptyCart = (event) => {
    setCartArray([]);
  }


  var scrollClicked = (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  var placeOrder = (event) => {
    var fname = document.getElementById("firstNameInput").value;
    var lname = document.getElementById("lastNameInput").value;
    var address = document.getElementById("addressInput").value;
    var city = document.getElementById("cityInput").value;
    var pincode = document.getElementById("pincodeInput").value;
    setUserDetails({ firstName: fname, lastName: lname, address: address, city: city, pincode: pincode });
    document.getElementById("confirmModalDivID").style.display = "block";
    document.getElementById("confirmModalDivID").style.animation = "openAnimation 1s forwards";
    document.getElementById("checkoutMainContainerID").style.opacity = "70%";
    setCartArray([]);
    setBottomDrawerFlag(false);
  }

  var closeModal = (event) => {
    document.getElementById("confirmModalDivID").style.display = "none";
    document.getElementById("checkoutMainContainerID").style.opacity = "100%";
  }





  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home openDrawer={openDrawer} closeDrawer={closeDrawer} drawerFlag={drawerFlag} renderProducts={renderProducts} checkEvent={checkEvent} dataHook={dataHook} sortEvent={sortEvent} sortBy={sortBy} searchHandler={searchHandler} searchResults={searchResults} closeSearch={closeSearch} cartArray={cartArray} bottomDrawerFlag={bottomDrawerFlag} openBottomDrawer={openBottomDrawer} closeBottomDrawer={closeBottomDrawer} addToCart={addToCart} changeQuant={changeQuant} deleteFromCart={deleteFromCart} openPopover={openPopover} deleteID={deleteID} anchorEl={anchorEl} open={open} id={id} handleClose={handleClose} emptyCart={emptyCart} scrollClicked={scrollClicked} />} />

        <Route path="/checkout" element={<Checkout cartArray={cartArray} placeOrder={placeOrder} userDetails={userDetails} closeModal={closeModal} />} />

      </Routes>

    </div>
  );
}

export default App;
