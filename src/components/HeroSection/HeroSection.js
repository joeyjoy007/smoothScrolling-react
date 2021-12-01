import React from 'react'

import video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg ,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
const HeroSection = () => {
    return (
        <HeroContainer id="Home">
        <HeroBg>
        {/*<VideoBg autoPlay loop muted src={video} type='video/mp4'/>*/}
        
        </HeroBg>
        <HeroContent>
        
        <HeroH1> Virtual Banking Made Easy </HeroH1>
        Sign up for a new account today and receive  $250 in credit towards your next payments<HeroP>
        </HeroP>
        <HeroBtnWrapper>
        <Button to='signup'>
        Get Started{hover ? <ArrowForward/> :<ArrowRight/>}
        
        </Button>
        </HeroBtnWrapper>
        </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
