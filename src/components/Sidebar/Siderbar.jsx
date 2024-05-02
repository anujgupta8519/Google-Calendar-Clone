import React from 'react'
import CreateEventButton from '../CreateEventButton/CreateEventButton'
import SmallCalender from '../SmallCalender/SmallCalender'
import Labels from '../Labels/Labels'

function Siderbar() {
  return (
  <aside className='border p-5 w-64'>
    <CreateEventButton/>
    <SmallCalender/>
    <Labels/>


  </aside>
  )
}

export default Siderbar