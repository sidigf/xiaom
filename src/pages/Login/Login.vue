<template>
<div class="wrapper">
    <div class="wrap">
        <div class="layout" id="layout">
            <!--表单输入登录-->
            <div class="mainbox" id="login-main">
                <!--登录头-->
                <div class="lgnheader">
                    <div class="header_tit t_c">
                        <em class="milogo">
                            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" style="fill:#ef5b00"></rect><rect x="11.25" y="15" width="5" height="20" style="fill:#FFFFFF"></rect><rect x="11.25" y="15" width="12.5" height="5" style="fill:#FFFFFF"></rect><rect x="26.25" y="22.5" width="5" height="12.5" style="fill:#FFFFFF"></rect><rect x="33.75" y="15" width="5" height="20" style="fill:#FFFFFF"></rect><circle cx="23.75" cy="22.5" r="7.5" fill="#FFFFFF"></circle><rect x="16.25" y="20" width="7.5" height="15" style="fill:#ef5b00"></rect><rect x="16.25" y="22.5" width="10" height="12.5" style="fill:#ef5b00"></rect><circle cx="23.75" cy="22.5" r="2.5" fill="#ef5b00"></circle><rect x="18.75" y="22.5" width="5" height="12.5" style="fill:#FFFFFF"></rect></svg>
                        </em>
                        <h4 class="header_tit_txt" id="login-title">
                            小米账号登录
                        </h4>
                        <div class="site_info"></div>
                    </div>
                </div>
                <div class="tabs-con tabs_con now">
                    <div class="login_area">
                        <form action="" method="POST" id="login-main-form">
                            <div class="loginbox">
                                <!--输入框-->
                                <div class="lgn_input">
                                    <label class="labelbox login_user">
                                        <input type="text" class="item_account" autocomplete="off" placeholder="邮箱/手机号码/小米ID">
                                    </label>
                                    <label class="labelbox login_pwd">
                                        <input type="password" autocomplete="off" placeholder="密码" name="pwd" id="pwd">
                                        <div class="eye_pannel">

                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="btns_bg">
                                <input class="btnadpt btn_orange" id="login-button" type="submit" value="登录">
                            </div>
                            <div class="other_pannel"></div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

  
</template>
<script>
export default {
  
}
</script>
<style>

</style>


