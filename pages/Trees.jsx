import React from 'react'
import { Box, Image, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Trees = (props) => {
  return (
    <Box id="urbanature-container">
      <Link
        id="urbanature-link"
        as={NextLink}
        href="https://github.com/michael-reisch/"
        target="_blank"
      >
        <Image
          id="urbanature-screenshot"
          alt="urbanature screenshot"
          src="/urbanature.png"
        />
        <Text id="urbanature-about">
          For my final group project at Dev Academy, we wanted to showcase the
          importance of urban forests. We built an application that can
          calculate the amount of carbon dioxide sequestered by a tree by
          inputting its dimensions. <br />
        </Text>
      </Link>
    </Box>
  )
}

export default Trees
