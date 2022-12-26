////////using promise.then

// console.log("person1 : shows ticket");
// console.log("person2 : shows ticket");

// var wifesbringticket=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     var wifecome=true;
//     if(!wifecome){
//         reject("error:you can not enter"); 
//     }else{
//         resolve("ticket") 
//     }
//    },3000)
// })
//  var getpopcorn=wifesbringticket.then((t)=>{
//    console.log("wife: here is the tickets");
//    console.log("husband: lets move in");
//    console.log("wife: i am hungry");

//    return new Promise((resolve,reject)=>{
//     resolve(`${t} popcorn`);
//    })
//  })

//  var getbutter=getpopcorn.then((t)=>{
//     console.log("husband: i got some popcorn");
//     console.log("wife: i need butter on my popcorn");

//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`); 
//     })
//  })
//  var getcolddrinks=getbutter.then((t)=>{
//     console.log("wife: i need a colddrinks");

//     return new Promise((resolve,reject)=>
//     resolve(`${t} colddrinks`));
//  })

//  getcolddrinks.then((t)=>{
//     console.log(t);
//  })

// console.log("person4 : shows ticket");

// console.log("person5 : shows ticket");




//////////using async await


// console.log("person1 : shows ticket");
// console.log("person2 : shows ticket");

// const premovie=async()=>{
//     const wifesaysbringticket=new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("ticket")
//        },3000);
//     })

//     const getpopcorn=new Promise((resolve,reject)=>resolve("popcorn"));

//     const getbutter=new Promise((resolve,reject)=>resolve("butter"));

//     const getcolddrinks=new Promise((resolve,reject)=>{
//         resolve("cold-drinks");
//     })
// let ticket= await wifesaysbringticket;

//    console.log(`wife: here is the ${ticket}` );
//    console.log("husband: lets move in");
//    console.log("wife: i am hungry");

// let popcorn=await getpopcorn;


//     console.log(`husband: i got some ${popcorn}`);
//     console.log("wife: i need butter on my popcorn");

// let butter=await getbutter;
// console.log(`husband: i got some ${butter}`);
// console.log(`husband: anything else  darling`);
// console.log(`wife: i need a cold-drink`);

// let colddrinks=await getcolddrinks;

// console.log(`husband: i got a ${colddrinks}`);
// console.log(`husband: anything else  darling`);
// console.log(`wife: we are late`);
// console.log(`husband: thank you  for reminder`);


// return ticket;
// }

// premovie().then((m)=>{
// console.log(`person3 : shows ${m}`);
// })
// console.log("person4 : shows ticket");
// console.log("person5 : shows ticket");


///promise all at await

// console.log("person1 : shows ticket");
// console.log("person2 : shows ticket");

// const premovie=async()=>{
//     const wifesaysbringticket=new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let wifetaketicket=true;
//         if(wifetaketicket==true){
//             resolve("ticket")
//         }else{
//             reject("person3 : shows sadface")   
//         }
//        },3000);
//     })

//     const getpopcorn=new Promise((resolve,reject)=>resolve("popcorn"));

//     const getbutter=new Promise((resolve,reject)=>resolve("butter"));

//     const getcolddrinks=new Promise((resolve,reject)=>{
//         resolve("cold-drinks");
//     })

//     const getcandy=new Promise((resolve,reject)=>{
//         resolve("candy");
//     })

// let ticket= await wifesaysbringticket.catch((err)=>{console.log(err)});

// let [popcorn,butter,colddrink,candy]= await Promise.all([getpopcorn,getbutter,getcolddrinks,getcandy]);

// console.log(`${popcorn},${butter},${colddrink},${candy}`);
// return ticket;
// }

// premovie().then((m)=>{
// console.log(`person3 : shows ${m}`);
// })
// console.log("person4 : shows ticket");
// console.log("person5 : shows ticket");




///////////try and catch


// let dadmakepromise=async ()=>{
// try{
//     let dadpromise= new Promise((resolve,reject)=>{
//          var slary=30000;
//          var car=40000;
//          var bike=20000;
//          if(slary>car){
//             resolve("buy hima car");
//          }else if(slary<car && slary>bike){
//             reject("buy hima bike");
//          }else{
//             reject("buy in next month");
//          }
//     })
//     let promiseofdad=await dadpromise;
//     console.log(promiseofdad);
// }catch(err){
// console.log(err);
// }
// }

// dadmakepromise();



/////famous interview question
// question:-
// console.log("a");
// console.log("b");
// setTimeout(()=>{
//     console.log("c");
// },1000)
// setTimeout(()=>{
//     console.log("d");
// },0)
// console.log("e");
/////////print this in such a way that it print a,b,c,d,e

// ans:-we can do this using async await

// var asyncfun = async () => {
//     console.log("a");
//     console.log("b");

//     var messagec=await new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("c");
//         }, 1000)
//     })
//     console.log(messagec);

//     var messaged=await new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("d");
//         }, 0)
//     })
//     console.log(messaged);

//     console.log("e");
// }
// asyncfun();


///////trip to manali

// /////using promise

//  function buyacar(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("bought a car");
//           },3000);
//     }) 
// }


//  function triptomanali(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("plan to manali");
//           },2000);
//     })  
// }

// function reachedmanali(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("reached to manali");
//           },1000);
//     })  
// }

// buyacar().then((msg)=>{
//     console.log(msg)
//     triptomanali().then((msg2)=>{
//         console.log(msg2)
//         reachedmanali().then((msg3)=>{
//             console.log(msg3) 
//         })
//     })  
// })


// using async await

// var asyncfun=async ()=>{
//    var msg1= await buyacar();
//    console.log(msg1);
//    var msg2= await triptomanali();
//    console.log(msg2);
//    var msg3= await reachedmanali();
//    console.log(msg3);
// }
// asyncfun()




///////my own example

// function fatherwillcome(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("father come from office");
//     },3000);
//    }) 
// }

// function gotofair(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("going to fair with father");
//      },2000);
//     }) 
//  }


//  function boughttoy(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("bought toys");
//      },1000);
//     }) 
//  }

//  function comehouse(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("come home with father");
//      },500);
//     }) 
//  }



//  var asyncfun=async ()=>{
//     var msg1=await fatherwillcome();
//     console.log(msg1);

//     var msg2=await gotofair();
//     console.log(msg2);

//     var msg3=await boughttoy();
//     console.log(msg3);

//     var msg4=await comehouse();
//     console.log(msg4);
//  }
//  asyncfun();



//////another example

// function plantopuri(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//          res(console.log("reached puri"));
//         },3000)
//     })
// }




// function reachjagarnathtemple(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//          res(console.log("reached jagarnathtemple"));
//         },4000)
//     })
// }






// function reachpuriseabeach(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//          res(console.log("reached puri seabeach"));
          
//         },1000)
//     })
// }





// var asyncfun= async ()=>{
//     var msg = await plantopuri();

//     var msg1 = await reachpuriseabeach();

//     var msg2= await reachjagarnathtemple();
    
// }

// asyncfun();