import React from 'react'
import SearchAppBar from '../../Components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CategoryList from '../../Components/CategoryList';
import ProductList from '../../Components/ProductList';
const Home = () => {
  return (
    <>
      <SearchAppBar />
      <React.Fragment>
        <CssBaseline />
        <Container style={{ display: 'flex', justifyContent: 'center',flexDirection:'column'}}>
          <Box sx={{ bgcolor: '#97ff9ba2', height: '100%', width: '100%' ,padding:'0px'}}>
            <Typography
              variant="h4"
              component="div"
              sx={{display: 'flex', justifyContent:'center' }}
            >
              Categories
            </Typography>
            <CategoryList/>
          </Box>
          <Box sx={{ bgcolor: '#97ff9ba2', height: '100%', width: '100%',marginTop:'50px',marginBottom:'100px',padding:'10px' }}>
            <Typography
              variant="h4"
              component="div"
              sx={{display: 'flex', justifyContent:'center' }}
            >
              Products
            </Typography>
            <ProductList/>
          </Box>
        </Container>
      </React.Fragment>
    </>
  )
}

export default Home