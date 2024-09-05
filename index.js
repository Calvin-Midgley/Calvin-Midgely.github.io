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
    let output = ""
    if (y > 0) {
      output = output + y + " years, ";
    }
    if (d > 0) {
      output = output + d + " days, ";
    }
    if (h > 0) {
      output = output + h + " hours, ";
    }
    if (m > 0) {
      output = output + m + " minutes, ";
    }
    if (s > 0) {
      output = output + s + " seconds, ";
    }
    output = output + ms + "milliseconds";
    document.getElementById("timer").textContent = output;
  }, 1000);
};
