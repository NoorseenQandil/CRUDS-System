# CRUDS-System
 CRUDS System created with HTML, CSS, Bootstrap and Java Script

## Main objective
 CRUDS System is to add data, update it, delete it and search in the saved data.

## Design
![CRUDS Design](https://github.com/NoorseenQandil/CRUDS-System/assets/70522199/6bca38af-2ba7-4a56-875e-d4b41bdf80e3)

## Features
### 1.User-Friendly Interface:
* The user interface is clean, intuitive, and easy to navigate.
* A visually appealing layout ensures a positive user experience.
 
### 2. Save the entered data.
* Save the entered data in a table and in the local storage too.
  ```
  localStorage.setItem("products", JSON.stringify(productList)); 
  ```

### 3. Update data in the table and in the local storage too.
* Update data in the table and in the local storage too.
  ```
  localStorage.setItem("products", JSON.stringify(productList)); 
  ```
### 4. Delete Data
* Delete the entered data from the table and from the local storage too.
  ```
  localStorage.setItem("products", JSON.stringify(productList));  
  ```
  
### 5. Real Time Search
* Real Time Search by name. Type any character and the result will include all site name with the typed character.
  
### 6. Clear inputs
* After adding the entered data, clear all inputs.

### 7. Responsive design
* Page design is responsive for all devices.


## Getting Started
1- Clone or download this repository to your local machine.

2- Open the index.html file in a web browser.

## Java script Functions
* To add new product
 ```
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
 ```

* To clear inputs
  ```
    function clearInputs(){
      productNameInput.value = "";
      productPriceInput.value = "";
      productCategoryInput.value = "";
      productDescriptionInput.value = ""
   }
  ```
  
* To display data
  ```
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
  ```

* Set data to  update
  ```
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
  ```
   
* To update
  ```
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
  ```

* To delete the selected element
  ```
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
  ```
  
* To search by name
  ```
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
  ```

## Live Demo
Experience the Tabs Project in action! Click the link below to access the live demo:

[Live Demo] (https://noorseenqandil.github.io/CRUDS-System/)

Feel free to interact with the project, browse through different jobs, and explore the user-friendly interface. The live demo provides a hands-on experience to see the Tabs Project in action.

## Contributing
If you have suggestions or find issues with the template, feel free to open an issue or create a pull request. Contributions are welcome!

## Contact
If you have any questions, feedback, or suggestions, please feel free to reach out to us at NourseenQandil@gmail.com We value your input and would love to hear from you!  
