function readToggle(instigator){
    let readSection = instigator.parentNode;
    if (readSection === null) return;
    for (let i = 0; i < readSection.children.length; ++i) {
        readSection.children[i].classList.toggle("hidden");
    }

}

function readMore(instigator){
    let readSection = instigator.parentNode;
    if (readSection === null) return;
    for (let i = 0; i < readSection.children.length; ++i) {
        if (readSection[i].className === "more"){
            readSection[i].className += " hidden";
        }
        else if (readSection[i].className === "less"){
            readSection[i].className -= " hidden";
        }
    }
}

function readLess(instigator){
    let readSection = instigator.parentNode;
    if (readSection === null) return;
    for (let i = 0; i < readSection.children.length; ++i) {
        if (readSection[i].className === "more"){
            readSection[i].className -= " hidden";
        }
        else if (readSection[i].className === "less"){
            readSection[i].className += " hidden";
        }
    }
}