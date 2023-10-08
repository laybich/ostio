var carousel = document.querySelector('.review');
var children = carousel.children;
var count = 0;

children[count].style.display = "block";

function prev()
{
	count--;

	if (count < 0)
	{
		count = children.length - 1;
	}

	for (var i = 0; i < children.length; i++)
	{
		children[i].style.display = "none";
	}

	children[count].style.display = "block";
}

function next()
{
	count++;

	if (count > children.length - 1)
	{
		count = 0;
	}

	for (var i = 0; i < children.length; i++)
	{
		children[i].style.display = "none";
	}

	children[(count < children.length) ? count : 0].style.display = "block";
}

const anchors = document.querySelectorAll('a[href="#form"]');

for (let anchor of anchors)
{
  anchor.addEventListener('click', function (e)
  {
	e.preventDefault();
	
	const blockID = anchor.getAttribute('href').substr(1);
	
	document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
  });
}

function CountBox() {
	dateNow = new Date();
    amount = ((23 - dateNow.getHours()) * 60 * 60 + (59 - dateNow.getMinutes()) * 60 + (60 - dateNow.getSeconds())) * 1000;
	delete dateNow;

    if (amount < 0) {
        out = "00 : 00 : 00";
        var list = document.getElementsByClassName("timer");
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML = out;
        }
        setTimeout("CountBox()", 10000);
	}
	else {
		amount = Math.floor(amount / 1000);
		days = Math.floor(amount / 86400);
        days1 = (days >= 10) ? days.toString().charAt(0) : "0";
        days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        hours1 = (hours >= 10) ? hours.toString().charAt(0) : "0";
        hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        mins1 = (mins >= 10) ? mins.toString().charAt(0) : "0";
        mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
        amount = amount % 60;
        secs = Math.floor(amount);
        secs1 = (secs >= 10) ? secs.toString().charAt(0) : "0";
        secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
        out = hours1 + "" + hours2 + " : " + mins1 + "" + mins2 + " : " + secs1 + "" + secs2;
        var list = document.getElementsByClassName("timer");
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML = out;
        }
        setTimeout("CountBox()", 1000);
    }
}

window.onload = function() {
    CountBox();
};