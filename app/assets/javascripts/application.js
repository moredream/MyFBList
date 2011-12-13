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

        var get_facebook_info = "";
        // check validation facebook_id field
        get_facebook_info ="https://graph.facebook.com/"+ $("#post_facebook_id").val();


        $.getJSON(get_facebook_info, function(data) {

          $("#post_facebook_id").val(data.id);

          prepare_input("#post_name");
          prepare_input("#post_url");
          prepare_input("#post_description");


          $("#post_name").val(data.name);
          $("#post_url").val(data.link);
          $("#post_description").val(data.description);

          $("#post_count").val(data.likes);


        });

    });

    function prepare_input(id){
          $(id).attr("class", "textc");
          $(id).removeAttr("disabled");
    }

});
