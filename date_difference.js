function dateDifference(props) {


    let currDate = new Date();

    //Object with the properties of current date
    let currDateObj = {
        months: currDate.getMonth() + 1,
        days: currDate.getDate(),
        hours: currDate.getHours(),
        mins: currDate.getMinutes(),
    }

    //Object with properties of the current date of when the comment was posted
    let commentObj = {
        months: props.month,
        days: props.day,
        hours: props.hour,
        mins: props.min,
    }

    //Calculating the time difference between comment posting date and current date
    let timeSinceObj = {
        months: currDateObj.months - commentObj.months,
        days: currDateObj.days - commentObj.days,
        hours: currDateObj.hours - commentObj.hours,
        mins: currDateObj.mins - commentObj.mins
    }

    //call the function which will return time since posted in the appropriate form
    timeSince(timeSinceObj);
}