<template>
  <div class="page-category">
      <div class="page-category-wrap">
          <!--头部-->
          <div class="header">
              <div class="left">
                  <a href="" class="home">
                      <img src="//s1.mi.com/m/images/m/icon_back_n.png" class="ib">
                  </a>
              </div>
              <div class="tit">
                  <h2>
                      <span class="title">商品分类</span>
                  </h2>
              </div>
              <div class="right">
                  <a href="">
                      <div class="icon icon_search">
                          <img src="../../common/images/search.png">    
                      </div>
                  </a>
              </div>
          </div>
          <!--列表容器-->
          <div class="list-wrap">
              <div v-for="(item, index) in categories" :key="index" v-show="index>0">
                  <div class="f-list">
                      <div class="section">
                          <div name="m1" class="category_title">
                              <span>{{item.category_name}}</span>
                          </div>
                      </div>
                      <div class="section">
                          <div class="category_group">
                              <div class="box">
                                  <div class="product" v-for="(product, index) in item.category_list[2].body.items" :key="index">
                                      <a class="exposure">
                                          <div class="img">
                                              <img :src="product.img_url" alt="">
                                          </div>
                                          <div class="name">{{product.product_name}}</div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="list-navbar" style="top: 44px bottom: 46px;">
          <ul>
              <li v-for="(item,index) in categories" :key="item.id"
              @click="changeIndex(index)">
                  {{item.category_name}} 
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
    created () {
        // console.log(this.categories)
    },
    data () {
        return {
            // arr: []
        }

    },
    methods: {
        
    },
    computed : {
        //左侧分类名称
        categories () {
            return this.$store.state.classes
        }
    }

}
</script>
<style>
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

.page-category .list-navbar {
    position: fixed;
    top: 4rem;
    bottom: 4rem;
    width: 7rem;
    margin-top: 1px;
    z-index: 90;
    border-right: 1px solid #efefef;
    overflow-y: hidden;
}
.page-category .list-navbar>ul {
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -1.2rem;
    padding: .2rem 1.2rem .8rem 0;
    background: #fefefe;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.page-category .list-navbar>ul li {
    font-size: 2rem;
    height: 3.6rem;
    line-height: 3.6rem;
    overflow: hidden;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    transition: transform .1s linear;
    transform-origin: center center;
    transform: scale(0.76);
    -webkit-transition: -webkit-transform .1s linear;
    -webkit-transform-origin: center center;
    -webkit-transform: scale(0.76);
}

.page-category .list-wrap {
    margin-left: 8rem;
    padding: 2px 1.2rem;
    overflow: hidden;
}
.page-category .section {
    overflow: hidden;
}
.f-list .cells_auto_fill .items {
    position: absolute;
}
.f-list .img {
    position: relative;
}

.f-list .cells_auto_fill .items img {
    width: 100%;
}
.img img {
    width: 100%;
    height: 100%;
    display: block;
}
.f-list .category_title {
    background: #fff;
    font-size: 1.28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 5rem;
    line-height: 5rem;
    overflow: hidden;
}
.f-list .category_title span {
    position: relative;
}
/*.f-list .category_title span::before, .f-list .category_title span::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 1.6rem;
    border-top: 1px solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
}*/
.page-category .section {
    overflow: hidden;
}
.f-list .category_group {
    background: #fff;
    margin: -.06rem 0 0;
}
.f-list .category_group .product {
    float: left;
    width: 33.33333%;
    text-align: center;
    margin-top: .8rem;
    margin-bottom: 1.2rem;
    overflow: hidden;
}
.f-list .category_group .product .img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    background: #FFF;
    overflow: hidden;
}
</style>
