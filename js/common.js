// Alternative to hover for devices that don't handle it (like iPhone and iPad).
jQuery(document).ready(function() {
	jQuery('.modules-website-switchlanguage .scroll').click(function() {
		jQuery(this).toggleClass('show');
	});
	jQuery('.modules-order-ShortCart .scroll').click(function() {
		jQuery(this).toggleClass('show');
	});
	jQuery('.modules-customer-Customerinfo .scroll').click(function() {
		jQuery(this).toggleClass('show');
	});
	jQuery('.modules-users-showinfo .scroll').click(function() {
		jQuery(this).toggleClass('show');
	});
});