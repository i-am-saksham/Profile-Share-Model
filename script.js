const modal = document.querySelector(".modal");

const openModal=() =>{
    console.log("Modal is open");
    modal.classList.add("active");
};

const closeModal=() =>{
    console.log("Modal is close");
    modal.classList.remove("active");
};

