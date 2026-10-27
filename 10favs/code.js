// Array of 10 favorite items
var favorites = [
    "Coffee",
    "Jesus",
    "Matcha",
    "Pilates",
    "Singing",
    "Movies",
    "Food",
    "Teaching",
    "Family",
    "Traveling"
];

// Create the list
var output = "<ul>";

// Loop through the array
for (var i = 0; i < favorites.length; i++) {
    output += "<li>" + favorites[i] + "</li>";
}

output += "</ul>";

// Display the list on the webpage
document.getElementById("favorites-list").innerHTML = output;