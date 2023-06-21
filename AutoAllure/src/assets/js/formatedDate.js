const getStringFormatedDate = (startDate,endDate)=>{
    let startDay = startDate.getDate()<10?"0"+startDate.getDate():startDate.getDate()
    let startMonth = startDate.getMonth()+1<10?"0"+(startDate.getMonth()+1):startDate.getMonth()+1
    let startYear = startDate.getFullYear()

    let endMonth = endDate.getMonth()+1<10?"0"+(endDate.getMonth()+1):endDate.getMonth()+1
    let endDay = endDate.getDate()<10?"0"+endDate.getDate():endDate.getDate()
    let endYear = endDate.getFullYear()

    return ({"today": startYear+"-"+startMonth+"-"+startDay,"next": endYear+"-"+endMonth+"-"+endDay})
}


const dayPropertyse = (type,count)=>{
    let today = new Date()
    let tomorrowDay = new Date(today.setDate(today.getDate()+1))
    
    let endDate='';
    if(type==="month"){
        endDate= new Date(tomorrowDay.setMonth(tomorrowDay.getMonth()+count))

        today = new Date()
        tomorrowDay = new Date(today.setDate(today.getDate()+1))
    }else if(type==="day"){
        endDate= new Date(tomorrowDay.setDate(tomorrowDay.getDate()+count))

        today = new Date()
        tomorrowDay = new Date(today.setDate(today.getDate()+1))

    }else if(type ==="week"){
        let day = tomorrowDay.getDay()
        let diff = tomorrowDay.getDate() + (8-day)

        tomorrowDay.setDate(diff)


        let endNextWeek = new Date(tomorrowDay)
        endNextWeek.setDate(endNextWeek.getDate()+6)

        endDate = new Date(endNextWeek) 

        
    }

    return getStringFormatedDate(tomorrowDay,endDate)
}

export {getStringFormatedDate,dayPropertyse}