let homeCount = 0
let guestCount = 0


function incrementHome(points){
   homeCount += points
   document.getElementById("home").textContent = homeCount
}

function incrementGuest(points){
   guestCount += points
   document.getElementById("guest").textContent = guestCount
}
