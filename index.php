<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        
        <title>Buttler</title>

        <!-- Javascript -->
        <!-- Load jQuery -->
        <script src="scripts/jquery-2.1.3.js"></script>
        <!-- Load the autoUpdate script -->
        <script type="text/javascript">
            var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
        </script>
        <script src="scripts/autoUpdate.js"></script>

        <!-- Javascript − plugins -->
        <script src="scripts/date-time.js"></script>

        <!-- CSS -->
        <link href="css/screen.css" media="screen" rel="stylesheet" />

    </head>

    <body>
        <div id="dateAndTime">
            <p id="time">21:42</p>
            <p id="date">lundi 19 janvier</p>
        </div>

        <footer>
            <p>La réponse est 42.</p>
        </footer>
    </body>
</html>
