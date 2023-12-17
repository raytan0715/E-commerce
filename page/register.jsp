<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>

<%
    String username = request.getParameter("username");
	String password = request.getParameter("password");
	String email = request.getParameter("email");
	String comfirm_password = request.getParameter("comfirm_password");
	String birth = request.getParameter("birth");
	String gender = request.getParameter("gender"); 
	String phone = request.getParameter("phone");
	String address = request.getParameter("address");


    Connection conn = null;
    PreparedStatement pstmt = null;

    try {
        // 建立連線
        String url = "jdbc:mysql://localhost/?serverTimezone=UTC";
        Connection con = DriverManager.getConnection(url, "root", "1234");

        if (con.isClosed()) {
            out.println("連線建立失敗");
        } else {
            // 選擇資料庫
            String sql = "USE `hw`";
            con.createStatement().execute(sql);

            // 檢查密碼是否相符
            if (password.equals(comfirm_password)) {
                // 執行插入會員資訊的 SQL 指令
                sql = "INSERT INTO member (Username, Password, Email, Birth, Phone, Address) VALUES (?, ?, ?, ?, ?, ?)";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, username);
				pstmt.setString(2, password);
				pstmt.setString(3, email);
				pstmt.setString(4, birth);
				pstmt.setString(5, phone);
				pstmt.setString(6, address);
				
                pstmt.executeUpdate();

				session.setAttribute("userEmail", email);
                // 註冊成功，將用戶導向登入頁面
                response.sendRedirect("member.jsp");
				return;
            } else {
                // 密碼不相符，將用戶導向註冊頁面
                response.sendRedirect("register.jsp");
            }
        }

        // 關閉連線
        con.close();
    } catch (SQLException sExec) {
        out.println("SQL錯誤" + sExec.toString());
    } 
%>

