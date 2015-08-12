jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 1866);
            
        });

    });

    /* Bootstrap tooltip for Number */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* Github Activity Feed */
    GitHubActivity.feed({ username: "antyang", selector: "#ghfeed" });


});