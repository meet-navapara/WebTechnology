//! datatypes


// //* number
// let a = 10
// console.log(a);

// //* string
// let b = "hello"
// console.log(b);

// //* boolean
// let c = true;
// console.log(c);

// //* Bigint
// let d =111111111111111111111111111111111n
// console.log(d);

// //* undefined
// let f= undefined
// console.log(f);

// //* null
// let g = null
// console.log(g);

// //*symbol
// // let h = Symbol(a);
// // console.log(h);



//& examples
// console.log("hello");
// console.log(1+ +'3'+'2');
// console.log('9'-"hi");
// console.log('3' + +3);
// console.log(3 + + "3");
// console.log(window);x
// console.log(typeof 3 ); 
// console.log(typeof "hello");
// console.log(typeof 1*3);
// console.log("10"+"hello");
// console.log(typeof window);
// console.log(typeof this);
// console.log(typeof String());
// console.log(Date());


// //? prove that window and this keyword both are same 
// var ab = window == this

// console.log(ab);

// console.log(window);
// console.log(this);

// var first = Number(prompt("enter value"))
// console.log(first);


// console.log("3"+ + 3);
// console.log(3 + + "3");



// var a= 21;
// var girl = function()
// {
//     console.log(a);
//     //  var a = 20;
// }
// girl()
// let a=10;


// let a = "JAVASCRIPT"
// for (let i = a.length-1; i<=a.length;i--)
// {
//     console.log(a[i]);
//     if(i===0)
//     {
//         break;
//     }
// }


// for(let i = 65 ; i<=90;i++)
// {
//     console.log(i,String.fromCharCode(i))
// }

// console.log(String.fromCharCode(1));


// let a = "javascript"
// let b = 'jav'

// for(let i = 0;i<a.length;i++)
// {
//     if(b ===a[i]+a[i+1]+a[i+2])
//     {
//         console.log("yes");
//         break;
//     }
//     if(i===a.length-1)
//     {console.log("no");}
    
// }

// let a="mom"
// let b=a.length-1
// let concat="";
// for(i=b;i>=0;i--)
// {
//     console.log(a[i]);
//     concat=concat.concat(a[i])
    // console.log(concat);
//     if(concat==a)
//     {
//         console.log("yes");

//     }

// }

// let a = "MEET2PATEL12678f7";

// for(let i = 0;i<a.length;i++)
// {
//     if(a.charCodeAt(i)>=45 && a.charCodeAt(i)<=58)
//     {
//         console.log(a[i]);
//     }
// }



// let s='Sanngeetaa';
// let newString="";
// for (let i = 0 ; i<s.length;i++)
// {
//     if(newString.length == 0)
// {
//     newString= newString+s[i]
// }
// else
// {
//     for(let j = 0;j<newString.length;j++)
//     {
//         if(newString[(newString.length-1)]===s[i])
//         {
//          break;
        
//         }
//         if(j === newString.length-1)
//         {
//             newString=newString+s[i]
//         }
        
//     }
// }

// }
// console.log(newString);

// let s = "Meet"
// let res = Array.from(s).reverse().join("")
// console.log(res);


// let total = function(a)
// {
//     let sum=0;
//     for(let index in a)
//     {
//         sum=sum+a[index]
//     }
//     return sum;
// }

// console.log(total([1,2,3,4]))

// let products=['Meet','Mahi','Rohit','Maxwell','Mummy','Siraz']
// let newProduct=[]

// for(let i of products)
// {
//     if(i[0]=='M'){
//     newProduct.push(i)
//     }
// }



// console.log(newProduct);

// let res = products.filter(newarray => newarray.startsWith('M'))
// console.log(res);



// let num = [6,4,1,2,25,3,4,5]
// let res = new Set(num);
// console.log(res);
// let newNum= Array.from(res)
// console.log(newNum.sort((a,b)=> a-b));


// let num = [4,6,[3,6,7],6,[6,5,['meet',['pratvi']],9]];
// console.log(num.flat(6).at(8));
// console.log(num.flatMap(number => number).map(number=> number+5));



// let mobile = {
//     name : 'iphone13',
//     price : {small:65000,medium:75000,large:85000}
// }
// console.log(mobile.price?.small);


// let color = ['red','yellow','pink']
// let favcolor = color.splice(0)
// console.log(favcolor);
// favcolor.push("orange")
// console.log(favcolor);


// let Products = [
//     {
//         name:'redmi Mobile',
//         price:'10000'
       
//     },
//     {
//         name:'OPPP Mobile',
//         price:'15000'
       
//     },
//     {
//         name:'Laptop',
//         price:'20000'
       
//     },
//     {
//         name:'Mouse',
//         price:'23000'
       
