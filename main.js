let search = document.getElementById("searchbtn");
let list  = document.querySelectorAll("#content li");
numberOfItems = list.length;
let counter = 0;

search.addEventListener('keyup' , filter);
function filter() {
  let searchVal = search.value.toLowerCase();
  counter = 0; // Reset the counter for each search
  list.forEach(element => {
    
        if (element.textContent.toLowerCase().indexOf(searchVal) == -1){
            element.classList.add("hiden");
            counter++;
       }
       else {
           element.classList.remove("hiden");
      }

      if (counter === numberOfItems) {
        // Create a new list item for "No Result" message in red color
        let noResultItem = document.createElement("li");
        noResultItem.textContent = "No result";
        noResultItem.style.color = "red";

        // Append the "No Result" item to the list
        document.getElementById("content").appendChild(noResultItem);
      }
      
      else {
        // If there are matching results, remove the "No result" item (if it exists)
        let noResultItem = document.querySelector("#content li[style='color: red;']");
        if (noResultItem) {
            noResultItem.remove();
        }
      }
      
    });

}