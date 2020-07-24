function print() {
    for (var i = 0; i < arguments.length; i++)
        console.log(i + " --> " + arguments[i] + " ");
}
function loop(a) {
    for (var i = 0; i < a.length; i++)
        print("index " + i + " = " + a[i]);
}
//-----------------------------------------

window.onload = function () {
    //code starting from here
    var subTotal = 0;

    var classList = document.getElementsByClassName("btn");
    for (var i = 0; i < classList.length; i++) {
        classList[i].addEventListener("click", function () {
            //---------- checkout ----
            if (this.id == "checkout") {
                if (subTotal > 0) {
                    alert("Checkout Done!!");
                    document.getElementById("item-list").style.display = "none";
                    document.getElementById("done").style.display = "block";
                }
            } else {
                // ------- input button functionalities------
                var inputGroup = this.parentElement;
                var items = inputGroup.parentElement;
                var itemsChild = items.childNodes; // item list
                var setInputNumber = inputGroup.childNodes[3].value; //input field number
                var getUnitPrice = itemsChild[3];
                var inputGroupChild = inputGroup.childNodes; // [ input + - ]
                var inputForm = inputGroupChild[3]; // input field

                if (this.id == "plus-btn") {
                    var unitPrice = parseInt(getUnitPrice.value);
                    var count = parseInt(inputForm.value);
                    inputGroup.childNodes[3].value = count + 1;
                    itemsChild[5].childNodes[1].innerText = unitPrice * (count + 1);
                    subTotalFun(unitPrice, "add");
                    print("+ clicked")
                }
                if (this.id == "minus-btn") {
                    unitPrice = getUnitPrice.getAttribute("value");
                    let count = inputForm.value;
                    if (count > 0) {
                        inputGroup.childNodes[3].value = count - 1;
                        itemsChild[5].childNodes[1].innerText = unitPrice * (count - 1);
                        subTotalFun(unitPrice, "sub");
                    }
                    print("- clicked")
                }
            }
        })
    }

    function subTotalFun(price, str) {
        if (str == "add") {
            subTotal += price;
        }
        if (str == "sub" && subTotal >= price) {
            subTotal -= price;
        }
        var tax = (subTotal * 5) / 100;
        var total = subTotal + tax;
        document.getElementById("sub-total").innerText = subTotal;
        document.getElementById("tax").innerText = tax;
        document.getElementById("total").innerText = total;
    }

    //---------- removing item ---
    var remove = document.getElementsByClassName("remove-item");
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", function () {
            print(this.parentElement);
            item = this.parentElement.parentElement.parentElement;
            item.style.display = "none";
        })
    }
}

















