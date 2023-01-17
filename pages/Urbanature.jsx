import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Urbanature = (props) => {
  return (
    <div>
      <Link href="https://urbanature.devacademy.online/">
        <Image src="/urbanature.png" alt="screenshot of urbanature homepage" height='100' width='500'/>
        <p>
          For my final group project at Dev Academy, we wanted to showcase the
          importance of urban forests. We built an application that can
          calculate the amount of carbon dioxide sequestered by a tree by
          inputting its dimensions.
        </p>
      </Link>
    </div>
  )
}

export default Urbanature
