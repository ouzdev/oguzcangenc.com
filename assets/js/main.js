"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


    new GitHubCalendar("#github-graph", "ouzdev", { responsive: true });
    GitHubActivity.feed({ username: "ouzdev", selector: "#ghfeed" });

    var introguide = introJs();
    introguide.setOption("nextLabel", " İleri ");
    introguide.setOption("prevLabel", " Geri ");
    introguide.setOption("doneLabel", " Bitir ");

    


    window.addEventListener('load', function () {
        var doneTour = localStorage.getItem('EventTour') === 'Completed';
        if (doneTour) {
            return;
        }
        else {
            introguide.start()

            introguide.oncomplete(function () {
                localStorage.setItem('EventTour', 'Completed');
            });

            introguide.onexit(function () {
                localStorage.setItem('EventTour', 'Completed');
            });
        }
    });