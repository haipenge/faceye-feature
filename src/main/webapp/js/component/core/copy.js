var Copy={
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