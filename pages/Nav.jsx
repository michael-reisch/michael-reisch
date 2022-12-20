import React from 'react'
import NextLink from 'next/link'
import { Link, Box, Image, HStack, Text, Flex } from '@chakra-ui/react'

const Nav = (props) => {
  return (
    <HStack id="nav">
      <Link
        className="nav-link"
        as={NextLink}
        href="https://github.com/michael-reisch/"
        target="_blank"
      >
        <Image
          className="nav-image"
          alt="Github Link"
          src="/github.png"
          height="35"
          width="35"
        />
      </Link>
      <Link
        className="nav-link"
        as={NextLink}
        href="https://www.linkedin.com/in/michael-reisch-nz/"
        target="_blank"
      >
        <Image
          className="nav-image"
          alt="LinkedIn Link"
          src="/linkedin.png"
          height="35"
          width="35"
        />
      </Link>
      <Link
        className="nav-link"
        as={NextLink}
        href="mailto:mreisch88@gmail.com"
        target="_blank"
      >
        <Image
          className="nav-image"
          alt="Gmail Link"
          src="/gmail.png"
          height="35"
          width="35"
        />
      </Link>
    </HStack>
  )
}

export default Nav
