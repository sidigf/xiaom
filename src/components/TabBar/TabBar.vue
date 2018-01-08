<template>
  <!--底部导航-->
        <div class="footer">
            <ul>
                <li>
                    <router-link to="/" class="home" @click.native="changeIndex(0)">
                        <div class="navs"
                        :class="{'active': navIndex===0}">
                            <div class="ih ispr" :class="{'active': navIndex===0}"
                            ></div>
                            <p :class="{'active': navIndex===0}">首页</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/category" class="category" @click.native="changeIndex(1)">
                        <div class="navs">
                            <div class="ic ispr" :class="{'active': navIndex===1}"></div>
                            <p :class="{'active': navIndex===1}">分类</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/cart" class="cart" @click.native="changeIndex(2)">
                        <div class="navs">
                            <div class="is ispr" :class="{'active': navIndex===2}"></div>
                            <p :class="{'active': navIndex===2}">购物车</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mine" class="mine" @click.native="changeIndex(3)">
                        <div class="navs">
                            <div class="if ispr" :class="{'active': navIndex===3}"></div>
                            <p :class="{'active': navIndex===3}">我的</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
    data () {
        return {
            navIndex:0
        }
    },
    methods: {
        changeIndex (index) {
            // console.log(1)
            this.navIndex = index
        }
    }
  
}
</script>
<style>
.footer{
    position:fixed;
    bottom:0;
    right: 0;
    left: 0;
    height:4rem;
    background:#fff;
    z-index: 99;
    border-top:1px solid #e0e0e0;
}
.footer ul{
    display: -webkit-box;
    height: 100%;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.footer li{
    -webkit-box-flex:1;
    width:100%;
    height: 100%;
    text-align: center;
}
.footer li>a{
    width:100%;
    height: 100%;
    display: block;
    padding: .48rem 0;
}
.footer .navs .ispr{
    width:1.6rem;
    height: 1.6rem;
    background-image: url(./images/pic.png);
    background-size: 1.6rem 12.8rem;
    overflow: hidden;
    margin: 0 auto;
}
.footer .navs .ispr.ih {
    background-position-y: -11.2rem;
}
.footer .navs .ispr.ic{
    background-position-y:-1.6rem;
}
.footer .navs .ispr.is {
    background-position-y: -4.8rem;
}
.footer .navs .ispr.if {
    background-position-y: -8rem;
}
.footer .navs .ispr.ih.active{
    background-position-y: -9.6rem;
}
.footer .navs .ispr.ic.active{
    background-position-y:0rem;
}
.footer .navs .ispr.is.active{
    background-position-y: -3.2rem;
}
.footer .navs .ispr.if.active{
    background-position-y: -6.4rem;
}
.footer .navs p {
    font-size: .88rem;
    line-height: 2rem;
    color: #999;
}
.footer .navs p.active {
    color: #ed5b00;
}
/*.active{
     color: #ed5b00;
   
}*/



</style>


