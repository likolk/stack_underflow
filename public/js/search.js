// code moved in routes.js !!!!!

// /**
//  * Get the search input element
//  */
// const searchInput = document.getElementById("searchInput");

// /**
//  * Get the div element that contains the values to search
//  */
// const divContent = document.getElementsByClassName('d1');


// /**
//  * Listen for keyup event on search input
//  */
// searchInput.addEventListener("keyup", (event) => {
//     const { value } = event.target;
    
//     /**
//      * Convert text value to lowercase, to not have conflicts
//      */
//     const searchQuery = value.toLowerCase();
    
//     /**
//      * Loop through all the div elements
//      */
//     for (const nameElement of divContent) {
//         // store name text and convert to lowercase to not have conflicts
//         let name = nameElement.textContent.toLowerCase();
        
//         if (name.includes(searchQuery)) {
//             nameElement.style.display = "block";
//             console.log(nameElement);
//         } else {
//             nameElement.style.display = "none";
//             console.log('not found')
//         }
//     }
// });