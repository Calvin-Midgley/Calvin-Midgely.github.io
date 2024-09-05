window.onload = function() {
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title");
  let date = new Date(params.get("date"));
  document.getElementById("title").textContent = title;
  setInterval(function() {
    let diff = Date.now()-date.getTime();
    if (diff < 0) {
      document.getElementById("date").textContent = "Time Until " + date + ":";
    } else {
      document.getElementById("date").textContent = "Time Since " + date + ":";
    }

    diff = Math.abs(diff);
    let ms = Math.floor(diff%1000);
    let s = Math.floor((diff/1000)%60);
    let m = Math.floor((diff/60000)%60);
    let h = Math.floor((diff/3600000)%24);
    let d = Math.floor((diff/86400000)%365);
    let y = Math.floor(diff/31536000000);
    
    let showy = y > 0;
    let showd = d > 0 || showy;
    let showh = h > 0 || showd;
    let showm = m > 0 || showh;
    let shows = s > 0 || showm;
    
    let output = ""
    if (showy) {
      output = output + y + " years, ";
    }
    if (showd) {
      output = output + d + " days, ";
    }
    if (showh) {
      output = output + h + " hours, ";
    }
    if (showm) {
      output = output + m.toString().padStart(2,'0') + " minutes, ";
    }
    if (shows) {
      output = output + s.toString().padStart(2,'0') + " seconds, ";
    }
    output = output + ms.toString().padStart(4,'0') + "milliseconds";
    document.getElementById("timer").textContent = output;
  }, 3);
};
