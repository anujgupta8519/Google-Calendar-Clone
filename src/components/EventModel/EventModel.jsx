import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function EventModel() {
    const { setShowEventModel, daySelected,dispatchCalEvent,selectedEvent,setSelectedEvent } = useContext(GlobalContext)
    const [title, setTitle] = React.useState(selectedEvent ? selectedEvent.title : '')
    const [description, setDescription] = React.useState(selectedEvent ? selectedEvent.description : '')

   
    const labelsClasses = ['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300']
    const [selectLabel, setSelectLabel] = React.useState(selectedEvent ? labelsClasses.find((c) => c === selectedEvent.label) : labelsClasses[0])
    const handleSubmit = (e)=>{
        e.preventDefault();
        const calenderEvent = {
            title,
            description,
            label:selectLabel,
            day:daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        }

        if (selectedEvent) {
            dispatchCalEvent({type:"update",payload:calenderEvent})
            
        }else{
            dispatchCalEvent({type:"push",payload:calenderEvent})
        }

        
        setShowEventModel(false)


    }



    return (
        <div className='h-full w-full fixed left-0 top-0 flex justify-center items-center'>

            <form className='bg-white rounded-lg p-5 shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='material-icons-outlined text-2xl text-gray-400'>drag_handle</span>
                    <div>
                        {selectedEvent && (
                            <button onClick={() => {
                                dispatchCalEvent({ type: "delete", payload: selectedEvent })
                                setShowEventModel(false)
                                setSelectedEvent(null)
                            }}>
                                <span className='material-icons-outlined cursor-pointer text-gray-500'>delete</span>
                            </button>
                        )}

                    <button onClick={(e) => {
                        e.preventDefault()
                        setShowEventModel(false)
                    }}>
                        <span className='material-icons-outlined text-2xl text-gray-400'>close</span>
                    </button>

                    </div>


                




                </header>

                <div className="p-3">
                    <div className='grid grid-cols-1/5 items-end gap-y-7'>
                        <div>  </div>
                        <input type="text" name='title' placeholder='Add title'
                            value={title} onChange={(e) => setTitle(e.target.value)}
                            required

                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' />
                        <span className='material-icons-outlined  text-gray-400'>schedule</span>
                        <p>{daySelected?.format("dddd, MMMM DD, YYYY")}</p>
                        <span className='material-icons-outlined text-gray-400'>segment</span>
                        <input type="text" name='description' placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value)}
                            className='pt-3 border-0 text-gray-600   pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' />

                        <span className='material-icons-outlined text-gray-400'>bookmark_border</span>
                        <div className='flex gap-x-2'>

                            {labelsClasses.map((item, index) => (
                                <span key={index} 
                                onClick={() => setSelectLabel(item)}
                                className={`${item} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>

                                  {selectLabel === item && <span className='material-icons-outlined text-white text-sm'>done</span>}
                                </span>
                            ))}

                        </div>


                    </div>
                </div>



                 <footer className='flex justify-end border-t p-3 mt-5'>
                    <button
                    onClick={handleSubmit}
                    
                    className='bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600' type='submit'>Save</button>

                 </footer>
            </form>



        </div>
    )
}

export default EventModel