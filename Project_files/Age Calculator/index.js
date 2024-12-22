 //console.log("checking");
let input_date=document.querySelector('#dob');
let button=document.querySelector('#btn');
let message=document.querySelector('.msg');
let birth_date;

// getting the current date
let curr_year= new Date().getFullYear();
let curr_month=new Date().getMonth()+1;
let curr_date=new Date().getDate();
// console.log(curr_year,curr_month,curr_date);


function solution(birth_date)
{
   let age;

    if(birth_date.length!=0)
        {
            birth_date=new Date(birth_date);
           let year=curr_year-birth_date.getFullYear();
           let month=curr_month-(birth_date.getMonth()+1);
           let day=curr_date-birth_date.getDate();
           console.log("processing...");

           // Adjust month and year if the current month or day is earlier than the birth month/day
        if (month < 0) {
            month += 12; // Adjust for negative months (if the current month is before the birth month)
            year -= 1; // Reduce the year by 1
        }

        if (day < 0) {
            // If the current day is less than the birth day, adjust by adding the days in the previous month
            let lastMonth = new Date(curr_year, curr_month - 1, 0); // Get last day of the previous month
            day += lastMonth.getDate(); // Add days from the last month
            month -= 1; // Decrease the month by 1
            if (month < 0) {
                month = 11; // Adjust month if it's negative
                year -= 1; // Reduce the year by 1
            }
        }
           age=`You are ${year} year , ${month} month and ${day} days old .`;
           console.log(age);
           message.innerHTML=age;
        }
        else{
            age="Please Enter the vaild Age !";
            message.innerHTML=age;
            console.log(age);
            alert(age);
        }
        
    }
button.addEventListener('click',()=>{
  
   // console.log(input_date.value);
    solution(input_date.value);
});





