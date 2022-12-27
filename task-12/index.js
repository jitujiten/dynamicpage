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


   axios.post("https://crudcrud.com/api/1aca0106829244bda5d74618a31da1d3/apointment_datas",obj)
   .then((res)=>{
    showuseronscreen(res.data);
   })
   .catch((err)=>{
    console.log(err);
   })
}

window.addEventListener("DOMContentLoaded",()=>{
 
  axios.get("https://crudcrud.com/api/1aca0106829244bda5d74618a31da1d3/apointment_datas")
  .then((res)=>{
    
    for(var i=0;i<res.data.length;i++){
      showuseronscreen(res.data[i]);
    }

  })
  .catch((err)=>{
    console.log(err);
  })
    
})

function showuseronscreen(obj){

const li=`<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.name} <button class="btn btn-danger" onClick="deleteing('${obj._id}')">delete</button> <button class="btn btn-warning" onClick="editinging('${obj.name}','${obj.email}','${obj.phone}','${obj._id}')">edit</button></li>`

var target=document.getElementById("ullist");
target.innerHTML+=li;

}

function deleteing(userid){
   axios.delete(`https://crudcrud.com/api/1aca0106829244bda5d74618a31da1d3/apointment_datas/${userid}`)
   .then((res)=>{
    deletefromscreen(userid);
   })
  .catch((err)=>{
  console.log(err);
  })
}

function deletefromscreen(userid){
    var parent=document.getElementById("ullist");  

    var child=document.getElementById(userid);

    parent.removeChild(child);
}

function editinging(uname,uemail,uphone,uuserid){
   

   document.getElementById("username").value=uname;
   
   document.getElementById("useremail").value=uemail;
   
   document.getElementById("userphone").value=uphone;
 
   deleteing(uuserid);
  
}