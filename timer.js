var x=1;
function timer(){
var input = {
    year: 0,
    month: 0,
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};

var timestamp = new Date(input.year, input.month, input.day,
input.hours, input.minutes, input.seconds);

var interval = 1;

x=setInterval(function () {
    timestamp = new Date(timestamp.getTime() + interval * 1000);
    // document.getElementById('countdown').innerHTML = timestamp.getDay() + 'd:' + timestamp.getHours() + 'h:' + timestamp.getMinutes() + 'm:' + timestamp.getSeconds() + 's';
    document.getElementById('countdown').innerHTML = timestamp.getHours() + 'h:' + timestamp.getMinutes() + 'm:' + timestamp.getSeconds() + 's';
}, Math.abs(interval) * 1000);
}
