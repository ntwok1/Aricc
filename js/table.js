$(document).ready(function () {
  $("#table").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: "500px",
    scrollY: "500px",
    scrollCollapse: true,
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");
});