//     },
//     {
//         name:'Keyboard',
//         price:'14000'
       
//     },
//     {
//         name:'CPU',
//         price:'30000'
       
//     },
//     {
//         name:'CPU',
//         price:'36000'
       
//     },
//     {
//         name:'CPU1',
//         price:'36000'
       
//     },
// ]


// let details= document.getElementById('details')
// let total=document.getElementById('total')
// for (const {name,age,dept} of students) {
//     details.innerHTML+=
//     `
//     <tr>
//     <td>${name}</td>
//     <td>${age}</td>
//     <td>${dept}</td>     

//     </tr>
//     `
// }
// Products.filter((ele,index) =>
//     {
//         return  details.innerHTML +=
//             `
//             <tr>
//             <td class='td'>${index+1}</td>
//             <td class='td'>${ele.name}</td>
//             <td class='td'>${ele.price}</td>
           
        
//             </tr>
//             `
//     })
// function search()
// { 
    
     
//     details.innerHTML=""
//     let pricetotle=0
//     let count = 0;
//     let searchname = document.getElementById('search').value
//     console.log(searchname);
//     Products.filter((ele,index) =>
//         {
//             if(ele.name.includes(searchname))
//             {
//                 count++;
//                 pricetotle += Number(ele.price)
//              return details.innerHTML+=
//             `
//             <tr>
//             <td class='td'>${index}</td>
//             <td class='td'>${ele.name}</td>
//             <td class='td'>${ele.price}</td>
//             </tr>
//             `
//             }
           
            
//         },
//         )
       
//         total.innerText="TOTAL IS :"+pricetotle
//         document.body.append(total)
       
// }

// function search()
// {
//     details.innerHTML=""
//     let searchname = document.getElementById('search').value
//     let filterProducts=Products.filter(({name})=>name.toLocaleLowerCase().includes(searchname.toLocaleLowerCase()))
//     let productPrice=filterProducts.map(({price})=>Number(price))
//     let TotalProductPrice=productPrice.reduce((a,b)=>{return a+b},0)
//     total.innerText=TotalProductPrice
//     if(!filterProducts.length)
//     {
//     details.innerHTML=`<tr><td>${searchname} Not Found</td> </tr>`
//     }
//     filterProducts.map((ele,index)=>{
//         return  details.innerHTML+=
//         `
//         <tr>
//         <td class='td'>${index}</td>
//         <td class='td'>${ele.name}</td>
//         <td class='td'>${ele.price}</td>
//         </tr>
//         `
//     })
// }


// let color = ['red','pink',['green','green1']]
// let [,p,[g1,g2]]=color
// console.log(g1,g2);



// let [{name},...e]=students;
// console.log(e);
// console.log(students);
// console.log(students.filter(ele=>{
//     if(ele.dept=='ise' ||  ele.dept=='bca')
//     {
//         return ele.dept
//     }
// }));
// console.log(students.map(ele=>ele.name.toUpperCase()));
// console.log(students.filter(ele=>ele.age<=20));
// console.log(students.filter(ele=>ele.dept!='civil'));

// for (const student of students) {
//     console.log(student.name);
    
// }
// for (const i of students) {
    
//    if(i.dept=='cse')
//    {
//     console.log(i.name);
//    }
// }
// let uppercaseArray=[]
// for (const student of students) {
    

//     uppercaseArray.push(student.name.toUpperCase());
// }
// console.log(uppercaseArray);


// for (const student of students) {
//     if(student.age <20)
//     {
//         console.log(student.name);
//     }
// }
// for (const student in students) {
//     if(students[student].dept=='civil')
//     {
//         students.splice(student,1)
//     }
// }

// console.log(students);
    

// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(function(){return 4},3));

// console.log(sum);


// function getdate()
// {
//     let d = new Date()
//     let year = d.getFullYear();
//     let month = d.getMonth()+1
//     if(month >0 && month <10)
//     {
//         month = "0"+month
//     }
//     let day = d.getDate()
//     let weekday = d.getDay()
//     let dayname = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

//     let date = `${year}/${month}/${day}`
//     return date+"   "+dayname[weekday]
// }

// console.log(getdate());




// function getdate2()
// {
//     let d = new Date()
//     let year = d.getFullYear();
//     let month = d.getMonth()+1
//     switch (month)
//     {
//             case 1 :
//             month = 'jan'
//             break;
//             case 2 :
//             month = 'fab'
//             break;
//             case 3 :
//             month = 'mar'
//             break;
//             case 4 :
//             month = 'apr'
//             break;
//             case 5 :
//             month = 'may'
//             break;
//             case 6 :
//             month = 'june'
//             break;
//             case 7 :
//             month = 'jul'
//             break;
//             case 8 :
//             month = 'Aug'
//             break;
//             case 9 :
//             month = 'sept'
//             break;
//             case 10 :
//             month = 'oct'
//             break;
//             case 11 :
//             month = 'nov'
//             break;
//             case 12 :
//             month = 'dec'
//             break;
//     }
    
