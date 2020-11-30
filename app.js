/*var eventDate = 'Dec 7 2020 20:24:18 GMT-0400';

function time_remaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function run_clock(id, endtime) {
  var clock = document.getElementById(id);

  // get spans where our clock numbers are held
  var days_span = clock.querySelector('.days');
  var hours_span = clock.querySelector('.hours');
  var minutes_span = clock.querySelector('.minutes');
  var seconds_span = clock.querySelector('.seconds');

  var days_title = document.getElementById('days_title');
  var hours_title = document.getElementById('hours_title');
  var mins_title = document.getElementById('mins_title');
  var secs_title = document.getElementById('secs_title');

  function update_clock() {
    var t = time_remaining(endtime);

    // update the numbers in each part of the clock
    days_span.innerHTML = t.days;
    // Determine title for Day(s)
    if (t.days === 1) {
      days_title.innerHTML = 'Day';
    } else {
      days_title.innerHTML = 'Days';
    }
    // Determine title for Hour(s)
    hours_span.innerHTML = ('0' + t.hours).slice(-2);
    if (t.hours === 1) {
      hours_title.innerHTML = 'Hour';
    } else {
      hours_title.innerHTML = 'Hours';
    }
    // Determine title for Min(s)
    minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
    if (t.minutes === 1) {
      mins_title.innerHTML = 'Minute';
    } else {
      mins_title.innerHTML = 'Minutes';
    }
    // Determine title for Sec(s)
    seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.seconds === 1) {
      secs_title.innerHTML = 'Second';
    } else {
      secs_title.innerHTML = 'Seconds';
    }

    if (t.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById("clockdiv").style.display = "none";
    }

  }
  update_clock();
  var timeinterval = setInterval(update_clock, 1000);

}
run_clock('clockdiv', eventDate);*/

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    
        //For Toggle Nav
      nav.classList.toggle('nav-active'); 

        //For Animate Links
       navLinks.forEach((link, index) => {
          if (link.style.animation){
              link.style.animation = '';
        } else {
        
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
  });

  burger.classList.toggle('toggle');
  });

}

navSlide();