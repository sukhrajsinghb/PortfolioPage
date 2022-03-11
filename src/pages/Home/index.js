import React from 'react';

import LINKEDIN from '../../images/linkedin_logo.png'
import GITHUB from '../../images/github_image.png'


const Home = () => {

return (
    <>
        <h1 className='center-text'>Welcome</h1>
        <h2 className='center-text'>I'm Sukhraj Bhandal</h2>
        <p className='center-text'>Currently my page is under construction, be sure to come back soon!</p>
        <p className='center-text'>Feel free to contact me below</p>
        <div className='image-div center-text'>
            <ul>
                <li><a href='https://www.linkedin.com/in/sukhraj-s-bhandal/'>
                    <img className='image-tags' src={LINKEDIN} alt="LinkedIn logo" />
                </a></li>

                <li><a href='https://github.com/sukhrajsinghb/'>
                    <img className='image-tags' src={GITHUB} alt="Github logo" />
                </a></li>
            </ul>
        </div>
    </>
    
)
}
export default Home;
