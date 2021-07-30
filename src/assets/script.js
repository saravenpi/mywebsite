fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json")
.then(function(response){
  response.json().then(data => {
    lasttrack = data.recenttracks.track[0]
    if (lasttrack["@attr"]) {
      artist = lasttrack.artist['#text']
      title = lasttrack.name
      info = `<i class="material-icons">headphones</i><span>&nbsp;Listening Now:&ensp;</span>`
      listening = `<a href="${lasttrack.url}" target=”_blank”>${title} by ${artist}`
      document.getElementById("music-status").innerHTML =  info + listening

    } else {
        document.getElementById("music-status").innerHTML = null
    }

  })
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
