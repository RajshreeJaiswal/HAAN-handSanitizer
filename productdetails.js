
let cartitems=JSON.parse(localStorage.getItem('CartData')) || []

let id=localStorage.getItem('id')
let description=localStorage.getItem('description')
let image=localStorage.getItem('img')
let price=localStorage.getItem('price')
let title=localStorage.getItem('title')
title=title.toUpperCase()

let detailImage=document.createElement('img')
detailImage.src=image
let mainImage=document.querySelector('.mainImage')
mainImage.append(detailImage)

let titleContainer=document.createElement('h1')
titleContainer.append(title)
let priceContainer=document.createElement('p')
priceContainer.textContent='$'+price
let addtobag=document.createElement('button')
addtobag.setAttribute('id','addtobag')
addtobag.textContent='Add to bag'
let descriptionTitle=document.createElement('p')
descriptionTitle.textContent='DESCRIPTION'
let hr=document.createElement('hr')
let descriptionContainer=document.createElement('p')
descriptionContainer.textContent=description
document.querySelector('.mainDesc').append(titleContainer,priceContainer,descriptionTitle,hr,descriptionContainer,addtobag)
console.log(id,title,image,description)

document.querySelector('#addtobag').addEventListener('click',()=>{
    let flag=false
    cartitems.forEach((item)=>{
        if(item.id==id){
            flag=true
            ++item.quantity
        }
    })
    if(!flag){
        let obj={
            id:id,
            img:image,
            desc:title,
            price:price,
            quantity:1
         }
         cartitems.push(obj)    
    }  
    localStorage.setItem('CartData',JSON.stringify(cartitems))   
})