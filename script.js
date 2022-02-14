let meat=document.querySelectorAll('.meat')[0]
let fish=document.querySelectorAll('.fish')[0]
let chicken=document.querySelectorAll('.chicken')[0]
let plantain=document.querySelectorAll('.plantain')[0]
let salad=document.querySelectorAll('.salad')[0]
let moimoi=document.querySelectorAll('.moimoi')[0]
let inputs=document.querySelectorAll('input[type=checkbox]')
let foodprice=document.querySelectorAll('.foodprice')[0]
let soupprice=document.querySelectorAll('.foodprice')[1]
let cardbutton=document.querySelectorAll('.btncontainer button')
let soupbutton=document.querySelectorAll('.soupbtn button')
let plainbtncontainer=document.querySelectorAll('.plainbtncontainer button')
let checkout=document.querySelectorAll('.checkout')[0]
let soup=document.querySelectorAll('.soup')[0]
let plain=document.querySelectorAll('.soup')[1]
let addbtn=document.querySelectorAll('.addbtn')
let addsoupbtn=document.querySelectorAll('.addsoupbtn')
let plainaddbtn=document.querySelectorAll('.plainaddbtn')
let addp=document.querySelectorAll('.protein p')[0]
let cancel=document.querySelectorAll('.cancel')[0]
let cancelSoup=document.querySelectorAll('.cancel')[1]
let cancelPlain=document.querySelectorAll('.cancel')[2]
let body=document.querySelectorAll('body')[0]
let main2=document.querySelectorAll('.main2')[0]
let main3=document.querySelectorAll('.main3')[0]
let main4=document.querySelectorAll('.main4')[0]
var price=null


// code to display the check out card for rice with the food price
const  handleCheckout=(item)=>{
    checkout.classList.add('block')
    checkout.classList.remove('none')
    checkout.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    var price=item.parentElement.parentElement.children[1].children[0].children[1].children[1].innerText
    var priceno=Number(price)
    foodprice.innerText=priceno
    // inputs.forEach(item=>item.addEventListener('change', function inp(params) {
    //     var foodAndToppingsPrice=Number(item.name)
    //         console.log(item.checked)
    //         var dd= priceno + foodAndToppingsPrice
    //         console.log(foodAndToppingsPrice)
    //         foodprice.innerText=dd
    
    // }))

    
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
    inputs.forEach(item=>item.addEventListener('change', function inp(params) {
        var foodAndToppingsPrice=Number(item.name)
            console.log(item.checked)
            var dd= priceno + foodAndToppingsPrice
            console.log(foodAndToppingsPrice)
            foodprice.innerText=dd
    
    }))

}    
// code to display the check out card for plain section(food with no topping) with the food price
const  handlePlainCheckout=(item)=>{
    plain.classList.add('block')
    plain.classList.remove('none')
    plain.classList.add('block')
    main2.classList.add('background')
    main3.classList.add('background')
    
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
}
// code to cancel the rice check out card
function None(params) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    checkout.classList.add('none')
}
// code to cancel the soup check out card
function SoupNone(params) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    soup.classList.add('none')
}
// code to cancel the plain check out card
function PlainNone(params) {
    main2.classList.remove('background')
    main3.classList.remove('background')
    inputs.forEach(item=>item.checked=false)
    plain.classList.add('none')
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
// swallow card button
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
// function for getting the price of the toppings and protein

