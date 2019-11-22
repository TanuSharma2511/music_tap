window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#d36060",
        "#d3d160",
        "#6860d3",
        "rgb(216, 112, 147)","purple"
      ];

    //Let's get going with the sounds here
    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
          sounds[index].currentTime=0;
          sounds[index].play();

          createBubbles(index);
        });
        pad.addEventListener("dblclick",function(){
        
            sounds[index].pause();
            sounds[index].currentTime=0;
        });
    });

    //Create a function that makes a bubble
    const createBubbles= index => {
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    };
});