import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import profpic from '../../assets/images/ym_profpic.JPG';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    indx={15}
                    />
                </h1>
                <p>
                    I recently graduated from George Mason University with a BS in Computer Science
                </p>
                <p>
                    I have a serious passion for UI effects and creating intuitive and dynamic user experiences
                </p>
                <p>
                    I'm constantly learning and trying new technologies to imporve my skillset and I am always
                    left awestruck of what the tech community is capable of producing!
                </p>

                <ul className='like'>What I like</ul>
                <ul>Coffee things</ul>
                <ul>Cars</ul>
                <ul>Gravel bikes</ul>

                <ul className='learning'>What I'm learning</ul>
                <ul>React</ul>
                <ul>to pull more consistent espresso</ul>
                <ul>web development</ul>
            </div>

            <div className='prof-pic'>
                <img src={profpic} alt='prfile picture'/>
            </div>

            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" /> 
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" /> 
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> 
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> 
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> 
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28" /> 
                    </div>
                </div>
            </div> */}

        </div>
        <Loader type="ball-rotate" />
        </>
    )
}


export default About