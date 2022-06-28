function push(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    // Dynamiclly add grid-container means background
    let div1 = document.querySelector('div');
    div1.classList.add('grid-container');
    // ...............................................
    for(let datas of data){
        let UnderDiv = document.createElement('div');
        UnderDiv.classList.add('grid-item');
        UnderDiv.innerText = datas.name;
        div1.appendChild(UnderDiv)
        console.log(datas.name);
    }
}