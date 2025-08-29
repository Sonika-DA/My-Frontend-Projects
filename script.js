const profile = [
 {
 name: "Warina", 
 img:"https://images.unsplash.com/photo-1645513109783-17abcaca5d87?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 desc: "I love learning technology whilst having fun!."
},

 {
 name: "Selena",
 img: "https://plus.unsplash.com/premium_photo-1755938644663-3d697c1b6eb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 desc: "Celebrating my tenth birthday!"
},

{
 name: "mimasa",
 img: "https://images.unsplash.com/photo-1755529905229-e0536cf889d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
 desc: "WanderLust - I love travelling."
},

{
 name: "Kimberley",
 img: "https://images.unsplash.com/photo-1756054848194-44d7e68f69d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 desc: "Living fullest"
},

{
 name: "Joy",
 img: "https://images.unsplash.com/photo-1755677304075-d3357863b1f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 desc: "Bird Lover"
}
];
let container = document.createElement("div");
container.classList.add("card-container");

document.body.append(container);

profile.forEach((pro) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    img.src = pro.img;
    h1.textContent = pro.name;
    p.textContent = pro.desc;

    card.append(img,h1,p);
    container.append(card);

})

let cards = document.querySelectorAll(".card");

let searchInput = document.querySelector("#search");

let noResult = document.querySelector("#no-result");

searchInput.addEventListener("input", function(e){
    let input = searchInput.value.toLowerCase();
    let found = false;
    
   
    cards.forEach((card) => {
        let name = card.querySelector("h1").textContent.toLowerCase();

        if(name.includes(input)){
            card.style.display = "";
            found = true;
        }
        else{
            card.style.display = "none";
        }
    })

    if(found){
        noResult.style.display = "none";
    }
    else{
        noResult.style.display = "block";
    }

});






