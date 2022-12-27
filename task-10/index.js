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

    // var objtostr=JSON.stringify(obj);
    // localStorage.setItem(obj.email,objtostr);

   axios.post("https://crudcrud.com/api/74d108ef59d9401cb75e6f12cbdae84a/apointment_datas",obj)
   .then((res)=>{
    showuseronscreen(res.data);
   })
   .catch((err)=>{
    document.getElementById("ullist").innerHTML+=`<h4 style="color:red">something went wrong</h4>`;
   })
}

window.addEventListener("DOMContentLoaded",()=>{
 
  axios.get("https://crudcrud.com/api/74d108ef59d9401cb75e6f12cbdae84a/apointment_datas")
  .then((res)=>{
    
    for(var i=0;i<res.data.length;i++){
      showuseronscreen(res.data[i]);
    }

  })
  .catch((err)=>{
    setTimeout(()=>{
      document.getElementById("ullist").innerHTML+=`<h4 style="color:red">something went wrong</h4>`;
    },1000)
  })



  // for(var i=0;i<localStorage.length;i++){
  //   var key=localStorage.key(i);
  //   var data=localStorage.getItem(key);
  //   var strtoobj=JSON.parse(data);
  //   showuseronscreen(strtoobj);
  // }
    
})

function showuseronscreen(obj){

const li=`<li class="list-group-item border-success mt-3" id="${obj.email}">${obj.name} <button class="btn btn-danger" onClick="deleteing('${obj.email}')">delete</button> <button class="btn btn-warning" onClick="editinging('${obj.email}')">edit</button></li>`

var target=document.getElementById("ullist");
target.innerHTML+=li;

}

function deleteing(e){
   localStorage.removeItem(e);
   deletefromscreen(e);
}

function deletefromscreen(e){
    var parent=document.getElementById("ullist");  

    var child=document.getElementById(e);

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