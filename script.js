// I have an api key but I didn't end up using it 4eb5115ed2d87df8836a1d7393132d73
// Documentation = developers.themoviedb.org
$("#searchBtn").on("click", loadMovie);
$("#searchBtn").on("click", valid);
async function getData(url) {
  let response = await fetch(url);
  let data = response.json();
  return data;
}

function valid()
{
    let test = $("#Search").val();
    if(test === "") {
        $("#error").html("Please enter a number.")
    }
 }

async function loadMovie() {
    let test = $("#Search").val();
    if(isNumeric(test) || isEmpty(test)) {
        let url = `https://api.themoviedb.org/3/movie/${test}?api_key=4eb5115ed2d87df8836a1d7393132d73`;
        let data = await getData(url);
        console.log(data);
        $("#movieInfo").html("<strong> We're recommending you: </strong>" + data.original_title + "<br>"+ "<strong> Overview of movie: </strong>" + data.overview + "<br>" + "<strong> Genre: </strong> " + data.genres[0].name + "<br> <strong> Subgenre: </strong>" + data.genres[1].name + "<br>" + "<strong> Release date: </strong>" + data.release_date + "<br> <strong> Budget: </strong>$" + data.budget + "<br> <strong> Runtime: </strong>" + data.runtime);
        var joe = document.createElement("IMG");
        joe.src = "https://media.tenor.com/images/0c83d751d4c7eddcea6b0cd771f53ebb/tenor.gif";
        $("#gif").html(joe);
        $("#ps").html("<br> <br> <small> P.S. One of our favorites is #534 </small>");
        $("#error").remove();
    }
    else {
        $("#error").html("Please enter a number");
    }
}

function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

function isEmpty(str) {
    return (!str || 0 === str.length);
}