import { Container } from '@mui/material';
import React from 'react';
import Author from '../Author/Author';

const Event = () => {
    return (
       <Container>
        
            <h1 className='textAlign-center'>JOB PREPARING EVENT </h1>
            <h4>Try your best to last moment</h4>

{/* // Event Author's  */}
<h2>Our Guest</h2>
<Author></Author>


            <h3>Introduction</h3>
            <p>
            In these turbulent times unseen in the past hundred years, new challenges emerge almost every day. Challenges that need planning, preparing, anticipating, deciding, staffing, delegating, reviewing and much more. How is the Manager of 2022 different from his predecessors? What tools, competencies, role clarity set him apart ?
            </p>
            <h3>Methodology</h3>
            <p>Individual Exercise, Group Tasks, Role Plays, Case Analysis, AV media, Instructor Led Discussions.</p>
            <h3>Contents of Training:</h3>
            <li>Overview of the current business canvas</li>
            <li>Managing Change in a VUCA world</li>
            <li>Organisational Hierarchy in the modern world</li>
            <li>Role Clarity in 2022</li>
            <li>Setting Goals and Objectives</li>
            <li>Vision, Mission, Core Values</li>
            <li>Overview on Professional Managemen</li>
            <li>Doing Vs Managing Vs Leading</li>
       </Container>
    );
};

export default Event;