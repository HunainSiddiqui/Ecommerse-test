import React from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
const marks = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 500,
    label: '500$',
  },
  
  {
    value: 1000,
    label: '1000$',
  },
];

function valuetext(value) {
  return `${value + "$"}°$`;
}


const FilterPrice = (props) => {
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    
    setValue(newValue);
    props.onValueChange(newValue);
  };
  return (
    <div className="card mb-3" >
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPrice"
        aria-expanded="true"
        aria-controls="filterPrice"
        style={{background:"#8597ff"}}
      >
        Price
      </div>
    
       
  
        <Box component="span" sx={{ p:2, width: 150 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={1000}></Slider>
    </Box>
       
       
      
    </div>
  );
};

export default FilterPrice;
