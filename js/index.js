function search(){
    fetch ("https://api.github.com/search/users?q=octocat")
    const config = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',

        },
    }
}


function search(){
    fetch ("https://api.github.com/users/octocat/repos")
    const config = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',

        },
    }
}
