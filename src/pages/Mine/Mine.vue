<template>
  <div class="page-personal-center">
    <div class="hd">
      <div class="user">
        <div class="img nologin"></div>
        <div class="name">登录/注册</div>
      </div>
    </div>
    <div class="order">
      <a href="" class="bill">
        <cite>我的订单</cite>
        <div class="span more">
          全部订单
        </div>
      </a>
    </div>
    <ul class="nav">
      <li class="dfk">
        <a href="">
          <div class="icon"></div>
          <span>待付款</span>
        </a>
      </li>
      <li class="dsh">
        <a href="">
          <div class="icon"></div>
          <span>待收货</span>
        </a>
      </li>
      <li class="thx">
        <a href="">
          <div class="icon"></div>
          <span>退修货</span>
        </a>
      </li>
    </ul>

    <div class="item">
      <ul>
        <li class="i-member">
          <a href="">
            <cite>会员福利</cite>
          </a>
        </li>
        <li class="i-wallet">
          <a href="">
            <cite>我的优惠</cite>
          </a>
        </li>
      </ul>
      <ul>
        <li class="i-service">
          <a href="">
            <cite>服务中心</cite>
          </a>
        </li>
        <li class="i-mihome">
          <a href="">
            <cite>小米之家</cite>
          </a>
        </li>
      </ul>
      <ul>
        <li class="i-fcode">
          <a href="">
            <cite>F码通道</cite>
          </a>
        </li>
      </ul>
      <ul>
        <li class="i-setting">
          <a href="">
            <cite>设置</cite>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
  
}
</script>
<style>
.page-personal-center .hd {
    background: url(./images/bg.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: 1rem 0;
}
.hd{
  height:6rem;
}
.page-personal-center .hd .user {
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: start;
}
.page-personal-center .hd .user .img.nologin {
    border: 0;
    background: url(./images/avatar.png) no-repeat;
    background-size: 100% auto;
}
.page-personal-center .hd .user .img {
    margin: 0 .64rem 0 1.28rem;
    width: 4rem;
    min-width: 4rem;
    height: 4rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid rgba(255,255,255,.4);
}
.page-personal-center .hd .user .name {
    color: #fff;
    font-size: 1.5rem;
}
.page-personal-center .order {
  position: relative;
    height: 4rem;
    line-height: 4rem;
    background: #fff;
     border-bottom: 1px solid rgba(0,0,0,.15);
}
.page-personal-center .order a.bill {
    display: box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    padding-right: 2rem;
    height: 3.2rem;
    color: rgba(0,0,0,.54);
}
.page-personal-center .order a.bill cite {
    font-size: 1.5rem;
    padding: 0 0 0 1.2rem;
    color: rgba(0,0,0,.87);
}
cite{
  font-style: normal;
   }
.page-personal-center .order a.bill .span {
    padding-right: 2rem;
    position: relative;
    float: right;
    font-size: 1.5rem;
}  
.page-personal-center .order a.bill .span::after {
    content: "";
    position: absolute;
    right: 1rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotateZ(135deg);
}
.nav {
    display: box;
    display: -webkit-box;
    -webkit-box-align: stretch;
    -webkit-box-pack: justify;
    padding: 0 3.2rem;
}
 .nav li {
    display: box;
    display: -webkit-box;
    -webkit-box-align: stretch;
    -webkit-box-pack: justify;
    text-align: center;
    font-size: 1.5rem;
    color: rgba(0,0,0,.87);
}
.nav li a {
    padding: 1.6rem 0;
    position: relative;
    display: block;
}
.nav li a .icon {
    width: 2rem;
    height: 2rem;
    background-size: 100% auto;
    margin: 0 auto .8rem;
}
.nav li.dfk .icon{
    background-image: url(https://m.mi.com/views/user/index/img/nav-1_f74ca94.png);
}
.nav li.thx .icon {
    background-image: url(https://m.mi.com/views/user/index/img/nav-4_42676a4.png);
}
.nav li.dsh .icon{
    background-image: url(https://m.mi.com/views/user/index/img/nav-2_a05a641.png);
}
.item{
  margin-top:1rem;
}
.item ul {
    background: #fff;
    margin-bottom: 1rem;
} 
.item ul li {
    position: relative;
    color: rgba(0,0,0,.54);
    background: url(https://m.mi.com/img/i=setting.png) no-repeat 1.2rem center;
    background-size: 2rem auto;
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.item ul li>a {
    padding-right: 4rem;
    padding-left: 4rem;
    height: 4rem;
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    color: currentColor;
}
.item ul li.i-member {
    background-image: url(https://m.mi.com/views/user/index/img/i-member_f0d77b3.png);
}
.item ul li.i-wallet {
    background-image: url(https://m.mi.com/views/user/index/img/i-wallet_13a8fda.png);
}
.item ul li.i-service {
    background-image: url(https://m.mi.com/views/user/index/img/i-service_7b9f412.png);
}
.item ul li.i-mihome {
    background-image: url(https://m.mi.com/views/user/index/img/i-mihome_c836072.png);
}
.item ul li.i-fcode {
    background-image: url(https://m.mi.com/views/user/index/img/i-fcode_9c700c5.png);
}
.item ul li.i-setting {
    background-image: url(https://m.mi.com/views/user/index/img/i-setting_4ddebe5.png);
}
.item ul li>a {
    display: block;
    padding-right: 1rem;
    padding-left: 4rem;
    height: 4rem;
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    color: currentColor;
}
.item ul li>a cite {
    font-size: 1.5rem;
    color: rgba(0,0,0,.87);
}
.item ul li::after {
    content: "";
    position: absolute;
    right: 2rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotateZ(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotateZ(135deg);
}


</style>


