function getDate(){
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-IN", option);
    return day;
}    
