import React from 'react'
import Menu from './menu'
import List from './list'

export default function Albums() {
  return (
    <div className='text-dimmed bg-foreground h-full rounded-lg p-4 flex flex-col gap-3'>
        <Menu />
        <List />
    </div>
  )
}
