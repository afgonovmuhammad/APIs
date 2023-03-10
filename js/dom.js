import { postUser,deleteUser,putUser } from "./API.js";

let tbody = document.querySelector('.tbody');
let form_1 = document.querySelector('.form_1')
let editForm = document.querySelector('.editForm')
let card = document.querySelector('.card')
let btnAdd = document.querySelector('.Add')

let btnYes1 = document.querySelector(".btnYes")
let btnNo = document.querySelector(".btnNo")

let idx = null;
// let todoList = [];

var modal_A = document.getElementById("myModal_A");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span_A = document.getElementsByClassName("close_A")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span_A.onclick = function() {
//   modal_A.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_A) {
    modal_A.style.display = "none";
  }
}


// modalStart
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal) {
modal.style.display = "none";
}
};

// modalEnd

//btnAdd
btnAdd.onclick = () =>{
modal.style.display = "block";
}


// 

// modalStart
var modal_1 = document.getElementById("myModal_1");
                                                   
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_1")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal_1) {
modal_1.style.display = "none";
}
};

// modal_1End

// modal_2Start
var modal_2 = document.getElementById("myModal_2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal_2) {
modal_2.style.display = "none";
}
};

// modal_2End



form_1.onsubmit=(event)=>{
    event.preventDefault()
    let newUser ={
        id:new Date().getTime(),
        name:event.target['name'].value,
        age:event.target['age'].value,
        phone:event.target['phone'].value,
        course:event.target['course'].value,
    }
    modal.style.display = "none" 
    form_1.reset()
    postUser(newUser);
}

btnYes1.onclick = () =>{
    deleteUser(idx)
    modal_2.style.display = "none" 
}
btnNo.onclick = () =>{
    modal_2.style.display = "none" 

}


//PUT
editForm.onsubmit=(event)=>{
    event.preventDefault()
    const target = event.target;
    
    
    let user={
    name : target['name'].value,
    age :target['age'].value,
    phone : target['phone'].value,
    course :target['course'].value,
    }
    
    putUser(idx,user)
    modal_1.style.display = "none";
    
}

 
export default function dataUser(data){
    tbody.innerHTML = ' '

    data.forEach((e)=>{
        let tr = document.createElement('tr')

        let th = document.createElement('th')
        th.innerHTML = e.id;

        let th2 = document.createElement('th')
        th2.innerHTML = e.name;

        let th3 = document.createElement('th')
        th3.innerHTML = e.age;

        let th4 = document.createElement('th')
        th4.innerHTML = e.phone;

        let th5 = document.createElement('th')
        th5.innerHTML = e.course;

        let th6 = document.createElement('th')
        let btnDelete = document.createElement('button')
        btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnDelete.onclick = () =>{
            idx = e.id
        modal_2.style.display = "block";
        }



        let th7 = document.createElement('th')
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        btnEdit.onclick = () => {
        modal_1.style.display = "block";
        idx = e.id
        editForm["name"].value = e.name;
        editForm["age"].value = e.age;
        editForm["phone"].value = e.phone;
        editForm["course"].value = e.course;
             
        }

        let th8 = document.createElement('th')
        let btnRiad = document.createElement('button')
        btnRiad.innerHTML = `<i class="fa-solid fa-address-card"></i>`;
        btnRiad.onclick = () =>{
        modal_A.style.display = "block";

        let name = document.createElement('h2');
        name.innerHTML = `Name: ${e.name}`;

        let age = document.createElement('h2');
        age.innerHTML = `Age: ${e.age}`;

        let phone = document.createElement('h2');
        phone.innerHTML = `Phone: ${e.phone}`;

        let course = document.createElement('h2');
        course.innerHTML = `Course: ${e.course}`;


       
        card.appendChild(name)
        card.appendChild(age)
        card.appendChild(phone)
        card.appendChild(course)
        }

        tr.appendChild(th)
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        tr.appendChild(th5)

        th6.appendChild(btnDelete)
        tr.appendChild(th6)

        th7.appendChild(btnEdit)
        tr.appendChild(th7)

        th8 .appendChild(btnRiad)
        tr.appendChild(th8)
        tbody.appendChild(tr)


    })
}