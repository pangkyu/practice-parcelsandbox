// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c","#353b48","#192a56"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
  contextmenu: function (event) {
    title.style.color = colors[0];
    title.innerText = "That was a right click";
  },
  mouseOver: function (event) {
    title.style.color = colors[1];
    title.innerText = "The mouse is here";
  },
  mouseOut: function (event) {
    title.style.color = colors[2];
    title.innerText = "The mouse is gone!";
  },
  handleResize: function (event) {
    title.style.color = colors[3];
    title.innerHTML = "You just resized";
  }
};
const title = document.querySelector("h2");



function changeResize(event){
    let width = window.innerWidth;
    if(width > 1200){
        document.body.style.backgroundColor = colors[4];
    }else if ( width < 1200 && width > 700){
        document.body.style.backgroundColor = colors[5];
    }else{
        document.body.style.backgroundColor = colors[6];
    }
    
}
function init(){
  changeResize();
  window.addEventListener("resize",changeResize);
  window.addEventListener("contextmenu", superEventHandler.contextmenu);
  title.addEventListener("mouseover", superEventHandler.mouseOver);
  title.addEventListener("mouseout", superEventHandler.mouseOut);
  window.addEventListener("resize", superEventHandler.handleResize);


}

init();