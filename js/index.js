"use strict";
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// selecting all resources taps from the HTML file
let taps = document.querySelectorAll(".resourcesButtons");
// selecting all resources content containers from the HTNL file
let resourcesContainers = document.querySelectorAll(".recourceContent");
// selecting the section where the resources will be displayed on xsmall screens
let xsmallScreensSection = document.getElementById(
  "xsmall_screen_resourceContent"
);
xsmallScreensSection.style.display = "none";
// selecting the main content and the header
let mainContent = document.getElementById("mainContent");

let header = document.getElementById("header");

// getting the section where to append the content on xsmall screens
let appendingSection = document.getElementById("appendingSection");

// traversing the taps to add event listeners on clicking
taps.forEach((element, tapNumber) => {
  element.addEventListener("click", () => {
    // getting the inner width of the window to decide what style should be applied to the content
    let windowInnerWidth = window.innerWidth;
    //   this callback function will be excuted each time one of the taps is clicked
    for (let index = 0; index < resourcesContainers.length; index++) {
      if (index == tapNumber) {
        if (windowInnerWidth > 600) {
          // large screens
          // when the clicked taps index is the same of the container index display the container
          // and display a border bottom to teh tap itself
          xsmallScreensSection.innerHTML = "";
          resourcesContainers[index].style.display = "inline-block";
          taps[index].style.borderBottom = "2px solid gray";
        } else {
          // xsmall screens
          appendingSection.append(resourcesContainers[index]);
          resourcesContainers[index].style.display = "inline-block";
          xsmallScreensSection.style.display = "inline-block";
          mainContent.style.display = "none";
          header.style.display = "none";
        }
      } else {
        // after displaying the clicked taps container hide all the others
        resourcesContainers[index].style.display = "none";
        taps[index].style.borderBottom = "none";
      }
    }
  });
});

// adding event listener to the back button on xsmall screens only
let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
  xsmallScreensSection.style.display = "none";
  mainContent.style.display = "inline-block";
  header.style.display = "inline-block";
  header.style.width = "100%";
});


// author : khaled tahat