/*
 * jQuery File Upload Plugin JS Example 8.9.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global $, window */

$(function () {
    'use strict';
    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        // xhrFields: {withCredentials: true},
        url: '/UploadServlet',
        autoUpload:true
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );
    $('#fileupload').bind('fileuploaddestroy',function(e,data){
// var filename=data.url.substring(data.url.indexOf('=')+1);
    	var filename=data.key;
//    	if(filename){
//    		$.ajax({
//    			url:'/mall/goodsImageAction!deleteImage.do',
//    			type:'post',
//    			dataType:'json',
//    			data:{delfile:filename}
//    		});
//    	}
    	$('#'+filename).remove();
    });
    
    if (window.location.hostname === 'localhost'||window.location.hostname==='faceye.com') {
        // Demo settings:
        $('#fileupload').fileupload('option', {
            url: '/UploadServlet',
            autoUpload:true,
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            maxFileSize: 5000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png|ppt|doc|docx)$/i
        });
        
        var docId="";
//        var reg = new RegExp("(^|&)id=([^&]*)(&|$)");
//        var r = window.location.search.substr(1).match(reg);
        var url=window.location.href;
        if(url){
        	var uArray=url.split("\/");
        	docId=uArray[uArray.length-1];
        }
        //验证
        var regex=/^[1-9]\d*$/;
        var isNumber=false;
        isNumber=regex.test(docId);
//        alert(docId);
        if(isNumber){
        $.ajax({
            url: '/resource/docFile/getDocFilesByDocId',
            type:'post',
            dataType: 'json',
            data:{
            	docId:docId
            },
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done').call(this, $.Event('done'), {result: result});
        });
        }
        // Upload server status check for browsers with CORS support:
// if ($.support.cors) {
// $.ajax({
// url: '/UploadServlet',
// type: 'HEAD'
// }).fail(function () {
// $('<div class="alert alert-danger"/>')
// .text('Upload server currently unavailable - ' +
// new Date())
// .appendTo('#fileupload');
// });
// }
    } else {
        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            // xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
        	alert(3);
            $(this).fileupload('option', 'done').call(this, $.Event('done'), {result: result});
        });
    }

});


