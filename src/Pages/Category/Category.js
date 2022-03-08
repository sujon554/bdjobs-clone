import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';

const Category = ({singleCategory}) => {
console.log(singleCategory)
    const {company, applicationDeadline, educationalRequirements, experienceYear, jobLocation, jobTitle, jobVacancy } = singleCategory;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
       marginLeft: "auto",
       marginRight: "auto",
        color: theme.palette.text.secondary,
      }));


    return (
        <>
        
            
            <Grid item xs={12} md={6}>
                
                <Item >
                
                <h2>{jobTitle}</h2>
                <h3>{company}</h3>
               
                <h3>Vacancy:  {jobVacancy}</h3>
                <h3 ><SchoolIcon />  {educationalRequirements}</h3>
                <h3><FmdGoodIcon/>  {jobLocation}</h3>
                <h3><AssessmentSharpIcon />  {experienceYear}</h3>
                <h3><DateRangeIcon/>  {applicationDeadline}</h3>
               
                </Item>
            </Grid>

            <Grid item xs={12} md={6}>
                <Item>
                <h1>Job Summary</h1>
                {/* <h3>Published on: {publishedOn}</h3> */}
                <h3>Vacancy: {jobVacancy}</h3>
                {/* <h3>Experience: {experienceRequirements}</h3>
                <h3>Gender: {applicantGender}</h3>
                <h3>Age: {applicantAge}</h3>
                <h3>Salary: {salary}</h3>
                <h3>Application Deadline{applicationDeadline}</h3> */}
                </Item>

            </Grid>
        </>
    );
};

export default Category;