var submitbtn=document.getElementById("form");

submitbtn.addEventListener("submit",adduserdetails);


function  adduserdetails(e){
         e.preventDefault();
    let name=e.target.username.value;
    let email=e.target.useremail.value;
    let phone=e.target.userphone.value;
    let date=e.target.userdate.value;
    let time=e.target.usertime.value;
    
    const obj={
        name,
        email,
        phone,
        date,
        time
    }
    //  var objtostring=JSON.stringify(obj);
    // localStorage.setItem(`${obj.email}`,`${objtostring}`);
   
    axios.post("https://crudcru.com/api/74d108ef59d9401cb75e6f12cbdae84a/appointment_datas",obj)
    .then((res)=>{
        showuseronscreen(res.data);
       console.log(res); 
    })
    .catch((err)=>{
        document.querySelector(".usersList").innerHTML=document.querySelector(".usersList").innerHTML+`<h4 style="color:red">something went wrong</h4>`
    })

}

window.addEventListener("DOMContentLoaded",()=>{
      const localstorageobj=localStorage;
      const localstoragekeys=Object.keys(localstorageobj);
        
    for(var i=0;i<localstoragekeys.length;i++){
        const key=localstoragekeys[i];
        const userdetailsstring=localstorageobj[key];
        const userdetailsobj=JSON.parse(userdetailsstring);
        showuseronscreen(userdetailsobj);
   
       }

})

function showuseronscreen(obj){
        
    var li=`<li class="litag" id="${obj.email}">${obj.name}<button class="delete" onClick="deletebtn('${obj.email}')">delete</button><button class="delete" onClick="editbtn('${obj.email}')">edit</button></li>`;

   var target=document.querySelector(".usersList");
   target.innerHTML=target.innerHTML + li;

}

function deletebtn(em){
   localStorage.removeItem(em);
   deletefromscreen(em);
}

function deletefromscreen(em){
    var parent=document.querySelector(".usersList"); 
    var child=document.getElementById(em);
    parent.removeChild(child);
}

function editbtn(em){
   
    var nameinl=JSON.parse(localStorage.getItem(em)).name;
    var emailinl=JSON.parse(localStorage.getItem(em)).email;
    var phoneinl=JSON.parse(localStorage.getItem(em)).phone;

    document.getElementById("name").value=nameinl;
    document.getElementById("email").value=emailinl;
    document.getElementById("phone").value=phoneinl;

    deletefromscreen(em);
}


