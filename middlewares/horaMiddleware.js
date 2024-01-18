const getTime = (req, res, next)=>{
    const time = new Date();
    const hours = time.getHours().toString();
    const minutes = time.getMinutes().toString();
    let hoursCheck, minutesCheck;

    hours.length == 1 ? hoursCheck = '0'+ hours : hoursCheck =  hours
    minutes.length == 1 ? minutesCheck = '0'+ minutes : minutesCheck =  minutes
    
    req.rightnow = `${hoursCheck}:${minutesCheck}`
    next();
}

module.exports = getTime;