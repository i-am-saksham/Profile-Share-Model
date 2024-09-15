const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// modal open function
const openModal=() =>{
    console.log("Modal is open");
    modal.classList.add("active");/*add css class in an element */
    // overlay.classList.add("overlayactive");
};

// modal close function
const closeModal=() =>{
    console.log("Modal is close");
    modal.classList.remove("active");
    // overlay.classList.remove("overlayactive");
};

