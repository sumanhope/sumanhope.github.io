document.addEventListener("DOMContentLoaded", function () {
  const trailer = document.getElementById("trailer");
  const trailermsg = document.getElementById("trailer-text");
  const div = document.querySelectorAll("a[data-hover]");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
    }

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards"
    });
  }

  // const getTrailerClass = type => {
  //   switch(type) {
  //     case "video":
  //       return "fa fa-play";
  //     default:
  //       return "fa fa-eye"; 
  //   }
  // }

  window.onmousemove = e => {
    const interactable = e.target.closest(".test"),
      interacting = interactable !== null;

    //   const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);

    //   trailer.dataset.type = interacting ? interactable.dataset.type : "";

    //   if(interacting) {
    //     icon.className = getTrailerClass(interactable.dataset.type);
    //   }
  }

  div.forEach(text =>{
    text.addEventListener("mouseover",function(){
      trailermsg.innerHTML=text.getAttribute("data-hover");
    })

    text.addEventListener("mouseout",function(){
      trailermsg.innerHTML="";
    })
  })

});

