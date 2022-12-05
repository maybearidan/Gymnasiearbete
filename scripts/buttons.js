window.onload = function WindowLoad(event) {
  const date = new Date()
  const saveDate = Date.parse(localStorage.getItem("Agree"))
  var dif = date.getTime() - saveDate

  console.log(dif)
  // Don't hide since 15 minutes of agreement
  if(dif < 15*60*1000) {
    macosUnhide(0)
  }
}

function showNav() {
  var meny = document.getElementById("homemenuwithheader");
  var nav = document.getElementById("quickjumpmenuwithheader");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
      if(meny)
        meny.style.display = "none";
    }
}

function showMenu() {
    var meny = document.getElementById("homemenuwithheader");
    var nav = document.getElementById("quickjumpmenuwithheader");
    if (meny.style.display === "block") {
      meny.style.display = "none";
    } else {
      meny.style.display = "block";
      if(nav)
        nav.style.display = "none";
    }
}

function macosUnhide(doreset) {
  const date = new Date()
  if(doreset)
    localStorage.setItem("Agree", date)

  var text = document.getElementById("mactext");
  var notice = document.getElementById("alert");
    text.style.display = "block";
    notice.style.display = "none";
}