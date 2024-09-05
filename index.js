window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title");
  let date = Date(params.get("date"));
  document.getElementById("title").textContent = title;
  setInterval(function() {
    let currentTime = Date();
    let difference = Math.abs(currentTime.getTime()-date.getTime());
    document.getElementById("timer").textContent = "Current Time: " + currentTime + "\nEnd Time: " + date + "\nDifference: " + difference;
  }, 1000);
};
