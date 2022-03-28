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

function switchAccount() {
  // const accountSwitch = document.getElementById("accountSWITCH");
  const bg = document.getElementById("back-bg");
  const switchAccount = document.getElementById("switch-account");
  const cross = document.getElementById("cross-icon");

  switchAccount.style.display = "block";
  bg.style.display = "block";
}
function closeSwitchAccount() {
  const bg = document.getElementById("back-bg");
  const switchAccount = document.getElementById("switch-account");

  switchAccount.style.display = "none";
  bg.style.display = "none";
}

function newMessage() {
  const bg = document.getElementById("back-bg");
  const newMssg = document.getElementById("new-Mssg");

  newMssg.style.display = "block";
  bg.style.display = "block";
}
function closeNewMessage() {
  const bg = document.getElementById("back-bg");
  const newMssg = document.getElementById("new-Mssg");

  newMssg.style.display = "none";
  bg.style.display = "none";
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  console.log(input.value);
  filter = input.value.toUpperCase();
  console.log(filter);
  ul = document.getElementById("myUL");
  console.log(ul);
  li = ul.querySelectorAll("#myUL li");
  console.log(li);
  a = document.querySelectorAll("#myUL li a h4");
  console.log(a);
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll("#myUL li a h4")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
