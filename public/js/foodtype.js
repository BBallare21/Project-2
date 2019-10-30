// api to get food image
var API = "14104502-4c53e5529f6809b17c843d2ad";
var recipe_title = req.body.recipe_name;
var queryURL = `https://pixabay.com/api/?key=${API}&q=${recipe_title}&category=food`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    var imgURL = response.hits[0].largeImageURL;
    console.log(imgURL);
    console.log(response.hits[0].tags);


    $.get("/api/recipes?food_type=", function(data) {
        // append cuisine type to #cuisine
        $("#cuisine").append(req.body.food_type);

        // append every food image listed in api
        for (var i=0; i<data.length; i++) {
            
            // add article
            var foodArticle = $("<article>");
            foodArticle.addClass("media");

            // add media
            var foodImgDiv = $("<div>");
            foodImgDiv.addClass("media-left");
            foodArticle.append(foodImgDiv);

            // add figure attributes
            var imgFigure = $("<figure>");
            imgFigure.addClass("image is-128x128");
            imgFigure.attr("id", "img-" + i);
            foodArticle.append(imgFigure);

            // add image
            var imgSrc = $("<img>");
            imgSrc.attr("src", `"${imgURL}"`);
            imgSrc.attr("alt", `"${response.hits[0].tags}"`);
            foodArticle.append(imgSrc);

            // add media content
            var foodContent = $("<div>");
            foodContent.addClass("media-content");
            foodArticle.append(foodContent);




    
        }

    })
})