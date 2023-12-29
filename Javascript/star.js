
    document.addEventListener("DOMContentLoaded", function () {
      // 找到最外層的div
      const starRating = document.getElementById("star-rating");
      //找到後端的星星
      const commentStar = document.getElementsByClassName("comment-star");
      // 找到所有的icon
      const starIcons = starRating.querySelectorAll(".star-icon");
    
      /*別人評論星星 */
      //後端回傳資料
      // let  url: "" 後端資料庫的url
      $.ajax({
        type: "post",
        datatype: "Json",
        // data: data,
        async: true,
        //後端回傳觸發的事件
        success: function (m) {
          // m 後端回傳的資料
          const clickedIndex = parseInt(m.data[i]);//接收後端回傳的星星個數

          //starsIcons是一個陣列，所以可以使用forEach診斷 跑迴圈
          commentStar.forEach((icon, index) => {
            //如果index小於點擊的index，就加上selected的class，並改變icon
            if (index < clickedIndex) {
              icon.setAttribute("icon", "material-symbols:star");
            }
            // 如果index小於點擊的index，就加上selected的class，並且改變icon 變成空心
            else {
              icon.setAttribute("icon", "material-symbols:star-outline");
            }
          });
        },
        /*顯示error的地方 */
        
        // error: function (XMLHttpResquest, textStatus, errorThrown) {
        //   alert("抱歉無法取得相應資料");
        // }
      });

      /*寫評論的星星 */

      // 將所有的icon加上click事件
      starIcons.forEach((starIcon) => {
        starIcon.addEventListener("click", function () {
          // 找到點擊的icon的data-index 並轉成數字
          const clickedIndex = parseInt(this.getAttribute("data-index"));
          // starsIcons是一個陣列，所以可以用forEach來判斷 跑迴圈 全部都跑一遍
          starIcons.forEach((icon, index) => {
            // 如果index小於點擊的index，就加上selected的class，並且改變icon
            if (index < clickedIndex) {
              icon.setAttribute("icon", "material-symbols:star");
            }
            // 如果index小於點擊的index，就加上selected的class，並且改變icon 變成空心
            else {
              icon.setAttribute("icon", "material-symbols:star-outline");
            }
          });

          // 在這裏你可以將 clickedIndex 送到後端，並更新資料庫

          console.log("Selected Rating: " + clickedIndex);
        });
      });
    });