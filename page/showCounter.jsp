<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="java.io.*" %>

<%
// 從 application scope 取得訪客計數器的值
String strNo = (String)application.getAttribute("counter");
int counter = Integer.parseInt(strNo);
%>

<!DOCTYPE html>
<html>
<body>
  <h1>此網頁點擊次數：<%= counter %></h1>
</body>
</html>
