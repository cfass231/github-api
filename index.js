function displayResults(responseJson) {
    console.log(responseJson)
    $('#results').empty()
    for (let i = 0; i < responseJson.length; i++) {
        $('#results').append(`
    <div>
    ${responseJson[i].name}
    <a href="${responseJson[i].html_url}">link </a>
    </div>
    `)
    }
}
function getData(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        const username = event.target.username.value
        console.log(username)
        getData(username)
    })
}
$(watchForm)