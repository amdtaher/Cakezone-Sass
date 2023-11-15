document.addEventListener("DOMContentLoaded", function() {
    var scrollState = {
        navBg: "navBg",
        navLogo: "navLogo",
        navItem: "navItem"
    };

    function scrolling() {
        if (window.scrollY > 550) {
            setScroll({
                navBg: 'navBgScroll',
                navLogo: 'navLogoScroll',
                navItem: 'navItemScroll'
            });
        } else if (window.scrollY < 550) {
            setScroll({
                navBg: 'navBg',
                navLogo: 'navLogo',
                navItem: 'navItem'
            });
        }
    }

    function setScroll(newState) {
        scrollState = newState;
        updateStyles();
    }

    function updateStyles() {
        // Apply styles based on scrollState
        document.getElementById("yourNavElementId").classList = [scrollState.navBg, scrollState.navLogo, scrollState.navItem].join(" ");
    }

    window.addEventListener("scroll", scrolling);
});