var productNameInput        = document.getElementById("productNameInput");
var productPriceInput       = document.getElementById("productPriceInput");
var productCategoryInput    = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");

var productSearchInput      = document.getElementById('searchInput');

var productList = []

var updateBtn = document.getElementById("updateBtn")
var addBtn = document.getElementById("addBtn")

var indexUpdate = 0;

// Check localStorage has data
if( localStorage.getItem("Products") != null){
    productList = JSON.parse(localStorage.getItem("Products"))

    // Display data after retrieve it
    displayData()
}

function addProduct(){
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    };

    // Add entered data
    productList.push(product);

    // Add in local storage
    localStorage.setItem("Products", JSON.stringify(productList))

    // Clear inputs after push data
    clearInputs();

    displayData();
}

function clearInputs(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = ""
}

function displayData(){
    var item = "";
    for(var i = 0 ; i < productList.length ;  i++ ){
        item += `
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button class="py-1 px-3 btn btn-outline-warning"onclick='setData(${i})'> Update</button></td>
        <td><button class="py-1 px-3 btn btn-outline-danger" onclick='deleteProduct(${i})'>Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = item;
}



function setData(index){
    indexUpdate = index;

    var currentProduct = productList[index];

    productNameInput.value = currentProduct.name;
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescriptionInput.value = currentProduct.description;

    updateBtn.classList.remove("d-none");
    addBtn.classList.add("d-none");
}

function updateProduct(){
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    };

    productList.splice(indexUpdate, 1, product);
    localStorage.setItem("products", JSON.stringify(productList))

    displayData()

    updateBtn.classList.add("d-none");
    addBtn.classList.remove("d-none");

    clearInputs();
}


function deleteProduct(elementNumber){
    // Use splice() to delete the selected item
    deletedItem = productList.splice(elementNumber, 1);

    // Add the newest array after deleting
    localStorage.setItem("Products", JSON.stringify(productList))
    // Show the result after delete
    displayData();

    // As when Press delete button, delete the selected row
    // deleteBtn.classList.remove("d-none");
    return deletedItem;
}


function searchProduct(){
    // is the search input value
    var term = productSearchInput.value;

    var item = "";
    
    for(var i = 0 ; i < productList.length ;  i++ ){
        // check
        if( productList[i].name.toLowerCase().includes (term.toLowerCase() ) ){
            item += `
            <tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].description}</td>
            <td><button class="py-1 px-3 btn btn-outline-warning onclick='updateProduct()'">Update</button></td>
            <td><button class="py-1 px-3 btn btn-outline-danger" onclick='deleteProduct(${i})'>Delete</button></td>
            </tr>
            `
        }
    }
    document.getElementById('tbody').innerHTML = item;
}
