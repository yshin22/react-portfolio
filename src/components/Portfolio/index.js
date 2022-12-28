import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import resume from '../../assets/images/resume.jpg'


const Portfolio = () => {

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
                    strArray={['P','o','r','t','f','o','l','i','o']}
                    indx={15}
                    />
                </h1>

                <div className='resume'>
                    <img src={resume} alt="resume"/>
                </div>
            </div>

        </div>
        <Loader type="ball-rotate" />
        </>
    )
}


export default Portfolio