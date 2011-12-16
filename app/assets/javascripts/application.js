// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

    $('input[name$="validation"]').click(function () {
        validate_facebook_id();

    });

    $("#new_post").submit(function(){

        var rt1 = validate_field("#post_name", "#msg_name");
        var rt2 = validate_field("#post_url", "#msg_url");
        var rt3 = validate_field("#post_description", "#msg_description");

        if(rt1 && rt2 && rt3) {
            return true;
        }else{
            return false;
        }


    });

    $("#post_name").blur(function(){
        validate_field("#post_name", "#msg_name");
    });
    $("#post_url").blur(function(){
        validate_field("#post_url", "#msg_url");
    });
    $("#post_description").blur(function(){
        validate_field("#post_description", "#msg_description");
    });

    function validate_facebook_id(){
        $("#msg_f").text('');

         var get_facebook_info = "";
        // check validation facebook_id field
        var facebook_id_s = $("#post_facebook_id").val();
        if(facebook_id_s.length > 0){


          get_facebook_info ="https://graph.facebook.com/"+    facebook_id_s;

          $.getJSON(get_facebook_info, function(data) {
          $("#post_facebook_id").val(data.id);
          $("#post_name").val(data.name);
          $("#post_url").val(data.link);
          $("#post_description").val(data.description);
          })
          .success(function() {readOnly_input("#post_facebook_id");})
          .error(function() {$("#msg_f").text('Invalid facebook ID or wrong url');});
        }else{
            $("#msg_f").text("please, enter your facebook id or facebook name");
        }

    }

    function validate_field(id, msg){
        var rval = false;
        if($(id).val().length == 0){
            $(msg).text('This field is required.');
            rval = false;
        } else{
            $(msg).text('');
            rval = true;
        }

        return rval;
    }

    function prepare_input(id){
          $(id).attr("class", "textc");
          $(id).removeAttr("disabled");

    }
    function readOnly_input(id){
        $(id).attr("readonly", "true");
        $(id).attr("class", "textc-fleeze");

    }


});
