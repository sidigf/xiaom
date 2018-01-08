<template>
  <div class="cart-index">
      <!--头部-->
      <div class="header">
          <!--左侧-->
              <div class="left">
                  <a href="" class="home">
                      <img src="//s1.mi.com/m/images/m/icon_back_n.png" class="ib">
                  </a>
              </div>
              <!--中间-->
              <div class="tit">
                  <h2>
                      <span class="title">购物车</span>
                  </h2>
              </div>
              <!--右边-->
              <div class="right">
                  <a href="">
                      <div class="icon icon_search">
                         <img src="../../common/images/search.png">    
                      </div>
                  </a>
              </div>
          </div>
          <!--购物车主体-->
          <div class="cart-index-wrap">
              <!--未登录-->
              <div class="nologin" v-show="loginBol">
                  <a href="">
                      <span>登录后享更多优惠</span>
                      <em>去登录</em>
                  </a>
              </div>
              <!--提示-->
              <div class="noitems grey" v-show="cartBol">
                  <a href="">
                      <span>购物车还是空的</span>
                      <em>去逛逛</em>
                  </a>
              </div>
              <!--主体内容-->
              <div class="list-recommend">
                  <div class="recommend-title">
                      为你推荐
                  </div>
                  <!--图片-->
                  <div class="recommend-list">
                      <ul>
                          <!--v-for-->
                          <li v-for="(item,index) in lists" :key="item.id">
                              <a class="exposure">
                                  <!--图片-->
                                  <div class="img">
                                      <img class="lazy" :src='item.image_url' alt="">
                                  </div>
                                  <!--图片信息-->
                                  <div class="recommend-info">
                                      <!--商品名称-->
                                      <div class="recommend-name">{{item.name}}</div>
                                      <!--商品价格-->
                                      <div class="recommend-price">{{item.price}}</div>
                  
                                      </div>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

  </div>
</template>
<script>

export default {
    created () {
        // console.log(this.lists)
    },
    data () {
        return{
            loginBol: false,
            cartBol: false
        }
    },
   computed: {
       lists () {
           return this.$store.state.commend.recom_list
       }
   }
}
</script>
<style>
.cart-index {
    background: #FFF;
}
.header {
    display: -webkit-box;
    height: 4rem;
    -webkit-box-align: center;
    padding: 0 .8rem;
    background: #f2f2f2;
    position: relative;
    border-bottom: 1px solid #eee;
    z-index: 2;
}
.header .left {
    position: relative;
    z-index: 1;
}
.header .left a {
    display: block;
}
.header .left .ib {
    width: 2rem;
    height: 2rem;
}
.header .tit {
    -webkit-box-flex: 1;
    width: 100%;
}
.header .tit h2 {
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 4rem;
}
.header .tit span {
    font-size: 2rem;
    color: #666;
    font-weight: 400;
}
.header .right {
    position: relative;
}
.header .right a {
    display: inline-block;
    margin-left: .8rem;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
}
.header .right .icon {
    color: #999;
}
.icon_search img{
    width:100%;
    height: 100%;
}

.cart-index-wrap{
    padding-bottom:1.5rem;
}
.cart-index-wrap .nologin>a {
    height: 4rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    padding: 0 2rem 0 2rem;
    position: relative;
    color: rgba(0,0,0,.54);
}
.cart-index-wrap .nologin>a span {
    font-size: 1.6rem;
    color: rgba(0,0,0,.87);
    display: block;
}
.cart-index-wrap .nologin>a em {
    font-size: 1.5rem;
}
em{
    font-style: normal;
}
.cart-index-wrap .nologin>a::after {
    content: "";
    position: absolute;
    right: 1.2rem;
    top: 50%;
    width: .8rem;
    height: .8rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotateZ(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotateZ(135deg);
}
.cart-index-wrap .noitems.grey {
    background: #ebebeb;
}
.cart-index-wrap .noitems.grey>a {
    height: 4rem;
}
.cart-index-wrap .noitems>a {
    display: block;
    height: 5rem;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    font-size: .8rem;
}

.cart-index-wrap .noitems>a span {
    font-size: 1.2rem;
    display: block;
    line-height: 3.2rem;
    background: url(https://m.mi.com/views/cart/index/img/cartnull_0de91f1.png) no-repeat 0 center;
    background-size: auto 100%;
    padding: 0 .64rem 0 4rem;
    color: rgba(0,0,0,.27);
}
.cart-index-wrap .noitems>a em {
    display: block;
    border: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    height: 2rem;
    line-height: 2rem;
    padding: 0 .8rem;
    color: rgba(0,0,0,.87);
}
.list-recommend {
    background: #fff;
}
.list-recommend .recommend-title {
    height: 3.2rem;
    line-height: 3.2rem;
    background: #fff;
    font-size: 1.6rem;
    padding: 0 1.2rem;
}
.list-recommend .recommend-list li {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding-right: .04rem;
}
.list-recommend .recommend-list li {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding-right: .04rem;
}
.list-recommend .recommend-list li .img {
    position: relative;
}
.list-recommend .recommend-list li .img>img {
    width: 100%;
    height: auto;
    /*min-height: 3.56rem;*/
    border: 0;
}
.list-recommend .recommend-list li .recommend-info {
    padding: 1rem 1.2rem;
}
.list-recommend .recommend-list li .recommend-info .recommend-name {
    font-size: 1.6rem;
    color: rgba(0,0,0,.87);
    white-space: nowrap;
    overflow: hidden;
}
.list-recommend .recommend-list li .recommend-info .recommend-price {
    font-size: 1.6rem;
    color: #ff6000;
    margin-top: .4rem;
}
.list-recommend .recommend-list li .recommend-info .recommend-price::before {
    content: "￥";
    font-size: 1rem;
    vertical-align: top;
    margin-right: .2rem;
    font-weight: 400;
    display: inline-block;
    transform: translateY(0.04rem);
    -webkit-transform: translateY(0.04rem);
}




</style>

