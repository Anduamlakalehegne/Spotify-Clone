import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image src={'/logo.png'} width={32} height={32} alt='Logo' />
  )
}
