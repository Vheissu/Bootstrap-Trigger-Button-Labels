/**
 * Toggle Labels for Bootstrap Collapse Buttons
 *
 * Adds new labels feature for changing button labels when a button
 * is clicked that expands a section (like for panels)
 *
 * Author: Dwayne Charrington
 * Contact: dwaynecharrington@gmail.com
 * Website: http://ilikekillnerds.com
 * Copyright: Dwayne Charrington (c) 2014
 * Licence: MIT
 *
 */

;(function($, window, document, undefined) {
    
    // Document ready
    $(function() {

        $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
            var $this   = $(this),
                oldText = $this.html();

            if (!$this.data('oldtext')) {
                $this.data('oldtext', oldText);
            } else {
                oldText = $this.data('oldtext');
            }

            var labelExpanded   = $this.attr('data-label-expanded'),
                labelContracted = $this.attr('data-label-contracted') || oldText;

            if (labelExpanded && labelContracted) {
                // Hiding
                if ( !$this.hasClass('collapsed') && labelExpanded ) {
                    $this.html(labelExpanded);
                } else if ( $this.hasClass('collapsed') && labelContracted ) {
                    $this.html(labelContracted);
                }
            }
        });

    });

})(jQuery, window, document);
