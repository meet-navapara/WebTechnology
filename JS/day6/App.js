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

// function Agecal()
// {
//     let todayDate=new Date()
//     let UserDate=document.getElementById('date').value
//     let birthdate = new Date(UserDate)
    // console.log(birthdate);
//     let diffYear = todayDate.getFullYear()-birthdate.getFullYear()
//     if(todayDate.getMonth()<=birthdate.getMonth())
//     {
//         diffYear=diffYear-1
//     }
    // console.log(diffYear);
//     let diffMonth=todayDate.getMonth()-birthdate.getMonth()
//     if(diffMonth<=0)
//     {
//         diffMonth=11+diffMonth
//     }
    // console.log(diffMonth);
//     diffDay=birthdate.getDate()-todayDate.getDate()
//     console.log(diffDay);
   
//     if(diffDay<0)
//     {
//         if(todayDate.getMonth()==0||todayDate.getMonth()==2||todayDate.getMonth()==5||todayDate.getMonth()==6||todayDate.getMonth()==7||todayDate.getMonth()==9||todayDate.getMonth()==11)
//         {
//             diffDay=31+diffDay
//         }
//         else if(todayDate.getMonth==1)
//         {
//             diffDay=28+diffDay
//         }
//         else
//         {
//             diffDay=30+diffDay
//         }
    
//     }
    // console.log(diffDay);
//     if(diffMonth==11&&diffDay==0)
//     {
//         diffMonth=0
//         diffYear=diffYear+1
//     }

//     console.log(diffDay);
//     console.log(diffMonth);
//     console.log(diffYear);
    
// }






// console.log(a);
// function bubbleSort()
// {

//     for (let j=0;j<a.length;j++)
//     {
//         for (let i = 0;i < a.length;i++) {
           
//             if(a[i] >= a[i+1])
//             {
//                 [a[i+1],a[i]]   =    [a[i],a[i+1]]
//             } 
//         }
//     }
//    console.log(a);
  
// }
// bubbleSort()



// function search()
// {
//     for(let i = 0;i<a.length;i++)
//     {
//         if(57 == a[i])
//         {
//             console.log(`57 is at ${i} position` );
//            break; 
//         }
        
        
//     }
// }

// search()


// function BinarySearch(x)
// {
    
//     let low = 0;
//     let high=a.length-1;
//     let mid;
//     while(high>=low)
//     {
//          mid = Math.trunc((high+low)/2)
    
//     let num=a[mid]
//     if(num==x)
//     {
//        return mid
//     }
//     if(num>x)
//     {
//         high=mid-1
//     }
//     else
//     {
//         low = mid +1
//     }

// }
// }
// console.log(BinarySearch(1))

// function InsertionSort()
// {
   
//     for (let i = 0;i<a.length;i++)
//     {
//         let count =0;
//         if(a[i]>a[i+1])
//         {
//             [a[i+1],a[i]]   =    [a[i],a[i+1]]
//             count++;
//         }
       

//     }
//     console.log(a);
// }
// InsertionSort()

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       for (let j = i; j > 0; j--) {
//         if (arr[j] < arr[j - 1]) {
//           [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//         } else {
//           break;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const a = [1, 2, 4, 3, 5, 0, 6, 9, 8, 10, 0, 12];
//   insertionSort(a);
//   console.log(a);
// function InsertionSort()
// {
  // for(let k=0;k<a.length;k++){
    //     for(let j=0;j<a.length-k;j++)
//     {
//       for(let i=j;i>=0;i--)
//       {
//         if(a[j]<a[i])
//         {
//           let temp =a[j];
//           a[j]=a[i];
//           a[i]=temp
//         }
      
//       }
            

//     }
// }
//     console.log(a);
// }
// InsertionSort()



// function quickSort(arr) {
    
//     if (arr.length <= 1) {
//       console.log(arr.length);
//       console.log(arr);
//         return "";
//       }

//   let pivot = arr[0];
//   let left = [];
//   let leftindex=0;
//   let rightindex=0;
//   let right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//         left[leftindex]=arr[i]
//       leftindex++;
//     } else {
//      right[rightindex]=arr[i]
//      rightindex++;
//     }
//   }



//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [1,2,0,4,3,5,0,6,9,8,6,10,0,12,11];
// let sortedArray = quickSort(arr);
// console.log(sortedArray);


// let a=[35,15,25,80,90,45]

// function Quicksort(a)
// {
  
  
//   let pivot=a[0]
  
//   let P;
//   let Q;
  
//   for(let i=1;i<a.length;i++)
//   {
//     if(a[i]>pivot)
//     {
//      P=i
//      break; 
//     }
//   }
//   console.log(P);
//   for(let j=a.length-1;j>=0;j--)
//   {
//      if(a[j]<pivot)
//      {
//       Q=j
//       break;
//      }

//   }
//   console.log(Q);
//   if(P<Q)
//   [a[P],a[Q]]=[a[Q],a[P]]
//   else{
//     [a[Q],a[0]]=[a[0],a[Q]]
//   }
//   console.log(P,Q);
//   console.log(a);

 
// }
// console.log(Quicksort(a));


// let a=20
// let student=
// {
//   a
// }
// console.log(student);



let selection=[2,4,3,6,5,8,7,5,9]
function SelectionSort(arr)
{
let min;
for(let i=0;i<arr.length;i++)
{

  min=i;
  for(let j=i+1;j<arr.length;j++)
    { if(arr[j]<arr[min])
      {
        min=j
      }  
} 
if(i != min)
{
  arr[i]=arr[i]+arr[min]
  arr[min]=arr[i]-arr[min]
  arr[i]=arr[i]-arr[min]
}
}
console.log(arr);
}
SelectionSort(selection)