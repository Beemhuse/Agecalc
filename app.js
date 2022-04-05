// We start by declaring the variables to interact with the DOM

let ageText=document.getElementById('ageText');
let myAge=document.getElementById('myAge');
let submit = document.getElementById('btnClick')
let newText=document.getElementById('alert')
let year=2022
let warning= document.getElementById('warning')
let success=document.getElementById('success')

// We create a function called guessmyage() that is responsible for carrying out the operation
const guessMyAge = () =>{
// Using an addeventlistener to listen to the event that occurs in the agetext input field
    ageText.addEventListener('click', ()=>{
        ageValue=ageText.value
        console.log(ageValue)      
    })   

    let Age=()=>{
        // This submit event handler is set to onclick and this is where the logic happens
        submit.addEventListener('click', ()=>{
            ageValue=ageText.value 
            realAge=year-ageValue
        //   This is responsible for storing the value of the result above
            myAge.innerHTML=myAge.value;
            myAge.value=realAge

            // This line of code are the written conditions 
            // responsible for the input and result to be displayed
            if (ageValue<1000){
                myAge.value=''
                // This is the alert message
                warning.style.display='block'
                warning.innerHTML=`<h1>Please make a valid input</h1>`
                // set a timeout function to call the display
                setTimeout(() => {
                    warning.style.display='none'    
                    location.reload()
                }, 5000);
                

            }

            else if(ageValue>2022){                
                alert('Year is greater than the current year, please input a valid year')
                myAge.value=''
                myAge.style.backgroundColor="blue"
                document.getElementById('alert').innerHTML=`Year is greater than ${year}, please input a valid year`
                
            }

            else if(ageValue==NaN){
                myAge.value=''
                // This is the alert message
                warning.style.display='block'
                warning.innerHTML=`<h1>Please make a valid input</h1>`
                // set a timeout function to call the display
                // setTimeout(() => {
                //     warning.style.display='none'    
                //     // location.reload()
                // }, 5000);
                
            }
            else{
                success.innerHTML= `<h1> You are  ${myAge.value} years old !!!</h1>\n`
                success.style.display='block'
                // success.style.width='30vw'

                setTimeout(() => {
                    success.style.display=''                    
                    // location.reload()
                }, 5000);
            }
        })

        let reset = document.getElementById('btnReset');
        reset.addEventListener('click', ()=>{
            location.reload()
            console.log('clicked')
        })
    }
    Age()
}
guessMyAge()
