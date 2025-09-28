const dialog = document.querySelector(".control_box dialog");
const showDialogBtn = document.querySelector(".control_box>button");

showDialogBtn.addEventListener("click",()=>{
    dialog.showModal();
})