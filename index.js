var typed = new Typed('#element', {
  strings: ["Frontend Developer.", "Quick learner.", "Backend Developer"],
  typeSpeed: 50,
});


document.querySelector(".programming").classList.add("visibility");
document.querySelector(".backend").classList.add("visibility");
document.querySelector(".fr").classList.add("button-click");
var stack_button = document.querySelectorAll(".stack-button .st-button");

for (let i = 0; i < stack_button.length; i++) {
  stack_button[i].addEventListener("click", () => {

    if (stack_button[i].innerHTML === "Frontend") {
      document.querySelector(".frontend").classList.remove("visibility");
      document.querySelector(".programming").classList.add("visibility");
      document.querySelector(".backend").classList.add("visibility");

      document.querySelector(".fr").classList.add("button-click");
      document.querySelector(".bk").classList.remove("button-click");
      document.querySelector(".pr").classList.remove("button-click");
    }
    else if (stack_button[i].innerHTML === "backend") {
      document.querySelector(".frontend").classList.add("visibility");
      document.querySelector(".programming").classList.add("visibility");
      document.querySelector(".backend").classList.remove("visibility");

      document.querySelector(".fr").classList.remove("button-click");
      document.querySelector(".bk").classList.add("button-click");
      document.querySelector(".pr").classList.remove("button-click");

      stack_button[i].classList.toggle("button-click");
    }
    else if (stack_button[i].innerHTML === "Programming") {
      document.querySelector(".frontend").classList.add("visibility");
      document.querySelector(".programming").classList.remove("visibility");
      document.querySelector(".backend").classList.add("visibility");

      document.querySelector(".fr").classList.remove("button-click");
      document.querySelector(".bk").classList.remove("button-click");
      document.querySelector(".pr").classList.add("button-click");
    }
  });

}


const toggle_button=document.getElementById("nav-toggle");
const nav_links =document.getElementById("nav-links");

toggle_button.addEventListener("click",()=>{
  nav_links.classList.toggle("active");
});


