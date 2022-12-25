
//////////callback

// const posts=[
//     {title:"post one",body:"body of post one",createdat:new Date().getTime()},
//     {title:"post two",body:"body of post two",createdat:new Date().getTime()}
// ];
// let intervalid=0;
// function getpost(){
// clearInterval(intervalid);
// intervalid=setInterval(()=>{
//     var counter="";
//     for(var i=0;i<posts.length;i++){
//       counter+=`<li>${posts[i].title} created ${Math.floor(((new Date().getTime())-(posts[i].createdat))/1000)} sec ago</li>`
//     }  
//     document.body.innerHTML=counter;
// },1000)
// }


// function createpost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createdat:new Date().getTime()});
//         callback();
//     },2000)
// }

// function create4thpost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createdat:new Date().getTime()});
//         callback();
//     },6000)
// }
// getpost();
// createpost({title:"post three",body:"body of post three"},getpost);
// create4thpost({title:"post four",body:"body of post four"},getpost);



