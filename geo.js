if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(show);
  } else {
    console.log("else is working ")
  }

function show(pos)
{
    console.log(show.position)
    console.log(pos.coords.latitude)
}