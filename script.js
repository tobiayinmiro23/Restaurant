let inputs=document.querySelectorAll('input[type=checkbox]')
let numberInput=document.querySelectorAll('.customerinfo input')
let addressInput=document.querySelectorAll('.customerinfo textarea')
let foodprice=document.querySelectorAll('.foodprice')[0]
let soupprice=document.querySelectorAll('.foodprice')[1]
let cardbutton=document.querySelectorAll('.btncontainer button')
let soupbutton=document.querySelectorAll('.soupbtn button')
let plainbtncontainer=document.querySelectorAll('.plainbtncontainer button')
let checkout=document.querySelectorAll('.checkout')[0]
let soup=document.querySelectorAll('.soup')[0]
let plain=document.querySelectorAll('.soup')[1]
let addbtn=document.querySelectorAll('.riceaddbtn')
let addsoupbtn=document.querySelectorAll('.soupaddbtn')
let plainaddbtn=document.querySelectorAll('.plainaddbtn')
let addp=document.querySelectorAll('.protein p')[0]
let cancel=document.querySelectorAll('.cancel')[0]
let cancelSoup=document.querySelectorAll('.cancel')[1]
let cancelPlain=document.querySelectorAll('.cancel')[2]
let body=document.querySelectorAll('body')[0]
let main2=document.querySelectorAll('.main2')[0]
let main3=document.querySelectorAll('.main3')[0]
let main4=document.querySelectorAll('.main4')[0]
let checkoutNumber=document.querySelectorAll('.checkoutNumber')[0]
let checkoutAddress=document.querySelectorAll('.checkoutAddress')[0]
let soupNumber=document.querySelectorAll('.soupNumber')[0]
let soupAddress=document.querySelectorAll('.soupAddress')[0]
let plainNumber=document.querySelectorAll('.plainNumber')[0]
let plainAddress=document.querySelectorAll('.plainAddress')[0]
let foodpricenaira=document.querySelectorAll('.foodpricenaira')[0]
let riceButton=document.querySelectorAll('.clearbtn button')[0]
let soupButton=document.querySelectorAll('.clearbtn button')[1]
let plainButton=document.querySelectorAll('.clearbtn button')[2]
let resetRice=document.querySelectorAll('.reset')[0]
let resetSoup=document.querySelectorAll('.reset')[1]
let checkedInput=document.querySelectorAll('input[type=checkbox]:checked')

var price=null
var ToppingsPrice=0
var price=0
var TotalPrice=0  
// to clear the input value after the but button is clicked
body.addEventListener('submit',()=>{
    inputs.forEach(item=>{
        item.checked=false
    })
    numberInput.forEach(item=>{
        item.value=''
    })
    addressInput.forEach(item=>{
        item.value=''
    })
})

// code to display the check out card for rice with the food price
const  handleCheckout=(item)=>{
    checkout.classList.add('block')
    checkout.classList.remove('none')
    checkout.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    price=item.parentElement.parentElement.children[1].children[0].children[1].children[1].innerText
    var priceno=Number(price)
    foodprice.innerText=priceno
    sessionStorage.setItem('total',priceno)

    // event for the reset button
    resetRice.addEventListener('click',()=>{
        foodprice.innerText=priceno
        sessionStorage.setItem('total',priceno)
    })

    inputs.forEach(item=>item.addEventListener('change', function handleInput(params) {
        let checkedInput=document.querySelectorAll('input[type=checkbox]:checked')
        // code to set the total to the initial food price without proteins or toppings
        if(checkedInput.length===0){
            foodprice.innerText=priceno
            sessionStorage.setItem('total',foodprice.innerText)
        }

        // code to loop through all the checked input and get the toppings / protein price
        let ToppingsContainer=[]
            checkedInput.forEach(item=>{
            let priceInNaira=Number(item.name)
            ToppingsContainer.push(priceInNaira)
            ToppingsPrice= ToppingsContainer.reduce((acc,item)=>{
                return acc + item
            },0)
            TotalPrice=priceno + ToppingsPrice
            foodprice.innerText=TotalPrice.toLocaleString()
            sessionStorage.setItem('total',foodprice.innerText)
        })
    }))
}    


// code to display the check out card for soup with the food price
const  handleSoupCheckout=(item)=>{
    soup.classList.add('block')
    soup.classList.remove('none')
    soup.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    var price=item.parentElement.parentElement.children[1].children[0].children[1].children[1].innerText
    var priceno=Number(price)
    soupprice.innerText=priceno
    sessionStorage.setItem('total',priceno)
    // event for the reset button
    resetSoup.addEventListener('click',()=>{
        soupprice.innerText=priceno
        sessionStorage.setItem('total',priceno)
    })
    inputs.forEach(item=>item.addEventListener('change', function handleInput(params) {

        // code to set the total to the initial food price without proteins or toppings
        let checkedInput=document.querySelectorAll('input[type=checkbox]:checked')
        if(checkedInput.length===0){
            soupprice.innerText=priceno
            sessionStorage.setItem('total',soupprice.innerText)
        }

        // code to loop through all the checked input and get the toppings / protein price
        let ToppingsContainer=[]
            checkedInput.forEach(item=>{
             let priceInNaira=Number(item.name)
             ToppingsContainer.push(priceInNaira)
            ToppingsPrice= ToppingsContainer.reduce((acc,item)=>{
                return acc + item
            },0)
            TotalPrice=priceno + ToppingsPrice
            soupprice.innerText=TotalPrice.toLocaleString()
            sessionStorage.setItem('total',soupprice.innerText)
        })
    }))

}    


