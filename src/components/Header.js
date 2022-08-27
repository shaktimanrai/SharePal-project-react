import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';






function Header ()  {
 
  return (<>

    <AppBar className='bar' >
    
      <Container maxWidth="3000" >
        <Toolbar className='bar' >
          <Container className='bar'>
            
            
          <center>
        <button type="button" class="btn btn-light" >Delivery Date </button>
        &nbsp;&nbsp;
        <input type="date" id="arrive" class="vsjinput" name="arrive" value="<?php echo date('Y-m-d'); ?>"/>
        &nbsp;&nbsp;

         
        &nbsp;&nbsp;      
         <button type="button" class="btn btn-light">Return Date</button>
         &nbsp;&nbsp;
         <input type="date" id="arrive" class="vsjinput" name="arrive" value="<?php echo date('Y-m-d'); ?>"/>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;

        <button type="button" class="btn btn-light">View Prices</button>
        </center>
            
            </Container> 
          
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default Header;
