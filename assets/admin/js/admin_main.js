function update_donation_status(e,t){e.value;var s={id:t,status:e.value};jQuery.ajax({data:s,type:"get",url:window.wfp_conf.resturl+"xs-donate-form/update_status/"+t,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wfp_conf.nonce)},success:function(t){if(t.success)e.setAttribute("class",t.success);else{let a=e.parentElement,n=a.querySelector(".message-donate-status");if(!n){var s=document.createElement("span");s.setAttribute("class","message-donate-status"),a.insertBefore(s,a.childNodes[0]),n=a.querySelector(".message-donate-status")}n.innerHTML=t.error}}})}