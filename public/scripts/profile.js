function BtnEventHandler() {
  var element = document.getElementById("dropdown-container");
  var activity = document.getElementById("activity-feed");

  activity.classList.remove("active");

  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}
function activityEventHandler() {
  var element = document.getElementById("activity-feed");
  var btn = document.getElementById("dropdown-container");

  btn.classList.remove("active");
  var element = document.getElementById("activity-feed");
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}
function NewPOST() {
  const card = document.getElementById("create-post");
  const bg = document.getElementById("back-bg");
  const close = document.getElementById("close-bg");
  const title = document.getElementById("title");

  card.style.display = "block";
  bg.style.display = "block";
  close.style.display = "block";
  title.innerHTML = "Create new post · Instagram";
}
function closePOST() {
  const card = document.getElementById("create-post");
  const bg = document.getElementById("back-bg");
  const close = document.getElementById("close-bg");

  card.style.display = "none";
  bg.style.display = "none";
  close.style.display = "none";
  title.innerHTML = "Instagram";
}
