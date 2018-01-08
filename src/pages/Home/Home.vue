<template>
<!--首页-->
    <div class="page-index" id="home">
        <!--顶部-->
        <div class="top-header">
            <!--最上面的header-->
            <div class="index-header">
                <!--logo-->
                <div class="logo">
                    <img src="./images/mi.png" alt="logo">
                </div>
                <!--搜索框-->
                <div class="search_bar">
                    <a href="">
                        <span class="text">搜索商品名称</span>
                    </a>
                </div>
                <!--登录-->
                <div class="login">
                    <div class="text">登录</div>
                </div>
            </div>
            <!--下面的header-->
            <div class="sub-header">
                <div class="swipe-tabs slick-slider">
                    <div aria-live="polite" class="slick-list">
                        <div class="slick-track">
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===0}"
                             @click="change(0)">推荐</div>
                            <div class="swipe-tab slick-slide" 
                            :class="{'on': navBarIndex===1}"
                            @click="change(1)">手机</div>
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===2}"
                             @click="change(2)"
                             >智能</div>
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===3}"
                             @click="change(3)">电视</div>
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===4}"
                             @click="change(4)">盒子</div>
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===5}"
                             @click="change(5)">电脑</div>
                            <div class="swipe-tab slick-slide"
                            :class="{'on': navBarIndex===6}" 
                            @click="change(6)">生活周边</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--主体-->
        <div class="main-container">
            <!--推荐页-->
            <div class="contioner display" :class="{'display1': navBarIndex===0}">
                <div id="slider0" class="slider" style="height:15.6rem; visibility:visible">
            <!--轮播图片-->
                    <div class="swipe-wrap">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="https://i8.mifile.cn/v1/a1/9311adb3-bdde-3611-d391-428b2e58b410.webp?bg=3C5391">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/bd27d20f-7b9b-7550-d10b-ef1b7e3311f5.webp?bg=AF383D">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="//i8.mifile.cn/v1/a1/5862b57e-e746-6a27-252b-624495767421.webp?bg=839484">
                        </mt-swipe-item>
                        </mt-swipe>
                    </div>
                </div>
                <!--第一页-->
                <div class="first">
                        <div class="body">
                            <div class="items">
                                <a href="">
                                    <div class="img">
                                        <img src="//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp?bg=F1F7E4">
                                    </div>
                                </a>
                            </div>
                            <div class="items">
                                <a href="">
                                    <div class="img">
                                        <img src="//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp?bg=FCF8EB">
                                    </div>
                                </a>
                            </div>
                            <div class="items">
                                <a href="">
                                    <div class="img">
                                        <img src="//i8.mifile.cn/v1/a1/5c0cf619-8b1c-937c-83de-8b5e97ddadc8!144x152.webp?bg=FCEDE7">
                                    </div>
                                </a>
                            </div>
                            <div class="items">
                                <a href="">
                                    <div class="img">
                                        <img src="//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp?bg=EBF6FC">
                                    </div>
                                </a>
                            </div>
                            <div class="items">
                                <a href="">
                                    <div class="img">
                                        <img src="//i8.mifile.cn/v1/a1/b7f2d222-f333-fad0-538d-9a7c5b895fd1!144x152.webp?bg=F6F3FA">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="img">
                            <img src="http://i8.mifile.cn/v1/a1/d411ede9-0109-56dc-daaa-61c1540f569f!720x153.webp">

                        </div>
                        <div class="item">
                            <!--图片-->
                            <div class="img">
                                <img src="//i8.mifile.cn/v1/a1/e36e0055-a8b3-e30a-eac5-a8e8a5935807.webp" alt="">
                                <div class="tagbottom">
                                    <img src="//i8.mifile.cn/b2c-mimall-media/6e5f74c81926eb7df5ead2dcd7878fc4.png?w=167&amp;h=167">
                                </div>
                            </div>
                            <!--图片信息-->
                            <div class="info">
                                <div class="l l1">
                                    <div class="name">
                                        小米note3
                                    </div>
                                    <div class="price">
                                        2199
                                        <span>起</span>
                                    </div>
                                </div>
                                <div class="l l2">
                                    <div class="brief">1600万美颜自拍,两倍变焦双摄</div>
                                    <div class="buybtn">立即购买</div>

                                </div>
                            </div>

                        </div>
                </div>
            </div>
            <!--手机页-->
            <div class="contioner display" :class="{'display1': navBarIndex===1}">
                <!--<div>手机</div>-->
                <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>
                </div>
                <div class="first">
                    <div class="f-list">
                        <div class="img">
                            <img src="//i8.mifile.cn/v1/a1/0f6d4fbb-6778-606e-df30-e598a18147e8!720x152.webp">
                        </div>
                    </div>
                </div>
            </div>
            <!--智能-->
            <div class="contioner" :class="{display:content!=='智能',display1:content==='智能'}">
                 <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>

                </div>
            </div>
            <!--电视-->
            <div class="contioner" :class="{display:content!=='电视',display1:content==='电视'}">
                 <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>

                </div>
            </div>
            <!--盒子-->
            <div class="contioner" :class="{display:content!=='盒子',display1:content==='盒子'}">
                 <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>

                </div>
            </div>
            <!--电脑-->
            <div class="contioner" :class="{display:content!=='电脑',display1:content==='电脑'}">
                 <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>

                </div>
            </div>
            <!--生活周边-->
            <div class="contioner" :class="{display:content!=='生活周边',display1:content==='生活周边'}">
                 <div id="slider1" class="slider" style="height:15.6rem; visibility:visible">
                    <mt-swipe :auto="4000">
                            <mt-swipe-item>
                                <img src="//i8.mifile.cn/v1/a1/2fdbb1fd-b1ab-d146-a7f6-d3e3b8f930c3.webp?bg=D75559">
                            </mt-swipe-item>
                        <mt-swipe-item>
                            <img            src="//i8.mifile.cn/v1/a1/4365245d-ce15-0872-3df3-85748a0d1ba4.webp?bg=A82E33">
                        </mt-swipe-item>
                        </mt-swipe>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data () {
        return {
            navBarIndex: 0
        }
    },
