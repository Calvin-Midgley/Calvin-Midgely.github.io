window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title");
  let date = params.get("date");
  document.getElementById("title").textContent = title;
  document.getElementById("timer").textContent = date;
};
