document.addEventListener('DOMContentLoaded', function() {
    var fab = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(fab, {
    	direction: 'left'
    });
    $(".dropdown-trigger").dropdown();
  });