//     let day = d.getDate()
//     let date = `${year}/${month}/${day}`
//     return date 
// }

// console.log(getdate2());




// function getdate3()
// {
//     let d = new Date()
//     let year = d.getFullYear();
//     let month = 12
//      switch (month)
//     {
//         default:
//             console.log('default');
//            break;
//             case 1 :
//             month = 'jan'
//             break;
//             case 2 :
//             month = 'fab'
//             break;
//             case 3 :
//             month = 'mar'
//             break;
//             case 4 :
//             month = 'apr'
//             break;
//             case 5 :
//             month = 'may'
//             break;
//             case 6 :
//             month = 'june'
//             break;
//             case 7 :
//             month = 'jul'
//             break;
//             case 8 :
//             month = 'Aug'
//             break;
//             case 9 :
//             month = 'sept'
//             break;
//             case 10 :
//             month = 'oct'
//             break;
//             case 11 :
//             month = 'nov'
//             break;
//             case 12 :
//             month = 'dec'
//             break;
//     }

//     let day =d.getDate()
//     let date = `${day}/${month}/${year}`
//     return date 
// }

// console.log(getdate3());


//     let capA = str => {
//         let name = "";
//         let count =1 ;
//         for(let i = 0; i<str.length;i++)
//         {
//             console.log(str[i]);
           
              
//             if(str[i] == 'e')
//             {
//                 if(count<=2)
//             {
//                 name=name+'E'
//                 count++;

//             }
//             else
//             {
//                 name=name+str[i]
                
//             }
//             }
//         else
//         {
            
//             name=name+str[i]

//         }

            
//         }
//         console.log(name);
//     }
//   capA('Meeet')


// function theam ()
// {
//     let theam = document.getElementById("dark");
//     if(theam.id === 'dark')
//     {
//         document.body.style.backgroundColor='black'
//         theam.id = 'white'
        
//     }
//     else
//     {
//         document.body.style.backgroundColor='white'
//         theam.id = 'dark'
//     }
// }

// function show ()
// {
//     let image = document.getElementById('img')
//     image.style.visibility='visible'
    
    
// }
// function hide ()
// {
//     let image = document.getElementById('img')
//     image.style.visibility='hidden'
// }



// function toggle()
// {
//     let image = document.getElementById('img2')
    
//    let Btn = document.getElementById('btn')

//     if(Btn.innerText === 'show')
//     {
       
//         image.style.visibility='inherit'
//         Btn.innerText = 'hide'

        

//     }
//     else
//     {
     
//         image.style.visibility='hidden'
//         Btn.innerText='show'
        
//     }
// }

// let section = document.getElementById('seaction')



// let imgArray = [
//     'https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_640.jpg',
//     'https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_640.jpg',
//     'https://cdn.pixabay.com/photo/2023/03/28/07/51/trees-7882545_640.jpg'
// ]
// let countImg=0
// let intervalImg;

// section.addEventListener('mouseenter',stopImg)

// function auto (){
//     console.log('hello');
//     intervalImg = setInterval(()=>{
//         let sliderimg=document.getElementById('sliderImg')
//         countImg++;
//         if(countImg==imgArray.length)
//         {
//             countImg = 0
//         }
//         sliderimg.src =imgArray[countImg]},1000)
  

// }
// auto()

// function stopImg(){
//     clearInterval(intervalImg)
// }

// function next()
// {
//     clearInterval(intervalImg)
//     let sliderimg=document.getElementById('sliderImg')
//     countImg++;
//     if(countImg>=imgArray.length)
//     {
//         countImg = 0
//     }
//         sliderimg.src =imgArray[countImg]

    

// }
// function pre()
// {
//     clearInterval(intervalImg)
//     let sliderimg=document.getElementById('sliderImg')
//     countImg--;
//     if(count < 0)
//     {
//         countImg= imgArray.length-1;
//     }
     
//         sliderimg.src =imgArray[countImg]

   
// }






// let btn=document.getElementById("btn");
// let counter = document.getElementById("counter")
// let stop = document.getElementById('stop')

// let countvalue = 0

// function counts()
// {
    // console.log('click');
//     ++countvalue;
//     if(countvalue<=10)
//     counter.innerText=countvalue;
//    if(countvalue === 10)
//    {
//     stop.style.visibility='hidden';
//    }
// }
// // btn.addEventListener("click",)

// function decrement()
// {
//     --countvalue
//     if(countvalue<=0)
//     {
//         countvalue=0
       
