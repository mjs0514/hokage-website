<template>
  <div>

    <div id="first" class="first-container">
      <div class="first-image"><img src="@/assets/image.jpg" alt="Home image"></div>
      <div class="first-input form-group"><input type="id" class="form-control" placeholder="아이디를 입력하세요"> </input></div>
    </div>


  </div>
</template>

<script>
export default {
}
</script>


<style>
.first-image img {width:100%; opacity: 0.5; }
.first-container {position:relative;}
.first-input {position: absolute; top:80%; left:50%; transform:translate(-50%,-50%); width:400px}

</style>
