const openBtnProgramWeb = document.getElementById("open-btn-programweb");
const modalContainerProgramWeb = document.getElementById("modal-container-programweb");
const closeBtnProgramWeb = document.getElementById("close-btn-programweb");

const openBtnHistorico = document.getElementById("open-btn-historico");
const modalContainerHistorico = document.getElementById("modal-container-historico");
const closeBtnHistorico = document.getElementById("close-btn-historico");

const openBtnTeControla = document.getElementById("open-btn-tecontrola");
const modalContainerTeControla = document.getElementById("modal-container-tecontrola");
const closeBtnTeControla = document.getElementById("close-btn-tecontrola");


/* ------------- */
openBtnProgramWeb.addEventListener('click', () => {
    modalContainerProgramWeb.classList.add("show");
});

closeBtnProgramWeb.addEventListener('click', () => {
    modalContainerProgramWeb.classList.remove("show");
})

/* ------------- */
openBtnHistorico.addEventListener('click', () => {
    modalContainerHistorico.classList.add("show");
});

closeBtnHistorico.addEventListener('click', () => {
    modalContainerHistorico.classList.remove("show");
})

/* ------------- */
openBtnTeControla.addEventListener('click', () => {
    modalContainerTeControla.classList.add("show");
});

closeBtnTeControla.addEventListener('click', () => {
    modalContainerTeControla.classList.remove("show");
})