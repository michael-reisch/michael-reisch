import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const MyImage = (props) => {
  return (
    <Box>
      <Image
        width="200"
        height="200"
        src="/../public/michael-reisch.jpeg"
        alt="Michael Reisch"
      />
    </Box>
  )
}

export default MyImage
