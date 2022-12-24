// var posts=[
//     {title:"post one",body:"body of post one",createdat:new Date().getTime()},
//     {title:"post two",body:"body of post two",createdat:new Date().getTime()}
// ];
// var intervalid=0;
// function getpost(){
//     clearInterval(intervalid);
//     intervalid= setInterval(()=>{
//     var counter="";
//     for(var i=0;i<posts.length;i++){
//         counter+=`<li>${posts[i].title} created ${Math.floor(((new Date().getTime())-(posts[i].createdat))/1000)} sec ago</li>`;
//     }
//     document.body.innerHTML=counter;
//     },1000)
// }


// function createpost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({...post,createdat:new Date().getTime()});
//             var error=false;
//             if(!error){
//                 resolve(); 
//             }else{
//                 reject("error:something went wrong"); 
//             }
            
//         },2000);
//     }) 
// }

// function create4thpost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({...post,createdat:new Date().getTime()});
//             var error=false;
//             if(!error){
//                 resolve(); 
//             }else{
//                 reject("error:something went wrong"); 
//             }
            
//         },2000);
//     }) 
// }

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(posts.length>0){
//             resolve(posts.pop());   
//             }else{
//             reject("error:the arr is empty");  
//             }
//         },1000)
//     })
// }
// // getpost();
// // createpost({title:"post three",body:"body of post three"})
// // .then(()=>{
// //     getpost()
// //     deletepost().then(()=>{
// //         getpost()
// //         deletepost().then(()=>{
// //             getpost()
// //             deletepost().then(()=>{
// //                 getpost()
// //                 deletepost().then(()=>{
// //                 }).catch((err)=>{
// //                  console.log(err);
// //                 })
// //             }) 
// //         }) 
// //     })
// // })

// // create4thpost({title:"post four",body:"body of post four"})
// // .then(()=>{
// //     getpost()
// //     deletepost()
// // });

// ////promise all

// // const promise1=Promise.resolve("hello world");
// // const promise2=10;
// // const promise3=new Promise((resolve,reject)=>{
// //     setTimeout(resolve,2000,"goodbye")
// // })

// // Promise.all([promise1,promise2,promise3]).then((values)=>{
// //     console.log(values)
// // });

// let promisee=function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           console.log(`last activity time ${new Date().toLocaleTimeString()}`);
//           resolve();
//         },1000)
//     })
// }

// Promise.all([create4thpost({title:"post four",body:"body of post four"}),promisee()])
// .then(()=>{
//     getpost();
//       deletepost()
//     }).then(()=>{
//         getpost();
//       })





var posts=[
    {title:"post one",body:"body of post one",createdat:new Date().getTime()},
    {title:"post two",body:"body of post two",createdat:new Date().getTime()}
]

var intervalid=0;
function getpost(){
    clearInterval(intervalid)
    intervalid= setInterval(()=>{
      var counter="";
      for(var i=0;i<posts.length;i++){
        counter+=`<li>${posts[i].title} created ${Math.floor(((new Date().getTime())-(posts[i].createdat))/1000)} sec ago</li>`
      }
      document.body.innerHTML=counter;
    },1000);
}


function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdat:new Date().getTime()});
            var error=false;
            if(!error){
                resolve();  
            }else{
                reject("error:something went wrong");  
            }
           }, 2000);
    }) 
}

function create4thpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdat:new Date().getTime()});
            var error=false;
            if(!error){
                resolve();  
            }else{
                reject("error:something went wrong");  
            }
           }, 3000);
    }) 
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length>0){
                resolve(posts.pop());  
            }else{
                reject("error:arr is empty");  
            }
           }, 1000);
    }) 
}
// createpost({title:"post three",body:"body of post three"})
// .then(()=>{
//     getpost();
//     deletepost().then(()=>{
//         getpost();
//         deletepost().then(()=>{
//             getpost();
//             deletepost().then(()=>{
//                 getpost();  
//                 deletepost().then(()=>{
//                     getpost();  
//                 }).catch((err)=>{
//                     console.log(err);
//                 }) 
//             })
//         }) 
//     })
// });

// create4thpost({title:"post fourth",body:"body of post fourth"})
// .then(()=>{
//     getpost();
//     deletepost().then(()=>{
//         getpost();  
//         deletepost().then(()=>{
//             getpost(); 
//             deletepost().then(()=>{
//                 getpost();  
//             }) 
//         })
//     })
// })
      

function promises(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(console.log("last activity time is "+new Date().toLocaleTimeString()));
       },1000)  
    })
}

Promise.all([createpost({title:"post three",body:"body of post three"})])
.then(()=>{
    getpost();  
    deletepost().then(()=>{
        getpost();
        promises()   
    })  
})