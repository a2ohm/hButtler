/* Get the current git has */
var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';

/* Set the checkVersion function */
(function checkVersion()
{
    $.getJSON('githash.php', {}, function(json, textStatus) {
        if (json) {
            if (json.gitHash != gitHash) {
                window.location.reload();
                window.location.href=window.location.href;
            }
        }
    });
    setTimeout(function() {
        checkVersion();
    }, 3000);
})();