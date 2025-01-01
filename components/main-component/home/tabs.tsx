import React from 'react'

const tabs = ["All", "Music", "Podcasts", "Audiobooks"]

export default function Tabs() {
  return (
    <div className='flex items-center gap-2.5'>
        {tabs.map((tab, idx) => (
            <div key={tab} className={`${idx === 0 ? 'bg-white text-black' : 'bg-white/20'}  rounded-full px-2.5 py-1.5 text-sm`}>
                {tab}
            </div>
        ))}
    </div>
  )
}
