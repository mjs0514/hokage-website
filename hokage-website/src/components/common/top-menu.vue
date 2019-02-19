<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="/">HOKAGE</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> <!--브라우저크기를 줄였을때 메뉴를 펼치는 토글 버튼 -->

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto"> <!--마진 right auto 마진을 오른쪽으로 줘서 아이템을 왼쪽으로 붙임-->
          <li class="nav-item">
            <a class="nav-link" href="/event">새소식</a>
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
