jQuery(document).ready((function(){var e,t,o;jQuery("#wfp_portfolio_image_button").click((function(t){t.preventDefault(),e||(e=wp.media.frames.meta_image_frame=wp.media({title:wfp_portfolio_image.title,button:{text:wfp_portfolio_image.button},library:{type:"image"}})).on("select",(function(){var t=e.state().get("selection").first().toJSON();jQuery("#wfp_portfolio_image").val(t.url),jQuery(".wfp_portfolio_image_container").append('<span class="wfp_portfolio_close"></span>'),"undefined"==typeof t.sizes.thumbnail?jQuery("#wfp_portfolio_image_src").attr("src",t.url):jQuery("#wfp_portfolio_image_src").attr("src",t.sizes.thumbnail.url)})),e.open()})),jQuery("#wfp_portfolio_mobileimage_button").click((function(e){e.preventDefault(),t||(t=wp.media.frames.meta_mobileimage_frame=wp.media({title:wfp_portfolio_mobileimage.title,button:{text:wfp_portfolio_mobileimage.button},library:{type:"image"}})).on("select",(function(){var e=t.state().get("selection").first().toJSON();jQuery("#wfp_portfolio_mobileimage").val(e.url),jQuery(".wfp_portfolio_mobileimage_container").append('<span class="wfp_mobileportfolio_close"></span>'),"undefined"==typeof e.sizes.thumbnail?jQuery("#wfp_portfolio_mobileimage_src").attr("src",e.url):jQuery("#wfp_portfolio_mobileimage_src").attr("src",e.sizes.thumbnail.url)})),t.open()})),jQuery("#wfp_portfolio_gallery_button").click((function(e){e.preventDefault(),o||((o=wp.media.frames.meta_gallery_frame=wp.media({frame:"post",state:"wfp-portfolio-gallery",title:wfp_portfolio_gallery.title,button:{text:wfp_portfolio_gallery.button},library:{type:"image"},multiple:!0})).states.add([new wp.media.controller.Library({id:"wfp-portfolio-gallery",title:"Select Images for Featured Gallery",priority:20,toolbar:"main-gallery",filterable:"uploaded",library:wp.media.query(o.options.library),multiple:!!o.options.multiple&&"add",editable:!0,allowLocalEdits:!0,displaySettings:!0,displayUserSettings:!0})]),o.on("open",(function(){var e=o.state("wfp-portfolio-gallery").get("selection"),t=jQuery("#wfp_portfolio_gallery").val();t&&(idsArray=t.split(","),idsArray.forEach((function(t){attachment=wp.media.attachment(t),attachment.fetch(),e.add(attachment?[attachment]:[])})))})),o.on("ready",(function(){jQuery(".media-modal").addClass("no-sidebar")})),o.on("update",(function(){var e,t=[],i="";imagesdata=o.state("wfp-portfolio-gallery").get("selection"),i+='<ul class="wfp_portfolio_gallery_list">',imagesdata.each((function(e){t.push(e.attributes.id),"undefined"==typeof e.attributes.sizes.thumbnail?i+='<li><div class="wfp_portfolio_gallery_container"><span class="wfp_portfolio_gallery_close"><img id="'+e.attributes.id+'" src="'+e.attributes.url+'"></span></div></li>':i+='<li><div class="wfp_portfolio_gallery_container"><span class="wfp_portfolio_gallery_close"><img id="'+e.attributes.id+'" src="'+e.attributes.sizes.thumbnail.url+'"></span></div></li>'})),i+="</ul>",(e=t.join(","))&&(jQuery("#wfp_portfolio_gallery").val(e),jQuery("#wfp_portfolio_gallery_src").html(i),setTimeout((function(){}),0))}))),o.open()})),jQuery(document.body).on("click",".wfp_portfolio_close",(function(e){e.preventDefault(),confirm("Are you sure you want to remove this image?")&&(jQuery(".wfp_portfolio_image_container").remove(),jQuery("#wfp_portfolio_image").val(""))})),jQuery(document.body).on("click",".wfp_mobileportfolio_close",(function(e){e.preventDefault(),confirm("Are you sure you want to remove this image?")&&(jQuery(".wfp_portfolio_mobileimage_container").remove(),jQuery("#wfp_portfolio_mobileimage").val(""))})),jQuery(document.body).on("click",".wfp_portfolio_gallery_close",(function(e){if(e.preventDefault(),confirm("Are you sure you want to remove this image?")){var t=jQuery(this).children("img").attr("id"),o=jQuery("#wfp_portfolio_gallery").val().replace(","+t,"").replace(t+",","").replace(t,"");jQuery(this).parents().eq(1).remove(),jQuery("#wfp_portfolio_gallery").val(o)}}))}));