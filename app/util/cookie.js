export function setCookie(name,value,day) {
    let Days = day; //此 cookie 将被保存 30 天
    let exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    if((typeof value == "string")&&(value.length > 0)){
        document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
    }else{
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval= this.get(name);
        if(cval!=null)
            document.cookie=name +"="+cval+";expires="+exp.toGMTString();
    }
}
export function getCookie(name) {
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}