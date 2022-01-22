"use strict";

let taps = document.querySelectorAll(".resourcesButtons");
let resourcesContainers = document.querySelectorAll('.recourceContent');

taps.forEach((element, tapNumber) => {
  element.addEventListener("click", () => {
    for (let index = 0; index < resourcesContainers.length; index++) {
      if (index == tapNumber) {
        resourcesContainers[index].style.display = 'inline-block';
        taps[index].style.borderBottom = '2px solid gray';
      } else {
        resourcesContainers[index].style.display = 'none';
        taps[index].style.borderBottom = 'none';
      }
    }
  });
});
