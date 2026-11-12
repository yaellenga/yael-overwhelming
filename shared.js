// קוד משותף לכל העמודים

// ---------- התאמה למסך: כל הפריים (1512×982) נכנס לחלון ----------
function fitToScreen() {
  const scale = Math.min(window.innerWidth / 1512, window.innerHeight / 982);
  document.documentElement.style.setProperty("--screen-scale", scale);
}

fitToScreen();
window.addEventListener("resize", fitToScreen);  // גם כשמשנים את גודל החלון

// ---------- השעון: תמיד השעה הנוכחית ----------
const clock = document.querySelector(".clock");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();                                // 9 (בלי 0 לפני)
  const minutes = String(now.getMinutes()).padStart(2, "0");   // 05
  clock.textContent = hours + ":" + minutes;
}

updateClock();                    // מציגים מיד
setInterval(updateClock, 1000);   // ובודקים שוב כל שנייה
