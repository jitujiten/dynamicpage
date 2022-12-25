//////AXIOS GLOBAL
axios.defaults.headers.common["X-Auth-Token"]="i am token";

// GET REQUEST
function getTodos() {
    // axios({
    //     method:"get",
    //     url:"https://jsonplaceholder.typicode.com/todos",
    //     params:{
    //     _limit:7
    //     }
    // }).then((res)=>{showOutput(res)})
    //   .catch((err)=>{console.log(err)})

axios.get("https://jsonplaceholder.typicode.com/todos?_limit=7").then((res)=>{showOutput(res)})
      .catch((err)=>{console.log(err)})
  }
  
  // POST REQUEST
  function addTodo() {
axios.post("https://jsonplaceholder.typicode.com/todos",{
        data:{
        title:"new todo",
        completed:false
        }
    }).then((res)=>{showOutput(res)})
      .catch((err)=>{console.log(err)})
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
        data:{
        title:"updated todo",
        completed:false
        }
    }).then((res)=>{showOutput(res)})
      .catch((err)=>{console.log(err)})
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res)=>{showOutput(res)})
   .catch((err)=>{console.log(err)})
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=7"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=7")
    ]).then(axios.spread((todos,posts)=>{showOutput(posts)}))
    .catch(err=>console.log(err))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config={
        headers:{
        "content-type":"application/json",
        authorization:"some-token"
        }
    }
    
    axios.post("https://jsonplaceholder.typicode.com/todos",{
        data:{
        title:"new todo",
        completed:false
        }
    },config).then((res)=>{showOutput(res)})
      .catch((err)=>{console.log(err)})
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
   const options={
    method:"post",
    url:"https://jsonplaceholder.typicode.com/todos",
    data:{
        title:"hello jitu"
    },transformResponse:axios.defaults.transformResponse.concat(data=>{
        data.title= data.title.toUpperCase();
        return data;
    })
   }

   axios(options).then((res)=>{showOutput(res)});
  }
  
  // ERROR HANDLING
  function errorHandling() {
    
axios.get("https://jsonplaceholder.typicode.com/todoss",{
    validateStatus:function (status){
      return status < 500;
    }
})
.then((res)=>{showOutput(res)})
.catch((err)=>{
  if(err.response){
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }

  if(err.response.status===404){
    alert("Error 404:page not found");
  }
  })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source=axios.cancelToken.source();
    
    axios.get("https://jsonplaceholder.typicode.com/todos",{
        cancelToken:source.token
    })
.then((res)=>{showOutput(res)})
.catch((thrown)=>{
    if(axios.isCancel(thrown)){
        console.log("Request canceled",thrown.message);
    }
});

if(true){
    source.cancel("Request canceled!")
}
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request sent to${config.url} at ${new Date().toLocaleTimeString()}`);
    return config;

  },error=>{
    return Promise.reject(error);
  })
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);




//   ////ans:1:

// when we got to any platform like facebook , sharpner it gives a special id through which we send that id to header to find out the data so header is important.


// ///ans:2-

// axios is a tool to communicate from frontend to the server.


/////ans:-3:
//url is incorrectily chosen
