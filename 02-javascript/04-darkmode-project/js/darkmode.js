//   const toggle = document.querySelector('.toggle-darkmode');

//   toggle.addEventListener('click', function () {
//     this.classList.toggle('active');
//     document.body.classList.toggle('active');
//   });

//   var count = 0;
//   document.querySelector('.toggle-darkmode').addEventListener('click', function () {
//     count++;
//     console.log(count);
//   });

var count = 0;

var toggle = document.querySelector('.toggle-darkmode');

toggle.addEventListener('click', function () {
  count++;
  if (count % 2 == 0) {
    toggle.classList.add('active');
    document.querySelector('body').classList.add('active');
    document.querySelector('.darkmode-wrapper span').innerHTML = 'DAY MODE';
    // } else if (count % 2 !== 0) {
    //   toggle.classList.remove('active');
    // }
  } else {
    toggle.classList.remove('active');
    document.querySelector('body').classList.remove('active');
    document.querySelector('.darkmode-wrapper span').innerHTML = 'NIGHT MODE';
  }
});
