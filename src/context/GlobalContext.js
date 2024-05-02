import React from 'react'
const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{},
    smallCalendarMonth:0,
    setSmallCalendarMonth:(index)=>{},
    daySelected : null,
    setDaySelected:(day)=>{},
    showEventModel : false,
    setShowEventModel:(value)=>{},
    saveEvent:[],
    dispatchCalEvent:({type,payload})=>{},
    selectedEvent:null,
    setSelectedEvent:(event)=>{},
    labels:[],
    setLabels:(labels)=>{},
    updateLabel:(label)=>{},
    filteredEvents:[],
    


});

export  {GlobalContext}