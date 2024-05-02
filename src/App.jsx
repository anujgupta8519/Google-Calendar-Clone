
import { useEffect,useContext, } from 'react'
import './App.css'
import { getMonth } from './utils/utils'
import { useState } from 'react'
import CalenderHeader from './components/CalendarHeader/CalenderHeader'
import Siderbar from './components/Sidebar/Siderbar'
import Month from './components/Month/Month'
import { GlobalContext } from './context/GlobalContext'
import EventModel from './components/EventModel/EventModel'

function App() { 

  const [currentMonth, setCurrentMonth] = useState()
  const {monthIndex,showEventModel} = useContext(GlobalContext)

  useEffect(() => {

    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])


 
  return (
<>
{showEventModel && <EventModel/>}
<div className='flex flex-col h-screen'>
  <CalenderHeader/>

  <div className='flex flex-1'>

    <Siderbar/>
    <Month month={currentMonth}/>


  </div>

</div>

</>
  )
}

export default App
