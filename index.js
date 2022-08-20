// Code your solution here

function findMatching(dereva, jina){
    return dereva.filter(drivers => drivers.toUpperCase() === jina.toUpperCase())
}
function fuzzyMatch( dereva, jina){
    return dereva.filter(function(user){
        return user[0,1] === jina[0,1]
    })
}

function matchName(dereva, jina){
    return dereva.filter(function (user){
        return user.name === jina;
    })
}