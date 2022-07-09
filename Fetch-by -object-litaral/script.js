function Users(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>disPlayUsers(data))
}

function disPlayUsers(datas){
    let div1 = document.getElementById('div1');
    for(let data of datas){
        let div2 = document.createElement('div');
        div2.classList.add('div2');
        div2.innerHTML = ` <h2> ${data.title} </h2>
                           <p> ${data.body} </p> 
        `
        div1.appendChild(div2);
        
    }

}