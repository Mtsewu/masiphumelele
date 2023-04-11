import React from 'react'
import Nav from './Nav'
import Info from './Info'

export default function App(){
    return(
        <div>
         <Nav/>
         <div className>
         <Info  img ='../images/learner(real).webp'
         title='Learners'
         description='Learners refer to High and possibly Primary School pupils.'
         sign= 'Nthing yet'/>  
         
         <Info  img ='../images/learner pic.jpg'
         title='Students'
         description='Students are learners at Higher learning institutions eg. University, College
         etc..'
         sign= 'Nthing yet'/>  
         
         <Info  img ='../images/proffessional.png'
         title='Proffesionals'
         description='Proffessionals are the working class, people who can offer guidance to Tertiary and High 
         school learners.'
         sign= 'Nthing yet'/>
         </div>

           
        </div>
    )
}