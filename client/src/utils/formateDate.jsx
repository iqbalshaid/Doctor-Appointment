export const formateDate = (Date,config)=>{
    const defaultOptions = {day:"numeric",month:"Long",year:"numeric"}
    const options = config ? config : defaultOptions
    return new Date(Date).toLocalDateString("en-INDIA",options)
}