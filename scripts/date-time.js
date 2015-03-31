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

/* Update the clock */

jQuery(document).ready(function($) {

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

})
