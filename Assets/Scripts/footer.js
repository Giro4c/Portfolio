// let footer = document.getElementsByTagName("footer").item(0);
// console.log(footer.className);
// let classes = footer.classList;
// classes.add("absolute");
// console.log(classes);
// classes.remove("absolute");
// console.log(classes);
// console.log(classes.contains("relative"));
// console.log("End test");

let root = document.getElementById("root");
new ResizeObserver(UpdateFooterPosition).observe(root);

function UpdateFooterPosition() {
    // console.log(window.innerHeight);
    // console.log(window.outerHeight);
    // console.log(root.clientHeight);

    let footer = document.getElementsByTagName("footer").item(0);
    // console.log(footer.classList);
    if (root.clientHeight < window.innerHeight){
        footer.classList.add("absolute");
        footer.classList.remove("relative");
        console.log("Footer now Absolute Pos");

    }
    else {
        footer.classList.add("relative");
        footer.classList.remove("absolute");
        console.log("Footer now Relative Pos");
    }
    // console.log(footer.classList);
}