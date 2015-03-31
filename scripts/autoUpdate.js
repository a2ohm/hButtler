/*
 * Copyright 2015 a2ohm
 * Release under the MIT license
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

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
