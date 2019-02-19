<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="/">HOKAGE</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> <!--브라우저크기를 줄였을때 메뉴를 펼치는 토글 버튼 -->

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto"> <!--마진 right auto 마진을 오른쪽으로 줘서 아이템을 왼쪽으로 붙임-->
          <li class="nav-item dropdown">
            <a class="nav-link" href="/event">새소식</a>
            <div class="dropdown-menu">
              <a href="#">공지사항</a>
              <a href="#">업데이트</a>
              <a href="#">이벤트</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/guide">가이드</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">자료실</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">기록실</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">커뮤니티</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">분석실(공사중)</a> <!--disabled 하면 클릭 못하게 막힘-->
          </li>
        </ul>
        <button class="btn btn-outline-success" onclick="location.href='/event'">로그인</button> <!-- 나중에 Oauth 링크를 걸어줘야함-->
      </div>
    </nav>

  </div>
</template>

<script>
export default {
}
</script>

<style>
.dropdown:hover .dropdown-menu {
   display: block;
}
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: rgb(42, 37, 37, 0.5);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-menu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-menu a:hover {background-color: rgb(134, 131, 131,0.5);}

</style>
