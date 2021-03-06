<%@ include file="/component/core/taglib/taglib.jsp"%>
<!DOCTYPE html>
<html>
<title>${global.title}</title>
<meta http-equiv="keywords" content="${global.keywords}" />
<meta http-equiv="description" content="${global.desc}" />
<meta charset="utf-8">
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap/css/bootstrap.min.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap/css/bootstrap-theme.min.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/component/core/core.css"/>" />
<script type="text/javascript" src="<c:url value="/js/lib/jquery/jquery-min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/lib/bootstrap/js/bootstrap.min.js"/>"></script>
<style type="text/css">
body {
	padding-top: 60px;
	padding-bottom: 20px;
}
</style>
</head>
<%  request.setAttribute("host", HostUtil.getHost()); %>
<body>
	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<tiles:insertAttribute name="default-header"></tiles:insertAttribute>
		</div>
	</div>
	<div class="container-fluid">
		<tiles:insertAttribute name="default-center"></tiles:insertAttribute>
	</div>
	<div class="container">
		<tiles:insertAttribute name="default-footer"></tiles:insertAttribute>
	</div>
</body>
</html>
