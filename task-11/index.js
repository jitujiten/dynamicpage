const form=document.getElementById("form");

form.addEventListener("submit",gettingdata);

function gettingdata(e){
    e.preventDefault();

    const name=e.target.username.value;
    const email=e.target.useremail.value;
    const phone=e.target.userphone.value;
    const date=e.target.userdate.value;
    const time=e.target.usertime.value;

    const obj={
        name,
        email,
        phone,
        date,
        time
    }


   axios.post("https://crudcrud.com/api/4e10751c31254ab9becf5e7916a0ec8f/apointment_datas",obj)
   .then((res)=>{
    showuseronscreen(res.data);
   })
   .catch((err)=>{
    document.getElementById("ullist").innerHTML+=`<h4 style="color:red">something went wrong</h4>`;
   })
}

window.addEventListener("DOMContentLoaded",()=>{
 
  axios.get("https://crudcrud.com/api/4e10751c31254ab9becf5e7916a0ec8f/apointment_datas")
  .then((res)=>{
    
    for(var i=0;i<res.data.length;i++){
      showuseronscreen(res.data[i]);
    }

  })
  .catch((err)=>{
      document.getElementById("ullist").innerHTML+=`<h4 style="color:red">something went wrong</h4>`;
  })
    
})

function showuseronscreen(obj){

const li=`<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.name} <button class="btn btn-danger" onClick="deleteing('${obj._id}')">delete</button> <button class="btn btn-warning" onClick="editinging('${obj._id}')">edit</button></li>`

var target=document.getElementById("ullist");
target.innerHTML+=li;

}

function deleteing(userid){
   axios.delete(`https://crudcrud.com/api/4e10751c31254ab9becf5e7916a0ec8f/apointment_datas/${userid}`)
   .then((res)=>{
    deletefromscreen(userid);
   })
  .catch((err)=>{
    document.getElementById("ullist").innerHTML+=`<h4 style="color:red">something went wrong</h4>`;
  })
}

function deletefromscreen(userid){
    var parent=document.getElementById("ullist");  

    var child=document.getElementById(userid);

    parent.removeChild(child);
}

function editinging(e){
   var namelval=JSON.parse(localStorage.getItem(e)).name;

   var emailval=JSON.parse(localStorage.getItem(e)).email;

   var phoneval=JSON.parse(localStorage.getItem(e)).phone;

   document.getElementById("username").value=namelval;
   
   document.getElementById("useremail").value=emailval;
   
   document.getElementById("userphone").value=phoneval;
 
   
  
}