// read local JSON file through JQuery
// import fetch from "node-fetch";
let fetchLocalJSONJquery = () => {
    $.ajax({
        url: "js/test_1.json",
        type: "GET",
        success: function(data){
            // console.log(data);
            let output = "";
            for (let item of data){
                output+= `
                <div class="product">
                    <img src="img/${item.src}.png" style="width:100%">
                    <div class="container">
                        <h4><b>${item.title}</b></h4>
                        <p>${item.body}</p>
                        <button onClick="addToCart(${item.id})" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>                              
                `
            }
            document.querySelector("#data-output2").innerHTML = output;
        }
    })
}

//read local JSON file through javascript
let fetchLocalJSONJS = () => {
    console.log("Its entered");
    let http = new XMLHttpRequest();
    http.open("get", "js/test.json", true);
    http.send();

    http.onload = function(){
        if(this.readyState == 4 && this.status== 200){
            let products = JSON.parse(this.responseText);
            // console.log("Its working" + products);
            let output = "";
            for (let item of products){
                output+= `
                <div>
                    <p>${item.id}<p/>
                    <p>${item.title}<p/>
                    <p>${item.body}<p/>                
                </div>                
                `
            }
            document.querySelector("#data-output").innerHTML = output;
        }
        else{
            console.log(this.response);
        }
    }
}

// $(document).ready(function(){

// })

