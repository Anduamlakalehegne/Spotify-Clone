import React from 'react'
import Song from './song'
import Player from './player'
import Controls from './controls'

export default function MusicPlayer() {
  return (
    <div className='flex items-center justify-between'>
        <Song/>
        <Player />
        <Controls />
    </div>
  )
}
