import React from 'react'
import'./Login.css'
import image1 from '../Images/Besant.jpg'
import image2 from '../Images/Besant_logo.jpg'
import image3 from '../Images/Whatsapp.png'
import image4 from '../Images/Linkedin.png'
import image5 from '../Images/Instagram.png'
import image6 from '../Images/Gmail.png'
import { Button, TextField } from '@mui/material'

function Login() {

return (
    <div id='bg'>
        <div id='lft'>
            <img src={image1} alt='' id='lftimg'></img>
        </div>


        <div id='rgt'>
            <div id='logo'>
                <img src={image2} alt='' id='img2'></img>
                <div id='p1'>
                    <p id='p2'>Besant</p>
                    <p id='p3'>Technologies</p>
                </div>
            </div>

            <p id='p4'>Sign in</p>
            <form id='userid'>
                <TextField id="inp1" label="User Id" variant="outlined" />
            </form>

            <form id='pass'>
                <TextField id="inp2" label="Password" type="password" autocomplete="current-password"/><br></br>
            </form>

            <a id='forgt'>Forget Password?</a>

            <Button id='btn1' variant="contained">Login</Button>

            <div id='ar'>
                <p id='p7'>Don't have an account?</p>
                <p id='p8'>Signup</p>
            </div>

            <div id='icon'>
                <a href='https://wa.me/9003427069' id='whats'><img src={image3} alt='' className='ca_img3'></img></a>
                <a><img src={image4} alt='' className='ca_img3'></img></a>
                <a><img src={image5} alt='' className='ca_img3'></img></a>
                <a><img src={image6} alt='' id='ca_img4'></img></a>
            </div>

        </div> 


    </div>


)

}

export default Login