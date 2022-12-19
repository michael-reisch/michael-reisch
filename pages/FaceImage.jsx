import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

const FaceImage = (props) => {
  return (
    <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50}>
      <Box id="face-image">
        <Image
          id='face-nav-image'
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          src="/michael-reisch.jpeg"
          alt="Michael Reisch"
        />
      </Box>
    </Tilt>
  )
}

export default FaceImage
