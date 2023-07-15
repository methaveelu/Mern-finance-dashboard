import FlexBetween from '@/components/FlexBetween';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography, useTheme} from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Navbar = () => {
    const [selected, setSelected] = useState("dashboard");
  return (
    <div>
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={'#D1D3DA'} >
        {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <QueryStatsIcon sx={{fontSize: "30px"}}/>
                <Typography variant='h4' fontSize='16px'>
                    Finance stats
                </Typography>
            </FlexBetween>
        {/* RIght SIDE */}
            <FlexBetween gap="2rem">
             <Box sx={{"&:hover": {color: '#D1D3DA'}}}>
                <Link 
                    to="/" 
                    onClick={()=> setSelected("dashboard")} 
                    style={{color:selected=== "dashboard"? "inherit": '#6b6d74',textDecoration:'inherit',}}>
                    Dashboard    
                </Link>
             </Box>
             <Box sx={{"&:hover": {color: '#D1D3DA'}}}>
                <Link 
                    to="/predictions" 
                    onClick={()=> setSelected("predictions")} 
                    style={{color:selected=== "predictions"? "inherit": '#6b6d74',textDecoration:'inherit',}}>
                    Predictions
                </Link>
             </Box>
                 
            </FlexBetween>
            </FlexBetween>
    </div>
  )
}
export default Navbar