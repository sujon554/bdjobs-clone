import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categoryes = () => {

    const [ category , setCategory] = useState([]);
    // console.log(category)
    useEffect(() => {
        fetch('./service.json')
        .then( res => res.json())
        .then(data => setCategory(data))
        
    }, [])
    
    return (
        <Container>
             <h1>Job Category</h1>
            <Grid container spacing={2}>
           
                {
                    category.map(singleCategory => 
                    <Category
                        key={singleCategory.key}
                        singleCategory={singleCategory}
                    ></Category>)
                }
            </Grid>
        </Container>
    );
};

export default Categoryes;