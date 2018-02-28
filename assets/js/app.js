/*!
 * Javascript file
 * (c) www.mystroken.com
 */
(function(window, document){

	const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
	const TimelineLite = require('TimelineLite');
	const { toggleClass } = require('./functions');

	// Burger
	let burgerToggler = document.getElementById('burger__toggler');
	const handleBurgerClick = (event) => {
		event.preventDefault();
		toggleClass(document.body, 'navigation--opened');
		return false;
	};
	burgerToggler.addEventListener('click', handleBurgerClick);

	let burger = Snap.select('#burger__svg');
	let burger_line_top = burger.select('#burger__line__top');
	let burger_line_middle = burger.select('#burger__line__middle');
	let burger_line_bottom = burger.select('#burger__line__bottom');
	let burger_line_inclined_left = burger.select('#burger__line__inclined__left');
	let burger_line_inclined_right = burger.select('#burger__line__inclined__right');


	//burger_line_top.animate({d: burger_line_inclined_left.node.getAttribute('d')}, 1000, mina.backout);
	//burger_line_bottom.animate({d: burger_line_inclined_right.node.getAttribute('d')}, 1000, mina.backout);
	//burger_line_middle.animate({ transform: 't-24,0' }, 1000, mina.backin);

})(window, document);
