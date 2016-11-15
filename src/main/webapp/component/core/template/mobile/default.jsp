<%@ include file="/component/core/taglib/taglib.jsp"%>
<html>
<head>
<title>${global.title}</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta name="keywords" content="${global.keywords}">
<meta name="description" content="${global.desc}">
<meta charset="utf-8">
<!--
<meta name="viewport"
	content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
	-->
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<!-- 
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
-->

<!--Ratchet-->
 <!-- Roboto -->
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap-4.0.0-alpha.3/dist/css/bootstrap.min.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap-4.0.0-alpha.3/bootstrap-package.css"/>" />
<!-- Custom styles for this template -->
<link rel="stylesheet" type="text/css" href="<c:url value="/css/component/core/Core.css"/>" />
<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>
<script type="text/javascript" src="<c:url value="/js/lib/jquery/jquery-3.1.0.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/lib/bootstrap-4.0.0-alpha.3/dist/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/component/core/Core.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/component/core/Window.js"/>"></script>
</head>
<body>
    <header class="bar bar-nav">
		<tiles:insertAttribute name="default-header"></tiles:insertAttribute>
	</header>
	<div class="content">
		<tiles:insertAttribute name="default-center"></tiles:insertAttribute>
	</div>
	<div class="bar bar-footer">
	<tiles:insertAttribute name="default-footer"></tiles:insertAttribute>
	</div>
	
</body>

</html>
