import React from 'react'
import Tabs from './tabs'
import Artists from './artists'
import Albums from './albums'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-red-800/20 to-foreground h-full rounded-lg p-4 space-y-6'>
        <Tabs />
        <Artists />
        <Albums />
    </div>
  )
}
