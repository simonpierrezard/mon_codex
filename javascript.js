function filterCompanions() {
  var filterValue = document.getElementById("filter").value;
  var rows = document.querySelectorAll("#companions-table tbody tr");

  rows.forEach(function(row) {
    if (filterValue === "all" || row.getAttribute("data-player") === filterValue) {
      row.classList.remove("hidden");
    } else {
      row.classList.add("hidden");
    }
  });
}
