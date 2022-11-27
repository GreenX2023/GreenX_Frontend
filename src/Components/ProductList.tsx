import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ProductCard from './card';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const ProductList = () => {
    const [qdata2, setQdata2] = useState({ data: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post("https://greenx-backend.onrender.com/graphql", {
                query: 'query{getAllProducts{_id,name}}'
            });
            const res = result.data.data.getAllProducts;
            setQdata2({ data: res })
            console.log(res);
        };
        fetchData();
    }, [])


    return (
        <>
            <Box sx={{ flexGrow: 1, padding: 12 }} >
                <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column' }} >
                    {qdata2.data.map(item => (
                        <Item style={{ display: 'flex', textAlign: 'center',justifyContent:'center' }} key={item._id} >
                            <Card sx={{ maxWidth: 345, margin:'20px' }} >
                                <CardHeader
                                    title={`${item.name}`}
                                    subheader="Upload date"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="image"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item._id}<br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, nihil!
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'center' }}>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Item>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default ProductList