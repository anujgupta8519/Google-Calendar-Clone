import React, { useEffect, useMemo, useReducer } from 'react'
import { GlobalContext } from './GlobalContext.js'
import dayjs from 'dayjs'

const saveEventReducer = (state,{type,payload}) => {

  switch (type) {
    case "push":
      return [...state, payload];

    case "update":
      return state.map((calEvent) => {

        return calEvent.id === payload.id ? payload : calEvent
      }) 
    case "delete":
      return state.filter(({id}) => id !== payload.id) 

      default:
        throw new Error()

}}

const initEvents=()=>{

  const storageEvents = localStorage.getItem("savedEvents")

  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []

  return parsedEvents
}




function ContextWrapper(props) {


  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = React.useState(null);
  const [daySelected, setDaySelected] = React.useState(dayjs());
  const [showEventModel, setShowEventModel] = React.useState(false);
  const[saveEvent,dispatchCalEvent] = useReducer(saveEventReducer,[],initEvents)
  const [selectedEvent,setSelectedEvent] = React.useState(null)
  const [labels,setLabels] = React.useState([])

  const filteredEvents = useMemo(() => {
    return saveEvent.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [saveEvent, labels]);


useEffect(()=>{

  localStorage.setItem("savedEvents",JSON.stringify(saveEvent))

},[saveEvent])

useEffect(()=>{

  setLabels((prev)=>[...new Set(saveEvent.map((e)=>e.label))].map((l)=>{

    const currentlabels = prev.find(({label})=>label === l);
    return {

        label:l,
        checked:currentlabels ? currentlabels.checked : true
    }
 

 
  }))

},[saveEvent])



useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)

    }

  }, [smallCalendarMonth])
  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (

    <GlobalContext.Provider value={{
      monthIndex,
      setMonthIndex
      , smallCalendarMonth,
      setSmallCalendarMonth,
      daySelected,
      setDaySelected,
      showEventModel,
      setShowEventModel,
      saveEvent,
      dispatchCalEvent,
      selectedEvent,
      setSelectedEvent,
      labels,
      setLabels,
      updateLabel,
      filteredEvents
    }} >
      {props.children}
    </GlobalContext.Provider>

  )
}

export default ContextWrapper