//     }
//     counter.innerText=countvalue;
  
// }


// function removeclick()
// {
//     btn.removeEventListener("click",counts)
//     btn.style.visibility='hidden'
// }




// let body = document.body

// let form=document.createElement('form')

// let user = document.createElement('input')
// user.type='text';
// user.placeholder="username"


// let hr=document.createElement('hr')

// let pass=document.createElement('input')
// pass.type= 'password'
// pass.placeholder='password'


// body.prepend(form)
// form.append(user,hr,pass)


// let interval;
// let count=0
// function counter()
// {
//     console.log(++count);
//     if(count==4)
// {

//     clearInterval(interval)
// }
// }
// interval=setInterval(counter,1000)

// let s='java'
// let test=
// {
//     name:'Meet',
//     age:21
// }
// console.log(Array.from(test
//     ));
//     console.log(typeof NaN);

// let a =['a',['b'],'c'];
// let b = a.map(ele=>String(ele).toUpperCase())
// console.log(b);

// let name1='meet';
// console.log(name1[0].toUpperCase()+name1.slice(1));


// let meet=new Array('1','2')
// console.log(meet); 

// let sorting=[1,3,2]
// let aaaa=sorting.sort((a,b)=>a-b)
// console.log(aaaa);



// let user = fetch('https://api.github.com/users')
// let userData=[]
// user.then(data=>
//     {
//         return data.json()
//     }).then(udata=>

//         {
//             for (const uData of udata) {
//                 userData.unshift(uData)
                
//             }
          
//         }).then(()=>{
//             console.log(userData.length);
//         }).then(()=>{
//             let Userdetails= document.getElementById('Userdetails')
//             userData.map((ele,index) =>
//                 {
//                     return  Userdetails.innerHTML +=
//                         `
//                         <div class="c-work" >
//                         <div class="c-work-img">
//                         <img src="${ele.avatar_url}" alt="">
//                       </div>
//                       <h1>${ele.login}</h1>
                     
//                     </div>
//                     </div>
//                         `
//                 })
//         }).catch(err=>console.log(err))


// let ProductDesign=document.getElementById('ProductDesign')

// let ProductAPI=fetch('https://fakestoreapi.com/products')
// let ProductDATA=[]

// ProductAPI.then(data=>data.json()).then(Pdata=>{
//     for (const pData of Pdata) {
//         ProductDATA.push(pData)
        
//     }

// }).then(()=>console.log(ProductDATA.length)).then(()=>
// {
   
//     ProductDATA.map((ele,index)=>
//     {
//         return ProductDesign.innerHTML +=
//         `
//         <div class="main">
//         <div class="img">
//             <img src="${ele.image}" alt="">
//         </div>
//         <div class="data">
//         <h2>${ele.title}</h2>
//             <p>${ele.description}</p>
//         </div>
//         <div class="price">
//         <h1>${ele.price}$</h1></div>
//       </div>`
//     })

// })



let weatherdata=document.getElementById('weatherdata')
let city=""
async function weather()
{
    try{
 city=document.getElementById('cityname').value
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=280ff9700a7c2f14d2103d3f78f2e5b4`
    let weatherApi=await fetch(api)
    weatherApi=await weatherApi.json()
   
    weatherdata.innerHTML=
    `
    <h2>City : ${weatherApi.name}</h2>

    <h2>Country : ${weatherApi.sys.country}</h2>
    <h2><i class="fa fa-sun-o sun" aria-hidden="true"></i>  temprature : ${weatherApi.main.temp}</h2>
    <h2>  <i class="fa fa-cloud cloud" aria-hidden="true"></i> wind : ${weatherApi.wind.speed}
    </h2>
    <h2><img src="../day5/humidity-svgrepo-com (1).svg" height=40px width=50px> humidity : ${weatherApi.main.humidity}</h2>
    `
  
    }
    catch(e)
    {
        weatherdata.innerHTML=
        `
        
        <h1>NO DATA FOUND</h1>`
    }



}
// if(city != "")
// {
//  setInterval(weather,2000)
// }



async function MovieData()
{
  try
  {
    let MovieName=document.getElementById('MovieName').value
    let MovieApi= await fetch(`http://www.omdbapi.com/?s=${MovieName}&apikey=56900ae3`);
    MovieApi = await MovieApi.json();
    console.log(MovieApi);
    MovieApi.Search.map(ele=>
        {
            console.log(ele.Title);
        })
  }
  catch(ele)
  {
    console.log(ele);
  }
}



console.log('Meet'.match(/[A-Z]/i));
console.log('Meet'.match(/[A-Z]/g));
console.log('Meet'.match(/[A-Z]/gi));