computed:{
    content(){
        return this.$store.state.content
    }
},
methods:{
    change(content){
        this.navBarIndex = content
        // console.log(this.navBarIndex)
    }
}

}
</script>

<style>
.display{
    display: none;
}
.display1{
    display: block;
}
.page-index{
    background:#fff;
    overflow: hidden;
    padding-bottom: 1rem;
    }
.page-index .top-header{
    position: fixed;
    top:0;
    width:100%;
    height: 6rem;
    z-index: 3;
}
.index-header{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height:4rem;
    z-index: 100;
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    padding:.15rem 0;
    background-color: #fafafa;
}
.index-header .logo {
    width: 4rem;
    padding: 0 .25rem;
    box-sizing: border-box;
}
.index-header .logo img {
    width: 2rem;
    height: auto;
}
.index-header .search_bar {
    line-height: 2.5rem;
    background:url(./images/search.png) no-repeat;
    background-size: 100% 100%;
    width: 20rem;
    height: 2.5rem;
    border-radius: .2rem;
    border: 1px solid #e5e5e5;
}
.index-header .search_bar>a {
    display: block;
    padding: 0 2.5rem;
}
.index-header .login {
    display: block;
    white-space: nowrap;
    box-sizing: border-box;
    text-align: center;
}
.index-header .login .text {
    text-align: center;
    color: #969696;
    margin: 0 1rem;
}
.sub-header {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: #fafafa;
    height: 2.5rem;
    overflow-y: hidden;
    width: 100%;
}
.slick-slider {
    display: block;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    height: 100%;
    margin: 0;
    padding: 0;
}
.slick-track {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    white-space: nowrap;
    display: block;
}
.sub-header .swipe-tab {
    margin: 0 .7rem;
    height: 2.5rem;
    line-height: 2.5rem;
    display: inline-block;
    align-items: center;
    justify-content: center;
    background: 0 0;
    border: 0;
    color: #747474;
    cursor: pointer;
    text-align: center;
    border-bottom: 2px solid rgba(237,91,0,0);
}
.sub-header .on {
    border-bottom-color: #ed5b00;
    color: #ed5b00;
}
.main-container {
    z-index: 1;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin-top: 6rem;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}

.slider{
    position: relative;
}
.slider img{
    width:100%;
    height: 100%;
}
.swipe-wrap{
    height: 100%;
}
.body{
    height: 7rem;
}
.items{
    float: left;
    width:20%;
}
.items img{
    width:100%;
    height: 100%;
    vertical-align: top;
     }
     
.box{
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: start;
    overflow: hidden;
    height:3.5rem;
    width:100%;
    border-top:1px solid #ccc;
     }
.store{
    height: 100%;
}
.store img{
    width:6rem;
    height: 100%;
   vertical-align: top;

}
#sc_title{
    height: 100%;
    line-height: 4rem;
    font-size: 1.2rem;
    transition: opacity .3s;
    padding-left: 2rem;
    border-left: 1px solid #b2b2b2;
    white-space: nowrap;
    overflow: hidden;

}
.cells_auto_fill{
    /*height: 24rem;*/
    position: relative;

}
.customize{
    position: absolute;
}
.img img {
    width: 100%;
    height: 100%;
    display: block;
}
.img{
    position: relative;
     }
.tagbottom {
    position: absolute;
    bottom: .64rem;
    right: .64rem;
}
.tagbottom img {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: auto;
}
.info {
    padding: .8rem 1.27rem;
    background-color: #fff;
}
.l {
    display: box;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    overflow: hidden;
}
.name {
    font-size: 1.28rem;
    color: rgba(0,0,0,.87);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price {
    display: inline-block;
    font-size: 1.32rem;
    color: #ff6000;
    margin-top: .32rem;
    position: relative;
    margin-left: .8rem;
    white-space: nowrap;
}
.price span {
    display: inline-block;
    margin-left: .4rem;
    font-size: .8rem;
}
.brief {
    margin-top: .24rem;
    font-size: 1rem;
    height: 1.2rem;
    line-height: 1.2rem;
    color: rgba(0,0,0,.54);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.buybtn {
    width: 8rem;
    background: #ff4a48;
    border-radius: .2rem;
    text-align: center;
    color: #fff;
    font-size: 1.24rem;
    padding: .64rem 0;
    font-weight: 700;
}

     






</style>