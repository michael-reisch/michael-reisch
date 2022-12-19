import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

const TreeImage = (props) => {
  return (
    <>
      <Tilt>
        <Box id="tree-image-container">
          <Image id="tree-image" alt="tree image" src="/tree-image.png" />
        </Box>
      </Tilt>
    </>
  )
}

export default TreeImage
