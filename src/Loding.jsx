import React from 'react'
import SkeletonCard from './components/SkeletonCard'

function Loding() {
    return (
        <div className='grid grid-cols-3 gap-8'>
            {"abcdefghi".split('').map(i=>(
                <SkeletonCard key={i}/>
            ))}
        </div>
    )
}

export default Loding