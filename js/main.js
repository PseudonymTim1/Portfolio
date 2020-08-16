// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() 
{
  if(!showMenu) 
  {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } 
  else 
  {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Random funny minecraft quote generator for main page...
function randomtext() 
{
  var randomtxt = [
      'Luigi Shrek Lantern!',
      '(Not made out of cake)',
      'Gordon Ramsay, the Spiderman of worlds!',
      'Kurva Vonat!',
      'FÜGGÖNYÖK A HOTELBEN!',
      'Still stuck in Elwood&#39s basement!',
      'NO DON&#39T PISS IN THE RAT!',
      'PAPER STATE NEGATIVE!',
      'Backwards Trigger!',
      'p3_crash!',
      'fun gun bullet yeah, put bullet in the gun, bullet in the gun! gun in the bullet, yeah gun, put bulleeet, in my head!',
      'No Vaclav to be found here!',
      'Hold my bear!',
      'Chronic aids syndrome!',
      'Unsettling Ramen!',
      '* Added Herobrine!',
      'Haha yes funny minecraft text reference!',
      '[INSERT FUNNY QUOTE HERE]',
      'When there&#39s a rave going on next door but you trapped in the microwave :(',
      'The human equivalent of the Windows 3.1 hot dog stand color scheme!',
      'No, STOP! My brain can barely form coherent thoughts already!',
      'Duck Duck Go? More like Fuck fuck go!',
      'You poggin poggers!1 When will you learn? WHEN WILL YOU LEARN THAT YOUR KAPPAS HAVE PEPEHANDS?!?!',
      'P' + 'E'.italics() + 'Rs' + 'ONa' + 'L'.bold() + 'It' + 'Y'.italics(),
      'Never going to hell, but always on the way!',
      'I see die in your future',
      'Fill your eyes with selective soap!',
      'Free tortillas!',
      'Go fuck!',
      'Making bathub meth!',
      'HELP THE YOUTUBE JEWS ARE COMING FOR ME!',
      'anime broccoli hair nigga penis!'
    ];

  return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

document.getElementById("status").innerHTML = randomtext();
