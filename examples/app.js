(function () {
    var interactives = {
        list: {
            type: "list",
            src: "../src/json/music-venues.json"
        }
    }
    var hash = window.location.hash.replace('#', '');
    var elem = document.querySelector('div.interactive');
    var interactive = interactives[hash];
    if (!interactive) {
        document.getElementById('wrapper').innerHTML = '<h1>Ummm...</h1><p>We couldn\'t find that interactive!</p>';
    } else {
        for (var x = 0; x < Object.keys(interactive).length; x++) {
            var key = Object.keys(interactive)[x];
            var data = interactive[key];
            elem.setAttribute('data-' + key, data);
        }
        Newsroom.init();
    }
})();