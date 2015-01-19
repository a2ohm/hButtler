/* Update the clock */

(function clock()
 {
    var today=new Date();

    var time_opt = {
        hour: '2-digit',
        minute: '2-digit' };
    $("p#time").text(today.toLocaleTimeString('fr-FR', time_opt));

    var date_opt = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric' };
    $("p#date").text(today.toLocaleDateString('fr-FR', date_opt));

    
    setTimeout(function() {
        clock();
    }, 1000);
})();
