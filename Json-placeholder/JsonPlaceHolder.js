function Click(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => display(json))
}
  function display(data){
    user= data.title;
    console.log(user);
  }