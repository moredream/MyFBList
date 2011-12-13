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
        var facebook_id_s = $("#post_facebook_id").val();
        if(facebook_id_s.length > 0)             {
          get_facebook_info ="https://graph.facebook.com/"+    facebook_id_s;
          $.getJSON(get_facebook_info, function(data) {

          $("#post_facebook_id").val(data.id);

          prepare_input("#post_name");
          prepare_input("#post_url");
          prepare_input("#post_description");
          prepare_input("#post_count");

          $("#post_name").val(data.name);
          $("#post_url").val(data.link);
          $("#post_description").val(data.description);

          $("#post_count").val(data.likes);


        });
        }else{
            alert("type your facebook id or facebook name");
        }

    });

    function prepare_input(id){
          $(id).attr("class", "textc");
          $(id).removeAttr("disabled");
    }

});
