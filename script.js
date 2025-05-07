const elYear = document.getElementById("year");
if (elYear) {
  elYear.textContent = `© ${new Date().getFullYear()}`;
}
