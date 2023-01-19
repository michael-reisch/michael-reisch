import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Flex } from '@chakra-ui/react'

const Contact = (props) => {
  return (
    <Flex id="contact-container">
      <Link href="mailto:mreisch88@gmail.com" target="blank">
        <Image
          src="/gmail.png"
          alt="gmail icon"
          width="30"
          height="30"
          className="contact-icon"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/michael-reisch-nz/"
        target="blank"
      >
        <Image
          src="/linkedin.png"
          alt="linkedin icon"
          width="30"
          height="30"
          className="contact-icon"
        />
      </Link>
      <Link href="https://github.com/michael-reisch" target="blank">
        <Image
          src="/github.png"
          alt="github icon"
          width="30"
          height="30"
          className="contact-icon"
        ></Image>
      </Link>
    </Flex>
  )
}

export default Contact
