(function() {

    document.querySelector("#animPlay").addEventListener("click", function(event) {
        var cube = document.querySelector("#cube3D");
        cube.style.webkitAnimationName = "cube-anim";
        cube.style.animationName = "cube-anim";
    }, false);

    document.querySelector("#animPause").addEventListener("click", function(event) {
        var cube = document.querySelector("#cube3D");
        cube.style.animationName = undefined;
        cube.style.webkitAnimationName = undefined;
    }, false);

})();