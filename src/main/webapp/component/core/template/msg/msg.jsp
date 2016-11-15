<%@ include file="/component/core/taglib/taglib.jsp"%>
<div id="msg">
	<c:if test="${not empty FACEYE_MESSAGE}">
		<div class="alert alert-warning alert-dismissible" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<c:forEach items="${FACEYE_MESSAGE}" var="message" varStatus = "status">
				<p>${message.message}</p>
			</c:forEach>
		</div>
	</c:if>
</div>
