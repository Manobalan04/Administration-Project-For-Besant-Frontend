import React from 'react'
import'./Choose_account.css'
import image1 from '../Images/Besant_logo.jpg'
import image2 from '../Images/Admin.jpeg'
import image3 from '../Images/Trainer.jpeg'
import image4 from '../Images/Student.jpeg'
import { Button } from '@mui/material'

function Choose_account() {
  return (
    <div id='ca_bg'>
        
        <div id='ca_logo'>
                <img src={image1} alt='' id='ca_img1'></img>
                <div id='ca_p1'>
                    <p id='ca_p2'>Besant</p>
                    <p id='ca_p3'>Technologies</p>
                </div>
            </div>

        <div id='ca_card'>
            <p id='ca_p4'>Choose Account Type</p>
            <div id='ca_card0'>
                <div className='ca_card1'>
                    <img src={image2} alt='' className='ca_img2'></img>
                    <p className='ca_p5'>Admin</p>
                </div>
                <div className='ca_card1'>
                    <img src={image3} alt='' className='ca_img2'></img>
                    <p className='ca_p5'>Trainer</p>
                </div>
                <div className='ca_card1'>
                    <img src={image4} alt='' className='ca_img2'></img>
                    <p className='ca_p5'>Student</p>
                </div>
            </div>
            <Button id='ca_btn1' variant="contained">TAKE ME TO LOGIN</Button>
        </div>
    </div>
  )
}

export default Choose_account