document.getElementById("add-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "What a great idea!";
      document.getElementById("icon-one").textContent = "💡";
      document.getElementById("icon-two").textContent = "🦾";
    })
})