// code to display the check out card for plain section(food with no topping) with the food price
const  handlePlainCheckout=(item)=>{
    plain.classList.add('block')
    plain.classList.remove('none')
    plain.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    var price=item.parentElement.parentElement.children[1].children[0].children[1].children[1].innerText
    sessionStorage.setItem('total',price)
    
}    
// code for the add protein button
const handleCheckoutAdbtn=(item)=>{
    checkout.classList.remove('none')
    checkout.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    var price=item.parentElement.parentElement.children[0].children[1].children[1].innerText
    var priceno=Number(price)
    foodprice.innerText=priceno
    sessionStorage.setItem('total',priceno)
    // event for the reset button
    resetRice.addEventListener('click',()=>{
        foodprice.innerText=priceno
        sessionStorage.setItem('total',priceno)
    })

    inputs.forEach(item=>item.addEventListener('change', function handleInput(params) {
        let checkedInput=document.querySelectorAll('input[type=checkbox]:checked')
        // code to set the total to the initial food price without proteins or toppings
        if(checkedInput.length===0){
            foodprice.innerText=priceno
            sessionStorage.setItem('total',foodprice.innerText)
        }

        // code to loop through all the checked input and get the toppings / protein price
        let ToppingsContainer=[]
            checkedInput.forEach(item=>{
            let priceInNaira=Number(item.name)
            ToppingsContainer.push(priceInNaira)
            ToppingsPrice= ToppingsContainer.reduce((acc,item)=>{
                return acc + item
            },0)
            TotalPrice=priceno + ToppingsPrice
            foodprice.innerText=TotalPrice.toLocaleString()
            sessionStorage.setItem('total',foodprice.innerText)
        })
    }))

}
// code for the add soup button
const handleCheckoutSoupbtn=(item)=>{
    soup.classList.remove('none')
    soup.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    var price=item.parentElement.parentElement.children[0].children[1].children[1].innerText
    var priceno=Number(price)
    soupprice.innerText=priceno  
    sessionStorage.setItem('total',priceno)
    // event for the reset button
    resetSoup.addEventListener('click',()=>{
        soupprice.innerText=priceno
        sessionStorage.setItem('total',priceno)
    })
    inputs.forEach(item=>item.addEventListener('change', function handleInput(params) {

        // code to set the total to the initial food price without proteins or toppings
        let checkedInput=document.querySelectorAll('input[type=checkbox]:checked')
        if(checkedInput.length===0){
            soupprice.innerText=priceno
            sessionStorage.setItem('total',soupprice.innerText)
        }

        // code to loop through all the checked input and get the toppings / protein price
        let ToppingsContainer=[]
            checkedInput.forEach(item=>{
             let priceInNaira=Number(item.name)
             ToppingsContainer.push(priceInNaira)
            ToppingsPrice= ToppingsContainer.reduce((acc,item)=>{
                return acc + item
            },0)
            TotalPrice=priceno + ToppingsPrice
            soupprice.innerText=TotalPrice.toLocaleString()
            sessionStorage.setItem('total',soupprice.innerText)
        })
    }))
    
}
// code to cancel the rice check out card
function None(item) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    checkout.classList.add('none')
    checkoutNumber.value=''
    checkoutAddress.value=''
    sessionStorage.setItem('total',0)

}
// code to cancel the soup check out card
function SoupNone(params) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    soup.classList.add('none')
    soupNumber.value=''
    soupAddress.value=''
}
// code to cancel the plain check out card
function PlainNone(params) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    plain.classList.add('none')
    plainAddress.value=''
    plainNumber.value=''
}
// cancel button event listener for rice
cancel.addEventListener('click',None)

// cancel button event listener for soup
cancelSoup.addEventListener('click',SoupNone)

// cancel button event listener for plain
cancelPlain.addEventListener('click',PlainNone)

//rice card button event listener
cardbutton.forEach(item=>{
    item.addEventListener('click',()=>{handleCheckout(item)})
})
// soup card button
soupbutton.forEach(item=>{
    item.addEventListener('click',()=>{handleSoupCheckout(item)})
})
// plain card button
plainbtncontainer.forEach(item=>{
    item.addEventListener('click',()=>{handlePlainCheckout(item)})
})

// add button event listener
addbtn.forEach(item=>{
    item.addEventListener('click',()=>{handleCheckoutAdbtn(item)} )
})
addsoupbtn.forEach(item=>{
    item.addEventListener('click',()=>{handleCheckoutSoupbtn(item)} )
})
addsoupbtn.forEach(item=>{
    item.addEventListener('click',()=>{handleCheckoutSoupbtn(item)} )
})

