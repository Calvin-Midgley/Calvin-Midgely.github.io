window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let name = params.get("date");
  let age = parseInt(params.get("title"), 10);
  document.getElementById("url").textContent = name;
  document.getElementById("timer").textContent = age;
};
