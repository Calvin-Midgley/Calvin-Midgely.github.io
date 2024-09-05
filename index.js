window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title");
  let date = new Date(params.get("date"));
  document.getElementById("title").textContent = title;
  document.getElementById("date").textContent = "Time Until " + date + ":";
  setInterval(function() {
    let diff = Math.abs(Date.now()-date.getTime());
    let ms = Math.floor(diff%1000);
    let s = Math.floor((diff/1000)%60);
    let m = Math.floor((diff/60000)%60);
    let h = Math.floor((diff/3600000)%24);
    let d = Math.floor((diff/86400000)%365);
    let y = Math.floor(diff/31536000000);
    document.getElementById("timer").textContent = y + "years, " + d + "days, " + h + "hours, " + m + "minutes, " + s + "seconds, " + ms + "milliseconds";
  }, 1000);
};
