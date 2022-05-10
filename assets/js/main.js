"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


    new GitHubCalendar("#github-graph", "ouzdev", { responsive: true });
    GitHubActivity.feed({ username: "ouzdev", selector: "#ghfeed" });

