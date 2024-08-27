$(document).ready(function() {

    $(".call_button_svg").click(function(){
        $(".call_button_svg").addClass("call_button_svg_hide");
        $(".call_button_cross_svg").addClass("cross_svg_show");
        $(".agent_right_block").addClass("show_agent_block");
    });

    $(".call_button_cross_svg").click(function(){
        $(".call_button_svg").removeClass("call_button_svg_hide");
        $(".call_button_cross_svg").removeClass("cross_svg_show");
        $(".agent_right_block").removeClass("show_agent_block");
        $(".agent_first_detail_wrapper").removeClass("show_first_agent_detail_wrapper");
        $(".agent_second_detail_wrapper").removeClass("show_second_agent_detail_wrapper");
    });

    $(".agent_first_image_content").click(function(){
        $(".agent_first_detail_wrapper").addClass("show_first_agent_detail_wrapper");
        $(".agent_second_detail_wrapper").removeClass("show_second_agent_detail_wrapper");
    });

    $(".agent_second_image_content").click(function(){
        $(".agent_second_detail_wrapper").addClass("show_second_agent_detail_wrapper");
        $(".agent_first_detail_wrapper").removeClass("show_first_agent_detail_wrapper");
    });

    $(document).on("click", function(event){
        if( $(event.target).closest(".setting_svg .svg_link, .sidebar_close_svg, .layout_button span").length){
            $(".sidebar").toggleClass("show_sidebar");
        } else if( !$(event.target).closest("#setting_section").length){
            $(".sidebar").removeClass("show_sidebar");
        }
    });

    // Radio Button

    $(document).on('change', 'input[name="call_button_icon_type"]', function(){

        var radio_layout_call_button_icon_type = $('input[name="call_button_icon_type"]:checked').val();
        console.log(radio_layout_call_button_icon_type);
        $(".call_button_svg").removeClass (function (index, className) {
            return (className.match (/\bsvg_icon_\S+/g) || []).join(' ');
        });
        $(".call_button_close_svg").removeClass (function (index, className) {
            return (className.match (/\bsvg_icon_\S+/g) || []).join(' ');
        });

        $('.call_button_svg').addClass(radio_layout_call_button_icon_type);
        $('.call_button_close_svg').addClass(radio_layout_call_button_icon_type);

    });

    $(document).on('change', 'input[name="display_text"]', function(){

        var fc_display_text = $('input[name="display_text"]:checked').val();
        var fc_display_icon = $('input[name="display_icon"]:checked').val();
        
        $(".call_button_svg").removeClass (function (index, className) {
            return (className.match (/\bcall_button_text_\S+/g) || []).join(' ');
        });

        if(fc_display_icon === 'call_button_icon_hide' && fc_display_text === 'call_button_text_hide'){
            $('.call_button_svg').addClass('call_button_icon_show');

        } else {
            $('.call_button_svg').addClass(fc_display_text);
        }

    });

    $(document).on('change', 'input[name="display_icon"]', function(){

        var fc_display_icon = $('input[name="display_icon"]:checked').val();
        var fc_display_text = $('input[name="display_text"]:checked').val();

        $(".call_button_svg").removeClass (function (index, className) {
            return (className.match (/\bcall_button_icon_\S+/g) || []).join(' ');
        });
        if(fc_display_icon === 'call_button_icon_hide' && fc_display_text === 'call_button_text_hide'){
            $('.call_button_svg').addClass('call_button_icon_show');

        } else {
            $('.call_button_svg').addClass(fc_display_icon);
        }
        
    });
    $(document).on('change', 'input[name="call_button_phone_number"]', function(){

        var fc_call_url = $('input[name="call_button_phone_number"]:checked').val();

        if(fc_call_url === 'call_button_url'){
            $('.agent_detail_contact_number').addClass('show_url');
            $('.globe_icon_svg').show();
            $('.call_icon_svg').hide();

        } else {
            $('.agent_detail_contact_number').removeClass('show_url');
            $('.globe_icon_svg').hide();
            $('.call_icon_svg').show();            
        }
        
    });

    // Dropdown Menu

    $(document).on('change', '#icon_layouts', function(){

        var icon_layout = $('#icon_layouts').val();

        $(".call_button_svg").removeClass (function (index, className) {
            return (className.match (/\bicon-\S+/g) || []).join(' ');
        });

        $('.call_button_svg').addClass(icon_layout);

    });

    $(document).on('change', '#shape_layouts', function(){

        var shape_layout = $('#shape_layouts').val();

        $(".call_button_svg").removeClass (function (index, className) {
            return (className.match (/\bshape-\S+/g) || []).join(' ');
        });
        $(".call_button_close_svg").removeClass (function (index, className) {
            return (className.match (/\bshape-\S+/g) || []).join(' ');
        });
        $(".agent_image_content").removeClass (function (index, className) {
            return (className.match (/\bshape-\S+/g) || []).join(' ');
        });

        $('.call_button_svg').addClass(shape_layout);
        $('.call_button_close_svg').addClass(shape_layout);
        $('.agent_image_content').addClass(shape_layout);

    });

    $(document).on('change', '#agent_layouts', function(){

        var agent_layout = $('#agent_layouts').val();

        $(".agent_detail_box").removeClass (function (index, className) {
            return (className.match (/\bagent-layout-\S+/g) || []).join(' ');
        });

        $('.agent_detail_box').addClass(agent_layout);

    });

});