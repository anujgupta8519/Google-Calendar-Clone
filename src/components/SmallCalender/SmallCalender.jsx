import dayjs from 'dayjs'
import React, { useContext, useEffect } from 'react'
import { getMonth } from '../../utils/utils'
import { GlobalContext } from '../../context/GlobalContext'


function SmallCalender() {

    const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = React.useState(getMonth())
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
        
    },[currentMonthIdx])

    const {monthIndex,setSmallCalendarMonth,daySelected,setDaySelected} = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)  

    },[monthIndex])

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }
    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    const getDayClass=(day)=>{

        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const selectedDay = daySelected && daySelected.format(format)
        return nowDay === currDay ? "bg-blue-500 rounded-full text-white w-7" : selectedDay === currDay ? "bg-blue-100 rounded-full text-blue-600 w-7" : "text-gray-700 w-7"
    }

    


  return (
    <div className='mt-9'>
        <header className='flex justify-between'>
            <p className='text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}

            </p>
            <div>
            <button onClick={handlePrevMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'> chevron_left</span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'> chevron_right</span>
            </button>
            </div>
 
        </header>

        <div className='grid grid-cols-7 grid-rows-6'>
            {currentMonth[0].map((day, i) => (
                <span key={i} className='text-sm py-1 text-center'>{day.format('dd').charAt(0)}</span>
            ))}

            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <button key={idx}
                        onClick={
                            () => {setSmallCalendarMonth(currentMonthIdx)
                                setDaySelected(day)
                            
                            }
                        }
                        className={`py-1 w-full ${getDayClass(day)}}`}>
                            <span className='text-sm py-1 text-center'>{day.format('D')}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}

        </div>


    </div>
  )
}

export default SmallCalender