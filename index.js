function calculate(){
    // alert('hi')
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    date = parseInt(date);
    month = parseInt(month);
    year = parseInt(year);
    
    console.log(date,month,year);

    let warningdate = document.getElementById('warning-date').innerText;
    let warningmonth = document.getElementById('warning-month').value;
    let warningyear = document.getElementById('warning-year').innerText;

    // console.log(warningdate)
    if(warningdate||warningmonth||warningyear||year==NaN||date==NaN||month==NaN){
        alert("Enter Correct Details");
        
    }
    
    let now = new Date();
    // console.log(now.getSeconds());
    let time = new Date();
    time.setDate(date);
    time.setMonth(month-1);
    time.setFullYear(year);
    let diff = (now-time)/1000
    let dayCon = (24*60*60);
    let monCon = dayCon*30;
    let yearCon = monCon*12;

    let finYears = parseInt(diff/yearCon);
    let remMonth = diff-(finYears*yearCon);
    let finMonth = parseInt(remMonth/monCon);
    let remDays =  diff-(finYears*yearCon+finMonth*monCon);
    let finDays = parseInt(remDays/dayCon)
    console.log(finYears,finMonth,finDays);
    let result = document.getElementById('result');
    result.innerText = `Your Age is ${finYears} Years, ${finMonth} Months and ${finDays} Days!!!`

    


}

function checkDate(){
    let date = parseInt(document.getElementById('date').value);

    if(date<1||date>31){
        let warningdate = document.getElementById('warning-date');
        warningdate.innerText = "Enter Valid Date"
    }
}
function checkMonth(){
    
    let month = parseInt(document.getElementById('month').value);

    if(month<1||month>12){
        let warningmonth = document.getElementById('warning-month');
        warningmonth.innerText = "Enter Valid Month"
    }
}
function checkYear(){
    let now = new Date();
    let nowyear = now.getFullYear();
    let year = parseInt(document.getElementById('year').value);

    if(year>nowyear){
        let warningyear = document.getElementById('warning-year');
        warningyear.innerText = "Enter Valid Year"
    }
    
    // console.log(year)
}

// let now = new Date();
// let now1 = new Date();
// now1.setFullYear(2023);

// console.log(now1);