"use strict"

function get(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            return data.value;
        })
        .catch(function(error) {
            return error;
        });
}