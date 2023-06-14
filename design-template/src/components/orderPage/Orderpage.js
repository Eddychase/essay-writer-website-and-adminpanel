import * as React from 'react';
import { useState,useContext } from "react"
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import './orderpage.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { OrderContext } from '../../context/OrderContext';
import { useNavigate } from "react-router-dom";






const academicLvls = [
  {
    value: 'High School',
    label: 'High School',
  },
  {
    value: 'Undergrad. (yrs 1-2)',
    label: 'Undergrad. (yrs 1-2)',
  },
  {
    value: 'Undergrad. (yrs 3-4)',
    label: 'Undergrad. (yrs 3-4)',
  },
  {
    value: 'Masters',
    label: 'Masters',
  },
  {
    value: 'PhD',
    label: 'PhD',
  },
];
const paperTypes = [
  {
    value:"Admission Essay",
    label:"Admission Essay",
  },
  {
    value:"Annotated Bibliograohy",
    label:"Annotated Bibliograohy",
  },
  {
    value:"Argumentative",
    label:"Argumentative Essay",
  },
  {
    value:"Analysis ",
    label:"Analysis (any type)",
  },
  {
    value:"Articles",
    label:"Article",
  },
  {
    value:"Article review ",
    label:"Article review",
  },
  {
    value:"Blog post",
    label:"Blog post",
  },
  {
    value:"Book/Movie Review",
    label:"Book/Movie Review",
  },
  {
    value:"Business Plan ",
    label:"Business Plan",
  },
  {
    value:"Capstone Project",
    label:"Capstone Project",
  },
  {
    value:"Case Study",
    label:"Case Study",
  },
  {
    value:"Coursework",
    label:"Coursework",
  },
  {
    value:"Creative Writing ",
    label:"Creative Writing",
  },
  {
    value:"Critical Thinking",
    label:"Critical Thinking",
  },
  {
    value:"Dissertation/ Dissertation ",
    label:"Dissertation/ Dissertation Chapter",
  },
  {
    value:"Journal Article",
    label:"Journal Article",
  },
  {
    value:"Lab Report",
    label:"Lab Report",
  },
  {
    value:"Literature Analysis/ Review",
    label:"Literature Analysis/ Review",
  }
]
const deadlines = [
  {
    value:"4",
    label:"4hrs",
  },
  {
    value:"8",
    label:"8hrs",
  },
  {
    value:"12",
    label:"12hrs",
  },
  {
    value:"24",
    label:"24hrs",
  },
  {
    value:"48",
    label:"2 days",
  },
  {
    value:"72",
    label:"3 days",
  },
  {
    value:"120",
    label:"5 days",
  },
  {
    value:"168",
    label:"7 days",
  },
  {
    value:"336",
    label:"14 days",
  },
]

const paperFormats = [
  {
    value:"APA",
    label:"APA",
  },
  {
    value:"Chicago/Turabian",
    label:"Chicago/Turabian",
  },
  {
    value:"MLA",
    label:"MLA",
  },
  {
    value:"Not Applicable",
    label:"Not Applicable",
  },
  {
    value:"Other",
    label:"Other",
  }
]





