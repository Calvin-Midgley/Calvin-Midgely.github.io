window.onload = function() {
  var url_full = document.url;
  var url_params = url_full.split("?")[1]
  document.getElementById("timer").textContent = url_params;
};
