/**
 * Build StringBuffer.
 */
var StringBuffer = function(arg0) {
	this.data = new Array();
	if ('' != arg0 && null != arg0) {
		this.data.push(arg0);
	}
};
StringBuffer.prototype = {
	append : function(arg0) {
		this.data.push(arg0);
		return this;
	},
	toString : function() {
		return this.data.join("");
	}
};
Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var Tools = {
	/**
	 * 生成随机整数
	 */
	random : function(min, max) {
		var range = max - min;
		var rand = Math.random();
		return (min + Math.round(rand * range));
	},
	/**
	 * 生成随机节点ID
	 */
	id : function(prefix) {
		var id = '';
		if (prefix != 'undefined' && prefix != null && prefix != '') {
			id = prefix + '-';
		} else {
			id = 'FaceYe-';
		}
		var randNum = Tools.random(100, 999);
		id += randNum;
		id += '-';
		id += ++Tools.config.idSeed;
		return id;
	},
	config : {
		idSeed : 0
	}
};
/**
 * 全选，反选
 */
var Check = {
	/**
	 * 全选与反选
	 */
	onCheck : function(checkAll, checkSingle) {
		var isChecked = $(checkAll).is(':checked');
		if (isChecked == true) {
			$(checkSingle).each(function() {
				$(this).prop('checked', true);
			});
		} else {
			$(checkSingle).each(function() {
				$(this).prop('checked', false);
			});
		}
	},
	getCheckedIds : function(el) {
		var checked = $(el);
		var ids = "";
		$(checked).each(function() {
			if ($(this).is(':checked')) {
				var id = $(this).val();
				if (id !== '') {
					ids += id;
					ids += ',';
				}
			}
		});
		return ids;
	}
};
var AClickListener = {
	listener : function(e) {
		var confirm = new Modal({
			title : '确认删除',
			body : '您确认要删除本条数据吗?',
			footer : true
		});
		confirm.show();
		var url = $(e).attr("href");
		$('.modal-footer').delegate("#default-window-btn-yes", "click", function() {
			// alert('Now Click URL:'+url);
			window.location.href = url;
		});
		$('.modal-footer').delegate('#default-window-btn-no', 'click', function() {
			// alert('Click now,url is:'+url);
		});
		return;
	}
};

/**
 * 图片控制脚本
 */
var Img = {
	/**
	 * 点击小图，显示预览图 条件：图片上使用class -> img-small.
	 * 
	 * @param e
	 */
	small2Larger : function(e) {
		var modal = new Modal({
			title : '图片预览',
			body : '',
			footer : false
		});
		var url = $(e).attr('src');
		if (url == '') {
			url = $(e).attr('data-src');
		}
		var html = '<img src="' + url + '" class="img-rounded img-responsive center-block">';
		modal.setBody(html);
		modal.show();
	}
};
$(document).ready(function() {
	/**
	 * 当点击删除链接时，触发本事件
	 */
	$('a').click(function(event) {
		var href = $(this).attr('href');
		var reg = /[\S\s]remove[\S\s]/gi;
		var isMatch = reg.test(href);
		if (isMatch) {
			event.preventDefault();
			AClickListener.listener(this);
		}
	});
	$('.img-small').click(function(e) {
		Img.small2Larger(this);
	});
	$('form').find('input:nth-child(1)').focus();
    $('input[name="check-all"]').click(function(){Check.onCheck(this,$('input[name="check-single"]'))});
});
/**
 * 当通过ajax方式访问受保护页面，而又未登陆时，触发本事件，并弹出登陆对话框
 */
$(document).ajaxComplete(function(event, xhr, settings) {
	if (xhr && xhr !== undefined && xhr !== null) {
		var responseText = xhr.responseText;
		if (responseText && responseText !== '' && responseText !== undefined) {
			// loginType
			var res = $.parseJSON(responseText);
			if (res && res != null && res !== undefined) {
				if (res.loginType && res.loginType === 'ajax') {
					Login.window();
				}
			}
		}
	}
});