export default function Orderpage() {
const [show, setShow] = useState(false);
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);
 const location = useLocation();
 const [topic, setTopic] = useState('');
  const [paperFormat, setPaperFormat] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(0);
  const [academicLvl, setAcademicLvl] = useState('');
  const [paperType, setPaperType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const order = {
      topic,
      paperFormat,
      deadline,
      pages,
      academicLvl,
      price: 0 // You may need to calculate the price on the server
    };
    try {
      const response = await fetch('http://localhost:8800/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set the content type of the request body
        },
        body: JSON.stringify(order)
      });

      const data = await response.json();

      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const { loading, error, dispatch } = useContext(OrderContext);
  const navigate = useNavigate()

  const handleIncrement = () => {
    setPages((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setPages((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };


  const calculatePrice = () => {
    const pricePerPage = deadline >= 24 ? 15 : 20;
    return pages * pricePerPage;
  };

  /*const handleOrder = async (e) => {
    e.preventDefault();

    // Get the authentication token from the client's browser storage
  const token = localStorage.getItem("authToken");

  // Check if the client is authenticated
  if (!token) {
    // If the client is not authenticated, redirect to the login page
    navigate("/login");
    return;
  }

  // Set the authentication token in the request headers
  const headers = {
    Authorization: `Bearer ${token}`,
  };
    try {
      
      const res = await axios.post(
        "http://localhost:8800/api/orders",
        credentials,
      )
      console.log('Response:', res);
      dispatch({ type: "ORDER_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      console.log('Error:', err);
      dispatch({ type: "ORDER_FAILURE", payload: err.response.data });
    }
  };
  */


 // creates a paypal order
 const createOrder = (data, actions, item, quantity) => {
  const price = calculatePrice(item, quantity);
   return actions.order
     .create({
       purchase_units: [
         {
           description: "Sunflower",
           amount: {
            currency: "USD",
            value: price // Assign the return value of calculatePrice to amount.value
          },
         },
       ],
       // not needed if a shipping address is actually needed
       application_context: {
         shipping_preference: "NO_SHIPPING",
       },
     })
     .then((orderID) => {
       setOrderID(orderID);
       return orderID;
     });
 };
 
 // check Approval
 const onApprove = (data, actions) => {
   return actions.order.capture().then(function (details) {
     const { payer } = details;
     setSuccess(true);
   });
 };
 //capture likely error
 const onError = (data, actions) => {
   setErrorMessage("An Error occured with your payment ");
 };

 
  return (
    <PayPalScriptProvider
     options={{
       "client-id":"AURrorOwTRGCW5jRxi6c6CzKkycQt4MxEYRqMGj3gubtP8U0F44QNiS_lPruxtE_Hog1ZvXLpziwNHPx",
     }}
   >
    <div className='order'>
      <div className='orderContainer'>
        <div className='checkoutTitle'>
          <h1>Continue Your Order</h1>
          <h2>It’s fast, secure, and confidential</h2>
        </div>

        <div className="select-form">
      <h1 className='form-headings'>Paper Format</h1>
      <Box
      component="form"
      className='firstBox'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField
          id="paperFormat"
          select
          label={paperFormat}
          value={paperFormat}
          onChange={(e) =>setPaperFormat(e.target.value)}
          helperText="Please select your paper format"
          name="paperFormat"
          sx={{ m: 1, minWidth: 200 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {paperFormats.map((option) => (
            <MenuItem key={option.label}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>

      </Box>
      </div>

      <div className="select-form">
        <h1 className='form-headings'>Academic Level</h1>
        <Box
      component="form"
      className='firstBox'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="academicLvl"
          select
          label={academicLvl}
          value={academicLvl}
          onChange={(e) => setAcademicLvl(e.target.value)}
          helperText="Please select your academic level"
          name="academicLvl"
          sx={{ m: 1, minWidth: 200 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {academicLvls.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      </Box>
      </div>

      <div className="select-form">
        <h1 className='form-headings'> Paper Type</h1>
        <Box
        className='firstBox'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="paperType"
          select
          label={paperType}
          value={paperType}
          onChange={(e) => setPaperType(e.target.value)}
          helperText="Please select your paper type"
          name="paperType"
          sx={{ m: 1, minWidth: 200 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {paperTypes.map((option) => (
            <MenuItem key={option.label}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      </Box>
      </div>

      <div className="select-form">
        <h1 className='form-headings'>Deadline</h1>
      <Box
      component="form"
      className='firstBox'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="deadline"
          select
          label={deadline}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          helperText="Please select your deadline"
          name="deadline"
          sx={{ m: 1, minWidth: 200 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {deadlines.map((option) => (
            <MenuItem key={option.label}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      </Box>
      </div> 

      <div className='select-form counter'>
        <h1 className='form-headings pageCount'>Page count:</h1>
        <div className='firstBox counterDisplay'>
        <button className='counter-button' onClick={handleDecrement}>-</button>
        <span className='counter-value'>{pages} Pages</span>
        <button className='counter-button' onClick={handleIncrement}>+</button>
        </div>
      </div>
      
      
        <div className="select-form">
        <h1 className='form-headings'> Topic</h1>
        <Box
        className='firstBox'
      sx={{
        width: 350,
        maxWidth: '60%',
      }}
    >
      <TextField 
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      fullWidth label="topic" 
      id="topic" />
    </Box>
    </div>
        
    <button onClick={handleSubmit} className='form-signin'>SEND ORDER</button>
      
    </div>
    <div className="price-card">
      <div className="checkout-card">
        <div className="first-details">
          <h3>{academicLvl}</h3>
          <h3 >{deadline} hours</h3>
          <h3>{paperType}</h3>
          <h3>{topic}</h3>
          <h3>{calculatePrice()}$</h3>
          
        </div>
        
        <button className="total-btn" type="submit" onClick={() => setShow(true)}>
        Safe Checkout
        </button>
        {show ? (
         <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
       ) : null}
        
        
      </div>
      </div>
      
    </div>
    </PayPalScriptProvider>
  );
}