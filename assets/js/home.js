let idx = 0
const testimonials = [
    {
        photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        text: "Saul's the real deal, almost got my licence suspended for a dui but i got off with a small fine.",
        name: "John N"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Got a bit wild at a party and did some things i dont remember doing, luckily Saul's silver tongue got that judge off my back!",
        name: "Trevor"
    },
    {
        photoUrl: "https://imagez.tmz.com/image/f1/4by3/2019/07/17/f1949f71f6724888a7af493b02be5ee1_xl.jpg",
        text: "Some crooked cop tricked me into saying some stuff but it was alright cause Saul got me off the hook!",
        name: "Badger"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        text: "Got a sweet cash payout from the sky lodge company due to my accident. Wouldnt have gotten it without Saul.",
        name: "Kenny"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text: "Good man, i recommend",
        name: "Trent"
    },
]


function CycleTestimonial(testimonial){

    let testimonialPhoto1 = document.getElementById("tPhoto1");
    let testimonialPhoto2 = document.getElementById("tPhoto2");
    let testimonialPhoto3 = document.getElementById("tPhoto3");

    let testimonialText1 = document.getElementById("tText1");
    let testimonialText2 = document.getElementById("tText2");
    let testimonialText3 = document.getElementById("tText3");

    let testimonialName1 = document.getElementById("tName1");
    let testimonialName2 = document.getElementById("tName2");
    let testimonialName3 = document.getElementById("tName3");
    
    if (testimonial == true){
        idx++
        skipScroll = true}
    if (testimonial == false){
        idx--
        skipScroll = true}
    if (idx == 5) {idx = 0}
    if (idx == -1) {idx = 4}

    let next = idx + 1;
    let prev = idx - 1;
    if(next == 5){next = 0}
    if(prev == -1){prev = 4}

    console.log(idx, next, prev)
    console.log(testimonials[idx].photoUrl)

    testimonialPhoto1.src = testimonials[idx].photoUrl;
    testimonialPhoto2.src = testimonials[next].photoUrl;
    testimonialPhoto3.src = testimonials[prev].photoUrl;

    testimonialText1.innerHTML = testimonials[idx].text;
    testimonialText2.innerHTML = testimonials[next].text;
    testimonialText3.innerHTML = testimonials[prev].text;

    testimonialName1.innerHTML = testimonials[idx].name;
    testimonialName2.innerHTML = testimonials[next].name;
    testimonialName3.innerHTML = testimonials[prev].name;
    
}
