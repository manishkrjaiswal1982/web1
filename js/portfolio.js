const jData = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
    const res = await fetch (jData);
    const data = await res.json();
    return data;    
}


const printData = async () => {
    const pdata = await getData();
    let displayData = pdata.map(dd);
    document.querySelector("#display-data").innerHTML = displayData;  
}

let dd = (obj) => {
    const {name, username} = obj;
        return `
        <div class="col-3">
        <div class="card">
        <div class="card-header">
            Quote
        </div>
        <div class="card-body clsPortfolio">
            <blockquote class="blockquote mb-0">
            <p>${name}</p>
            <footer class="blockquote-footer">${username}</footer>
            </blockquote>
        </div>
        </div></div>` 
}
    





