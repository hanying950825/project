/**
 * Created by Administrator on 2017/11/8.
 */
//登录、注册验证
formValidity(phone,tips,{"default":"请输入你的手机号码","error":"手机号码"});
formValidity(password,tips,{"default":"请输入6至12位的数字","error":"密码"});
formValidity(regphone,tip,{"default":"请输入你的手机号码","error":"手机号码"});
formValidity(regpassword,tip,{"default":"请输入6至12位的字符","error":"密码"});

function formValidity(elem,elemTip,text){
    elem.onfocus=function(){
        elemTip.className="reminder";
        elemTip.innerHTML=text.default;
    };
    elem.onblur=function(){
        if(elem.validity.valid){
            elemTip.className="reminder hide";
            elemTip.innerHTML=text.error+"输入正确";
        }else if(elem.validity.valueMissing){
            elemTip.className="reminder failed";
            elemTip.innerHTML=text.error+"不能为空";
        }else if(elem.validity.patternMismatch){
            elemTip.className="reminder failed";
            elemTip.innerHTML=text.error+"输入有误";
        }else if(elem.validity.typeMismatch){
            elemTip.className="reminder failed";
            elemTip.innerHTML=text.error+"输入有误";
        }else{
            elem.className="";
            elemTip.className="remender hide";
        }
    }
};

//点击后禁止其余内容点击
//登录窗口
var login=document.getElementById("login");
login.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-win').style.display='';
    document.getElementById("login-win").setAttribute("class","login-win");

};
var loginWinClose=document.getElementById("login-win-close");
loginWinClose.onclick=function(){
    document.getElementById('hbg').style.display='none';
    document.getElementById('login-win').style.display='none';
};

//手机号登录窗口
var loginNum=document.getElementById("login-num");
loginNum.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-phone').style.display='';
    document.getElementById('login-win').style.display='none';
};
var loginPhoneClose=document.getElementById("login-phone-close");
loginPhoneClose.onclick=function(){
    document.getElementById('hbg').style.display='none';
    document.getElementById('login-phone').style.display='none';
};
//其他登录方式
var loginOther=document.getElementById("login-other");
loginOther.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-phone').style.display='none';
    document.getElementById('login-win').style.display='';
};
//下拉中的手机号登录
var loginDropPho=document.getElementById("login-drop-phone");
loginDropPho.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-phone').style.display='';
}
//免费注册
var loginReg=document.getElementById("login-register");
loginReg.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-phone').style.display='none';
    document.getElementById('register').style.display='';
};
//关闭窗口
var registerClose=document.getElementById("register-close");
registerClose.onclick=function(){
    document.getElementById('hbg').style.display='none';
    document.getElementById('register').style.display='none';
};
//返回登录
var returnLogin=document.getElementById("return-login");
returnLogin.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('register').style.display='none';
    document.getElementById('login-phone').style.display='';
};
//注册窗口
var loginWinReg=document.getElementById("login-win-reg");
loginWinReg.onclick=function(){
    document.getElementById('hbg').style.display='';
    document.getElementById('login-win').style.display="none";
    document.getElementById('register').style.display='';
}
//下拉列表
var dropDown=document.getElementById('dropdown');
var dropMenu=document.getElementById("drop-menu");
dropDown.onmouseover=function(){
    dropMenu.style.display="inline-block";
}
var loginDropdown=document.getElementById("login-dropdown");
loginDropdown.onmouseover=function(){
    dropMenu.style.display="inline-block";
};
loginDropdown.onmouseout=function(){
    dropMenu.style.display="none";
};


