import React from 'react'
import NextLink from 'next/link'
import { Link, Box, Image, HStack, Text } from '@chakra-ui/react'

const Nav = (props) => {
  return (
    <HStack spacing="24px">
      <Box>
        <Image
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          src="/michael-reisch.jpeg"
          alt="Michael Reisch"
        />
      </Box>
      <Link
        as={NextLink}
        href="https://github.com/michael-reisch/"
        target="_blank"
      >
        <Image alt="Github Link" src="/github.png" height="50" width="50" />
      </Link>
      <Link
        as={NextLink}
        href="https://www.linkedin.com/in/michael-reisch-nz/"
        target="_blank"
      >
        <Image alt="LinkedIn Link" src="/linkedin.png" height="50" width="50" />
      </Link>
      <Box>
        <Link as={NextLink} href="mailto:mreisch88@gmail.com" target="_blank">
          <Image alt="Gmail Link" src="/gmail.png" height="50" width="50" />
        </Link>
        <Text fontSize="xs">MReisch88@gmail.com</Text>
      </Box>
    </HStack>
  )
}

export default Nav
