window.onload = function() {
  let url_full = document.url;
  const url_split = url_full.split("?");
  let url_params = url_split[1];
  document.getElementById("timer").textContent = url_params;
};
