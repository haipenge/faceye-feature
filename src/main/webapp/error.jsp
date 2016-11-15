<%@ page language="java" import="java.util.*,java.io.*" pageEncoding="UTF-8" isErrorPage="true" contentType="text/html; charset=UTF-8"%>

<%@ include file="/component/core/taglib/taglib.jsp" %>
<html>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="keywords" content="">
<meta http-equiv="description" content="">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap/css/bootstrap.min.css"/>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/js/lib/bootstrap/css/bootstrap-theme.min.css"/>" />
<script type="text/javascript" src="<c:url value="/js/lib/jquery/jquery-min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/js/lib/bootstrap/js/bootstrap.min.js"/>"></script>
<style type="text/css">
body {
	padding-top: 60px;
	padding-bottom: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="row">
    <div class="content">
      <h2>Hi Baby</h2>
      <p>I'a so sorry that Something is Wrong!I will coming soon! baby~~</p>
      <br><hr><font color=red><hr>
getMessage():<br>
<%=exception.getMessage()%><br><hr>
getLocalizedMessage():<br>
<%=exception.getLocalizedMessage()%><br><hr>
PrintStatckTrace():<br>
<%
StringWriter sw=new StringWriter();
PrintWriter pw=new PrintWriter(sw);
exception.printStackTrace(pw);
out.println(sw);
%><br>
</font>
    </div>
  </div>
</div>
</body>
</html>
