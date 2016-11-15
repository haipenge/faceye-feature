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
	},
	/**
	 * btn:复制按钮 targetEl:待复制内容dom(id,classs..): Exam:<button id="copy" data-clipboard-target="title" type="button"
	 * class="btn btn-primary">Click to Copy</button> btn ->copy (id of button) <button id="copy"
	 * data-clipboard-target="title" type="button" class="btn btn-success btn-sm"><fmt:message key="global.copy"/></button>
	 */
	copy : function(btn) {
		var client = new ZeroClipboard($(btn), {
			moviePath : '/js/lib/zeroclipboard/ZeroClipboard.swf',
			debug : false
		});
		client.on('load', function(client) {
			client.on('complete', function(client, args) {
				var targetEl = $(btn).attr('data-clipboard-target');
			});
		});
		// $(btn).mouseover(function() {
		// $(this).tooltip({
		// title : '点击复制'
		// });
		// });
		// $(btn).click(function() {
		// $('.tooltip-inner').empty().append('复制成功');
		// });
		$(btn).click(function() {
			if ($('#copy-msg').length > 0) {
				$('#msg').empty().append('复制成功').fadeIn(1500, function() {
					$('#msg').fadeOut(1000);
				});
			}
		});
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

/**
 * Window,Write with bootstrap.
 */
var Modal = function(config) {
	$.extend(this, config);
};
Modal.prototype = {
	id : '',
	header : true,
	footer : false,
	title : '',
	body : '',
	config : {},
	/**
	 * 配置
	 */
	config : function() {
		this.conf = {};
	},
	init : function(config) {
		$.extend(this.conf, config);
	},
	/**
	 * 显示window
	 */
	show : function() {
		$('body').append(this.build());
		$('#' + this.getId()).modal('show');
	},
	build : function() {
		var sb = new StringBuffer();
		sb.append('<div class="modal fade" id="' + this.getId()
				+ '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">');
		sb.append('<div class="modal-dialog">');
		sb.append('<div class="modal-content">');
		if(this.getHeaer()){
		sb.append('<div class="modal-header">');
		sb.append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
		sb.append('<h4 class="modal-title" id="myModalLabel">');
		sb.append(this.getTitle());
		sb.append('</h4>');
		sb.append('</div>');
	    }
		sb.append('<div class="modal-body">');
		sb.append(this.getBody());
		sb.append('</div>');
		if (this.getFooter()) {
			sb.append('<div class="modal-footer">');
			sb.append('<button type="button" class="btn btn-primary modal-btn-save" id="default-window-btn-yes">确定</button>');
			sb.append('<button type="button" class="btn btn-default" data-dismiss="modal" id="default-window-btn-no">取消</button>');
			sb.append('</div>');
		}
		sb.append('</div>');
		sb.append('</div>');
		sb.append('</div>');
		return sb.toString();
	},

	setHeader : function(header) {
		this.header = header;
	},
	getHeaer : function() {
		return this.header;
	},
	setTitle : function(title) {
		this.title = title;
	},
	getTitle : function() {
		if (this.title == '' && this.conf && this.conf.title) {
			//alert(this.conf.title);
			setTitle(config.title);
		}
		return this.title;
	},
	setBody : function(body) {
		this.body = body;
	},
	getBody : function() {
		return this.body;
	},
	setId : function(id) {
		this.id = id;
	},
	getId : function() {
		if (this.id === '' || this.id === undefined || this.id === null) {
			this.id = Tools.id('win-');
		}
		return this.id;
	},
	getFooter : function() {
		return this.footer;
	},
	setFooter : function(footer) {
		this.footer = footer;
	}
};

/**
 * 消息通知，需要页面中用<div id="msg"></div>
 * 
 * @param {Object}
 *            config
 */
var Msg = function(config) {
	$.extend(this, config);
};
Msg.prototype = {
	type : '',
	msg : '',
	config : {},
	config : function() {
		this.conf = config
	},
	build : function() {
		var html = '';
		if (this.getType() === 'warning') {
			html += '<div class="alert alert-warning margin-top-5">';
		} else {
			html += '<div class="alert alert-success margin-top-5">';
		}
		html += '<a class="close" data-dismiss="alert">×</a>';
		html += '<p>';
		html += this.getMsg();
		html += '</p>';
		html += '</div>';
		return html;
	},
	setMsg : function(msg) {
		this.msg = msg;
	},
	getMsg : function() {
		return this.msg;
	},
	setType : function(type) {
		this.type = type;
	},
	getType : function() {
		return this.type;
	},
	setId : function(id) {
		this.id = id;
	},
	getId : function() {
		if (this.id === '' || this.id === undefined || this.id === null) {
			this.id = Tools.id('msg-');
		}
		return this.id;
	},
	show : function() {
		$('#msg').empty().append(this.build());
	},
	showAt : function(el) {
		$(el).empty().append(this.build());
	}
};

