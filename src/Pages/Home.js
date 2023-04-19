import React from 'react'
import MyButton from '../Components/MyButton'
import { Image } from 'react-bootstrap'
import { HImage } from '../Utils'

const Home = () => {
    return (
        <>
            <div>
                <Image src={HImage.HeaderImage}/>
            </div>
        </>
    )
}

export default Home