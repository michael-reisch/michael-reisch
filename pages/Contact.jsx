import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = (props) => {
  return (
    <div>
      <Link href="mailto:mreisch88@gmail.com" target="blank">
        <Image src="/gmail.png" alt="gmail icon" width="100" height="100" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/michael-reisch-nz/"
        target="blank"
      >
        <Image
          src="/linkedin.png"
          alt="linkedin icon"
          width="100"
          height="100"
        />
      </Link>
      <Link href="https://github.com/michael-reisch" target="blank">
        <Image
          src="/github.png"
          alt="github icon"
          width="100"
          height="100"
        ></Image>
      </Link>
    </div>
  )
}

export default Contact
