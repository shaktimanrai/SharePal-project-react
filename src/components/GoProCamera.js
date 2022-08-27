import React ,{useState}from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


    function GoProCamera() {
        
        const[goprocamera,setGoProCamera]=useState("");

        const addNum=()=>{
            setGoProCamera(  
                <>
                
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

</>
            )
        }

        

       

return( <>
<div >
    <h1> {goprocamera} </h1>
    <div className='btn-div'>
        <button onClick={addNum}> GoProCamera </button>
        {/* <button onClick={subNum}> - </button> */}

    </div>
</div>
    
    </>
)
        
}


    
export default GoProCamera;

