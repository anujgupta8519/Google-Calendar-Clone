import dayjs from "dayjs";


export const getMonth= (month = dayjs().month())=>{
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayofMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount =0 - firstDayofMonth;
    const daysmatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount))
        });
    });

    return daysmatrix;




}