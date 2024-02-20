import React from 'react'
import'./carosol.css'
import MainHome from './MainHome';
import { Button, Grid, Typography } from '@mui/material';
import { Image } from 'react-bootstrap';
import imagebaner from "../assets/banner-img-1.png"
import imagebanner2 from "../assets/banner-img-2.png"
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

 function Carosol() {
  return (
    <Grid  className='mainHomeContainer' sx={{position:"relative", marginBottom:{md:0, xs:"200px"}}}>
    <Grid className='gridcontainerBox' container sx={{display:{md:"flex", xs:"none"}}} >
    <Grid item className='imageleft' sx={{alignSelf:"center"}}>
      <Image alt='img' src={imagebaner} width={200} height={300} />
    </Grid>
    <Grid item className='imgeRight'>
    <Image alt='img' src={imagebanner2} />
    </Grid>
    </Grid>
    <Grid item xs={12} sx={{display:"flex",alignItems:" center", justifyContent: "center",flexDirection:" column", position:"absolute", top:"30%", left:{md:"25%", xs:"0"} }}>
      <Typography sx={{fontSize:{md:"40px", xs:"25px"}, fontWeight:"bold", }}> ORDER FOOD ONLINE IN EGYPT</Typography>
      <Grid className='locationContainer'>
      <Autocomplete
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose Your Location" />}
    />
    <Button className='locationBtn' sx={{backgroundColor: "#ff5a00" ,color:"#fff",margin:{md:"0 0 0 20px", xs:"30px 0 30px 10px"}}}  >
    Choose Location And Continue
    </Button>
      </Grid>
    </Grid>
    </Grid>
  )
}

const top100Films = [
  { title: 'Cairo', year: 1994 },
  { title: 'Giza', year: 1972 },
  { title: 'Alex', year: 1974 },
  { title: 'Aswan', year: 2008 },
  { title: 'Luxor', year: 1957 },
  ];

<MainHome/>
export default Carosol;
