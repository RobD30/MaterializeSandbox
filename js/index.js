document.addEventListener('DOMContentLoaded', function() {
    var fab = document.querySelectorAll('.fixed-action-btn');
    var fabInst = M.FloatingActionButton.init(fab, {
    	direction: 'left'
    });
    $(".dropdown-trigger").dropdown();
    var sideNav = document.querySelectorAll('.sidenav');
    var sideNavInst = M.Sidenav.init(sideNav, {
    	edge: 'right'
    });
});
