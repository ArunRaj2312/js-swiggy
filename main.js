let hotel=[{
    imageUrl:"geetha.webp",
    hotelName: "Geetha Canteen",
    cousian:"South Indian",
    star: 4.2,
    time:"32 MINS",
    rupees: "100 FOR TWO",
    offer: "50% off | USE WELCOME50"  
},
{
    imageUrl:"hyderabad.webp",
    hotelName: "SS HYDERABAD BIRYANI",
    cousian:"Biryani,South Indian,Seafood",
    star: 4.4,
    time:"23 MINS",
    rupees: "600 FOR TWO",
    offer: "50% off | USE WELCOME50"
},
{
    imageUrl:"kfc.webp",
    hotelName: "KFC",
    cousian:"American,Snacks,Biryani",
    star: 4.1,
    time:"29 MINS",
    rupees: "400 FOR TWO",
    offer: "20% off | USE SWIGGYIT"
},
{
    imageUrl:"annapoorana.webp",
    hotelName: "SREE ANNAPOORNA",
    cousian:"Indian,SOuth Indian,North Indian,Chinese",
    star: 4.5,
    time:"18 MINS",
    rupees: "250 FOR TWO",
    offer: "50% off | USE WELCOME50"
}];
hotel.forEach(e=>{
    let con=document.querySelector(".container");
    let col=document.createElement("div");
    col.classList.add("col");
    con.appendChild(col);

    let colCard=document.createElement("div");
    colCard.classList.add("col-card");
    col.appendChild(colCard);

    let img=document.createElement("img");
    img.src=e.imageUrl;
    colCard.appendChild(img);

    let hotelName=document.createElement("h3");
    hotelName.innerText=e.hotelName;
    colCard.appendChild(hotelName);

    let cousian=document.createElement("p");
    cousian.innerText=e.cousian;
    colCard.appendChild(cousian);
    cousian.classList.add("cousian")

    let starTime=document.createElement("div");
    starTime.classList.add("star-time");
    colCard.appendChild(starTime);

    let star=document.createElement("span");
    star.innerText=e.star;
    starTime.appendChild(star);
    star.classList.add("bi-star-fill")

    let time=document.createElement("span");
    time.innerText=e.time;
    starTime.appendChild(time);

    let rupees=document.createElement("span");
    rupees.innerText=e.rupees;
    starTime.appendChild(rupees);

    let offer=document.createElement("p")
    offer.innerText=e.offer;
    offer.classList.add("off")
    colCard.appendChild(offer);
    
    let div=document.createElement("div");
    colCard.appendChild(div);

    let div1=document.createElement("div");
    div.appendChild(div1);
    div1.classList.add("value");

    let plus=document.createElement("button");
    plus.innerText="+";
    div1.appendChild(plus);
    plus.addEventListener("click",function(){
        text.value++;
        let con1=document.querySelector(".container-1");
        let newData=document.createElement("p");
        newData.innerText=e.hotelName;
        con1.appendChild(newData);
    });

    let text=document.createElement("input");
    text.setAttribute("id",'add');
    div1.appendChild(text);
    text.value=0;

    let minize=document.createElement("button");
    minize.innerText="-";
    div1.appendChild(minize);
    minize.addEventListener("click",function(){
        if(text.value>0){
            text.value--;
        }
    });
    
});
