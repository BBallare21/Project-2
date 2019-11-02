console.log("linked");
// Global Variables
var counter = 1;
var limit = 15;

// Function Definitions
function addInput() {
    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    } else {
        // var newdiv = document.createElement('div');
        // newdiv.setAttribute("class", "ingredient");
        // newdiv.setAttribute("data-id", counter);
        // newdiv.innerHTML = `<input class="input" type="text" placeholder="One Ingredient Per Line">`;
        //  newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
        var input = document.createElement('INPUT');
        input.setAttribute("class", "input ingredient");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "One Ingredient Per Line");
        document.getElementById('ingredients').appendChild(input);
        counter++;
    }
}
// save new recipe

function saveRecipe() {
    // function will post customers recipe in our database
    // gather form inputs
    var recipe_name = document.getElementById("recipeName").value;
    var image_url = document.getElementById("dishImage").value;
    var recipe_difficulty = document.getElementById("selectSkill").value;
    var food_type = document.getElementById("category").value;
    var prep_time = document.getElementById("prepTime").value;
    var number_servings = document.getElementById("selectServing").value;
    var prep_instruction = document.getElementById("prepInstruc").value;
    // TODO: WILL NEED TO POST INSTRUCTIONS
    let ingredients = []
    let ingredientList = document.querySelectorAll(".ingredient");
    for (i = 0; i < ingredientList.length; i++) {
        ingredients.push(ingredientList[i].value)
    }

    // package up inputs into an object new recipe
    const newRecipe = {
          recipe_name,
          image_url,
          recipe_difficulty,
          food_type,
          prep_time,
          number_servings,
          prep_instruction
    }
    console.log(newRecipe);
    $.ajax({
        url: "/api/recipes",
        method: "POST",
        data: newRecipe
    }).then(response => console.log(response))
      

    // then we post it to a server
}
    

    

// Methods & Function Cals
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", event => {
        console.log("clicked")
        
        if (event.target.getAttribute("id") === "dynamicInput") {
            addInput();
        }
        
        if (event.target.getAttribute("id") === "submit") {
            saveRecipe();
            
        }
        // if (recipeName.length > 50) {
        //     alert("The name may have no more than 50 characters");
        //     submitOK = "false";
        // }
        // if (category.length > 50) {
        //     alert("The name may have no more than 50 characters");
        //     submitOK = "false";
        // }
        // if (category.length > 50) {
        //     alert("The name may have no more than 50 characters");
        //     submitOK = "false";
        // }
        // if (category.length > 5) 
        // {
        //     alert("Seriously your amount is of hours is unrealistic and more then 5 characters");
        //     submitOK = "false";
        // }



    })


});
