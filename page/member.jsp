<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
    String email = request.getParameter("loginemail");
	String password = request.getParameter("loginpassword");


    try {
        String url = "jdbc:mysql://localhost/?serverTimezone=UTC";
        Connection con = DriverManager.getConnection(url, "root", "1234");

        if (con.isClosed()) {
            out.println("連線建立失敗");
        } else {
            // 選擇資料庫
            String sql = "USE `hw`";
            con.createStatement().execute(sql);

            // 執行登入的 SQL 指令
            sql = "SELECT * FROM member WHERE Password = ? AND  Email= ?";
            PreparedStatement pstmt = con.prepareStatement(sql);
            pstmt.setString(1, password);
            pstmt.setString(2, email);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                // 登入成功，將用戶信息存入Session
                session.setAttribute("email", email);
                // 其他處理，例如跳轉到會員頁面
				String usernameFromDB = rs.getString("Username");
				String dobFromDB = rs.getString("Birth");
				String phoneFromDB = rs.getString("Phone");
				String addressFromDB = rs.getString("Address");
				String emailFromDB = rs.getString("Email");

	
				request.setAttribute("username", usernameFromDB);
				request.setAttribute("dob", dobFromDB);
				request.setAttribute("phone", phoneFromDB);
				request.setAttribute("address", addressFromDB);
				request.setAttribute("email", emailFromDB);
				

				rs.close();
				pstmt.close();
			} 
			else {
				
				response.sendRedirect("login.html");

		}



            
        }

        // 關閉連線
        con.close();
    } catch (SQLException sExec) {
        out.println("SQL錯誤" + sExec.toString());
    }
%>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Membership</title>
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/membership.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>

<body>
  <header>
    <nav>
      <div class="icon">
        <a href="index.html"><img src="../img/logo.png" alt=""></a>
      </div>
      <div class="row">
        <ul>
          <li class="dropdown">
            <a href="product.html"><i class="fas fa-cube"></i>產品</a>
              <ul class="dropdown-content">
                <li><a href="product.html">全部</a></li>
                <li><a href="north.html">北部</a></li>
                <li><a href="central.html">中部</a></li>
                <li><a href="south.html">南部</a></li>
              </ul>
          </li>
        </ul>
        <ul>
          <li class="dropdown">
            <a href="login.html"><i class="fas fa-user"></i> 帳號</a>
              <ul class="dropdown-content">
                <li><a href="login.html">帳號登入/註冊</a></li>
                <li><a href="membership.html">會員資料</a></li>
                <li><a href="staff_login.html">賣家登入</a></li>
                <li><a href="staff.html">賣家中心</a></li>
              </ul>
          </li>
        </ul>
      </div>
      <ul>
        <li><a href="cart.html"><i class="fas fa-shopping-cart"></i> 購物車</a></li>
        <li><a href="about_us.html"><i class="fas fa-info-circle"></i> 關於我們</a></li>
      </ul>
    </nav>
  </header>
  
  <div class="container">
    <div class="datasection">
      <h1>個人資料</h1>
      <div class="profile-image">
        <img src="../bgimg/nigaoe_prokofiev.png" alt="Profile Image">
      </div>
      
      <!--後端這裡要改把名稱等等的要改掉-->
      <p>名稱: <span class="information" id="name"><%= request.getAttribute("username") %></span></p>
	  <p>出生年月日: <span class="information" id="dob"><%= request.getAttribute("dob") %></span></p>
	  <p>電話號碼: <span class="information" id="phone"><%= request.getAttribute("phone") %></span></p>
	  <p>寄送地址: <span class="information" id="address"><%= request.getAttribute("address") %></span></p>
	  <p>信箱: <span class="information" id="email"><%= request.getAttribute("email") %></span></p>
	  
      <button class="edit-button" onclick="toggleEditForm()">修改資料</button>
      <div class="edit-form">
        <form action="">
          <input type="text" id="editName" placeholder="名稱">
          <input type="date" id="editDob" placeholder="出生年月日">
          <input type="tel" id="editPhone" placeholder="電話號碼">
          <input type="text" id="editAddress" placeholder="寄送地址">
          <input type="email" id="editEmail" placeholder="信箱">
          <button onclick="saveChanges()">儲存變更</button>
        </form>
      </form>
      </div>
    </div>
    <br>
    <div class="comment">
      <h1>評論紀錄</h1>
      <div class="datasection">
        <!--  評論紀錄內容 -->
        <div class="comment-item">
          <p>產品：阿婆鐵蛋/原味</p>
          <p>價錢：$50</p>
          <p>評論內容：夠鹹。但是真香</p>
        </div>
        <!-- 添加更多的評論 -->
        <div class="comment-item">
          <p>產品：小潘蛋糕 鳳凰酥15入</p>
          <p>價錢：$150</p>
          <p>評論內容：好甜好好吃</p>
        </div>
      </div>
    </div>

    <div class="history">
      <h1>購買紀錄</h1>
      <div class="datasection">
        <!-- 購買紀錄 -->
        <div class="comment-item">
          <p>產品：諾貝爾奶凍捲/奶油</p>
          <p>價錢：$250</p>
          <p>購買日期：2023-01-01</p>
        </div>
        <!-- 添加更多購買項目 -->
        <div class="comment-item">
          <p>產品：安平小舖蝦餅/原味</p>
          <p>價錢：$100</p>
          <p>購買日期：2023-05-16</p>
        </div>
      </div>
    </div>

  </div>

    <a href="#top"><img class="backtop" src="../bgimg/back_top.png" alt="top"></a>

    <footer>
      <h2 class="footer-title">ㄙ口美食團購網</h2>
      <div class="footer-map"><a href="https://maps.app.goo.gl/3DbQ4KHq2NtmK29Y8" target="_blank"><img src="../bgimg/map.jpg" alt=""></a></div>	
      <h1 class="footer-title">聯繫方式(我們的email):<a href="mailto:s811227@sphs.hc.edu.tw">s811227@sphs.hc.edu.tw</a></h1>
      <hr>
      <br><br>
      <p class="footer-title">Copyright © 2023 All rights reserved.</p>
    </footer>
</body>
    
<script src="../Javascript/membership.js"></script>
</html>