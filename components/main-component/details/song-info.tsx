import data from '@/data'
import React from 'react'

export default function SongInfo() {
  return (
    <div className='space-y-3 pt-[300px]'>
        <div className='space-y-0.5'>
            <span className='text-2xl font-bold'>{data.song.name}</span>
            <span className='block text-dimmed text-sm'>{data.song.artists}</span>
        </div>
    </div>
  )
}
