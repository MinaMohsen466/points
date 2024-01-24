
let edit_content = document.getElementById('edit_content')
let add_customer = document.getElementById('add_customer')

function call_Btn(Btn){
    edit_content.style.display = 'none'
    add_customer.style.display = 'none'
    Btn.style.display = 'flex'
}

let add_name = document.getElementById('add_name')
let add_tel = document.getElementById('add_tel')
let add_point = document.getElementById('add_point')
let add_Btn = document.getElementById('add_Btn')
let tbody = document.getElementById('tbody')

//remove add_data
function claer_add_data(){
    add_name.value = ''
    add_name.value = ''
    add_name.value = ''
}

let arr;
if(localStorage.customer_data != null){
    arr = JSON.parse(localStorage.customer_data)
}else{
    arr = []; 
}

let mood = "creat";
let tem;

//add_customer

add_Btn.onclick = function(){
    if(add_name.value !="" && add_name.value !="" && add_name.value !=""){
        if(mood == "creat"){
            let new_person = {
                name:add_name.value.toLowerCase(),
                tel:add_tel.value,
                points:add_point.value,
            }
            arr.push(new_person);
            console.log(arr)
            localStorage.setItem('customer_data', JSON.stringify(arr))
            tbody.innerHTML = ''
        }else{
            arr[tem].name = add_name.value.toLowerCase(); 
            arr[tem].tel = add_tel.value; 
            arr[tem].points = add_point.value;
            add_Btn.innerHTML ="add";
            localStorage.customer_data = JSON.stringify(arr);
            tbody.innerHTML = "";
            mood = "creat";
        }
    }
    showData()
    claer_add_data()
    window.location.reload();
}


//show_data
function showData(){
    for(let i= 0; i<arr.length; i++){
        tableData = 
        `
        <tr>
            <td>${i+1}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].tel}</td>
            <td>${arr[i].points}</td>
            <td><button id="edit_Data" onclick="update(${i})">Edit</button></td>
            <td><button id="remove_Data" onclick="delet_item(${i})">Remove</button></td>
        </tr>
        `
        tbody.innerHTML += tableData;
    }
}
showData()


function delet_item(i){
        arr.splice(i,1);
        localStorage.customer_data = JSON.stringify(arr);
        tbody.innerHTML = "";
        showData();
}

//update_finction
function update(i){
    tem = i;
    mood = "update";
    add_name.value = arr[i].name; 
    add_tel.value = arr[i].tel; 
    add_point.value = arr[i].points; 
    add_Btn.innerHTML ="update";
    edit_content.style.display = 'none'
    add_customer.style.display = 'flex'
}

//search_function
function searchData(value){
    tbody.innerHTML = "";
    for(let i=0; i<arr.length; i++){
        if(arr[i].name.includes(value.toLowerCase())){
            tableData = 
            `
            <tr>
            <td>${i}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].tel}</td>
            <td>${arr[i].points}</td>
            <td><button id="edit_Data" onclick="update(${i})">Edit</button></td>
            <td><button id="remove_Data" onclick="delet_item(${i})">Remove</button></td>
            <tr>
            `
            tbody.innerHTML += tableData;
            }
    }
}
