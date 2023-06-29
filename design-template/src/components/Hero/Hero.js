import React,{useState} from 'react'
import './hero.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
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


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


function Hero() {
 // const initialValues = { academicLvl: "", paperType: "", deadline: "", paperFormat: "", topic: "",instructions:""  };
  //const [formValues, setFormValues] = useState(initialValues);
 /* const [academicLvl, setAcademicLvl] = useState("");
  const [paperType, setPaperType] = useState("");
  const [deadline, setDeadline] = useState("");
  */
  const navigate = useNavigate();
 /*const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
*/
const [credentials, setCredentials] = useState({
  academicLvl: "", paperType: "", deadline: "", paperFormat: "", topic: "",instructions:""
});
  const handleOrder = () => {
    navigate("/orderpage", { state:  credentials});
  };


  return (
    <div className='container'>
      <div className="hero-left">
         <div className="hero-heading">
            <h1>Get Your <span>Papers </span> Done <span>Professionally</span></h1>
          </div>
      <div className="hero-text">
        <p> 
        Don't settle for subpar papers. Trust the professionals at [Website Name] to provide you with exceptional writing services. 
        Get started today and experience the difference of professionally crafted papers that make an impact.
        </p>
      </div>
      <div className="hero-buttons">
        <button className="hero-btn">
          Get Started
        </button>
        <button className='hero-btn2'>
          Learn More
        </button>
      </div>
      <div className="hero-desc">
        <div className="desc-left">
          <h2>WHAT YOU GET</h2>
          <p>Our writers possess the skills to produce well-researched, 
            original content.
</p>
        </div>
        <div className="desc-right">
          <h2>WHAT YOU GET</h2>
          <p>Our commitment ensures that you can rely on us for all your writing needs.</p>
        </div>
      </div>
      </div>
      <div className="hero-right">




<div className="box">
    <Box
    className='hero-form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Make An Order</h1>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Academic Level"
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          helperText="Please select your currency"
          name="academicLvl"
        >
          {academicLvls.map((option) => (
            <MenuItem key={option.label}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          placeholder='papertype'
          select
          label="Type of Paper"
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          helperText="Please select your type of paper"
          name="paperType"
        >
          {paperTypes.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Deadline"
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          helperText="Please select your deadline"
          name="deadline"
        >
          {deadlines.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      
      <button onClick={handleOrder} className='form-submit'>Place An Order</button>
      
    </Box>
</div>
      </div>
    </div>
  )
}

export default Hero