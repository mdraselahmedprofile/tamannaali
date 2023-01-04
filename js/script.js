
// on scroll add class to navbar

const navbar = document.getElementById('mobile-top-bar')

// OnScroll event handler
const onScroll = () => {

	// Get scroll value
	const scroll = document.documentElement.scrollTop

	// If scroll value is more than 0 - add class
	if (scroll > 0) {
		navbar.classList.add("bg-dark");
	} else {
		navbar.classList.remove("bg-dark")
	}
}

// Use the function
window.addEventListener('scroll', onScroll);




// Menu Active Class Function
var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}