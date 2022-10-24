<body>
Welcome
<%
response.write(request.querystring("name"))
response.write(" " & request.querystring("surname"))
%>
</body>