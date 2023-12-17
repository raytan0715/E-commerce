<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="java.io.*" %>

<%
application.setAttribute("counter", "500");
out.print("計數器初始值設定為 500");
%>
