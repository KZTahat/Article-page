"use strict";
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// selecting all resources taps from the HTML file
let taps = document.querySelectorAll(".resourcesButtons");
// selecting all resources content containers from the HTNL file
let resourcesContainers = document.querySelectorAll(".recourceContent");

// traversing the taps to add event listeners on clicking
taps.forEach((element, tapNumber) => {
  element.addEventListener("click", () => {
    //   this callback function will be excuted each time one of the taps is clicked
    for (let index = 0; index < resourcesContainers.length; index++) {
      if (index == tapNumber) {
        //   when the clicked taps index is the same of the container index display the container
        //   and display a border bottom to teh tap itself
        resourcesContainers[index].style.display = "inline-block";
        taps[index].style.borderBottom = "2px solid gray";
      } else {
        //   after displaying the clicked taps container hide all the others
        resourcesContainers[index].style.display = "none";
        taps[index].style.borderBottom = "none";
      }
    }
  });
});
