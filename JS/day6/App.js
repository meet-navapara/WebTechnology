// // "use strict"
// console.log("Hello");
// document.write("Scopes")
// abc=10
// var let = 10

// var a = 10;
// console.log(a);

// let b =20;
// console.log(b);



// var aa = 10
// let bb = 11
// const cc = 13
// //* block scope start
// {
//     console.log(aa);
//     console.log(bb);
//     console.log(cc);
//      ab= 10;
   
// }
// //* block scope ends 

// //* function scope starts
// function demo()
// {
//     console.log(aa);
//     console.log(bb);
//     console.log(cc);
//     var d1=10
//     let d2=30
//     const d3=35
//     console.log(d1);
// }
// demo()
// // console.log(ab);

// x=0;
// y=0;
// x = x + ++x - ++x + --x +y//? 0

// y = --y - ++x - ++y - x++ + x++ - x++ -y ;//? -4
// x = --x - ++x + --y + ++x -y +x +1 + --y;//? 0
// y = x + y + ++y + y++ - x++ + --y  + 2 + x++;//? 6
// x = -y - x-- + x++ -x++ - ++y - ++x - --y;//? -4
// x = --x + ++x - --y - ++x + y - x -1 - --y//? -2
// console.log(y + x + ++x + x++ + --x + 2 + --y);//? 4
// console.log(x + y++ - y-- + y-- + --x + --y + ++x);//? -4
// console.log(x);



// let i;
// for (i=1;i<=90;i++)
// {
//     if(90%i===0)
//     {
//         console.log(i);
//     }
// }
// let i;
// for (i=1;i<=90;i++)
// {
//     if(i%3===0)
//     {
//         console.log(i);
//     }
// }

// let i;
// let count = 1;
// for (i=9;i>=1;i--)
// {
//     count = count*i;
// }
// console.log(count);

// let count = 0;
// let number = Number(prompt("enter value"))
// let i;
// for (i = 0; i<=number ; i++)
// {
//     if(number%i === 0)
//     {
//         count++;
//     }
// }
// if(count===2)
// {
// console.log("prime number");
// }
// else
// console.log("not a prime");


// function multi(a = 0,b = 0)
// {
//     for(let i = 1;i<=b;i++)
//     {
//         if(i%a===0 && i%(a*2)==0)
//         {
//             console.log(i);
//         }
//     }
// }
// multi(5,200)

 
// function fect(a=0)
// {
//     let count=1;
//     for(let i = 1;i<=a;i++)
//     {
//         if(count<=3){
//         if(a%i==0)
//         {
            
//             console.log(i);
//             count++;
//         }
//     }
// }
// }
// fect(50);

function Agecal()
{
    let todayDate=new Date()
    let UserDate=document.getElementById('date').value
    let birthdate = new Date(UserDate)
    // console.log(birthdate);
    let diffYear = todayDate.getFullYear()-birthdate.getFullYear()
    if(todayDate.getMonth()<=birthdate.getMonth())
    {
        diffYear=diffYear-1
    }
    // console.log(diffYear);
    let diffMonth=todayDate.getMonth()-birthdate.getMonth()
    if(diffMonth<=0)
    {
        diffMonth=11+diffMonth
    }
    // console.log(diffMonth);
    diffDay=birthdate.getDate()-todayDate.getDate()
    console.log(diffDay);
   
    if(diffDay<0)
    {
        if(todayDate.getMonth()==0||todayDate.getMonth()==2||todayDate.getMonth()==5||todayDate.getMonth()==6||todayDate.getMonth()==7||todayDate.getMonth()==9||todayDate.getMonth()==11)
        {
            diffDay=31+diffDay
        }
        else if(todayDate.getMonth==1)
        {
            diffDay=28+diffDay
        }
        else
        {
            diffDay=30+diffDay
        }
    
    }
    // console.log(diffDay);
    if(diffMonth==11&&diffDay==0)
    {
        diffMonth=0
        diffYear=diffYear+1
    }

    console.log(diffDay);
    console.log(diffMonth);
    console.log(diffYear);
    
}