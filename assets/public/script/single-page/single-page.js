"use strict";function wfp_remove_review(e){let r=e.id;if(!confirm("Are you sure? Remove this review."))return!1;let s="review"+r;var t=jQuery("#"+s);jQuery.ajax({data:"",type:"get",url:window.xs_donate_url.resturl+"xs-review-form/delete-review/12?params="+r,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",xs_donate_url.nonce)},success:function(e){var r=jQuery("#span-"+s);if(!(e.error.length>0))return r?(t.html("").remove(),void r.removeClass("xs-alert-danger").addClass("xs-alert xs-alert-success").html(e.success).hide().fadeIn()):void 0;r.removeClass("xs-alert-success").addClass("xs-alert xs-alert-danger").html(e.error).hide().fadeIn()}})}function wfp_edit_review(e){let r=jQuery(e).attr("data-id");jQuery.ajax({data:"",type:"get",url:window.xs_donate_url.resturl+"xs-review-form/update-review/12?params="+r,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",xs_donate_url.nonce)},success:function(e){var s=jQuery("#span-reviewwfp-re__"+r);if(e.error.length>0)return void s.removeClass("xs-alert-success").addClass("xs-alert xs-alert-danger").html(e.error).hide().fadeIn();jQuery(document).scrollTop(jQuery(document).height());let t=jQuery("#reviewer_name");t&&e.success.name&&(t.val(e.success.name),t.addClass("wfp-disabled-input"));let a=jQuery("#reviewer_email");a&&e.success.email&&(a.val(e.success.email),a.addClass("wfp-disabled-input"));let u=jQuery("#reviewer_summery");u&&e.success.summery&&u.val(e.success.summery);let l=jQuery("#reviewer_parent");l&&e.success.parent&&l.val(e.success.parent);let n=jQuery("#ratting_review_hidden"),i=1;n&&e.success.ratting&&(n.val(e.success.ratting),i=e.success.ratting),jQuery("#wfp-review-button").html("Update");var d=jQuery("#xs_review_stars").children("li.star-li");for(let e=0;e<d.length;e++)jQuery(d[e]).removeClass("selected");for(let e=0;e<i;e++)jQuery(d[e]).addClass("selected")}})}jQuery(document).ready((function(){jQuery(".xs_popup_gallery").click((function(e){e.preventDefault(),Fancybox.show([{src:`${jQuery(this).attr("href")}`,type:"image"}])}))})),jQuery(document).ready((function(){jQuery("#xs_review_stars li").on("mouseover",(function(){var e=parseInt(jQuery(this).data("value"),10);jQuery(this).parent().children("li.star-li").each((function(r){r<e?jQuery(this).addClass("hover"):jQuery(this).removeClass("hover")}))})).on("mouseout",(function(){jQuery(this).parent().children("li.star-li").each((function(e){jQuery(this).removeClass("hover")}))})),jQuery("#xs_review_stars li").on("click",(function(){var e=parseInt(jQuery(this).data("value"),6),r=jQuery(this).parent().children("li.star-li");for(let e=0;e<r.length;e++)jQuery(r[e]).removeClass("selected");for(let s=0;s<e;s++)jQuery(r[s]).addClass("selected");jQuery(this).parents().find("input#ratting_review_hidden").val(e)}))})),jQuery(document).ready((function(e){jQuery(".wfp-user-review").submit((function(e){e.preventDefault();var r=jQuery(this).serialize();document.getElementsByTagName("body")[0].classList.add("wfp-disabled");var s=this.id,t=s.split("-"),a=t[t.length-1];let u=document.querySelector("#"+s);jQuery.ajax({data:r,type:"post",url:window.xs_donate_url.resturl+"xs-review-form/user-review/"+a,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",xs_donate_url.nonce)},success:function(e){document.getElementsByTagName("body")[0].classList.remove("wfp-disabled");var r=jQuery(".message-review-status");if(!(e.error.length>0)){u.reset();var s=u.querySelector(".wfp-form-button");return s&&(s.disabled=!0),r?(r.removeClass("xs-alert-danger").addClass("xs-alert xs-alert-success").html(e.success),void window.location.reload()):void 0}r.removeClass("xs-alert-success").addClass("xs-alert xs-alert-danger").html(e.error)}})}))})),jQuery(document).ready((function(e){jQuery(".wfp-user-update").submit((function(e){e.preventDefault();var r=jQuery(this).serialize();document.getElementsByTagName("body")[0].classList.add("wfp-disabled");var s=this.id,t=s.split("-"),a=t[t.length-1];let u=document.querySelector("#"+s);jQuery.ajax({data:r,type:"post",url:window.xs_donate_url.resturl+"xs-update-form/user-update/"+a,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",xs_donate_url.nonce)},success:function(e){document.getElementsByTagName("body")[0].classList.remove("wfp-disabled");var r=jQuery(".message-update-status");if(!(e.error.length>0)){u.reset();var s=u.querySelector(".wfp-form-button");return s&&(s.disabled=!0),r?(r.removeClass("xs-alert-danger").addClass("xs-alert xs-alert-success").html(e.success).hide().fadeIn(),void window.location.reload()):void 0}r.removeClass("xs-alert-success").addClass("xs-alert xs-alert-danger").html(e.error).hide().fadeIn()}})}))})),jQuery((function(e){e(".xs_donate_chart").easyPieChart({barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:!1,lineWidth:9,lineCap:"round",animate:2e3})}));