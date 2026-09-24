function updateStats() {
    // Traffic Congestion — random number between 40 and 75
  let traffic = Math.floor(Math.random() * (75 - 40 + 1)) + 40;
  document.getElementById("trafficVal").textContent = traffic + "%";
  document.getElementById("trafficBar").style.width = traffic + "%";
  document.getElementById("trafficBar").textContent = traffic + "%";

 // Air Quality Index — random number between 80 and 180
  let aqi = Math.floor(Math.random() * (180 - 80 + 1)) + 80;
  document.getElementById("aqiVal").textContent = aqi + " AQI";
  document.getElementById("aqiBar").style.width = Math.min(100, aqi / 2) + "%";

  // Grid Load — random number between 400 and 550
  let power = Math.floor(Math.random() * (550 - 400 + 1)) + 400;
  document.getElementById("powerVal").textContent = power + " MW";
  document.getElementById("powerBar").style.width = ((power - 400) / 1.5) + "%";

  // Transit On-Time — random number between 84 and 97
  let transit = Math.floor(Math.random() * (97 - 84 + 1)) + 84;
  document.getElementById("transitVal").textContent = transit + "%";
  document.getElementById("transitBar").style.width = transit + "%";
  document.getElementById("transitBar").textContent = transit + "%";
}

setInterval(updateStats, 4000);







const reportForm = document.getElementById("reportForm");

if (reportForm) {
  reportForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let category = document.querySelector('input[name="category"]:checked').nextElementSibling.textContent;
    let location = document.getElementById("location").value || "Location not specified";

    // Get existing reports from localStorage, or start a new empty list
    let reports = JSON.parse(localStorage.getItem("civoraReports")) || [];

    // Add the new report, with the current time saved
    reports.push({
      category: category,
      location: location,
      time: Date.now()
    });

    // Save the updated list back into localStorage
    localStorage.setItem("civoraReports", JSON.stringify(reports));

    alert("Report submitted! Check Live Alerts on the Dashboard to track its status.");
    reportForm.reset();
  });
}




const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");
const removePhotoBtn = document.getElementById("removePhoto");

photoInput.addEventListener("change", function () {
  let file = photoInput.files[0];

  if (file) {
    let imageURL = URL.createObjectURL(file);
    photoPreview.src = imageURL;
    photoPreview.style.display = "block";
    removePhotoBtn.style.display = "inline-block";
  }
});

removePhotoBtn.addEventListener("click", function () {
  photoInput.value = "";
  photoPreview.src = "";
  photoPreview.style.display = "none";
  removePhotoBtn.style.display = "none";
});








