import React, { useContext } from 'react'
import plus from '../../assets/plus.svg'
import { GlobalContext } from '../../context/GlobalContext'

function CreateEventButton() {
    const {setShowEventModel} = useContext(GlobalContext)
  return (
    <button onClick={()=>setShowEventModel(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <img src={plus} alt="create event"  className='w-7 h-7'/>
        <span className='pl-3 pr-7'>Create</span>


    </button>
  )
}

export default CreateEventButton