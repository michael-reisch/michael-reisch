import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const FaceImage = (props) => {
  return (
    <Box id="face-image">
      <Image
        borderRadius="full"
        boxSize="100px"
        objectFit="cover"
        src="/michael-reisch.jpeg"
        alt="Michael Reisch"
      />
    </Box>
  )
}

export default FaceImage
