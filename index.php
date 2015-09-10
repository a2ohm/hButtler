<!DOCTYPE html>

<!--
Copyright 2015 a2ohm
Release under the MIT license

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-->

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


        <!-- CSS -->
        <link href="css/screen.css" media="screen" rel="stylesheet" />
        <link href="css/weather-icons.css" media="screen" rel="stylesheet" />

    </head>

    <body>
        <div id="dateAndTime">
            <p id="time">21:42</p>
            <p id="date">lundi 19 janvier</p>
        </div>

        <div id="weather">
            <p id="weather-now">
                <span id="weather-icon"></span>
                <span id="weather-temp"></span>
            </p>
        </div>

        <div id="roles">
            <dl>
                <dt>Repas</dt>
                    <dd>Domitille / Jean−Baptiste</dd>
                <dt>MB</dt>
                    <dd>Reda</dd>
                <dt>MH</dt>
                    <dd>Antoine</dd>
            </dl>
        </div>

        <div id="twitterFeed">
            <a  class="twitter-timeline"
                data-dnt="true"
                href="https://twitter.com/search?q=%40CorthoDeBelmar"
                data-widget-id="642070089215418368"
                width="400px"
                data-chrome="nofooter noborders noheader noscrollbar transparent"
                data-tweet-limit="3">
                Tweets sur @CorthoDeBelmar</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            </script>
                                              
        </div>

        <footer>
            <p>La réponse est 42.</p>
        </footer>

        <!-- Javascript − plugins -->
        <script src="scripts/date-time.js"></script>
        <script src="scripts/weather.js"></script>
    </body>
</html>
