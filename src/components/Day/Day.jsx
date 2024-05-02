import dayjs from 'dayjs'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function Day({day ,rowIdx}) {
    const [dayEvents, setDayEvents] = React.useState([])
    const {setDaySelected,setShowEventModel,filteredEvents,setSelectedEvent} = useContext(GlobalContext)
    useEffect(() => {
    const eve = filteredEvents.filter((e)=>dayjs(e.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
    setDayEvents(eve)
        
    },[filteredEvents,day])




    
    const getCurrentDayClass = (day) => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-500 text-white rounded-full w-7' : ''

    }


  return (
    <div className='border border-gray-200 flex flex-col ' >
        <header className='flex flex-col items-center' >
            {rowIdx === 0 && <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>}
      
        <p  className={`text-sm p-1 my-1 text-center ${getCurrentDayClass(day)}`}> {day.format('DD')}</p>
        </header>
        <div 
        className='flex-1 cursor-pointer' onClick={()=>{
            setDaySelected(day)
            setShowEventModel(true)

        }}
        
        >


        {dayEvents.map((e,i)=>(
            <div key={i}
            onClick={()=>setSelectedEvent(e)}
             className={`${e.label} p-1 mr-3  text-sm rounded mb-1 truncate`}>
                <p className='text-xs'>{e.title}</p>
            </div>
        ))}

   

        </div>


       
   
      


    </div>
  )
}

export default Day