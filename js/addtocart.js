let cartList = [];
let qty = 1, productID, id;

let addToCart = (id) => {
    cartList.push(id);
    console.log(cartList);

    //Remove duplicate array values
    let tempArr = new Set(cartList);
    cartList = [...tempArr]
    // End
    console.log(cartList);
    sessionStorage.setItem("cartListArray", JSON.stringify(cartList));  
}

let plus = (id) => {
    if (id === undefined) { console.log("undefined hai");}
    else {console.log("undefined nahin hai")}
    // console.log("plus" + id);
    qty =qty + 1;
    productID = id;
    // fetchCartList();
}

let minus = (id) => {
    if (id === undefined) { console.log("undefined hai");}
    else {console.log("undefined nahin hai")}
    // console.log("minus" + id);
    qty =qty - 1;
    productID = id;
    // fetchCartList();
}

let multiply = (a,b) =>  {
    return a*b;
}

let fetchCartList = () => {
    
    $.ajax({
        url: "js/test_1.json",
        type: "GET",
        success: function(data){
          cartList = sessionStorage.getItem("cartListArray");
          cartList = JSON.parse(cartList);
            let output = "";
            
            for(let i=0; i<cartList.length; i++){                
                for (let item of data){
                    if (item.id==cartList[i]){
                        output+= `
                        
                        <div class="row">
                            <div class="col-3 p-2"><img src="img/${item.src}.png"></div>
                            <div class="col-3 p-2"><h4><b>${item.title}</b></h4></div>
                            <div class="col-3 p-5">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item plus"><a class="page-link" href="javascript:plus()"><i class="fa-solid fa-plus"></i></a></li>
                                    <li class="page-item"><a class="page-link" href="#">${qty}</a></li>
                                    <li class="page-item minus"><a class="page-link" href="javascript:minus()"><i class="fa-solid fa-minus"></i></a></li>
                                </ul>
                            </nav><br>
                            <p>Qty: ${qty}</p>
                            </div>
                            <div class="col-3 p-2">
                            <p>INR ${multiply(qty,item.price)}</p>
                                                        
                            </div>                        
                            </div> 
                                                     
                        `
                    }
                }
            }
                         
            document.querySelector("#data-cart").innerHTML = output;
    
        }
       
    })
}


let updatePrice = () => {
    
    $.ajax({
        url: "js/test_1.json",
        type: "GET",
        success: function(data){
          cartList = sessionStorage.getItem("cartListArray");
          cartList = JSON.parse(cartList);
            let output = "";
            
            for(let i=0; i<cartList.length; i++){                
                for (let item of data){
                    if (item.id==cartList[i]){
                        output+= `
                        
                        <div class="row">
                            <div class="col-3 p-2"><img src="img/${item.src}.png"></div>
                            <div class="col-3 p-2"><h4><b>${item.title}</b></h4></div>
                            <div class="col-3 p-5">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item plus"><a class="page-link" href="javascript:plus(${item.id})"><i class="fa-solid fa-plus"></i></a></li>
                                    <li class="page-item"><a class="page-link" href="#">${qty}</a></li>
                                    <li class="page-item minus"><a class="page-link" href="javascript:minus(${item.id})"><i class="fa-solid fa-minus"></i></a></li>
                                </ul>
                            </nav><br>
                            <p>Qty: ${qty}</p>
                            </div>
                            <div class="col-3 p-2">
                            <p>INR ${multiply(qty,item.price)}</p>
                                                        
                            </div>                        
                            </div> 
                                                     
                        `
                    }
                }
            }
                         
            document.querySelector("#data-cart").innerHTML = output;
    
        }
       
    })
}



let goToCart = () => {
    window.location.href = "addtocart.html";
}