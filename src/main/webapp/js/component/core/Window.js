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
