import React from 'react'
import { Box, Image, Text, Link } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

const TreeImage = (props) => {
  return (
    <Box id="image-label-container">
      <Tilt>
        <Box id="tree-image-container">
          <Image id="tree-image" alt="tree image" src="/tree-image.png" />
        </Box>
      </Tilt>
      <Text id="image-label">
        *Image created by{' '}
        <Link id="midjourney-link" href="https://discord.com/invite/midjourney" target='_blank'>
          Midjourney AI
        </Link>{' '}
        text to image generator*
      </Text>
    </Box>
  )
}

export default TreeImage
