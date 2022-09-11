let base = document.querySelector(".base");
let box = document.querySelectorAll(".case")

base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);

function dragStart() {
    this.className += ' tenu';
    setTimeout(( )=> (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'base';
}

for (const vide of box) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleav', dragLeave);
    vide.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
    console.log("over")
    
}

function dragEnter(e) {
    e.preventDefault()
    console.log("enter")
    this.className += ' hovered';
}

function dragLeave() {
    console.log("leave")
    this.className = 'case';
}

function dragDrop() {
    this.className = 'case';
    console.log("drop")
    this.append(base);
}
