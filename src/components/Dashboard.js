import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ElderlyIcon from '@mui/icons-material/Elderly';
import TwoWheelerTwoToneIcon from '@mui/icons-material/TwoWheelerTwoTone';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import GoProCamera from './GoProCamera';

//import { BrowserRouter, Routes, Route } from "react-router-dom";





// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (<>
    


    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function Dashboard() {
  const [open, setOpen] = React.useState(true);
 
  const toggleDrawer = () => {
    setOpen(!open);
  };

 
    
  

  return (


    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar position="absolute" open={open} className='A'>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                // marginRight: '5px',
                ...(open && { display: 'flex' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              // component="h1"
              // variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
           <img src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg" alt=" " className='C'></img>
           
          
              <center>
             
             
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <button type="button" class="btn btn-light" >
            
            < ElderlyIcon />
                
            Trekking
              
              </button>
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <button type="button" class="btn btn-light" >
                
              <TwoWheelerTwoToneIcon/>
              Riding
        
              </button>
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <button type="button" class="btn btn-light" >
              
            < AddAPhotoTwoToneIcon/>
            DSLR
            </button>
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <button type="button" class="btn btn-light" >
              < SportsEsportsTwoToneIcon/> 

              PS4/Xbox              
              </button>
              </center>
            </Typography>

            <IconButton color="inherit">

              <Badge   color="secondary">
              <button >Login/Signup</button>

             </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>

            
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>

              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          


<div>          
          <ListItemButton to="GoPro Camera"  >
          
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     
      <ListItemText primary="GoPro Camera"/>

               

    </ListItemButton>
    <ListItemButton to="/360 Camera">


      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="360 Camera" />
    </ListItemButton>
    <ListItemButton to="/Action Camera Mount">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Action Camera Mount"/>
    </ListItemButton>
    <ListItemButton to="/ DJI Camera">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="DJI Camera"/>
    </ListItemButton>
    <ListItemButton to="/Action Camera">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Action Camera"/>
    </ListItemButton>
 </div> 

        </Drawer>
        <Box

          className='main'
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
         
          <Toolbar />
          <Container maxWidth="lg" >
          
            <Grid container spacing={5}>
              
            <Grid item xs={12}/>

            <Grid item xs={12}>
               
<Container className='bar' >

<center>
        <button type="button" class="btn btn-light" className='b' >Delivery Date </button>
        &nbsp;&nbsp;
        <input type="date" id="arrive" class="vsjinput" name="arrive" value="<?php echo date('Y-m-d'); ?>"/>
        &nbsp;&nbsp;
        &nbsp;&nbsp;      
         <button type="button" class="btn btn-light" className='b'>Return Date</button>
         &nbsp;&nbsp;
         <input type="date" id="arrive" class="vsjinput" name="arrive" value="<?php echo date('Y-m-d'); ?>"/>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;

        <button type="button" class="btn btn-light">View Prices</button>
        </center>
            
            </Container> 

            <center>
                <h1>Action Camera Mounts On Rent</h1>
              </center>
             
              </Grid>
  
             <Grid item xs={12} md={4} lg={3}>
              
                <Paper
                
                
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 310,
                    width: 250,
                  }}
                >
                   
                    <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-chest-mount-1_26KFzxETagx.webp?updatedAt=1627657025473" alt=" "></img>
                    <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    
                    < FavoriteBorderIcon color='primary'/>
                    &nbsp;&nbsp;
                     रु 99 for-1 day
                     
                     </Container>
                    
                </Paper>
                
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
             
                <Paper
                
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 310,
                    width: 250,
                  }}
                >
                    <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-snorkelling-mount_l7Qvh2PJeHb.webp?updatedAt=1627657031156" alt=""></img>
                    <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
                     
                    
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
             
                <Paper
                
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 310,
                    width:250,
                  }}
                >
         <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-head-mount-1_aQ0qJxZV3.webp?updatedAt=1627657027113" alt=""></img>
         <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
                 
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
             
                <Paper
                
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 310,
                    width: 250,
                  }}
                >
         <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-shorty-2_DSncx9ETS.webp?updatedAt=1627657030361" alt=""></img>
         <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
                  
                </Paper>
              </Grid>



              <Grid item xs={12} md={4} lg={3}>
             
                <Paper
                
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 310,
                    width: 250,
                  }}
                >
         <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-shorty-2_DSncx9ETS.webp?updatedAt=1627657030361" alt=""></img>
         <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
                  
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-hero9-max-lens-mod-on-rent-1_QU0epR4Nmq.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1618414986902" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary'/>
                    &nbsp;&nbsp;
                    
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>

           <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-helmet-strap-mount-on-rent-2_flSfdTxEc3.webp?updatedAt=1618414989671" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>

           <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro_9_10_3_c30uWHZVC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653414714037" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                    
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>

           <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-wrist-mount-on-rent-1_gfKt5uHEYI.webp?updatedAt=1627657008928" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>

           <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-selfie-stick-1_0FWY-h5Iz.webp?updatedAt=1627657028749" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
              
             </Paper>
           </Grid>
           <Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-handle-mount_SOQ8xLJXC.webp?updatedAt=1627657026282" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>

          < Grid item xs={12} md={4} lg={3}>
             
             <Paper
             
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 height: 310,
                 width: 250,
               }}
             >
                 
                 <img src="https://ik.imagekit.io/faskf16pg/gopro-cameras/gopro-mounts-on-rent-gopro-3M-adhesive-pads_h7ooY92sz7.webp?updatedAt=1627657024636" alt=""></img>
                 <Container>
                    Chest Mount
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon color='primary' />
                    &nbsp;&nbsp;
                   
                
                     रु 99 for-1 day
                     </Container>
               {/* <Deposits /> */}
             </Paper>
           </Grid>


              
              
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    
  );
}

export default  Dashboard;