import React from 'react'
import './note.css';
import SingleNote from './SingleNote';
function AllNotes() {
  return (
    <div className='container-note'>
        <SingleNote/>
        <SingleNote/>
        <SingleNote/>
        <SingleNote/>
        
    </div>
  )
}

export default AllNotes