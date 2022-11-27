import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function CategoryList() {
    const [qdata, setQdata] = useState({data: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post("https://greenx-backend.onrender.com/graphql", {
                query: 'query{getAllCategory{_id,name}}'
            });
            const res = result.data.data.getAllCategory;
            setQdata({data: res})
            console.log(res);
        };
        fetchData();
    },[])


    return (
        <>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
                <div>
                    {qdata.data.map(item => (
                        <Card sx={{ maxWidth: 500 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px'}} key={item._id}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" >
                                {item.name}
                            </Typography>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>


            {/* <div style={{display:'flex',justifyContent:'center'}}>
                <Card sx={{ maxWidth: 200 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px'}}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h6" color="text.secondary" >
                            FRUITS
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 200 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h6" color="text.secondary" >
                            VEGETABLES
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 200 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1637500980709-6e65a6c2418a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVydGlsaXplcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h6" color="text.secondary" >
                            FERTILIZERS
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 200 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h6" color="text.secondary" >
                            TOOLS
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 200 }} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center',margin:'10px' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h6" color="text.secondary" >
                            BOOKS
                        </Typography>
                    </CardContent>
                </Card>
            </div> */}
        </>
    );
}