<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="java.io.*" %>

<%
int counter;
String strNo=(String)application.getAttribute("counter");
counter=Integer.parseInt(strNo);
counter++;
strNo=String.valueOf(counter);
application.setAttribute("counter", strNo);
%>
<h1>此網頁點擊次數：<%=counter%></h1>
