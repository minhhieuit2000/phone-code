jQuery(document).ready(function (e) {
    jQuery(".js-show-all-icon").click(function (e) {
        if (jQuery("#ft-contact-icons").hasClass('active')) {
            jQuery("#ft-contact-icons").removeClass('active'); jQuery(this).removeClass('hide-me');
        }
        else { jQuery("#ft-contact-icons").addClass('active'); jQuery(this).addClass('hide-me'); }
        return false;
    }); jQuery(".js-hide-all-icon").click(function (e) {
        jQuery(".js-show-all-icon").click(); return false;
    });
});