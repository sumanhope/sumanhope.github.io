const text = document.querySelector(".spiner");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 14.9}deg)">${char}</span>`
  )
  .join("");

let showHandler = () => {
  document.querySelector(".Show").style.height = "100%";
  document.querySelector(".hideProjects").style.display = "block";
  document.querySelector(".showProjects").style.display = "none";
};

let hideHandler = () => {
  document.querySelector(".Show").style.height = "0";
  document.querySelector(".showProjects").style.display = "block";
  document.querySelector(".hideProjects").style.display = "none";
  
};
