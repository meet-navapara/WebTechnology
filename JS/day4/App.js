//* rules of identifier 

console.log(null ** null);
console.log(null * null);


console.log(Math.floor(Math.random()*1000000));
function validation(e)
{   
    let count=0;
    let D= JSON.parse(localStorage.getItem('data')) || []

    // e.preventDefault();
    let UserName=document.getElementById('name')
    let Password=document.getElementById('pass1')
    let MobileNumber=document.getElementById('Mobile')

    let uSpan=document.getElementById('Username')
    let pSpan=document.getElementById('Password')
    let mSpan=document.getElementById('MobileNumber')

    let Profession=document.getElementById('Profession').value
    let Uname=document.getElementById('name').value
    let pass=document.getElementById('pass1').value
    let Mobile=document.getElementById('Mobile').value

    if(Uname=="")
    {
        UserName.className="input"
        uSpan.innerText="Enter Your Name"

        return false
    }
    else if(!/^[A-Za-z]+$/.test(Uname))
    {
        UserName.className="input"
        uSpan.innerText="Enter Valid Name"
       
        return false

    }
    else
    {
        UserName.className=""
        uSpan.innerText=''
        // localStorage.setItem('name', Uname)
    }



    if(pass=="")
    {
        Password.className='input'
        pSpan.innerText="Enter Password"
        return false

    }
    else if(!/^[A-Za-z0-9]+$/.test(pass))
    {
        Password.className='input'

        pSpan.innerText="Enter Valid Password"
       
        return false

    }
    else if(pass.length != 8)
    {
        Password.className='input'
        pSpan.innerText="password Length must be 8 character"

        return false
    }
    else
    {
        Password.className=''
        pSpan.innerText=""

        // localStorage.setItem('pass', pass)
    }


    if(Mobile=="")
    {
        MobileNumber.className="input"
        mSpan.innerText="Enter Mobile Number"
      
        return false

    }
    else if(!/^[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$/.test(Mobile))
    {
        MobileNumber.className="input"
        mSpan.innerText="Enter Valid Number"

    
        return false

    }
    else if(Mobile.length != 10)
    {
        MobileNumber.className="input"
        mSpan.innerText='Number Length must be 10 digits'

      
        return false
    }
    else
    {
        MobileNumber.className=""
        mSpan.innerText=''

        // localStorage.setItem('Mobile', Mobile)
    }  
    for (const {name} of D) {
        if(Uname==name)
        {
       alert('User already registered');
        count++;

        break;
        }
    }
    if(count == 0)
    {
    D.unshift({name:Uname,pass:pass,Profession:Profession})
    localStorage.setItem('data',JSON.stringify(D)) || []            
    }
     document.getElementById('name').value=''
     document.getElementById('pass1').value=''
     document.getElementById('Mobile').value=''
    // console.log(Userdata);
}




function login(e)
{
    let count=0
    // e.preventDefault()
    let name1=document.getElementById('name1').value
    let pass1=document.getElementById('pass1').value
    let D= JSON.parse(localStorage.getItem('data')) || []
for (const {name,pass} of D) {
    if(name1==name && pass1==pass)
    {
       count++;
    }  
}
if(count==0)
{
    alert("enter valid details")
    return false
}
}





function showPassword(obj)
{
    let pass = document.getElementById('pass1')
    console.log(pass);
    if(pass.type=='password')
    {
        pass.type='text'
    }
    else{
   pass.type='password'
    }   
}
