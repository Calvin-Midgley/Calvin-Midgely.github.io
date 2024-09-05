window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title");
  let date = new Date(params.get("date"));
  document.getElementById("title").textContent = title;
  setInterval(function() {
    let difference = Math.abs(Date.now()-date.getTime());
    document.getElementById("date").textContent = "Time Until " + date + ":";
    document.getElementById("timer").textContent = difference + "ms";
  }, 1000);
};
