import React from 'react'
import NextLink from 'next/link'
import { Link, Box, Image, HStack, Text, Flex } from '@chakra-ui/react'

const Nav = (props) => {
  return (
    <HStack id="nav" spacing="24px">
      <Link
        className="nav-link"
        as={NextLink}
        href="https://github.com/michael-reisch/"
        target="_blank"
      >
        <Image alt="Github Link" src="/github.png" height="50" width="50" />
      </Link>
      <Link
        className="nav-link"
        as={NextLink}
        href="https://www.linkedin.com/in/michael-reisch-nz/"
        target="_blank"
      >
        <Image alt="LinkedIn Link" src="/linkedin.png" height="50" width="50" />
      </Link>
      <Flex id="gmailContainer" flexDirection="column">
        <Link
          className="nav-link"
          as={NextLink}
          href="mailto:mreisch88@gmail.com"
          target="_blank"
        >
          <Image alt="Gmail Link" src="/gmail.png" height="50" width="50" />
        </Link>
        <Text fontSize="xs">MReisch88@gmail.com</Text>
      </Flex>
    </HStack>
  )
}

export default Nav
