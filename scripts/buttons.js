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

function macosUnhide() {
  var text = document.getElementById("mactext");
  var notice = document.getElementById("alert");
    text.style.display = "block";
    notice.style.display = "none";
}