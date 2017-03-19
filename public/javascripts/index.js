/**
 * @author Myax <mig_dj@hotmail.com>
 * date 3/19/2017
 * client application
 */

window.addEventListener('DOMContentLoaded', function () {
    socket = io('http://' + serverElement.value);
    socket.on("connect", function () {
        //<debug>
        console.log('console', arguments);
        //</debug>

    });
});