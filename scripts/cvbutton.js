var btn6 = document.querySelector(".btn-6");

window.addEventListener("DOMContentLoaded", function () {
  btn6.addEventListener("mouseenter", function (e) {
    var parentOffset = btn6.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    btn6.querySelector("span").style.top = relY + "px";
    btn6.querySelector("span").style.left = relX + "px";
  });
  btn6.addEventListener("mouseout", function (e) {
    var parentOffset = btn6.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    btn6.querySelector("span").style.top = relY + "px";
    btn6.querySelector("span").style.left = relX + "px";
  });
});

// download cv
btn6.addEventListener("click", () => {
  // Create a new anchor element to download the file
  const downloadLink = document.createElement("a");

  // Set the file URL and name
  downloadLink.href = "CV/Isuru-CV.pdf";
  downloadLink.download = "CV-Isuru Ariyarathna.pdf";

  // Append the anchor element to the document body
  document.body.appendChild(downloadLink);

  // Trigger the click event on the anchor element
  downloadLink.click();

  // Remove the anchor element from the document body
  document.body.removeChild(downloadLink);
});
