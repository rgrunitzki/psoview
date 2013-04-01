(function() {
    (function (){
        var g=void 0,ba=!0,h=null,i=!1,j=google_exportSymbol,k=document,ca=isNaN,l=google_exportProperty,m=Math,q=Array,da=Number,r=Error,t=parseInt,u=String;
        function v(a,b){
            return a.format=b
        }
        function ea(a,b){
            return a.type=b
        }
        var y="push",fa="test",z="round",ga="slice",A="replace",C="floor",D="charAt",E="indexOf",F="format",ha="fromCharCode",ia="getColumnType",ja="getHours",ka="getValue",la="getTime",ma="getElementsByTagName",na="substr",oa="toString",pa="getNumberOfRows",G="length",qa="propertyIsEnumerable",H="prototype",ra="split",ta="setFormattedValue",I="call",ua="setProperty",va="substring",wa="apply",J="join",xa="toLowerCase",ya="getTimezoneOffset",K="",za=" ",Aa='" />',Ba="#",Ca="#$1$1$2$2$3$3",Da="$1",Ea="%",Fa=
        "'",Ga="''",Ha="(",Ia="(\\d*)(\\D*)",Ja=")",Ka="+",La=",",L="-",M=".",Ma='.png" height="12" width="',Na="/static/modules/gviz/",Oa="/util/bar_",Pa="/util/format.css",N="0",Qa="0000000000000000",Ra="1",Sa="1.0",Ta=":",Ua=";",Va="</span>\u00a0",Wa='<img style="padding: 0" src="',Xa='<span style="padding: 0; float: left; white-space: nowrap;">',Ya="E",Za="Etc/GMT",$a="G",ab="GMT",bb="H",cb="K",db="L",eb="LINK",fb="M",hb="Q",O="S",ib="Too many percent/permill",jb="UTC",kb="Z",lb="[object Array]",mb="[object Function]",
        nb="[object Window]",ob="\\",pb="_bar_format_old_value",qb="a",rb="addGradientRange",sb="array",tb="b",ub="background-color:",vb="body",wb="boolean",xb="c",yb="call",zb="className",Ab="color:",Bb="d",Cb="date",Db="datetime",Eb="decimalSymbol",Fb="false",P="format",Gb="formatType",Hb="fractionDigits",Ib="full",Jb="function",Kb="g",Lb="google-visualization-formatters-arrow-dr",Mb="google-visualization-formatters-arrow-empty",Nb="google-visualization-formatters-arrow-ug",Ob="google.loader.GoogleApisBase",
        Pb="google.visualization.Version",Qb="groupingSymbol",Rb="h",Sb="head",Tb="hex",Ub="html",Vb="http://ajax.googleapis.com/ajax",Wb="k",Xb="link",Yb="long",Zb="m",$b="medium",ac="named",bc="native code",cc="negativeColor",dc="negativeParens",ec="none",fc="null",Q="number",gc="object",hc="pattern",ic="prefix",jc="r",kc="rgb",lc="s",mc="scaleFactor",nc="short",pc="splice",qc="string",rc="style",sc="stylesheet",tc="suffix",uc="text/css",vc="time",wc="timeZone",xc="timeofday",yc="transparent",zc="true",
        Ac="v",Bc="valueType",Cc="w",Dc="y",Ec="z",Fc="\u00a0",Gc="\u00a4",Hc="\u00a4#,##0.00;(\u00a4#,##0.00)",Ic="\u2030",S,T=this;
        function Jc(a,b){
            for(var c=a[ra](M),d=b||T,e;e=c.shift();)if(d[e]!=h)d=d[e];else return h;return d
        }
        function Kc(a){
            var b=typeof a;
            if(b==gc)if(a){
                if(a instanceof q)return sb;
                if(a instanceof Object)return b;
                var c=Object[H][oa][I](a);
                if(c==nb)return gc;
                if(c==lb||typeof a[G]==Q&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[qa]&&!a[qa](pc))return sb;
                if(c==mb||"undefined"!=typeof a[I]&&"undefined"!=typeof a[qa]&&!a[qa](yb))return Jb
            }else return fc;
            else if(b==Jb&&"undefined"==typeof a[I])return gc;
            return b
        }
        function Lc(a){
            var b=typeof a;
            return(b==gc&&a!=h||b==Jb)&&typeof a.getFullYear==Jb
        }
        m[C](2147483648*m.random())[oa](36);
        function Mc(a,b,c){
            return a[I][wa](a.bind,arguments)
        }
        function Nc(a,b,c){
            if(!a)throw r();
            if(2<arguments[G]){
                var d=q[H][ga][I](arguments,2);
                return function(){
                    var c=q[H][ga][I](arguments);
                    q[H].unshift[wa](c,d);
                    return a[wa](b,c)
                }
            }
            return function(){
                return a[wa](b,arguments)
            }
        }
        function Oc(a,b,c){
            Oc=Function[H].bind&&-1!=Function[H].bind[oa]()[E](bc)?Mc:Nc;
            return Oc[wa](h,arguments)
        }
        function Pc(a,b){
            var c=q[H][ga][I](arguments,1);
            return function(){
                var b=q[H][ga][I](arguments);
                b.unshift[wa](b,c);
                return a[wa](this,b)
            }
        };
    
        function Qc(a){
            this.M=a||{};
    
                a:{
                    for(var b=Rc()+Pa,a=k[ma](eb),c=0;c<a[G];c++)if(a[c]&&a[c].href&&a[c].href==b)break a;a=k.createElement(Xb);
                    a.href=b;
                    a.rel=sc;
                    ea(a,uc);
                    if(0==k[ma](Sb)[G]){
                        var b=k[ma](Ub)[0],c=k[ma](vb)[0],d=k.createElement(Sb);
                        b.insertBefore(d,c)
                    }
                    k[ma](Sb)[0].appendChild(a)
                }
        }
        v(Qc[H],function(a,b){
            if(a[ia](b)==Q)for(var c=this.M.base||0,d=0;d<a[pa]();d++){
                var e=a[ka](d,b),f=h,f=e<c?Lb:e>c?Nb:Mb;
                a[ua](d,b,zb,f)
            }
        });
        function U(a,b,c){
            a=c!==g?a.toFixed(c):u(a);
            c=a[E](M);
            -1==c&&(c=a[G]);
            b=m.max(0,b-c);
            return q(b+1)[J](N)+a
        }
        function Sc(a,b){
            for(var c=0,d=u(a)[A](/^[\s\xa0]+|[\s\xa0]+$/g,K)[ra](M),e=u(b)[A](/^[\s\xa0]+|[\s\xa0]+$/g,K)[ra](M),f=m.max(d[G],e[G]),n=0;0==c&&n<f;n++){
                var p=d[n]||K,B=e[n]||K,R=RegExp(Ia,Kb),aa=RegExp(Ia,Kb);
                do{
                    var w=R.exec(p)||[K,K,K],s=aa.exec(B)||[K,K,K];
                    if(0==w[0][G]&&0==s[0][G])break;
                    c=((0==w[1][G]?0:t(w[1],10))<(0==s[1][G]?0:t(s[1],10))?-1:(0==w[1][G]?0:t(w[1],10))>(0==s[1][G]?0:t(s[1],10))?1:0)||((0==w[2][G])<(0==s[2][G])?-1:(0==w[2][G])>(0==s[2][G])?1:0)||(w[2]<s[2]?-1:w[2]>s[2]?1:0)
                }while(0==
                    c)
            }
            return c
        };
    
        var Tc=q[H],Uc=Tc[E]?function(a,b,c){
            return Tc[E][I](a,b,c)
        }:function(a,b,c){
            c=c==h?0:0>c?m.max(0,a[G]+c):c;
            if(typeof a==qc)return typeof b!=qc||1!=b[G]?-1:a[E](b,c);
            for(;c<a[G];c++)if(c in a&&a[c]===b)return c;return-1
        };
    
        var Vc={
            aliceblue:"#f0f8ff",
            antiquewhite:"#faebd7",
            aqua:"#00ffff",
            aquamarine:"#7fffd4",
            azure:"#f0ffff",
            beige:"#f5f5dc",
            bisque:"#ffe4c4",
            black:"#000000",
            blanchedalmond:"#ffebcd",
            blue:"#0000ff",
            blueviolet:"#8a2be2",
            brown:"#a52a2a",
            burlywood:"#deb887",
            cadetblue:"#5f9ea0",
            chartreuse:"#7fff00",
            chocolate:"#d2691e",
            coral:"#ff7f50",
            cornflowerblue:"#6495ed",
            cornsilk:"#fff8dc",
            crimson:"#dc143c",
            cyan:"#00ffff",
            darkblue:"#00008b",
            darkcyan:"#008b8b",
            darkgoldenrod:"#b8860b",
            darkgray:"#a9a9a9",
            darkgreen:"#006400",
            darkgrey:"#a9a9a9",
            darkkhaki:"#bdb76b",
            darkmagenta:"#8b008b",
            darkolivegreen:"#556b2f",
            darkorange:"#ff8c00",
            darkorchid:"#9932cc",
            darkred:"#8b0000",
            darksalmon:"#e9967a",
            darkseagreen:"#8fbc8f",
            darkslateblue:"#483d8b",
            darkslategray:"#2f4f4f",
            darkslategrey:"#2f4f4f",
            darkturquoise:"#00ced1",
            darkviolet:"#9400d3",
            deeppink:"#ff1493",
            deepskyblue:"#00bfff",
            dimgray:"#696969",
            dimgrey:"#696969",
            dodgerblue:"#1e90ff",
            firebrick:"#b22222",
            floralwhite:"#fffaf0",
            forestgreen:"#228b22",
            fuchsia:"#ff00ff",
            gainsboro:"#dcdcdc",
            ghostwhite:"#f8f8ff",
            gold:"#ffd700",
            goldenrod:"#daa520",
            gray:"#808080",
            green:"#008000",
            greenyellow:"#adff2f",
            grey:"#808080",
            honeydew:"#f0fff0",
            hotpink:"#ff69b4",
            indianred:"#cd5c5c",
            indigo:"#4b0082",
            ivory:"#fffff0",
            khaki:"#f0e68c",
            lavender:"#e6e6fa",
            lavenderblush:"#fff0f5",
            lawngreen:"#7cfc00",
            lemonchiffon:"#fffacd",
            lightblue:"#add8e6",
            lightcoral:"#f08080",
            lightcyan:"#e0ffff",
            lightgoldenrodyellow:"#fafad2",
            lightgray:"#d3d3d3",
            lightgreen:"#90ee90",
            lightgrey:"#d3d3d3",
            lightpink:"#ffb6c1",
            lightsalmon:"#ffa07a",
            lightseagreen:"#20b2aa",
            lightskyblue:"#87cefa",
            lightslategray:"#778899",
            lightslategrey:"#778899",
            lightsteelblue:"#b0c4de",
            lightyellow:"#ffffe0",
            lime:"#00ff00",
            limegreen:"#32cd32",
            linen:"#faf0e6",
            magenta:"#ff00ff",
            maroon:"#800000",
            mediumaquamarine:"#66cdaa",
            mediumblue:"#0000cd",
            mediumorchid:"#ba55d3",
            mediumpurple:"#9370d8",
            mediumseagreen:"#3cb371",
            mediumslateblue:"#7b68ee",
            mediumspringgreen:"#00fa9a",
            mediumturquoise:"#48d1cc",
            mediumvioletred:"#c71585",
            midnightblue:"#191970",
            mintcream:"#f5fffa",
            mistyrose:"#ffe4e1",
            moccasin:"#ffe4b5",
            navajowhite:"#ffdead",
            navy:"#000080",
            oldlace:"#fdf5e6",
            olive:"#808000",
            olivedrab:"#6b8e23",
            orange:"#ffa500",
            orangered:"#ff4500",
            orchid:"#da70d6",
            palegoldenrod:"#eee8aa",
            palegreen:"#98fb98",
            paleturquoise:"#afeeee",
            palevioletred:"#d87093",
            papayawhip:"#ffefd5",
            peachpuff:"#ffdab9",
            peru:"#cd853f",
            pink:"#ffc0cb",
            plum:"#dda0dd",
            powderblue:"#b0e0e6",
            purple:"#800080",
            red:"#ff0000",
            rosybrown:"#bc8f8f",
            royalblue:"#4169e1",
            saddlebrown:"#8b4513",
            salmon:"#fa8072",
            sandybrown:"#f4a460",
            seagreen:"#2e8b57",
            seashell:"#fff5ee",
            sienna:"#a0522d",
            silver:"#c0c0c0",
            skyblue:"#87ceeb",
            slateblue:"#6a5acd",
            slategray:"#708090",
            slategrey:"#708090",
            snow:"#fffafa",
            springgreen:"#00ff7f",
            steelblue:"#4682b4",
            tan:"#d2b48c",
            teal:"#008080",
            thistle:"#d8bfd8",
            tomato:"#ff6347",
            turquoise:"#40e0d0",
            violet:"#ee82ee",
            wheat:"#f5deb3",
            white:"#ffffff",
            whitesmoke:"#f5f5f5",
            yellow:"#ffff00",
            yellowgreen:"#9acd32"
        };

        function Wc(a){
            var b={},a=u(a),c=a[D](0)==Ba?a:Ba+a;
            if(Xc[fa](c))return b.k=Yc(c),ea(b,Tb),b;
                a:{
                    var d=a.match(Zc);
                    if(d){
                        var c=da(d[1]),e=da(d[2]),d=da(d[3]);
                        if(0<=c&&255>=c&&0<=e&&255>=e&&0<=d&&255>=d){
                            c=[c,e,d];
                            break a
                        }
                    }
                    c=[]
                }
            if(c[G])return b.k=$c(c[0],c[1],c[2]),ea(b,kc),b;
            if(Vc&&(c=Vc[a[xa]()]))return b.k=c,ea(b,ac),b;
            throw r(a+" is not a valid color string");
        }
        var ad=/#(.)(.)(.)/;
        function Yc(a){
            if(!Xc[fa](a))throw r(Fa+a+"' is not a valid hex color");
            4==a[G]&&(a=a[A](ad,Ca));
            return a[xa]()
        }
        function bd(a){
            a=Yc(a);
            return[t(a[na](1,2),16),t(a[na](3,2),16),t(a[na](5,2),16)]
        }
        function $c(a,b,c){
            a=da(a);
            b=da(b);
            c=da(c);
            if(ca(a)||0>a||255<a||ca(b)||0>b||255<b||ca(c)||0>c||255<c)throw r('"('+a+La+b+La+c+'") is not a valid RGB color');
            a=cd(a[oa](16));
            b=cd(b[oa](16));
            c=cd(c[oa](16));
            return Ba+a+b+c
        }
        var Xc=/^#(?:[0-9a-f]{3}){1,2}$/i,Zc=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        function cd(a){
            return 1==a[G]?N+a:a
        };
    
        var dd,ed,fd,gd;
        function hd(){
            return T.navigator?T.navigator.userAgent:h
        }
        gd=fd=ed=dd=i;
        var id;
        if(id=hd()){
            var jd=T.navigator;
            dd=0==id[E]("Opera");
            ed=!dd&&-1!=id[E]("MSIE");
            fd=!dd&&-1!=id[E]("WebKit");
            gd=!dd&&!fd&&"Gecko"==jd.product
        }
        var kd=ed,ld=gd,md=fd,nd;
            a:{
                var od=K,pd;
                if(dd&&T.opera)var qd=T.opera.version,od=typeof qd==Jb?qd():qd;
                else if(ld?pd=/rv\:([^\);]+)(\)|;)/:kd?pd=/MSIE\s+([^\);]+)(\)|;)/:md&&(pd=/WebKit\/(\S+)/),pd)var rd=pd.exec(hd()),od=rd?rd[1]:K;
                if(kd){
                    var sd,td=T.document;
                    sd=td?td.documentMode:g;
                    if(sd>parseFloat(od)){
                        nd=u(sd);
                        break a
                    }
                }
                nd=od
            }
        var ud=nd,vd={},wd={};

        function xd(a){
            return wd[a]||(wd[a]=kd&&!!k.documentMode&&k.documentMode>=a)
        };
        !kd||xd(9);
        !ld&&!kd||kd&&xd(9)||ld&&(vd["1.9.1"]||(vd["1.9.1"]=0<=Sc(ud,"1.9.1")));
        kd&&(vd["9"]||(vd["9"]=0<=Sc(ud,"9")));
        function yd(a){
            return a==ec||a==K||a==yc?ec:Wc(a).k
        };
    
        function zd(a){
            a=a||{};
    
            a.fill!=h&&this.Xa(a.fill);
            a.U!=h&&this.Ya(a.U);
            a.stroke!=h&&this.$a(a.stroke);
            a.V!=h&&this.ab(a.V);
            this.f=h;
            if(a.f){
                var b=a.f,c={},d;
                for(d in b)c[d]=b[d];this.f=c;
                this.f.Va=yd(this.f.Va);
                this.f.Wa=yd(this.f.Wa)
            }
            this.c=h;
            a.pattern&&this.Za(a.pattern)
        }
        S=zd[H];
        S.Xa=function(a){
            yd(a)
        };
    
        S.Ya=function(a){
            m.min(m.max(a,0),1)
        };
    
        S.$a=function(a){
            yd(a)
        };
    
        S.ab=function(a){
            m.min(m.max(a,0),1)
        };
    
        S.Za=function(a){
            this.c=a
        };
    
        new zd({
            U:0,
            fill:"white",
            V:0,
            stroke:"white"
        });
        var V={
            wb:["a.C.","d.C."],
            vb:["Antes de Cristo","Ano do Senhor"],
            fb:["J","F",fb,"A",fb,"J","J","A",O,"O","N","D"],
            ib:["J","F",fb,"A",fb,"J","J","A",O,"O","N","D"],
            eb:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),
            hb:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),
            gb:"jan fev mar abr mai jun jul ago set out nov dez".split(" "),
            kb:"jan fev mar abr mai jun jul ago set out nov dez".split(" "),
            Ab:"domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
            mb:"domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
            zb:"dom seg ter qua qui sex s\u00e1b".split(" "),
            lb:"dom seg ter qua qui sex s\u00e1b".split(" "),
            Ob:["D",O,"T",hb,hb,O,O],
            jb:["D",O,"T",hb,hb,O,O],
            yb:["T1","T2","T3","T4"],
            xb:["1\u00ba trimestre","2\u00ba trimestre","3\u00ba trimestre","4\u00ba trimestre"],
            Db:["AM","PM"],
            ia:["EEEE, d 'de' MMMM 'de' y",
            "d 'de' MMMM 'de' y","dd/MM/yyyy","dd/MM/yy"],
            ja:["HH'h'mm'min'ss's' zzzz","HH'h'mm'min'ss's' z","HH:mm:ss","HH:mm"],
            Jb:6,
            Qb:[5,6],
            Kb:5
        };

        function Ad(a){
            this.qa=a
        }
        function Bd(a,b,c){
            a:{
                for(var b=b[ra](M),a=a||T,d=0;d<b[G];d++){
                    var e=b[d];
                    if(a[e]!=h)a=a[e];
                    else{
                        b=h;
                        break a
                    }
                }
                b=a
            }
        return b!=h&&Kc(c)==Jb?c(b):b
        }
        S=Ad[H];
        S.e=function(a,b,c){
            for(var d=h,e=0;e<this.qa[G];e++){
                a:{
                    var d=this.qa[e],f=a,n=c;
                    if(typeof f==qc)d=Bd(d,f,n);
                    else{
                        for(var p=0;p<f[G];++p){
                            var B=Bd(d,f[p],n);
                            if(B!=h){
                                d=B;
                                break a
                            }
                        }
                        d=h
                    }
                }
            if(d!=h)return d
                }
            d=b;
            return d!==g?d:h
        };
        function Cd(a){
            if(a==h)return h;
            if(typeof a==wb)return a;
            a=u(a);
            return a==Ra||a[xa]()==zc?ba:a==N||a[xa]()==Fb?i:h
        }
        S.va=function(a,b){
            var c=this.Fb(a);
            if(c!=h)return c;
            b!==g||(b=i);
            return b
        };
    
        S.Fb=function(a){
            return this.e(a,h,Cd)
        };
    
        function Dd(a){
            if(a==h)return h;
            if(typeof a==Q)return a;
            var a=u(a),b=da(a),a=0==b&&/^[\s\xa0]*$/[fa](a)?NaN:b;
            return ca(a)?h:a
        }
        S.xa=function(a,b){
            var c=this.X(a);
            if(c!=h)return c;
            b!==g||(b=0);
            return b
        };
    
        S.X=function(a){
            return this.e(a,h,Dd)
        };
        function Ed(a){
            a=Dd(a);
            return a!=h&&0<=a?a:h
        }
        S.wa=function(a,b){
            var c=this.Gb(a);
            if(c!=h)return c;
            b!==g||(b=0);
            return b
        };
    
        S.Gb=function(a){
            return this.e(a,h,Ed)
        };
    
        function Fd(a){
            return a==h?h:u(a)
        }
        S.r=function(a,b){
            b!==g||(b=K);
            return this.e(a,b,Fd)
        };
    
        S.za=function(a){
            return this.e(a,h,Fd)
        };
    
        function Gd(a,b){
            var c=Fd(a);
            return!c?h:0<=Uc(b||[],c)?c:yd(c)
        }
        S.ya=function(a){
            return this.e(a,h,Gd)
        };
    
        function Hd(a,b){
            var c=Fd(b),d;
                a:{
                    for(d in a)if(a[d]==c){
                        d=ba;
                        break a
                    }
                    d=i
                }
            return d?c:h
        }
        S.W=function(a,b){
            return this.e(a,h,Oc(Hd,h,b))
        };
    
        function Rc(){
            var a=Jc(Ob);
            a!=h||(a=Vb);
            var b=Jc(Pb);
            b!=h||(b=Sa);
            return a+Na+b
        };
    
        function Id(a){
            this.M=a||{};
    
            Jd||(Jd=Rc()+Oa)
        }
        var Jd=h,Kd={
            red:jc,
            blue:tb,
            green:Kb
        };

        function W(a,b,c){
            0<b&&c[y](Wa,Jd,a,Ma,b,Aa)
        }
        v(Id[H],function(a,b){
            if(a[ia](b)==Q){
                var c=this.M,d=c.min,e=c.max,f=h;
                if(d==h||e==h)f=a.getColumnRange(b),e==h&&(e=f.max),d==h&&(d=m.min(0,f.min));
                d>=e&&(f=f||a.getColumnRange(b),e=f.max,d=f.min);
                d==e&&(0==d?e=1:0<d?d=0:e=0);
                var f=e-d,n=c.base||0,n=m.max(d,m.min(e,n)),p=c.width||100,B=c.showValue;
                B==h&&(B=ba);
                for(var R=m[z]((n-d)/f*p),aa=p-R,w=0;w<a[pa]();w++){
                    var s=a[ka](w,b),x=[],s=m.max(d,m.min(e,s)),sa=m.ceil((s-d)/f*p);
                    x[y](Xa);
                    W(lc,1,x);
                    var oc=Ld(c.colorPositive,tb),$d=Ld(c.colorNegative,jc),
                    gb=c.drawZeroLine?1:0;
                    0<R?s<n?(W(Cc,sa,x),W($d,R-sa,x),0<gb&&W(Ec,gb,x),W(Cc,aa,x)):(W(Cc,R,x),0<gb&&W(Ec,gb,x),W(oc,sa-R,x),W(Cc,p-sa,x)):(W(oc,sa,x),W(Cc,p-sa,x));
                    W(lc,1,x);
                    s=a.getProperty(w,b,pb);
                    s==h&&(s=a.getFormattedValue(w,b),a[ua](w,b,pb,s));
                    B&&(x[y](Fc),x[y](s));
                    x[y](Va);
                    a[ta](w,b,x[J](K))
                }
            }
        });
        function Ld(a,b){
            a=(a||K)[xa]();
            return Kd[a]||b
        };
    
        function Md(a,b,c,d){
            Lc(a)&&(a=a[la]());
            Lc(b)&&(b=b[la]());
            Kc(a)==sb&&(a=Nd(a));
            Kc(b)==sb&&(b=Nd(b));
            this.ha=a;
            this.tb=b;
            this.pb=c;
            this.ub=d
        }
        Md[H].contains=function(a){
            var b=this.ha,c=this.tb;
            if(a==h)return b==h&&c==h;
            Lc(a)?a=a[la]():Kc(a)==sb&&(a=Nd(a));
            return(b==h||a>=b)&&(c==h||a<c)
        };
    
        Md[H].na=function(){
            return this.ub
        };
    
        function Od(a,b,c,d,e){
            Md[I](this,a,b,c,K);
            this.J=b-a;
            0>=this.J&&(this.J=1);
            this.nb=bd(Wc(d).k);
            this.ob=bd(Wc(e).k)
        }
        function Pd(){}
        Pd.prototype=Md[H];
        Od.Rb=Md[H];
        Od.prototype=new Pd;
        Od[H].na=function(a){
            var b;
            b=this.nb;
            var c=this.ob,a=1-(a-this.ha)/this.J,a=m.min(m.max(a,0),1);
            b=[m[z](a*b[0]+(1-a)*c[0]),m[z](a*b[1]+(1-a)*c[1]),m[z](a*b[2]+(1-a)*c[2])];
            return $c(b[0],b[1],b[2])
        };
    
        function X(){
            this.w=[]
        }
        X[H].addRange=function(a,b,c,d){
            this.w[y](new Md(a,b,c,d))
        };
    
        X[H].addGradientRange=function(a,b,c,d,e){
            this.w[y](new Od(a,b,c,d,e))
        };
        v(X[H],function(a,b){
            var c=a[ia](b);
            if(c==Q||c==qc||c==Cb||c==Db||c==xc)for(c=0;c<a[pa]();c++){
                for(var d=a[ka](c,b),e=K,f=0;f<this.w[G];f++){
                    var n=this.w[f];
                    if(n.contains(d)){
                        f=n.pb;
                        d=n.na(d);
                        f&&(e+=Ab+f+Ua);
                        d&&(e+=ub+d+Ua);
                        break
                    }
                }
                a[ua](c,b,rc,e)
            }
        });
        function Nd(a){
            return 36E5*a[0]+6E4*a[1]+1E3*a[2]+(4==a[G]?a[3]:0)
        };
    
        function Qd(){}
        function Rd(a){
            if(typeof a==Q){
                var b=new Qd;
                b.ka=a;
                var c;
                c=a;
                if(0==c)c=Za;
                else{
                    var d=[Za,0>c?L:Ka];
                    c=m.abs(c);
                    d[y](m[C](c/60)%100);
                    c%=60;
                    0!=c&&d[y](Ta,U(c,2));
                    c=d[J](K)
                }
                b.ma=c;
                0==a?a=jb:(c=[jb,0>a?Ka:L],a=m.abs(a),c[y](m[C](a/60)%100),a%=60,0!=a&&c[y](Ta,a),a=c[J](K));
                b.K=[a,a];
                b.v=[];
                return b
            }
            b=new Qd;
            b.ma=a.id;
            b.ka=-a.std_offset;
            b.K=a.names;
            b.v=a.transitions;
            return b
        }
        S=Qd[H];
        S.pa=function(a){
            for(var a=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes())/36E5,b=0;b<this.v[G]&&a>=this.v[b];)b+=2;
            return 0==b?0:this.v[b-1]
        };
    
        S.qb=function(a){
            var a=this.L(a),b=[ab];
            b[y](0>=a?Ka:L);
            a=m.abs(a);
            b[y](U(m[C](a/60)%100,2),Ta,U(a%60,2));
            return b[J](K)
        };
    
        S.Bb=function(a){
            return this.K[this.oa(a)?3:1]
        };
    
        S.L=function(a){
            return this.ka-this.pa(a)
        };
    
        S.rb=function(a){
            var a=-this.L(a),b=[0>a?L:Ka],a=m.abs(a);
            b[y](U(m[C](a/60)%100,2),U(a%60,2));
            return b[J](K)
        };
        S.Cb=function(a){
            return this.K[this.oa(a)?2:0]
        };
    
        S.oa=function(a){
            return 0<this.pa(a)
        };
    
        function Sd(a){
            this.u=[];
            typeof a==Q?this.q(a):this.d(a)
        }
        var Td=[/^\'(?:[^\']|\'\')*\'/,/^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/,/^[^\'GyMkSEahKHcLQdmsvzZ]+/];S=Sd[H];S.d=function(a){for(;a;)for(var b=0;b<Td[G];++b){var c=a.match(Td[b]);if(c){c=c[0];a=a[va](c[G]);0==b&&(c==Ga?c=Fa:(c=c[va](1,c[G]-1),c=c[A](/\'\'/,Fa)));this.u[y]({text:c
            ,
            type:b
        });
        break
        }
        }
    };
    v(S,function(a,b){
        var c=b?6E4*(a[ya]()-b.L(a)):0,d=c?new Date(a[la]()+c):a,e=d;
        b&&d[ya]()!=a[ya]()&&(e=new Date(a[la]()+(c+(0<c?-864E5:864E5))));
        for(var c=[],f=0;f<this.u[G];++f){
            var n=this.u[f].text;
            1==this.u[f].type?c[y](this.sb(n,a,d,e,b)):c[y](n)
        }
        return c[J](K)
    });
    S.q=function(a){
        if(4>a)a=V.ia[a];
        else if(8>a)a=V.ja[a-4];
        else if(12>a)a=V.ia[a-8]+za+V.ja[a-8];
        else{
            this.q(10);
            return
        }
        this.d(a)
    };
    S.a=function(a){
        if(V.Eb===g)return a;
        for(var b=[],c=0;c<a[G];c++){
            var d=a.charCodeAt(c);
            b[y](48<=d&&57>=d?u[ha](V.Eb+d-48):a[D](c))
        }
        return b[J](K)
    };
    
    S.Ia=function(a,b){
        var c=0<b.getFullYear()?1:0;
        return 4<=a?V.vb[c]:V.wb[c]
    };
    
    S.Ta=function(a,b){
        var c=b.getFullYear();
        0>c&&(c=-c);
        return this.a(2==a?U(c%100,2):u(c))
    };
    
    S.La=function(a,b){
        var c=b.getMonth();
        switch(a){
            case 5:
                return V.fb[c];
            case 4:
                return V.eb[c];
            case 3:
                return V.gb[c];
            default:
                return this.a(U(c+1,a))
        }
    };
    S.Ea=function(a,b){
        return this.a(U(b[ja]()||24,a))
    };
    
    S.Ja=function(a,b){
        return this.a((b[la]()%1E3/1E3).toFixed(m.min(3,a))[na](2)+(3<a?U(0,a-3):K))
    };
    
    S.Ha=function(a,b){
        var c=b.getDay();
        return 4<=a?V.Ab[c]:V.zb[c]
    };
    
    S.Fa=function(a,b){
        var c=b[ja]();
        return V.Db[12<=c&&24>c?1:0]
    };
    
    S.Da=function(a,b){
        return this.a(U(b[ja]()%12||12,a))
    };
    
    S.Ba=function(a,b){
        return this.a(U(b[ja]()%12,a))
    };
    
    S.Ca=function(a,b){
        return this.a(U(b[ja](),a))
    };
    S.Oa=function(a,b){
        var c=b.getDay();
        switch(a){
            case 5:
                return V.jb[c];
            case 4:
                return V.mb[c];
            case 3:
                return V.lb[c];
            default:
                return this.a(U(c,1))
        }
    };

    S.Pa=function(a,b){
        var c=b.getMonth();
        switch(a){
            case 5:
                return V.ib[c];
            case 4:
                return V.hb[c];
            case 3:
                return V.kb[c];
            default:
                return this.a(U(c+1,a))
        }
    };

    S.Ma=function(a,b){
        var c=m[C](b.getMonth()/3);
        return 4>a?V.yb[c]:V.xb[c]
    };
    
    S.Ga=function(a,b){
        return this.a(U(b.getDate(),a))
    };
    
    S.Ka=function(a,b){
        return this.a(U(b.getMinutes(),a))
    };
    S.Na=function(a,b){
        return this.a(U(b.getSeconds(),a))
    };
    
    S.Ra=function(a,b,c){
        c=c||Rd(b[ya]());
        return 4>a?c.rb(b):this.a(c.qb(b))
    };
    
    S.Sa=function(a,b,c){
        c=c||Rd(b[ya]());
        return 4>a?c.Cb(b):c.Bb(b)
    };
    
    S.Qa=function(a,b){
        b=b||Rd(a[ya]());
        return b.ma
    };
    S.sb=function(a,b,c,d,e){
        var f=a[G];
        switch(a[D](0)){
            case $a:
                return this.Ia(f,c);
            case Dc:
                return this.Ta(f,c);
            case fb:
                return this.La(f,c);
            case Wb:
                return this.Ea(f,d);
            case O:
                return this.Ja(f,d);
            case Ya:
                return this.Ha(f,c);
            case qb:
                return this.Fa(f,d);
            case Rb:
                return this.Da(f,d);
            case cb:
                return this.Ba(f,d);
            case bb:
                return this.Ca(f,d);
            case xb:
                return this.Oa(f,c);
            case db:
                return this.Pa(f,c);
            case hb:
                return this.Ma(f,c);
            case Bb:
                return this.Ga(f,c);
            case Zb:
                return this.Ka(f,d);
            case lc:
                return this.Na(f,d);
            case Ac:
                return this.Qa(b,
                    e);
            case Ec:
                return this.Sa(f,b,e);
            case kb:
                return this.Ra(f,b,e);
            default:
                return K
        }
    };

    function Y(a){
        a=new Ad([a||{},{
            formatType:nc,
            valueType:Db
        }]);
        this.c=a.e(hc);
        this.H=h;
        this.bb=a.W(Gb,Ud);
        this.Ua=a.W(Bc,Vd);
        this.Y=h;
        a=a.X(wc);
        a!=h&&(this.Y=Rd(60*-a))
    }
    var Ud={
        Lb:Ib,
        Mb:Yb,
        Nb:$b,
        SHORT:nc
    },Vd={
        Hb:Cb,
        Ib:Db,
        Pb:vc
    };
    function Wd(a,b){
        switch(a){
            case Cb:
                switch(b){
                    case Ib:
                        return 0;
                    case Yb:
                        return 1;
                    case $b:
                        return 2;
                    case nc:
                        return 3
                }
            case Db:
                switch(b){
                    case Ib:
                        return 8;
                    case Yb:
                        return 9;
                    case $b:
                        return 10;
                    case nc:
                        return 11
                }
            case vc:
                switch(b){
                    case Ib:
                        return 4;
                    case Yb:
                        return 5;
                    case $b:
                        return 6;
                    case nc:
                        return 7
                }
        }
    }
    v(Y[H],function(a,b){
        var c=a[ia](b);
        if(!(c!=Cb&&c!=Db))for(var c=this.la(c),d=a[pa](),e=0;e<d;e++){
            var f=a[ka](e,b),f=this.s(c,f);
            a[ta](e,b,f)
        }
    });
    Y[H].formatValue=function(a){
        this.H||(this.H=this.la(this.Ua));
        return this.s(this.H,a)
    };
    
    Y[H].la=function(a){
        var b=this.c;
        b!=h||(b=Wd(a,this.bb));
        return new Sd(b)
    };
    
    Y[H].s=function(a,b){
        if(b===h)return K;
        var c=this.Y;
        c==h&&(c=Rd(b[ya]()));
        return a[F](b,c)
    };
    
    function Xd(a,b){
        var c=[N],d=Yd[b][0]&7;
        if(0<d){
            c[y](M);
            for(var e=0;e<d;e++)c[y](N)
        }
        return a[A](/0.00/g,c[J](K))
    }
    var Yd={
        AED:[2,"dh","\u062f.\u0625.","DH"],
        AUD:[2,"$","AU$"],
        BDT:[2,"\u09f3","Tk"],
        BRL:[2,"R$","R$"],
        CAD:[2,"$","C$"],
        CHF:[2,"CHF","CHF"],
        CLP:[0,"$","CL$"],
        CNY:[2,"\u00a5","RMB\u00a5"],
        COP:[0,"$","COL$"],
        CRC:[0,"\u20a1","CR\u20a1"],
        CZK:[2,"K\u010d","K\u010d"],
        DKK:[18,"kr","kr"],
        DOP:[2,"$","RD$"],
        EGP:[2,"\u00a3","LE"],
        EUR:[18,"\u20ac","\u20ac"],
        GBP:[2,"\u00a3","GB\u00a3"],
        HKD:[2,"$","HK$"],
        ILS:[2,"\u20aa","IL\u20aa"],
        INR:[2,"\u20b9","Rs"],
        ISK:[0,"kr","kr"],
        JMD:[2,"$","JA$"],
        JPY:[0,"\u00a5","JP\u00a5"],
        KRW:[0,"\u20a9","KR\u20a9"],
        LKR:[2,"Rs","SLRs"],
        MNT:[0,"\u20ae","MN\u20ae"],
        MXN:[2,"$","Mex$"],
        MYR:[2,"RM","RM"],
        NOK:[18,"kr","NOkr"],
        PAB:[2,"B/.","B/."],
        PEN:[2,"S/.","S/."],
        PHP:[2,"\u20b1","Php"],
        PKR:[0,"Rs","PKRs."],
        RUB:[2,"Rup","Rup"],
        SAR:[2,"Rial","Rial"],
        SEK:[2,"kr","kr"],
        SGD:[2,"$","S$"],
        THB:[2,"\u0e3f","THB"],
        TRY:[2,"TL","YTL"],
        TWD:[2,"NT$","NT$"],
        USD:[2,"$","US$"],
        UYU:[2,"$","UY$"],
        VND:[0,"\u20ab","VN\u20ab"],
        YER:[0,"Rial","Rial"],
        ZAR:[2,"R","ZAR"]
    };
    
    var Z={
        DECIMAL_SEP:M,
        GROUP_SEP:La,
        fa:Ea,
        I:N,
        ea:Ka,
        da:L,
        ca:Ya,
        ga:Ic,
        S:"\u221e",
        T:"NaN",
        DECIMAL_PATTERN:"#,##0.###",
        aa:"#E0",
        $:"#,##0%",
        Z:Hc,
        P:"USD"
    },Z={
        DECIMAL_SEP:La,
        GROUP_SEP:M,
        fa:Ea,
        I:N,
        ea:Ka,
        da:L,
        ca:Ya,
        ga:Ic,
        S:"\u221e",
        T:"NaN",
        DECIMAL_PATTERN:"#,##0.###",
        aa:"#E0",
        $:"#,##0%",
        Z:Hc,
        P:"BRL"
    };

    function Zd(a,b,c){
        this.h=b||Z.P;
        this.ra=c||0;
        this.p=40;
        this.b=1;
        this.C=3;
        this.o=this.i=0;
        this.N=i;
        this.A=this.z=K;
        this.l=L;
        this.m=K;
        this.g=1;
        this.B=3;
        this.n=this.O=i;
        typeof a==Q?this.q(a):this.d(a)
    }
    var ae=i;
    S=Zd[H];
    S.d=function(a){
        this.c=a[A](/ /g,Fc);
        var b=[0];
        this.z=this.t(a,b);
        var c=b[0];
        this.cb(a,b);
        c=b[0]-c;
        this.A=this.t(a,b);
        b[0]<a[G]&&a[D](b[0])==Ua?(b[0]++,this.l=this.t(a,b),b[0]+=c,this.m=this.t(a,b)):(this.l=this.z+this.l,this.m+=this.A)
    };
    S.q=function(a){
        switch(a){
            case 1:
                this.d(Z.DECIMAL_PATTERN);
                break;
            case 2:
                this.d(Z.aa);
                break;
            case 3:
                this.d(Z.$);
                break;
            case 4:
                this.d(Xd(Z.Z,this.h));
                break;
            default:
                throw r("Unsupported pattern type.");
        }
    };

    v(S,function(a){
        if(ca(a))return Z.T;
        var b=[],c=0>a||0==a&&0>1/a;
        b[y](c?this.l:this.z);
        if(isFinite(a))a=a*(c?-1:1)*this.g,this.n?this.Aa(a,b):this.D(a,this.b,b);else b[y](Z.S);
        b[y](c?this.m:this.A);
        return b[J](K)
    });
    S.D=function(a,b,c){
        var d=m.pow(10,this.C),e=m[z](a*d),f;
        isFinite(e)?(a=m[C](e/d),f=m[C](e-a*d)):f=0;
        for(var n=0<this.i||0<f,p=K,e=a;1E20<e;)p=N+p,e=m[z](e/10);
        var p=e+p,B=Z.DECIMAL_SEP,R=Z.GROUP_SEP,e=ae?48:Z.I.charCodeAt(0),aa=p[G];
        if(0<a||0<b){
            for(a=aa;a<b;a++)c[y](u[ha](e));
            for(a=0;a<aa;a++)c[y](u[ha](e+1*p[D](a))),1<aa-a&&(0<this.B&&1==(aa-a)%this.B)&&c[y](R)
        }else n||c[y](u[ha](e));
        (this.O||n)&&c[y](B);
        b=K+(f+d);
        for(d=b[G];b[D](d-1)==N&&d>this.i+1;)d--;
        for(a=1;a<d;a++)c[y](u[ha](e+1*b[D](a)))
    };
    S.ba=function(a,b){
        b[y](Z.ca);
        0>a?(a=-a,b[y](Z.da)):this.N&&b[y](Z.ea);
        for(var c=K+a,d=ae?N:Z.I,e=c[G];e<this.o;e++)b[y](d);
        b[y](c)
    };
    
    S.Aa=function(a,b){
        if(0==a)this.D(a,this.b,b),this.ba(0,b);
        else{
            var c=m[C](m.log(a)/m.log(10)),a=a/m.pow(10,c),d=this.b;
            if(1<this.p&&this.p>this.b){
                for(;0!=c%this.p;)a*=10,c--;
                d=1
            }else 1>this.b?(c++,a/=10):(c-=this.b-1,a*=m.pow(10,this.b-1));
            this.D(a,d,b);
            this.ba(c,b)
        }
    };
    S.t=function(a,b){
        for(var c=K,d=i,e=a[G];b[0]<e;b[0]++){
            var f=a[D](b[0]);
            if(f==Fa)b[0]+1<e&&a[D](b[0]+1)==Fa?(b[0]++,c+=Fa):d=!d;
            else if(d)c+=f;else switch(f){
                case Ba:case N:case La:case M:case Ua:
                    return c;
                case Gc:
                    if(b[0]+1<e&&a[D](b[0]+1)==Gc)b[0]++,c+=this.h;else switch(this.ra){
                        case 0:
                            c+=Yd[this.h][1];
                            break;
                        case 2:
                            var f=this.h,n=Yd[f],c=c+(f==n[1]?f:f+za+n[1]);
                            break;
                        case 1:
                            c+=Yd[this.h][2]
                    }
                    break;
                case Ea:
                    if(1!=this.g)throw r(ib);
                    this.g=100;
                    c+=Z.fa;
                    break;
                case Ic:
                    if(1!=this.g)throw r(ib);
                    this.g=1E3;
                    c+=Z.ga;
                    break;
                default:
                    c+=f
            }
        }
        return c
    };
    S.cb=function(a,b){
        for(var c=-1,d=0,e=0,f=0,n=-1,p=a[G],B=ba;b[0]<p&&B;b[0]++)switch(a[D](b[0])){
            case Ba:
                0<e?f++:d++;
                0<=n&&0>c&&n++;
                break;
            case N:
                if(0<f)throw r('Unexpected "0" in pattern "'+a+'"');
                e++;
                0<=n&&0>c&&n++;
                break;
            case La:
                n=0;
                break;
            case M:
                if(0<=c)throw r('Multiple decimal separators in pattern "'+a+'"');
                c=d+e+f;
                break;
            case Ya:
                if(this.n)throw r('Multiple exponential symbols in pattern "'+a+'"');
                this.n=ba;
                this.o=0;
                b[0]+1<p&&a[D](b[0]+1)==Ka&&(b[0]++,this.N=ba);
                for(;b[0]+1<p&&a[D](b[0]+1)==N;)b[0]++,
                    this.o++;
                if(1>d+e||1>this.o)throw r('Malformed exponential pattern "'+a+'"');
                B=i;
                break;
            default:
                b[0]--,B=i
        }
        0==e&&(0<d&&0<=c)&&(e=c,0==e&&e++,f=d-e,d=e-1,e=1);
        if(0>c&&0<f||0<=c&&(c<d||c>d+e)||0==n)throw r('Malformed pattern "'+a+'"');
        f=d+e+f;
        this.C=0<=c?f-c:0;
        0<=c&&(this.i=d+e-c,0>this.i&&(this.i=0));
        this.b=(0<=c?c:f)-d;
        this.n&&(this.p=d+this.b,0==this.C&&0==this.b&&(this.b=1));
        this.B=m.max(0,n);
        this.O=0==c||c==f
    };
    
    function $(a){
        a=new Ad([a||{},{
            decimalSymbol:be,
            groupingSymbol:ce,
            fractionDigits:2,
            negativeParens:i,
            prefix:K,
            suffix:K,
            scaleFactor:1
        }]);
        this.j=a.wa(Hb);
        this.ua=a.r(Eb);
        this.F=a.r(Qb);
        this.sa=a.r(ic);
        this.ta=a.r(tc);
        this.G=a.ya(cc);
        this.Q=a.va(dc);
        this.c=a.za(hc);
        this.R=a.xa(mc);
        if(0>=this.R)throw r("Scale factor must be a positive number.");
    }
    var be=Z.DECIMAL_SEP,ce=Z.GROUP_SEP,de=Z.DECIMAL_PATTERN;
    v($[H],function(a,b){
        if(a[ia](b)==Q)for(var c=0;c<a[pa]();c++){
            var d=a[ka](c,b);
            if(d!=h){
                var e=this.formatValue(d);
                a[ta](c,b,e);
                !/^[\s\xa0]*$/[fa](this.G==h?K:u(this.G))&&0>d&&a[ua](c,b,rc,Ab+this.G+Ua)
            }
        }
    });
    $[H].formatValue=function(a){
        var b=h,b=a/this.R;
        this.c===h?(this.Q&&(b=m.abs(b)),b=this.s(b),b=this.sa+b+this.ta,this.Q&&0>a&&(b=Ha+b+Ja)):b=(new Zd(this.c))[F](b);
        return b
    };
    $[H].s=function(a){
        0==this.j&&(a=m[z](a));
        var b=[];
        0>a&&(a=-a,b[y](L));
        var c=m.pow(10,this.j),d=m[z](a*c),a=u(m[C](d/c)),c=u(d%c);
        if(3<a[G]&&this.F){
            d=a[G]%3;
            0<d&&(b[y](a[va](0,d),this.F),a=a[va](d));
            for(;3<a[G];)b[y](a[va](0,3),this.F),a=a[va](3)
        }
        b[y](a);
        0<this.j&&(b[y](this.ua),c[G]<this.j&&(c=Qa+c),b[y](c[va](c[G]-this.j)));
        return b[J](K)
    };
    
    function ee(a){
        this.c=a||K
    }
    function fe(a,b,c,d,e,f,n){
        return 0<f&&n[f-1]==ob?d:b.getFormattedValue(a,c[t(e,10)])
    }
    v(ee[H],function(a,b,c,d){
        var e=b[0];
        c!=h&&Kc(c)==Q&&(e=c);
        c=d||h;
        for(d=0;d<a[pa]();d++){
            var f=this.c[A](/{(\d+)}/g,Pc(fe,d,a,b)),f=f[A](/\\(.)/g,Da);
            c?a[ua](d,e,c,f):a[ta](d,e,f)
        }
    });
    j("google.visualization.NumberFormat",$);
        l($[H],P,$[H][F]);
        l($[H],"formatValue",$[H].formatValue);
        j("google.visualization.NumberFormat.useNativeCharactersIfAvailable",function(a){
            ae=!a
        });
        j("google.visualization.NumberFormat.DECIMAL_SEP",be);
        j("google.visualization.NumberFormat.GROUP_SEP",ce);
        j("google.visualization.NumberFormat.DECIMAL_PATTERN",de);
        j("google.visualization.ColorFormat",X);
        l(X[H],P,X[H][F]);
        l(X[H],"addRange",X[H].addRange);
        l(X[H],rb,X[H].addGradientRange);
        j("google.visualization.BarFormat",Id);
        l(Id[H],P,Id[H][F]);
        j("google.visualization.ArrowFormat",Qc);
        l(Qc[H],P,Qc[H][F]);
        j("google.visualization.PatternFormat",ee);
        l(ee[H],P,ee[H][F]);
        j("google.visualization.DateFormat",Y);
        l(Y[H],P,Y[H][F]);
        l(Y[H],"formatValue",Y[H].formatValue);
        j("google.visualization.TableNumberFormat",$);
        l($[H],P,$[H][F]);
        j("google.visualization.TableColorFormat",X);
        l(X[H],P,X[H][F]);
        l(X[H],"addRange",X[H].addRange);
        l(X[H],rb,X[H].addGradientRange);
        j("google.visualization.TableBarFormat",Id);
        l(Id[H],P,Id[H][F]);
        j("google.visualization.TableArrowFormat",Qc);
        l(Qc[H],P,Qc[H][F]);
        j("google.visualization.TablePatternFormat",ee);
        l(ee[H],P,ee[H][F]);
        j("google.visualization.TableDateFormat",Y);
        l(Y[H],P,Y[H][F]);
    })();



    (function (){
        if(window["__gvizguard__"])return;
        function d(a){
            throw a;
        }
        var g=void 0,i=!0,k=null,l=!1,aa=encodeURIComponent,m=google_exportSymbol,ca=window,da=Object,fa=Infinity,ga=document,ha=isNaN,n=google_exportProperty,q=Math,ia=Array,ja=Number,r=Error,ka=parseInt,la=parseFloat,ma=String,na=decodeURIComponent,oa=RegExp;
        function pa(a,b){
            return a.width=b
        }
        function qa(a,b){
            return a.innerHTML=b
        }
        function ra(a,b){
            return a.currentTarget=b
        }
        function sa(a,b){
            return a.left=b
        }
        function ta(a,b){
            return a.screenX=b
        }
        function va(a,b){
            return a.screenY=b
        }
        function wa(a,b){
            return a.keyCode=b
        }
        function xa(a,b){
            return a.handleEvent=b
        }
        function ya(a,b){
            return a.depth=b
        }
        function za(a,b){
            return a.type=b
        }
        function Aa(a,b){
            return a.setContent=b
        }
        function Ba(a,b){
            return a.getValue=b
        }
        function Ca(a,b){
            return a.clientX=b
        }
        function Da(a,b){
            return a.clientY=b
        }
        function Ea(a,b){
            return a.visibility=b
        }
        function Fa(a,b){
            return a.setState=b
        }
        function Ga(a,b){
            return a.altKey=b
        }
        function Ha(a,b){
            return a.length=b
        }
        function Ia(a,b){
            return a.setValue=b
        }
        function Ja(a,b){
            return a.className=b
        }
        function La(a,b){
            return a.next=b
        }
        function Ma(a,b){
            return a.visualization=b
        }
        function Na(a,b){
            return a.clone=b
        }
        function Oa(a,b){
            return a.target=b
        }
        function Pa(a,b){
            return a.bottom=b
        }
        function Qa(a,b){
            return a.display=b
        }
        function Ra(a,b){
            return a.height=b
        }
        function Sa(a,b){
            return a.right=b
        }
        var Ta="appendChild",t="push",Ua="isCollapsed",Va="getBoundingClientRect",Wa="getParent",Xa="open",Ya="test",Za="relatedTarget",$a="clearTimeout",u="width",ab="collapse",bb="slice",v="replace",cb="nodeType",db="events",eb="floor",fb="getElementById",gb="getOptions",hb="RequestParameters",ib="concat",jb="charAt",lb="createTextNode",mb="getNumberOfColumns",nb="value",ob="getDataTable",pb="preventDefault",qb="insertBefore",rb="targetTouches",w="indexOf",sb="metaKey",tb="setEnd",y="dispatchEvent",ub=
        "capture",vb="getColumnProperties",wb="nodeName",A="left",xb="setColumnProperties",yb="screenX",zb="screenY",Ab="match",Bb="getBoxObjectFor",Cb="send",Eb="getName",Fb="charCode",Gb="isError",Hb="focus",Ib="createElement",Jb="getColumnLabel",Kb="toDataTable",Lb="scrollHeight",Mb="keyCode",Nb="getColumnType",Ob="firstChild",Pb="getSortedRows",Qb="forEach",Rb="clientLeft",Sb="getTableRowIndex",Tb="setAttribute",Ub="clientTop",Vb="play",Wb="handleEvent",Xb="getRowProperties",Yb="getTableProperties",Zb=
        "setRefreshInterval",$b="depth",B="type",ac="childNodes",bc="defaultView",cc="setCell",dc="bind",ec="source",fc="setContent",gc="name",C="getValue",hc="nextSibling",jc="addRows",kc="setActive",lc="getElementsByTagName",mc="clientX",nc="clientY",oc="documentElement",pc="setState",qc="scrollTop",rc="stop",sc="toString",tc="altKey",uc="getMonth",vc="setStart",wc="getView",xc="getNumberOfRows",D="length",yc="propertyIsEnumerable",zc="getProperties",Ac="addError",F="prototype",Bc="toJSON",Cc="setValue",
        Dc="clientWidth",Ec="abort",Fc="setTimeout",Gc="setDataSourceUrl",Hc="document",Ic="ctrlKey",Jc="split",Kc="getColumnProperty",Lc="offsetParent",Mc="constructor",Nc="stopPropagation",Oc="getColumnPattern",Pc="location",G="visualization",Qc="disabled",Rc="offsetLeft",Sc="message",Tc="hasOwnProperty",H="style",Uc="setView",Vc="setQuery",Wc="body",Xc="removeChild",Yc="clone",Zc="getDataSourceUrl",$c="target",ad="lastChild",bd="getOption",I="call",cd="isEnabled",dd="setDataTable",ed="removeAll",fd="scrollWidth",
        gd="lastIndexOf",hd="draw",id="getFullYear",jd="DataView",kd="getRefreshInterval",ld="getState",md="clientHeight",nd="scrollLeft",od="charCodeAt",pd="getPackages",qd="getContainerId",rd="bottom",sd="currentStyle",td="href",ud="substring",vd="getQuery",wd="rows",xd="apply",yd="shiftKey",zd="tagName",Ad="addColumn",Bd="element",Cd="getContainer",Dd="getFormattedValue",Ed="errors",Fd="parentNode",Gd="label",Hd="offsetTop",J="height",Id="splice",Jd="join",Kd="setColumns",Ld="execScript",Md="toLowerCase",
        Nd="right",Od="setOption",K="",Pd="\n",Qd="\n<\/script>",Rd=" ",Sd=" [",Td=" does not match type ",Ud=" is duplicate in sortColumns.",Vd=' name="',Wd=' type="',Xd='"',Yd='" />',Zd='" src="http://www.google.com/ig/ifr?url=',$d='""',ae='">\n',be="#",ce="#$1$1$2$2$3$3",de="%",ee="%22",fe="%27",ge="&",he="&amp;",ie="&gt;",je="&lt;",ke="&quot;",le="&requireauth=1&",me="&up_",ne="&up__table_query_url=",oe="').send(\n     function(response) {\n      new ",pe="']});\n\n   function drawVisualization() {\n    new google.visualization.Query('",
        qe="(",re='(\n       document.getElementById(\'visualization\')).\n        draw(response.getDataTable(), null);\n      });\n   }\n\n   google.setOnLoadCallback(drawVisualization);\n  <\/script>\n </head>\n <body>\n  <div id="visualization" style="width: 500px; height: 500px;"></div>\n </body>\n</html>',se="(\\d*)(\\D*)",te=")",ue="*",ve=",",we=", ",xe="-active",ye="-bg",ze="-buttons",Ae="-caption",Be="-checkbox",Ce="-checked",De="-content",Ee="-default",Fe="-disabled",Ge="-dropdown",He="-focused",
        Ie="-highlight",Je="-horizontal",Ke="-hover",Le="-inner-box",Me="-moz-transform",Ne="-ms-transform",Oe="-o-transform",Pe="-open",Qe="-outer-box",Re="-rtl",Se="-selected",Te="-title",Ve="-title-close",We="-title-draggable",Xe="-title-text",Ye="-vertical",Ze="-webkit-transform",$e=".",af="..",bf="./",cf=".format",df="/",ef="/.",ff="//",gf="/chart.html",hf="/chart.js",jf="/static/modules/gviz/",kf="/tq",lf="/util/toolbar.css",mf="0",nf="0.5",of="0.6",pf="00",qf="000",rf="1",sf="1.0",tf="1.9",uf="525",
        vf="528",wf="533.17.9",xf="7",yf="8",zf=":",Af=";",Bf=";sig:",Cf=";type:",Df="<",Ef='<html>\n <head>\n  <title>Google Visualization API</title>\n  <script type="text/javascript" src="http://www.google.com/jsapi"><\/script>\n  <script type="text/javascript">\n   google.load(\'visualization\', \'1\', {packages: [\'',Ff='<iframe style="',Gf='<script type="text/javascript" src="',Hf="=",If=">",Jf="?",Kf="@",Lf="APPLET",Mf="AREA",Nf="Add to iGoogle",Of="BASE",Pf="BODY",Qf="BR",Rf="BUTTON",Sf="BarChart",
        Tf="BubbleChart",Uf="COL",Vf="COMMAND",Wf="CSS1Compat",Xf="Chart options",Yf="Column index ",Zf="Component already rendered",$f="Content-Type",ag="Copy-Paste this code to an HTML page",bg="Dashboard",cg="Date(",dg="EMBED",eg="End",fg="EndToEnd",gg="Export data as CSV",hg="Export data as HTML",ig="FRAME",jg="GET",kg="Google Visualization",lg="Google_Visualization",mg="HR",ng="HTML",og="IFRAME",pg="IMG",qg="INPUT",rg="ISINDEX",sg="Invalid DataView column type.",tg="Invalid listener argument",ug="JavaScript",
        vg="Javascript code",wg="KEYGEN",xg="LINK",yg="META",zg="MSXML2.XMLHTTP",Ag="MSXML2.XMLHTTP.3.0",Bg="MSXML2.XMLHTTP.6.0",Cg="Microsoft.XMLHTTP",Dg="MozOpacity",Eg="NOFRAMES",Fg="NOSCRIPT",Gg="Name",Hg="Not a valid 2D array.",Ig="OBJECT",Jg="PARAM",Kg="POST",Lg="Publish to web page",Mg="Request timed out",Ng="SCRIPT",Og="SELECT",Pg="SOURCE",Qg="STYLE",Rg="ScatterChart",Sg="Start",Tg="StartToEnd",Ug="StartToStart",Vg="Style",Wg="TEXTAREA",Xg="TR",Yg="TRACK",Zg="Timed out after ",$g="To",ah="Type",bh=
        "Type mismatch. Value ",ch="Unable to set parent component",dh="WBR",eh="Width",fh="[",gh="[object Array]",hh="[object Function]",ih="[object Window]",jh="\\\\",kh="\\c",lh="\\s",mh="\\u",nh="]",oh="_",ph="_table_query_refresh_interval",qh="_table_query_url",rh="abort",sh="absolute",th="action",uh="activate",vh="activedescendant",wh="addTrendLine",xh="afterhide",yh="aftershow",zh="alpha(opacity=",Ah="application/x-www-form-urlencoded;charset=utf-8",Bh="aria-",Ch="array",Dh="auto",Eh="beforedrag",
        Fh="beforehide",Gh="beforeshow",Hh="block",Ih="blur",Jh="body",Kh="boolean",Lh="border-box",Mh="border:0;vertical-align:bottom;",Nh="borderBottom",Oh="borderBottomWidth",Ph="borderLeft",Qh="borderLeftWidth",Rh="borderRight",Sh="borderRightWidth",Th="borderTop",Uh="borderTopWidth",Vh="br",Wh="button",Xh="call",Yh="callee",Zh="change",$h="character",ai="chart",bi="check",ci="checked",di="class",ei="click",fi="close",gi="column",hi="columnFilters[",ii="complete",ji="contextmenu",ki="control",li="controls",
        mi="corechart",ni="csv",oi="dashboard",pi="data-",qi="date",ri="datetime",si="dblclick",ti="deactivate",ui="desc",vi="detailed_message",wi="dialogselect",xi="direction",yi="disable",zi="disabled",Ai="display",Bi="display: none; padding-top: 2px",Ci="div",Di="domainAxis",Ei="drag",Fi="dragstart",Gi="draw",Hi="earlycancel",Ii="emptyString",Ji="enable",Ki="end",Li="enter",Mi="error",Ni="expanded",Oi="false",Pi="filter",Qi="fixed",Ri="focus",Si="focusin",Ti="focusout",Ui="for",Vi="full",Wi="function",
        Xi="g",Yi="gadgets.io.makeRequest",Zi="gadgets.io.makeRequest failed",$i="getColumnIndex",aj="getColumnLabel",bj="getColumnPattern",cj="getColumnProperties",dj="getColumnProperty",ej="getColumnRange",fj="getContainerId",gj="getDataSourceUrl",hj="getDataTable",ij="getDistinctValues",jj="getFilteredRows",kj="getFormattedValue",lj="getNumberOfColumns",mj="getNumberOfRows",nj="getPackages",oj="getQuery",pj="getRefreshInterval",qj="getRowProperties",rj="getRowProperty",sj="getSnapshot",tj="getTableProperties",
        uj="getTableProperty",vj="goog-button",wj="goog-container",xj="goog-control",yj="goog-custom-button",zj="goog-inline-block ",Aj="goog-menu",Bj="goog-menu-button",Cj="goog-menuheader",Dj="goog-menuitem",Ej="goog-menuitem-accel",Fj="goog-menuitem-mnemonic-separator",Gj="goog-menuseparator",Hj="goog-modalpopup",Ij="goog-option",Jj="goog-option-selected",Kj="google-visualization-toolbar-big-dialog",Lj="google-visualization-toolbar-export-data",Mj="google-visualization-toolbar-export-igoogle",Nj="google-visualization-toolbar-html-code",
        Oj="google-visualization-toolbar-html-code-explanation",Pj="google-visualization-toolbar-small-dialog",Qj="google-visualization-toolbar-triangle",Rj="google.loader.GoogleApisBase",Sj="google.visualization.",Tj="google.visualization.Version",Uj="hasLabelsColumn",Vj="haspopup",Wj="head",Xj="hex",Yj="hidden",$j="hide",ak="highlight",bk="horizontal",ck="html",dk="htmlcode",ek="http",fk="http%",gk="http://ajax.googleapis.com/ajax",hk="http://dummy.com",ik="http://www.google.com/ig/adde?moduleurl=",jk=
        "https",kk="https%",lk="identity",mk="iframe",nk="igoogle",ok="img",pk="inline",qk="innerText",rk="input",sk="invalid_query",tk='javascript:""',uk="jscode",vk="json",wk="key",xk="keydown",yk="keypress",zk="keyup",Ak="labelledby",Bk="leave",Ck="left",Dk="link",Ek="listbox",Fk="losecapture",Gk="makeRequest",Hk="make_request_failed",Ik="maxValue",Jk="medium",Kk="menu",Lk="menuitem",Mk="message",Nk="minValue",Ok="modal-dialog",Pk="modifier",Qk="mousedown",Rk="mousemove",Sk="mouseout",Tk="mouseover",Uk=
        "mouseup",Vk="ms, aborting",Wk="named",Xk="native code",Yk="new ",Zk="nodeType",$k="none",al="not_modified",bl="null",cl="number",dl="o",el="object",fl="on",gl="opacity",hl="open",il="option",jl="options",kl="out:csv;",ll="out:html;",ml="outerHTML",nl="overflow",ol="package",pl="padding: 2px",ql="paddingBottom",rl="paddingLeft",sl="paddingRight",tl="paddingTop",ul="percent",vl="pixelLeft",wl="position",xl="position:fixed;width:0;height:0;left:0;top:0;",yl="pre",zl="pressed",Al="pub",Bl="px",Cl="range",
        Dl="ready",El="readystatechange",Fl="reason",Gl="refresh",Hl="relative",Il="reqId:",Jl="resize",Kl="rgb",Ll="right",Ml="role",Nl="rtl",Ol="script",Pl="scroll",Ql="select",Rl="selected",Sl="separator",Tl="series.1.lineWidth",Ul="series.1.pointSize",Vl="series.1.visibleInLegend",Wl="setContainerId",Xl="setDataSourceUrl",Yl="setDataTable",Zl="setOptions",$l="setPackages",am="setQuery",bm="setRefreshInterval",cm="show",dm="solid",em="sortColumns",fm="sortColumns[",gm="span",hm="splice",im="start",jm=
        "statechange",km="static",lm="string",mm="stringify",nm="style",om="stylesheet",pm="success",qm="tabIndex",rm="tabindex",sm="targetAxes.0",tm="targetAxes.1",um="targetAxis",vm="text/css",wm="text/javascript",xm="textContent",ym="tick",zm="timeofday",Am="timeout",Bm="toJSON",Cm="touchcancel",Dm="touchend",Em="touchmove",Fm="touchstart",Gm="tqrt",Hm="tqx",Im="transform",Jm="transparent",Km="true",Lm="type",Mm="uncheck",Nm="unhighlight",Om="unselect",Pm="unselectable",Qm="user_not_authenticated",Rm=
        "vAxis",Sm="value",Tm="var ",Um="var _et_ = 1;",Vm="vertical",Wm="visible",Xm="visualization",Ym="warning",Zm="width: 700px; height: 500px;",$m="window.event",an="withCredentials",bn="xhr",cn="xhrpost",dn="zx",en="{",fn="}",gn="\u00a0",hn="\u00d7",jn="\u25bc",L,kn=kn||{},M=this;
        function ln(a,b){
            for(var c=a[Jc]($e),e=b||M,f;f=c.shift();)if(e[f]!=k)e=e[f];else return k;return e
        }
        function mn(){}
        function nn(a){
            a.la=function(){
                return a.qh?a.qh:a.qh=new a
            }
        }
        function on(a){
            var b=typeof a;
            if(b==el)if(a){
                if(a instanceof ia)return Ch;
                if(a instanceof da)return b;
                var c=da[F][sc][I](a);
                if(c==ih)return el;
                if(c==gh||typeof a[D]==cl&&"undefined"!=typeof a[Id]&&"undefined"!=typeof a[yc]&&!a[yc](hm))return Ch;
                if(c==hh||"undefined"!=typeof a[I]&&"undefined"!=typeof a[yc]&&!a[yc](Xh))return Wi
            }else return bl;
            else if(b==Wi&&"undefined"==typeof a[I])return el;
            return b
        }
        function pn(a){
            return a!==g
        }
        function qn(a){
            return on(a)==Ch
        }
        function rn(a){
            var b=on(a);
            return b==Ch||b==el&&typeof a[D]==cl
        }
        function sn(a){
            return tn(a)&&typeof a[id]==Wi
        }
        function O(a){
            return typeof a==lm
        }
        function un(a){
            return typeof a==Kh
        }
        function vn(a){
            return typeof a==cl
        }
        function wn(a){
            return on(a)==Wi
        }
        function tn(a){
            var b=typeof a;
            return b==el&&a!=k||b==Wi
        }
        function xn(a){
            return a[yn]||(a[yn]=++zn)
        }
        var yn="closure_uid_"+q[eb](2147483648*q.random())[sc](36),zn=0;
        function An(a){
            var b=on(a);
            if(b==el||b==Ch){
                if(a[Yc])return a[Yc]();
                var b=b==Ch?[]:{},c;
                for(c in a)b[c]=An(a[c]);return b
            }
            return a
        }
        function Bn(a,b,c){
            return a[I][xd](a[dc],arguments)
        }
        function Cn(a,b,c){
            a||d(r());
            if(2<arguments[D]){
                var e=ia[F][bb][I](arguments,2);
                return function(){
                    var c=ia[F][bb][I](arguments);
                    ia[F].unshift[xd](c,e);
                    return a[xd](b,c)
                }
            }
            return function(){
                return a[xd](b,arguments)
            }
        }
        function Dn(a,b,c){
            Dn=Function[F][dc]&&-1!=Function[F][dc][sc]()[w](Xk)?Bn:Cn;
            return Dn[xd](k,arguments)
        }
        function En(a,b){
            var c=ia[F][bb][I](arguments,1);
            return function(){
                var b=ia[F][bb][I](arguments);
                b.unshift[xd](b,c);
                return a[xd](this,b)
            }
        }
        var Fn=Date.now||function(){
            return+new Date
        };
        function Gn(a){
            if(M[Ld])M[Ld](a,ug);
            else if(M.eval)if(Hn==k&&(M.eval(Um),"undefined"!=typeof M._et_?(delete M._et_,Hn=i):Hn=l),Hn)M.eval(a);
                else{
                    var b=M[Hc],c=b[Ib](Ol);
                    za(c,wm);
                    c.defer=l;
                    c[Ta](b[lb](a));
                    b[Wc][Ta](c);
                    b[Wc][Xc](c)
                }else d(r("goog.globalEval not available"))
        }
        var Hn=k;
        function P(a,b){
            function c(){}
            c.prototype=b[F];
            a.b=b[F];
            a.prototype=new c;
            a[F].constructor=a
        };
    
        function In(a){
            var b;
            if(0==ga[lc](Wj)[D]){
                b=ga[lc](ck)[0];
                var c=ga[lc](Jh)[0],e=ga[Ib](Wj);
                b[qb](e,c)
            }
            b=ga[lc](Wj)[0];
            c=ga[Ib](Ol);
            za(c,wm);
            c.src=a;
            b[Ta](c)
        }
        function Jn(a){
            return function(b){
                google[G][Ed][ed](a);
                var c=b[Gb]();
                c&&google[G][Ed].addErrorFromQueryResponse(a,b);
                return!c
            }
        };

        function Kn(a){
            a=ma(a);
            if(/^\s*$/[Ya](a)?0:/^[\],:{}\s\u2028\u2029]*$/[Ya](a[v](/\\["\\\/bfnrtu]/g,Kf)[v](/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,nh)[v](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,K)))try{
                return eval(qe+a+te)
            }catch(b){}
            d(r("Invalid JSON string: "+a))
        }
        function Ln(a){
            this.Pd=a
        }
        Ln[F].Sk=function(a){
            var b=[];
            this.rf(a,b);
            return b[Jd](K)
        };
        Ln[F].rf=function(a,b){
            switch(typeof a){
                case lm:
                    this.lh(a,b);
                    break;
                case cl:
                    this.nk(a,b);
                    break;
                case Kh:
                    b[t](a);
                    break;
                case "undefined":
                    b[t](bl);
                    break;
                case el:
                    if(a==k){
                        b[t](bl);
                        break
                    }
                    if(qn(a)){
                        this.mk(a,b);
                        break
                    }
                    this.ok(a,b);
                    break;
                case Wi:
                    break;
                default:
                    d(r("Unknown type: "+typeof a))
            }
        };

        var Mn={
            '"':'\\"',
            "\\":jh,
            "/":"\\/",
            "\b":"\\b",
            "\f":"\\f",
            "\n":"\\n",
            "\r":"\\r",
            "\t":"\\t",
            "\x0B":"\\u000b"
        },Nn=/\uffff/[Ya]("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
        Ln[F].lh=function(a,b){
            b[t](Xd,a[v](Nn,function(a){
                if(a in Mn)return Mn[a];
                var b=a[od](0),f=mh;
                16>b?f+=qf:256>b?f+=pf:4096>b&&(f+=mf);
                return Mn[a]=f+b[sc](16)
            }),Xd)
        };
    
        Ln[F].nk=function(a,b){
            b[t](isFinite(a)&&!ha(a)?a:bl)
        };
    
        Ln[F].mk=function(a,b){
            var c=a[D];
            b[t](fh);
            for(var e=K,f=0;f<c;f++)b[t](e),e=a[f],this.rf(this.Pd?this.Pd[I](a,ma(f),e):e,b),e=ve;
            b[t](nh)
        };
        Ln[F].ok=function(a,b){
            b[t](en);
            var c=K,e;
            for(e in a)if(da[F][Tc][I](a,e)){
                var f=a[e];
                typeof f!=Wi&&(b[t](c),this.lh(e,b),b[t](zf),this.rf(this.Pd?this.Pd[I](a,e,f):f,b),c=ve)
            }
            b[t](fn)
        };
    
        function On(a){
            a=Pn(a,Qn);
            return(new Ln(g)).Sk(a)
        }
        function Rn(a){
            Kn(a);
            return Sn(a)
        }
        function Sn(a){
            a=Tn(a);
            return eval(qe+a+te)
        }
        function Pn(a,b){
            var a=b(a),c=on(a);
            if(c==el||c==Ch){
                var c=c==Ch?[]:{},e;
                for(e in a){
                    var f=Pn(a[e],b);
                    pn(f)&&(c[e]=f)
                }
            }else c=a;
            return c
        }
        function Tn(a){
            return a[v](/"(Date\([\d,\s]*\))"/g,function(a,c){
                return Yk+c
            })
        }
        function Qn(a){
            sn(a)&&(a=0!==a.getMilliseconds()?[a[id](),a[uc](),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()]:0!==a.getSeconds()||0!==a.getMinutes()||0!==a.getHours()?[a[id](),a[uc](),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()]:[a[id](),a[uc](),a.getDate()],a=cg+a[Jd](we)+te);
            return a
        };
    
        function Un(a){
            return/^[\s\xa0]*$/[Ya](a)
        }
        function Vn(a){
            return a[v](/[\t\r\n ]+/g,Rd)[v](/^[\t\r\n ]+|[\t\r\n ]+$/g,K)
        }
        function Wn(a){
            return a[v](/^[\s\xa0]+|[\s\xa0]+$/g,K)
        }
        function Xn(a,b){
            if(b)return a[v](Yn,he)[v](Zn,je)[v]($n,ie)[v](ao,ke);
            if(!bo[Ya](a))return a;
            -1!=a[w](ge)&&(a=a[v](Yn,he));
            -1!=a[w](Df)&&(a=a[v](Zn,je));
            -1!=a[w](If)&&(a=a[v]($n,ie));
            -1!=a[w](Xd)&&(a=a[v](ao,ke));
            return a
        }
        var Yn=/&/g,Zn=/</g,$n=/>/g,ao=/\"/g,bo=/[&<>\"]/;
        function co(a){
            return a==k?K:ma(a)
        };
    
        var eo=ia[F],fo=eo[w]?function(a,b,c){
            return eo[w][I](a,b,c)
        }:function(a,b,c){
            c=c==k?0:0>c?q.max(0,a[D]+c):c;
            if(O(a))return!O(b)||1!=b[D]?-1:a[w](b,c);
            for(;c<a[D];c++)if(c in a&&a[c]===b)return c;return-1
        },go=eo[Qb]?function(a,b,c){
            eo[Qb][I](a,b,c)
        }:function(a,b,c){
            for(var e=a[D],f=O(a)?a[Jc](K):a,h=0;h<e;h++)h in f&&b[I](c,f[h],h,a)
        },ho=eo.filter?function(a,b,c){
            return eo.filter[I](a,b,c)
        }:function(a,b,c){
            for(var e=a[D],f=[],h=0,j=O(a)?a[Jc](K):a,p=0;p<e;p++)if(p in j){
                var s=j[p];
                b[I](c,s,p,a)&&
                (f[h++]=s)
            }
            return f
        },io=eo.map?function(a,b,c){
            return eo.map[I](a,b,c)
        }:function(a,b,c){
            for(var e=a[D],f=ia(e),h=O(a)?a[Jc](K):a,j=0;j<e;j++)j in h&&(f[j]=b[I](c,h[j],j,a));
            return f
        },jo=eo.every?function(a,b,c){
            return eo.every[I](a,b,c)
        }:function(a,b,c){
            for(var e=a[D],f=O(a)?a[Jc](K):a,h=0;h<e;h++)if(h in f&&!b[I](c,f[h],h,a))return l;return i
        };
    
        function ko(a,b){
            return 0<=fo(a,b)
        }
        function lo(a,b){
            var c=fo(a,b),e;
            (e=0<=c)&&eo[Id][I](a,c,1);
            return e
        }
        function mo(a){
            return eo[ib][xd](eo,arguments)
        }
        function no(a){
            var b=a[D];
            if(0<b){
                for(var c=ia(b),e=0;e<b;e++)c[e]=a[e];
                return c
            }
            return[]
        }
        function oo(a,b){
            for(var c=1;c<arguments[D];c++){
                var e=arguments[c],f;
                if(qn(e)||(f=rn(e))&&e[Tc](Yh))a[t][xd](a,e);
                else if(f)for(var h=a[D],j=e[D],p=0;p<j;p++)a[h+p]=e[p];else a[t](e)
            }
        }
        function po(a,b,c,e){
            return eo[Id][xd](a,qo(arguments,1))
        }
        function qo(a,b,c){
            return 2>=arguments[D]?eo[bb][I](a,b):eo[bb][I](a,b,c)
        }
        function ro(a,b){
            for(var c=0;c<a[D];c++)a[c]={
                index:c,
                value:a[c]
            };
        
            var e=b||so;
            eo.sort[I](a,function(a,b){
                return e(a[nb],b[nb])||a.index-b.index
            }||so);
            for(c=0;c<a[D];c++)a[c]=a[c][nb]
        }
        function so(a,b){
            return a>b?1:a<b?-1:0
        };
    
        function to(a,b){
            this.x=pn(a)?a:0;
            this.y=pn(b)?b:0
        }
        Na(to[F],function(){
            return new to(this.x,this.y)
        });
        function uo(a,b){
            return new to(a.x-b.x,a.y-b.y)
        };
    
        function vo(a,b){
            pa(this,a);
            Ra(this,b)
        }
        Na(vo[F],function(){
            return new vo(this[u],this[J])
        });
        vo[F].floor=function(){
            pa(this,q[eb](this[u]));
            Ra(this,q[eb](this[J]));
            return this
        };
    
        vo[F].round=function(){
            pa(this,q.round(this[u]));
            Ra(this,q.round(this[J]));
            return this
        };
    
        var wo,xo,yo,zo,Ao;
        function Bo(){
            return M.navigator?M.navigator.userAgent:k
        }
        function Co(){
            return M.navigator
        }
        zo=yo=xo=wo=l;
        var Do;
        if(Do=Bo()){
            var Eo=Co();
            wo=0==Do[w]("Opera");
            xo=!wo&&-1!=Do[w]("MSIE");
            (yo=!wo&&-1!=Do[w]("WebKit"))&&Do[w]("Mobile");
            zo=!wo&&!yo&&"Gecko"==Eo.product
        }
        var Fo=wo,Q=xo,Go=zo,Ho=yo,Io=Co(),Jo=Io&&Io.platform||K;
        Ao=-1!=Jo[w]("Mac");
        Jo[w]("Win");
        Jo[w]("Linux");
        var Ko=!!Co()&&-1!=(Co().appVersion||K)[w]("X11"),Lo;
            a:{
                var Mo=K,No;
                if(Fo&&M.opera)var Oo=M.opera.version,Mo=typeof Oo==Wi?Oo():Oo;
                else if(Go?No=/rv\:([^\);]+)(\)|;)/:Q?No=/MSIE\s+([^\);]+)(\)|;)/:Ho&&(No=/WebKit\/(\S+)/),No)var Po=No.exec(Bo()),Mo=Po?Po[1]:K;
                if(Q){
                    var Qo,Ro=M[Hc];
                    Qo=Ro?Ro.documentMode:g;
                    if(Qo>la(Mo)){
                        Lo=ma(Qo);
                        break a
                    }
                }
                Lo=Mo
            }
        var So=Lo,To={};
        function Uo(a){
            var b;
            if(!(b=To[a])){
                b=0;
                for(var c=Wn(ma(So))[Jc]($e),e=Wn(ma(a))[Jc]($e),f=q.max(c[D],e[D]),h=0;0==b&&h<f;h++){
                    var j=c[h]||K,p=e[h]||K,s=oa(se,Xi),x=oa(se,Xi);
                    do{
                        var z=s.exec(j)||[K,K,K],E=x.exec(p)||[K,K,K];
                        if(0==z[0][D]&&0==E[0][D])break;
                        b=((0==z[1][D]?0:ka(z[1],10))<(0==E[1][D]?0:ka(E[1],10))?-1:(0==z[1][D]?0:ka(z[1],10))>(0==E[1][D]?0:ka(E[1],10))?1:0)||((0==z[2][D])<(0==E[2][D])?-1:(0==z[2][D])>(0==E[2][D])?1:0)||(z[2]<E[2]?-1:z[2]>E[2]?1:0)
                    }while(0==b)
                }
                b=To[a]=0<=b
            }
            return b
        }
        var Vo={};

        function Wo(a){
            return Vo[a]||(Vo[a]=Q&&!!ga.documentMode&&ga.documentMode>=a)
        };
    
        var Xo=oa("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
        function Yo(a){
            if(Zo){
                Zo=l;
                var b=M[Pc];
                if(b){
                    var c=b[td];
                    if(c&&(c=$o(Yo(c)[3]||k))&&c!=b.hostname)Zo=i,d(r())
                }
            }
            return a[Ab](Xo)
        }
        var Zo=Ho;
        function $o(a){
            return a&&na(a)
        }
        var ap=/#|$/;
        var bp=/\/spreadsheet/,cp=/\/(ccc|tq|pub)$/,dp=/^\/a\/(\w+.)*\w+/,ep=/^(\/a\/(\w+.)*\w+)?/,fp=/^spreadsheets?[0-9]?\.google\.com$/,gp=/^docs\.google\.com*$/,hp=/^(trix|spreadsheets|docs|webdrive)-[a-z]+\.corp\.google\.com/,ip=/^(\w*\.){1,2}corp\.google\.com$/;
        function jp(a){
            var b=$o(Yo(a)[3]||k),c=fp[Ya](b),e=hp[Ya](b),f=ip[Ya](b),b=gp[Ya](b),h=$o(Yo(a)[5]||k),j=oa(ep[ec]+cp[ec]),h=(a=oa(ep[ec]+bp[ec]+cp[ec])[Ya](h))||j[Ya](h);
            return b&&a||(e||f||c)&&h
        };
    
        function kp(a){
            var b=[],c=0,e;
            for(e in a)b[c++]=a[e];return b
        }
        function lp(a){
            var b=[],c=0,e;
            for(e in a)b[c++]=e;return b
        }
        function mp(a,b){
            for(var c in a)if(a[c]==b)return i;return l
        }
        function np(a,b){
            var c;
            (c=b in a)&&delete a[b];
            return c
        }
        function op(a){
            var b={},c;
            for(c in a)b[c]=a[c];return b
        }
        var pp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function qp(a,b){
            for(var c,e,f=1;f<arguments[D];f++){
                e=arguments[f];
                for(c in e)a[c]=e[c];for(var h=0;h<pp[D];h++)c=pp[h],da[F][Tc][I](e,c)&&(a[c]=e[c])
            }
        };
    
        var rp,sp=!Q||Wo(9);
        !Go&&!Q||Q&&Wo(9)||Go&&Uo("1.9.1");
        var tp=Q&&!Uo("9");
        function up(a){
            a=a.className;
            return O(a)&&a[Ab](/\S+/g)||[]
        }
        function vp(a,b){
            for(var c=up(a),e=qo(arguments,1),f=c[D]+e[D],h=c,j=0;j<e[D];j++)ko(h,e[j])||h[t](e[j]);
            Ja(a,c[Jd](Rd));
            return c[D]==f
        }
        function wp(a,b){
            var c=up(a),e=qo(arguments,1),f,h=e;
            f=ho(c,function(a){
                return!ko(h,a)
            });
            Ja(a,f[Jd](Rd));
            return f[D]==c[D]-e[D]
        };
    
        function xp(a){
            return a?new yp(zp(a)):rp||(rp=new yp)
        }
        function Ap(a){
            return O(a)?ga[fb](a):a
        }
        function Bp(a,b){
            function c(b,c){
                c==nm?a[H].cssText=b:c==di?Ja(a,b):c==Ui?a.htmlFor=b:c in Cp?a[Tb](Cp[c],b):0==c[gd](Bh,0)||0==c[gd](pi,0)?a[Tb](c,b):a[c]=b
            }
            for(var e in b)c[I](g,b[e],e,b)
        }
        var Cp={
            cellpadding:"cellPadding",
            cellspacing:"cellSpacing",
            colspan:"colSpan",
            frameborder:"frameBorder",
            height:"height",
            maxlength:"maxLength",
            role:Ml,
            rowspan:"rowSpan",
            type:Lm,
            usemap:"useMap",
            valign:"vAlign",
            width:"width"
        };
        function Dp(a){
            a=a[Hc];
            a=Ep(a)?a[oc]:a[Wc];
            return new vo(a[Dc],a[md])
        }
        function Fp(a){
            return a?a.parentWindow||a[bc]:ca
        }
        function Gp(a,b,c){
            return Hp(ga,arguments)
        }
        function Hp(a,b){
            var c=b[0],e=b[1];
            if(!sp&&e&&(e[gc]||e[B])){
                c=[Df,c];
                e[gc]&&c[t](Vd,Xn(e[gc]),Xd);
                if(e[B]){
                    c[t](Wd,Xn(e[B]),Xd);
                    var f={};
            
                    qp(f,e);
                    delete f[B];
                    e=f
                }
                c[t](If);
                c=c[Jd](K)
            }
            c=a[Ib](c);
            e&&(O(e)?Ja(c,e):qn(e)?vp[xd](k,[c][ib](e)):Bp(c,e));
            2<b[D]&&Ip(a,c,b,2);
            return c
        }
        function Ip(a,b,c,e){
            function f(c){
                c&&b[Ta](O(c)?a[lb](c):c)
            }
            for(;e<c[D];e++){
                var h=c[e];
                if(rn(h)&&!Jp(h)){
                    var j=go,p;
                        a:{
                            if((p=h)&&typeof p[D]==cl){
                                if(tn(p)){
                                    p=typeof p.item==Wi||typeof p.item==lm;
                                    break a
                                }
                                if(wn(p)){
                                    p=typeof p.item==Wi;
                                    break a
                                }
                            }
                            p=l
                        }
                    j(p?no(h):h,f)
                }else f(h)
            }
        }
        function Ep(a){
            return a.compatMode==Wf
        }
        function Kp(a,b){
            Ip(zp(a),a,arguments,1)
        }
        function Lp(a){
            for(var b;b=a[Ob];)a[Xc](b)
        }
        function Mp(a,b){
            b[Fd]&&b[Fd][qb](a,b)
        }
        function Np(a){
            return a&&a[Fd]?a[Fd][Xc](a):k
        }
        function Jp(a){
            return tn(a)&&0<a[cb]
        }
        function Op(a,b){
            if(a.contains&&1==b[cb])return a==b||a.contains(b);
            if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);
            for(;b&&a!=b;)b=b[Fd];
            return b==a
        }
        function zp(a){
            return 9==a[cb]?a:a.ownerDocument||a[Hc]
        }
        function Pp(a){
            if(ml in a)return a.outerHTML;
            var b=zp(a)[Ib](Ci);
            b[Ta](a.cloneNode(i));
            return b.innerHTML
        }
        var Qp={
            SCRIPT:1,
            STYLE:1,
            HEAD:1,
            IFRAME:1,
            OBJECT:1
        },Rp={
            IMG:Rd,
            BR:Pd
        };
        function Sp(a){
            var b=a.getAttributeNode(rm);
            return b&&b.specified?(a=a.tabIndex,vn(a)&&0<=a&&32768>a):l
        }
        function Tp(a,b){
            b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute(qm))
        }
        function Up(a){
            var b=[];
            Vp(a,b,l);
            return b[Jd](K)
        }
        function Vp(a,b,c){
            if(!(a[wb]in Qp))if(3==a[cb])c?b[t](ma(a.nodeValue)[v](/(\r\n|\r|\n)/g,K)):b[t](a.nodeValue);
                else if(a[wb]in Rp)b[t](Rp[a[wb]]);else for(a=a[Ob];a;)Vp(a,b,c),a=a[hc]
        }
        function yp(a){
            this.l=a||M[Hc]||ga
        }
        L=yp[F];
        L.r=xp;
        L.a=function(a){
            return O(a)?this.l[fb](a):a
        };
    
        L.setProperties=Bp;
        L.Uj=function(a){
            a=a||this.Sc();
            return Dp(a||ca)
        };
    
        L.d=function(a,b,c){
            return Hp(this.l,arguments)
        };
    
        L.createElement=function(a){
            return this.l[Ib](a)
        };
    
        L.createTextNode=function(a){
            return this.l[lb](a)
        };
    
        L.Te=function(){
            return Ep(this.l)
        };
    
        L.Sc=function(){
            return this.l.parentWindow||this.l[bc]
        };
    
        L.Sj=function(){
            return!Ho&&Ep(this.l)?this.l[oc]:this.l[Wc]
        };
        L.Tb=function(){
            var a=this.l,b=!Ho&&Ep(a)?a[oc]:a[Wc],a=a.parentWindow||a[bc];
            return new to(a.pageXOffset||b[nd],a.pageYOffset||b[qc])
        };
    
        L.appendChild=function(a,b){
            a[Ta](b)
        };
    
        L.og=Lp;
        L.ne=Mp;
        L.removeNode=Np;
        L.contains=Op;
        var Wp="StopIteration"in M?M.StopIteration:r("StopIteration");
        function Xp(){}
        La(Xp[F],function(){
            d(Wp)
        });
        Xp[F].Gh=function(){
            return this
        };
    
        function Yp(a){
            if(typeof a.Ma==Wi)return a.Ma();
            if(O(a))return a[Jc](K);
            if(rn(a)){
                for(var b=[],c=a[D],e=0;e<c;e++)b[t](a[e]);
                return b
            }
            return kp(a)
        }
        function Zp(a,b,c){
            if(typeof a[Qb]==Wi)a[Qb](b,c);
            else if(rn(a)||O(a))go(a,b,c);
            else{
                var e;
                if(typeof a.Kb==Wi)e=a.Kb();
                else if(typeof a.Ma!=Wi)if(rn(a)||O(a)){
                    e=[];
                    for(var f=a[D],h=0;h<f;h++)e[t](h)
                }else e=lp(a);else e=g;
                for(var f=Yp(a),h=f[D],j=0;j<h;j++)b[I](c,f[j],e&&e[j],a)
            }
        };

        function $p(a,b){
            this.na={};
    
            this.C=[];
            var c=arguments[D];
            if(1<c){
                c%2&&d(r("Uneven number of arguments"));
                for(var e=0;e<c;e+=2)this.set(arguments[e],arguments[e+1])
            }else a&&this.Pj(a)
        }
        L=$p[F];
        L.o=0;
        L.yb=0;
        L.Ma=function(){
            this.yd();
            for(var a=[],b=0;b<this.C[D];b++)a[t](this.na[this.C[b]]);
            return a
        };
    
        L.Kb=function(){
            this.yd();
            return this.C[ib]()
        };
    
        L.Xb=function(a){
            return aq(this.na,a)
        };
    
        L.clear=function(){
            this.na={};
    
            Ha(this.C,0);
            this.yb=this.o=0
        };
        L.remove=function(a){
            return aq(this.na,a)?(delete this.na[a],this.o--,this.yb++,this.C[D]>2*this.o&&this.yd(),i):l
        };
    
        L.yd=function(){
            if(this.o!=this.C[D]){
                for(var a=0,b=0;a<this.C[D];){
                    var c=this.C[a];
                    aq(this.na,c)&&(this.C[b++]=c);
                    a++
                }
                Ha(this.C,b)
            }
            if(this.o!=this.C[D]){
                for(var e={},b=a=0;a<this.C[D];)c=this.C[a],aq(e,c)||(this.C[b++]=c,e[c]=1),a++;
                Ha(this.C,b)
            }
        };

        L.get=function(a,b){
            return aq(this.na,a)?this.na[a]:b
        };
    
        L.set=function(a,b){
            aq(this.na,a)||(this.o++,this.C[t](a),this.yb++);
            this.na[a]=b
        };
        L.Pj=function(a){
            var b;
            a instanceof $p?(b=a.Kb(),a=a.Ma()):(b=lp(a),a=kp(a));
            for(var c=0;c<b[D];c++)this.set(b[c],a[c])
        };
        
        Na(L,function(){
            return new $p(this)
        });
        L.Gh=function(a){
            this.yd();
            var b=0,c=this.C,e=this.na,f=this.yb,h=this,j=new Xp;
            La(j,function(){
                for(;;){
                    f!=h.yb&&d(r("The map has changed since the iterator was created"));
                    b>=c[D]&&d(Wp);
                    var j=c[b++];
                    return a?j:e[j]
                }
            });
            return j
        };

        function aq(a,b){
            return da[F][Tc][I](a,b)
        };
    
        function bq(){}
        bq[F].kc=l;
        bq[F].U=function(){
            this.kc||(this.kc=i,this.j())
        };
    
        bq[F].j=function(){
            this.Ck&&cq[xd](k,this.Ck);
            if(this.Fh)for(;this.Fh[D];)this.Fh.shift()()
        };
        
        function dq(a){
            a&&typeof a.U==Wi&&a.U()
        }
        function cq(a){
            for(var b=0,c=arguments[D];b<c;++b){
                var e=arguments[b];
                rn(e)?cq[xd](k,e):dq(e)
            }
        };
    
        function eq(a){
            eq[Rd](a);
            return a
        }
        eq[Rd]=mn;
        var fq=!Q||Wo(9),gq=!Q||Wo(9),hq=Q&&!Uo("9");
        !Ho||Uo(vf);
        Go&&Uo("1.9b")||Q&&Uo(yf)||Fo&&Uo("9.5")||Ho&&Uo(vf);
        Go&&!Uo(yf)||Q&&Uo("9");
        function iq(a,b){
            za(this,a);
            Oa(this,b);
            ra(this,this[$c])
        }
        L=iq[F];
        L.j=function(){};

        L.U=function(){};

        L.Jb=l;
        L.defaultPrevented=l;
        L.Dd=i;
        L.stopPropagation=function(){
            this.Jb=i
        };
    
        L.preventDefault=function(){
            this.defaultPrevented=i;
            this.Dd=l
        };
    
        function jq(a){
            a[pb]()
        };
    
        function kq(a,b){
            a&&this.Ib(a,b)
        }
        P(kq,iq);
        var lq=[1,4,2];
        L=kq[F];
        Oa(L,k);
        L.relatedTarget=k;
        L.offsetX=0;
        L.offsetY=0;
        Ca(L,0);
        Da(L,0);
        ta(L,0);
        va(L,0);
        L.button=0;
        wa(L,0);
        L.charCode=0;
        L.ctrlKey=l;
        Ga(L,l);
        L.shiftKey=l;
        L.metaKey=l;
        L.Qe=l;
        L.V=k;
        L.Ib=function(a,b){
            var c=za(this,a[B]);
            iq[I](this,c);
            Oa(this,a[$c]||a.srcElement);
            ra(this,b);
            var e=a[Za];
            if(e){
                if(Go){
                    var f;
                        a:{
                            try{
                                eq(e[wb]);
                                f=i;
                                break a
                            }catch(h){}
                            f=l
                        }
                    f||(e=k)
                }
            }else c==Tk?e=a.fromElement:c==Sk&&(e=a.toElement);
            this.relatedTarget=e;
            this.offsetX=Ho||a.offsetX!==g?a.offsetX:a.layerX;
            this.offsetY=Ho||a.offsetY!==g?a.offsetY:a.layerY;
            Ca(this,a[mc]!==g?a[mc]:a.pageX);
            Da(this,a[nc]!==g?a[nc]:a.pageY);
            ta(this,a[yb]||0);
            va(this,a[zb]||0);
            this.button=a.button;
            wa(this,a[Mb]||0);
            this.charCode=
            a[Fb]||(c==yk?a[Mb]:0);
            this.ctrlKey=a[Ic];
            Ga(this,a[tc]);
            this.shiftKey=a[yd];
            this.metaKey=a[sb];
            this.Qe=Ao?a[sb]:a[Ic];
            this.state=a.state;
            this.V=a;
            a.defaultPrevented&&this[pb]();
            delete this.Jb
        };

        L.Nk=function(a){
            return fq?this.V.button==a:this[B]==ei?0==a:!!(this.V.button&lq[a])
        };
    
        L.ge=function(){
            return this.Nk(0)&&!(Ho&&Ao&&this[Ic])
        };
    
        L.stopPropagation=function(){
            kq.b[Nc][I](this);
            this.V[Nc]?this.V[Nc]():this.V.cancelBubble=i
        };
        L.preventDefault=function(){
            kq.b[pb][I](this);
            var a=this.V;
            if(a[pb])a[pb]();
            else if(a.returnValue=l,hq)try{
                (a[Ic]||112<=a[Mb]&&123>=a[Mb])&&wa(a,-1)
            }catch(b){}
        };
    
        L.oj=function(){
            return this.V
        };
    
        L.j=function(){};

        function mq(){}
        var nq=0;
        L=mq[F];
        L.key=0;
        L.Ab=l;
        L.kf=l;
        L.Ib=function(a,b,c,e,f,h){
            wn(a)?this.eh=i:a&&a[Wb]&&wn(a[Wb])?this.eh=l:d(r(tg));
            this.$b=a;
            this.Jg=b;
            this.src=c;
            za(this,e);
            this.capture=!!f;
            this.qd=h;
            this.kf=l;
            this.key=++nq;
            this.Ab=l
        };
    
        xa(L,function(a){
            return this.eh?this.$b[I](this.qd||this.src,a):this.$b[Wb][I](this.$b,a)
        });
        var oq={},pq={},qq={},rq={};
        function sq(a,b,c,e,f){
            if(b){
                if(qn(b)){
                    for(var h=0;h<b[D];h++)sq(a,b[h],c,e,f);
                    return k
                }
                var e=!!e,j=pq;
                b in j||(j[b]={
                    o:0,
                    ga:0
                });
                j=j[b];
                e in j||(j[e]={
                    o:0,
                    ga:0
                },j.o++);
                var j=j[e],p=xn(a),s;
                j.ga++;
                if(j[p]){
                    s=j[p];
                    for(h=0;h<s[D];h++)if(j=s[h],j.$b==c&&j.qd==f){
                        if(j.Ab)break;
                        return s[h].key
                    }
                }else s=j[p]=[],j.o++;
                var x=tq,z=gq?function(a){
                    return x[I](z.src,z.key,a)
                }:function(a){
                    a=x[I](z.src,z.key,a);
                    if(!a)return a
                },h=z;
                h.src=a;
                j=new mq;
                j.Ib(c,h,a,b,e,f);
                c=j.key;
                h.key=c;
                s[t](j);
                oq[c]=j;
                qq[p]||(qq[p]=[]);
                qq[p][t](j);
                a.addEventListener?(a==M||!a.Eg)&&a.addEventListener(b,h,e):a.attachEvent(b in rq?rq[b]:rq[b]=fl+b,h);
                return c
            }
            d(r("Invalid event type"))
        }
        function uq(a,b,c,e,f){
            if(qn(b)){
                for(var h=0;h<b[D];h++)uq(a,b[h],c,e,f);
                return k
            }
            a=sq(a,b,c,e,f);
            oq[a].kf=i;
            return a
        }
        function vq(a,b,c,e,f){
            if(qn(b)){
                for(var h=0;h<b[D];h++)vq(a,b[h],c,e,f);
                return k
            }
            e=!!e;
            a=wq(a,b,e);
            if(!a)return l;
            for(h=0;h<a[D];h++)if(a[h].$b==c&&a[h][ub]==e&&a[h].qd==f)return xq(a[h].key);return l
        }
        function xq(a){
            if(!oq[a])return l;
            var b=oq[a];
            if(b.Ab)return l;
            var c=b.src,e=b[B],f=b.Jg,h=b[ub];
            c.removeEventListener?(c==M||!c.Eg)&&c.removeEventListener(e,f,h):c.detachEvent&&c.detachEvent(e in rq?rq[e]:rq[e]=fl+e,f);
            c=xn(c);
            qq[c]&&(f=qq[c],lo(f,b),0==f[D]&&delete qq[c]);
            b.Ab=i;
            if(b=pq[e][h][c])b.Sg=i,yq(e,h,c,b);
            delete oq[a];
            return i
        }
        function yq(a,b,c,e){
            if(!e.Cd&&e.Sg){
                for(var f=0,h=0;f<e[D];f++)e[f].Ab?e[f].Jg.src=k:(f!=h&&(e[h]=e[f]),h++);
                Ha(e,h);
                e.Sg=l;
                0==h&&(delete pq[a][b][c],pq[a][b].o--,0==pq[a][b].o&&(delete pq[a][b],pq[a].o--),0==pq[a].o&&delete pq[a])
            }
        }
        function zq(a,b,c){
            var e=0,f=b==k,h=c==k,c=!!c;
            if(a==k){
                var a=function(a){
                    for(var j=a[D]-1;0<=j;j--){
                        var p=a[j];
                        if((f||b==p[B])&&(h||c==p[ub]))xq(p.key),e++
                    }
                },j;
                for(j in qq)a[I](g,qq[j],j,qq)
            }else if(j=xn(a),qq[j]){
                j=qq[j];
                for(a=j[D]-1;0<=a;a--){
                    var p=j[a];
                    if((f||b==p[B])&&(h||c==p[ub]))xq(p.key),e++
                }
            }
            return e
        }
        function wq(a,b,c){
            var e=pq;
            return b in e&&(e=e[b],c in e&&(e=e[c],a=xn(a),e[a]))?e[a]:k
        }
        function Aq(a,b,c,e,f){
            var h=1,b=xn(b);
            if(a[b]){
                a.ga--;
                a=a[b];
                a.Cd?a.Cd++:a.Cd=1;
                try{
                    for(var j=a[D],p=0;p<j;p++){
                        var s=a[p];
                        s&&!s.Ab&&(h&=Bq(s,f)!==l)
                    }
                }finally{
                    a.Cd--,yq(c,e,b,a)
                }
            }
            return Boolean(h)
        }
        function Bq(a,b){
            a.kf&&xq(a.key);
            return a[Wb](b)
        }
        function Cq(a,b){
            var c=b[B]||b,e=pq;
            if(!(c in e))return i;
            if(O(b))b=new iq(b,a);
            else if(b instanceof iq)Oa(b,b[$c]||a);
            else{
                var f=b,b=new iq(c,a);
                qp(b,f)
            }
            var f=1,h,e=e[c],c=i in e,j;
            if(c){
                h=[];
                for(j=a;j;j=j.cd)h[t](j);
                j=e[i];
                j.ga=j.o;
                for(var p=h[D]-1;!b.Jb&&0<=p&&j.ga;p--)ra(b,h[p]),f&=Aq(j,h[p],b[B],i,b)&&b.Dd!=l
            }
            if(l in e)if(j=e[l],j.ga=j.o,c)for(p=0;!b.Jb&&p<h[D]&&j.ga;p++)ra(b,h[p]),f&=Aq(j,h[p],b[B],l,b)&&b.Dd!=l;else for(e=a;!b.Jb&&e&&j.ga;e=e.cd)ra(b,e),f&=Aq(j,e,b[B],l,b)&&b.Dd!=l;
            return Boolean(f)
        }
        function tq(a,b){
            if(!oq[a])return i;
            var c=oq[a],e=c[B],f=pq;
            if(!(e in f))return i;
            var f=f[e],h,j;
            if(!gq){
                h=b||ln($m);
                var p=i in f,s=l in f;
                if(p){
                    if(0>h[Mb]||h.returnValue!=g)return i;
                        a:{
                            var x=l;
                            if(0==h[Mb])try{
                                wa(h,-1);
                                break a
                            }catch(z){
                                x=i
                            }
                            if(x||h.returnValue==g)h.returnValue=i
                        }
                }
                x=new kq;
                x.Ib(h,this);
                h=i;
                try{
                    if(p){
                        for(var E=[],ea=x.currentTarget;ea;ea=ea[Fd])E[t](ea);
                        j=f[i];
                        j.ga=j.o;
                        for(var ba=E[D]-1;!x.Jb&&0<=ba&&j.ga;ba--)ra(x,E[ba]),h&=Aq(j,E[ba],e,i,x);
                        if(s){
                            j=f[l];
                            j.ga=j.o;
                            for(ba=0;!x.Jb&&ba<
                                E[D]&&j.ga;ba++)ra(x,E[ba]),h&=Aq(j,E[ba],e,l,x)
                        }
                    }else h=Bq(c,x)
                }finally{
                    E&&Ha(E,0)
                }
                return h
            }
            e=new kq(b,this);
            return h=Bq(c,e)
        };

        function Dq(){}
        P(Dq,bq);
        L=Dq[F];
        L.Eg=i;
        L.cd=k;
        L.Ke=function(a){
            this.cd=a
        };
    
        L.addEventListener=function(a,b,c,e){
            sq(this,a,b,c,e)
        };
    
        L.removeEventListener=function(a,b,c,e){
            vq(this,a,b,c,e)
        };
    
        L.dispatchEvent=function(a){
            return Cq(this,a)
        };
    
        L.j=function(){
            Dq.b.j[I](this);
            zq(this);
            this.cd=k
        };
    
        function Eq(a,b){
            this.Fd=a||1;
            this.zc=b||Fq;
            this.Ye=Dn(this.ak,this);
            this.Ze=Fn()
        }
        P(Eq,Dq);
        Eq[F].enabled=l;
        var Fq=M.window;
        L=Eq[F];
        L.$=k;
        L.ak=function(){
            if(this.enabled){
                var a=Fn()-this.Ze;
                0<a&&a<0.8*this.Fd?this.$=this.zc[Fc](this.Ye,this.Fd-a):(this.Qj(),this.enabled&&(this.$=this.zc[Fc](this.Ye,this.Fd),this.Ze=Fn()))
            }
        };

        L.Qj=function(){
            this[y](ym)
        };
    
        L.start=function(){
            this.enabled=i;
            this.$||(this.$=this.zc[Fc](this.Ye,this.Fd),this.Ze=Fn())
        };
        L.stop=function(){
            this.enabled=l;
            this.$&&(this.zc[$a](this.$),this.$=k)
        };
    
        L.j=function(){
            Eq.b.j[I](this);
            this[rc]();
            delete this.zc
        };
    
        function Gq(){}
        Gq[F].Eh=k;
        Gq[F].getOptions=function(){
            return this.Eh||(this.Eh=this.Ek())
        };
    
        var Hq;
        function Iq(){}
        P(Iq,Gq);
        Iq[F].zh=function(){
            var a=this.Ih();
            return a?new ActiveXObject(a):new XMLHttpRequest
        };
    
        Iq[F].Ek=function(){
            var a={};
    
            this.Ih()&&(a[0]=i,a[1]=i);
            return a
        };
    
        Iq[F].Ih=function(){
            if(!this.Kh&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){
                for(var a=[Bg,Ag,zg,Cg],b=0;b<a[D];b++){
                    var c=a[b];
                    try{
                        return new ActiveXObject(c),this.Kh=c
                    }catch(e){}
                }
                d(r("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
            }
            return this.Kh
        };
        Hq=new Iq;
        function Jq(a){
            this.headers=new $p;
            this.rd=a||k
        }
        P(Jq,Dq);
        var Kq=/^https?$/i,Lq=[];
        function Mq(a){
            a.U();
            lo(Lq,a)
        }
        L=Jq[F];
        L.Sa=l;
        L.s=k;
        L.nd=k;
        L.mg=K;
        L.wb=K;
        L.De=l;
        L.ed=l;
        L.ye=l;
        L.tb=l;
        L.sd=0;
        L.Hb=k;
        L.ng=K;
        L.zi=l;
        L.Xk=function(a){
            this.sd=q.max(0,a)
        };
        L.send=function(a,b,c,e){
            this.s&&d(r("[goog.net.XhrIo] Object is active with another request"));
            b=b?b.toUpperCase():jg;
            this.mg=a;
            this.wb=K;
            this.De=l;
            this.Sa=i;
            this.s=this.xi();
            this.nd=this.rd?this.rd[gb]():Hq[gb]();
            this.s.onreadystatechange=Dn(this.Yf,this);
            try{
                this.ye=i,this.s[Xa](b,a,i),this.ye=l
            }catch(f){
                this.lg(5,f);
                return
            }
            var a=c||K,h=this.headers[Yc]();
            e&&Zp(e,function(a,b){
                h.set(b,a)
            });
            e=M.FormData&&a instanceof M.FormData;
            b==Kg&&(!h.Xb($f)&&!e)&&h.set($f,Ah);
            Zp(h,function(a,b){
                this.s.setRequestHeader(b,
                    a)
            },this);
            this.ng&&(this.s.responseType=this.ng);
            an in this.s&&(this.s.withCredentials=this.zi);
            try{
                this.Hb&&(Fq[$a](this.Hb),this.Hb=k),0<this.sd&&(this.Hb=Fq[Fc](Dn(this.yi,this),this.sd)),this.ed=i,this.s[Cb](a),this.ed=l
            }catch(j){
                this.lg(5,j)
            }
        };

        L.xi=function(){
            return this.rd?this.rd.zh():Hq.zh()
        };
    
        L.yi=function(){
            "undefined"!=typeof kn&&this.s&&(this.wb=Zg+this.sd+Vk,this[y](Am),this[Ec](8))
        };
    
        L.lg=function(a,b){
            this.Sa=l;
            this.s&&(this.tb=i,this.s[Ec](),this.tb=l);
            this.wb=b;
            this.sg();
            this.Zc()
        };
        L.sg=function(){
            this.De||(this.De=i,this[y](ii),this[y](Mi))
        };
    
        L.abort=function(){
            this.s&&this.Sa&&(this.Sa=l,this.tb=i,this.s[Ec](),this.tb=l,this[y](ii),this[y](rh),this.Zc())
        };
    
        L.j=function(){
            this.s&&(this.Sa&&(this.Sa=l,this.tb=i,this.s[Ec](),this.tb=l),this.Zc(i));
            Jq.b.j[I](this)
        };
    
        L.Yf=function(){
            !this.ye&&!this.ed&&!this.tb?this.mf():this.ih()
        };
    
        L.mf=function(){
            this.ih()
        };
        L.ih=function(){
            if(this.Sa&&"undefined"!=typeof kn&&(!this.nd[1]||!(4==this.Gc()&&2==this.Ue())))if(this.ed&&4==this.Gc())Fq[Fc](Dn(this.Yf,this),0);
                else if(this[y](El),this.sj()){
                    this.Sa=l;
                    try{
                        this.Lg()?(this[y](ii),this[y](pm)):(this.wb=this.qj()+Sd+this.Ue()+nh,this.sg())
                    }finally{
                        this.Zc()
                    }
                }
        };

        L.Zc=function(a){
            if(this.s){
                var b=this.s,c=this.nd[0]?mn:k;
                this.nd=this.s=k;
                this.Hb&&(Fq[$a](this.Hb),this.Hb=k);
                a||this[y](Dl);
                try{
                    b.onreadystatechange=c
                }catch(e){}
            }
        };

        L.va=function(){
            return!!this.s
        };
        L.sj=function(){
            return 4==this.Gc()
        };
    
        L.Lg=function(){
            var a=this.Ue(),b;
                a:switch(a){
                    case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
                        b=i;
                        break a;
                    default:
                        b=l
                }
            return b||0===a&&!this.zk()
        };
    
        L.zk=function(){
            var a=Yo(ma(this.mg))[1]||k;
            !a&&self[Pc]&&(a=self[Pc].protocol,a=a.substr(0,a[D]-1));
            return Kq[Ya](a?a[Md]():K)
        };
    
        L.Gc=function(){
            return this.s?this.s.readyState:0
        };
    
        L.Ue=function(){
            try{
                return 2<this.Gc()?this.s.status:-1
            }catch(a){
                return-1
            }
        };
        L.qj=function(){
            try{
                return 2<this.Gc()?this.s.statusText:K
            }catch(a){
                return K
            }
        };

        L.uk=function(){
            try{
                return this.s?this.s.responseText:K
            }catch(a){
                return K
            }
        };

        L.tk=function(){
            return O(this.wb)?this.wb:ma(this.wb)
        };
    
        Jq.send=function(a,b,c,e,f,h){
            var j=new Jq;
            Lq[t](j);
            b&&sq(j,ii,b);
            sq(j,Dl,En(Mq,j));
            h&&j.Xk(h);
            j[Cb](a,c,e,f)
        };
    
        Jq.ol=function(){
            for(;Lq[D];)Lq.pop().U()
        };
        
        Jq.ql=function(a){
            Jq[F].mf=a.Zk(Jq[F].mf)
        };
    
        Jq.pl=Mq;
        Jq.bl=$f;
        Jq.el=Ah;
        Jq.rl=Lq;
        function Nq(a,b){
            var c;
            a instanceof Nq?(this.ca=pn(b)?b:a.ca,this.ld(a.Ya),this.we(a.yc),this.ue(a.wc),this.kd(a.vb),this.jd(a.Xa),this.pd(a.fa[Yc]()),this.ve(a.xc)):a&&(c=Yo(ma(a)))?(this.ca=!!b,this.ld(c[1]||K,i),this.we(c[2]||K,i),this.ue(c[3]||K,i),this.kd(c[4]),this.jd(c[5]||K,i),this.pd(c[6]||K,i),this.ve(c[7]||K,i)):(this.ca=!!b,this.fa=new Oq(k,k,this.ca))
        }
        L=Nq[F];
        L.Ya=K;
        L.yc=K;
        L.wc=K;
        L.vb=k;
        L.Xa=K;
        L.xc=K;
        L.Ok=l;
        L.ca=l;
        L.toString=function(){
            var a=[],b=this.Ya;
            b&&a[t](Pq(b,Qq),zf);
            if(b=this.wc){
                a[t](ff);
                var c=this.yc;
                c&&a[t](Pq(c,Qq),Kf);
                a[t](aa(ma(b)));
                b=this.vb;
                b!=k&&a[t](zf,ma(b))
            }
            if(b=this.Xa)this.Be()&&b[jb](0)!=df&&a[t](df),a[t](Pq(b,b[jb](0)==df?Rq:Sq));
            (b=this.Tg())&&a[t](Jf,b);
            (b=this.xc)&&a[t](be,Pq(b,Tq));
            return a[Jd](K)
        };
        L.Nj=function(a){
            var b=this[Yc](),c=a.Fi();
            c?b.ld(a.Ya):c=a.Gi();
            c?b.we(a.yc):c=a.Be();
            c?b.ue(a.wc):c=a.Di();
            var e=a.Xa;
            if(c)b.kd(a.vb);
            else if(c=a.pg()){
                if(e[jb](0)!=df)if(this.Be()&&!this.pg())e=df+e;
                    else{
                        var f=b.Xa[gd](df);
                        -1!=f&&(e=b.Xa.substr(0,f+1)+e)
                    }
                f=e;
                if(f==af||f==$e)e=K;
                else if(-1==f[w](bf)&&-1==f[w](ef))e=f;
                else{
                    for(var e=0==f[gd](df,0),f=f[Jc](df),h=[],j=0;j<f[D];){
                        var p=f[j++];
                        p==$e?e&&j==f[D]&&h[t](K):p==af?((1<h[D]||1==h[D]&&h[0]!=K)&&h.pop(),e&&j==f[D]&&h[t](K)):(h[t](p),e=i)
                    }
                    e=h[Jd](df)
                }
            }
            c?
            b.jd(e):c=a.Ei();
            c?b.pd(a.Bi()):c=a.Ci();
            c&&b.ve(a.xc);
            return b
        };

        Na(L,function(){
            return new Nq(this)
        });
        L.ld=function(a,b){
            this.La();
            if(this.Ya=b?a?na(a):K:a)this.Ya=this.Ya[v](/:$/,K);
            return this
        };
    
        L.Fi=function(){
            return!!this.Ya
        };
    
        L.we=function(a,b){
            this.La();
            this.yc=b?a?na(a):K:a;
            return this
        };
    
        L.Gi=function(){
            return!!this.yc
        };
    
        L.ue=function(a,b){
            this.La();
            this.wc=b?a?na(a):K:a;
            return this
        };
    
        L.Be=function(){
            return!!this.wc
        };
        L.kd=function(a){
            this.La();
            a?(a=ja(a),(ha(a)||0>a)&&d(r("Bad port number "+a)),this.vb=a):this.vb=k;
            return this
        };
    
        L.Di=function(){
            return this.vb!=k
        };
    
        L.jd=function(a,b){
            this.La();
            this.Xa=b?a?na(a):K:a;
            return this
        };
    
        L.pg=function(){
            return!!this.Xa
        };
    
        L.Ei=function(){
            return this.fa[sc]()!==K
        };
    
        L.pd=function(a,b){
            this.La();
            a instanceof Oq?(this.fa=a,this.fa.df(this.ca)):(b||(a=Pq(a,Uq)),this.fa=new Oq(a,k,this.ca));
            return this
        };
    
        L.setQuery=function(a,b){
            return this.pd(a,b)
        };
    
        L.Tg=function(){
            return this.fa[sc]()
        };
        L.Bi=function(){
            return this.fa.jk()
        };
    
        L.getQuery=function(){
            return this.Tg()
        };
    
        L.hd=function(a,b){
            this.La();
            this.fa.set(a,b);
            return this
        };
    
        L.jh=function(a){
            return this.fa.get(a)
        };
    
        L.ve=function(a,b){
            this.La();
            this.xc=b?a?na(a):K:a;
            return this
        };
    
        L.Ci=function(){
            return!!this.xc
        };
    
        L.Fj=function(){
            this.La();
            this.hd(dn,q[eb](2147483648*q.random())[sc](36)+q.abs(q[eb](2147483648*q.random())^Fn())[sc](36));
            return this
        };
    
        L.La=function(){
            this.Ok&&d(r("Tried to modify a read-only Uri"))
        };
        L.df=function(a){
            this.ca=a;
            this.fa&&this.fa.df(a);
            return this
        };
    
        function Pq(a,b){
            return O(a)?encodeURI(a)[v](b,Vq):k
        }
        function Vq(a){
            a=a[od](0);
            return de+(a>>4&15)[sc](16)+(a&15)[sc](16)
        }
        var Qq=/[#\/\?@]/g,Sq=/[\#\?:]/g,Rq=/[\#\?]/g,Uq=/[\#\?@]/g,Tq=/#/g;
        function Oq(a,b,c){
            this.ab=a||k;
            this.ca=!!c
        }
        L=Oq[F];
        L.Bb=function(){
            if(!this.B&&(this.B=new $p,this.o=0,this.ab))for(var a=this.ab[Jc](ge),b=0;b<a[D];b++){
                var c=a[b][w](Hf),e=k,f=k;
                0<=c?(e=a[b][ud](0,c),f=a[b][ud](c+1)):e=a[b];
                e=na(e[v](/\+/g,Rd));
                e=this.Gb(e);
                this.add(e,f?na(f[v](/\+/g,Rd)):K)
            }
        };
    
        L.B=k;
        L.o=k;
        L.add=function(a,b){
            this.Bb();
            this.fc();
            var a=this.Gb(a),c=this.B.get(a);
            c||this.B.set(a,c=[]);
            c[t](b);
            this.o++;
            return this
        };
        L.remove=function(a){
            this.Bb();
            a=this.Gb(a);
            return this.B.Xb(a)?(this.fc(),this.o-=this.B.get(a)[D],this.B.remove(a)):l
        };
    
        L.clear=function(){
            this.fc();
            this.B=k;
            this.o=0
        };
    
        L.Xb=function(a){
            this.Bb();
            a=this.Gb(a);
            return this.B.Xb(a)
        };
    
        L.Kb=function(){
            this.Bb();
            for(var a=this.B.Ma(),b=this.B.Kb(),c=[],e=0;e<b[D];e++)for(var f=a[e],h=0;h<f[D];h++)c[t](b[e]);
            return c
        };
        L.Ma=function(a){
            this.Bb();
            var b=[];
            if(a)this.Xb(a)&&(b=mo(b,this.B.get(this.Gb(a))));else for(var a=this.B.Ma(),c=0;c<a[D];c++)b=mo(b,a[c]);
            return b
        };
    
        L.set=function(a,b){
            this.Bb();
            this.fc();
            a=this.Gb(a);
            this.Xb(a)&&(this.o-=this.B.get(a)[D]);
            this.B.set(a,[b]);
            this.o++;
            return this
        };
    
        L.get=function(a,b){
            var c=a?this.Ma(a):[];
            return 0<c[D]?ma(c[0]):b
        };
    
        L.Bj=function(a,b){
            this.remove(a);
            0<b[D]&&(this.fc(),this.B.set(this.Gb(a),no(b)),this.o+=b[D])
        };
        L.toString=function(){
            if(this.ab)return this.ab;
            if(!this.B)return K;
            for(var a=[],b=this.B.Kb(),c=0;c<b[D];c++)for(var e=b[c],f=aa(ma(e)),e=this.Ma(e),h=0;h<e[D];h++){
                var j=f;
                e[h]!==K&&(j+=Hf+aa(ma(e[h])));
                a[t](j)
            }
            return this.ab=a[Jd](ge)
        };
    
        L.jk=function(){
            return this[sc]()?na(this[sc]()):K
        };
    
        L.fc=function(){
            this.ab=k
        };
    
        Na(L,function(){
            var a=new Oq;
            a.ab=this.ab;
            this.B&&(a.B=this.B[Yc]());
            return a
        });
        L.Gb=function(a){
            a=ma(a);
            this.ca&&(a=a[Md]());
            return a
        };
        L.df=function(a){
            a&&!this.ca&&(this.Bb(),this.fc(),Zp(this.B,function(a,c){
                var e=c[Md]();
                c!=e&&(this.remove(c),this.Bj(e,a))
            },this));
            this.ca=a
        };
    
        L.extend=function(a){
            for(var b=0;b<arguments[D];b++)Zp(arguments[b],function(a,b){
                this.add(b,a)
            },this)
        };
    
        function Wq(a){
            var b={};
    
            if(on(a)==el&&!sn(a)){
                b.v="undefined"==typeof a.v?k:a.v;
                var c=typeof a.f;
                "undefined"==c||c==bl?b.f=k:c==lm?b.f=a.f:d(r("Formatted value ('f'), if specified, must be a string."));
                c=typeof a.p;
                c==el?b.p=a.p:c!=bl&&"undefined"!=c&&d(r("Properties ('p'), if specified, must be an Object."))
            }else b.v=a!=k?a:k,b.f=k;
            return{
                v:b.v,
                f:b.f,
                p:b.p
            }
        }
        function Xq(a,b,c){
            (typeof b!=el||!(gi in b))&&d(r(c+' must have a property "column"'));
            ui in b&&typeof b.desc!=Kh&&d(r('Property "desc" in '+c+" must be boolean."));
            R(a,b.column)
        }
        function Yq(a,b){
            if(typeof b==cl)return R(a,b),[{
                column:b
            }];
            if(typeof b==el){
                if(rn(b)){
                    1>b[D]&&d(r("sortColumns is an empty array. Must have at least one element."));
                    var c={};
            
                    if(typeof b[0]==el){
                        for(var e=0;e<b[D];e++){
                            Xq(a,b[e],fm+e+nh);
                            var f=b[e].column;
                            f in c&&d(r(Yf+f+Ud));
                            c[f]=i
                        }
                        return b
                    }
                    if(typeof b[0]==cl){
                        for(var h=[],e=0;e<b[D];e++)R(a,b[e]),b[e]in c&&d(r(Yf+f+Ud)),c[f]=i,h[t]({
                            column:b[e]
                        });
                        return h
                    }
                    d(r("sortColumns is an array, but neither of objects nor of numbers. Must be either of those."))
                }
                Xq(a,
                    b,em);
                return[b]
            }
        }
        function Zq(a,b){
            var c=a[xc]();
            0<c?(q[eb](b)!==b||0>b||b>=c)&&d(r("Invalid row index "+b+". Should be in the range [0-"+(c-1)+"].")):d(r("Table has no rows."))
        }
        function R(a,b){
            var c=a[mb]();
            0<c?(q[eb](b)!==b||0>b||b>=c)&&d(r("Invalid column index "+b+". Should be an integer in the range [0-"+(c-1)+"].")):d(r("Table has no columns."))
        }
        function $q(a,b,c){
            a=a[Nb](b);
            ar(c,a)||d(r(bh+c+Td+a+" in column index "+b))
        }
        function ar(a,b){
            if(a==k)return i;
            var c=typeof a;
            switch(b){
                case cl:
                    if(c==cl)return i;
                    break;
                case lm:
                    if(c==lm)return i;
                    break;
                case Kh:
                    if(c==Kh)return i;
                    break;
                case qi:case ri:
                    if(sn(a))return i;
                    break;
                case zm:
                    if(rn(a)&&2<a[D]&&5>a[D]){
                        for(var c=i,e=0;e<a[D];e++){
                            var f=a[e];
                            if(typeof f!=cl||f!=q[eb](f)){
                                c=l;
                                break
                            }
                        }
                        if(0>a[0]||23<a[0]||0>a[1]||59<a[1]||0>a[2]||59<a[2])c=l;
                        if(4==a[D]&&(0>a[3]||999<a[3]))c=l;
                        if(c)return i
                    }
            }
            return l
        }
        function br(a,b,c){
            if(b==k)return c==k?0:-1;
            if(c==k)return 1;
            switch(a){
                case Kh:case cl:case lm:case qi:case ri:
                    return b<c?-1:c<b?1:0;
                case zm:
                    for(a=0;3>a;a++){
                        if(b[a]<c[a])return-1;
                        if(c[a]<b[a])return 1
                    }
                    b=4>b[D]?0:b[3];
                    c=4>c[D]?0:c[3];
                    return b<c?-1:c<b?1:0
            }
        }
        function cr(a,b){
            R(a,b);
            var c=a[Nb](b),e=k,f=k,h,j,p=a[xc]();
            for(h=0;h<p;h++)if(j=a[C](h,b),j!=k){
                f=e=j;
                break
            }
            if(e==k)return{
                min:k,
                max:k
            };
    
            for(h++;h<p;h++)j=a[C](h,b),j!=k&&(0>br(c,j,e)?e=j:0>br(c,f,j)&&(f=j));
            return{
                min:e,
                max:f
            }
        }
        function dr(a,b){
            for(var b=Yq(a,b),c=[],e=a[xc](),f=0;f<e;f++)c[t](f);
            ro(c,function(c,e){
                for(var f=0;f<b[D];f++){
                    var s=b[f],x=s.column,x=br(a[Nb](x),a[C](c,x),a[C](e,x));
                    if(0!=x)return x*(s.desc?-1:1)
                }
                return 0
            });
            return c
        }
        function er(a,b){
            R(a,b);
            var c=a[xc]();
            if(0==c)return[];
            for(var e=[],f=0;f<c;++f)e[t](a[C](f,b));
            var h=a[Nb](b);
            ro(e,function(a,b){
                return br(h,a,b)
            });
            var c=e[0],j=[];
            j[t](c);
            for(f=1;f<e[D];f++){
                var p=e[f];
                0!=br(h,p,c)&&j[t](p);
                c=p
            }
            return j
        }
        function fr(a,b){
            (!rn(b)||0==b[D])&&d(r("columnFilters must be a non-empty array"));
            for(var c={},e=0;e<b[D];e++){
                if(typeof b[e]!=el||!(gi in b[e]))Sm in b[e]||Nk in b[e]||Ik in b[e]?Sm in b[e]&&(Nk in b[e]||Ik in b[e])&&d(r(hi+e+'] must specify either "value" or range properties ("minValue" and/or "maxValue"')):d(r(hi+e+'] must have properties "column" and "value", "minValue"or "maxValue"'));
                var f=b[e].column;
                f in c&&d(r(Yf+f+" is duplicate in columnFilters."));
                R(a,f);
                $q(a,f,b[e][nb]);
                c[f]=i
            }
            c=[];
            e=a[xc]();
            for(f=0;f<e;f++){
                var h;
                    a:{
                        h=a;
                        for(var j=b,p=f,s=0;s<j[D];s++){
                            var x=j[s],z=x.column,E=h[C](p,z),z=h[Nb](z);
                            if(x.minValue!=k||x.maxValue!=k){
                                if(E==k||x.minValue!=k&&0>br(z,E,x.minValue)||x.maxValue!=k&&0<br(z,E,x.maxValue)){
                                    h=l;
                                    break a
                                }
                            }else if(0!=br(z,E,x[nb])){
                                h=l;
                                break a
                            }
                        }
                        h=i
                    }
                h&&c[t](f)
            }
            return c
        }
        function gr(a,b){
            var c;
            b==zm?(c=[],c[t](a[0]),c[t]((10>a[1]?mf:K)+a[1]),c[t]((10>a[2]?mf:K)+a[2]),c=c[Jd](zf),3<a[D]&&0<a[3]&&(c+=$e+(10>a[3]?pf:100>a[3]?mf:K)+a[3])):b==qi?(c=new google[G].DateFormat({
                formatType:Jk,
                valueType:qi
            }),c=c.formatValue(a)):b==ri?(c=new google[G].DateFormat({
                formatType:Jk,
                valueType:ri
            }),c=c.formatValue(a)):c=a!=k?ma(a):K;
            return c
        }
        function hr(a,b,c,e){
            for(var f=k,h=a[xc]();(e?0<=b:b<h)&&f===k;)f=a[C](b,c),b+=e?-1:1;
            return f
        };
    
        function S(a,b){
            this.yb=b?b==nf?nf:of:of;
            if(a){
                if(O(a))a=Rn(a);
                else a:for(var c=a.cols||[],e=a[wd]||[],f=c[D],h=0;h<f;h++){
                    var j=c[h][B];
                    if(j==qi||j==ri)for(var j=e[D],p=0;p<j;p++){
                        var s=e[p].c[h];
                        if(s){
                            var x=s.v;
                            if(sn(x))break a;
                            O(x)&&(s=On(s),s=Rn(s),e[p].c[h]=s)
                        }
                    }
                }
                this.z=a.cols||[];
                this.D=a[wd]||[];
                this.Na=a.p||k
            }else this.z=[],this.D=[],this.Na=k;
            this.za=[]
        }
        var ir={
            al:Kh,
            gl:cl,
            il:lm,
            cl:qi,
            jl:zm,
            dl:ri
        };

        L=S[F];
        L.z=k;
        L.yb=k;
        L.D=k;
        L.Na=k;
        L.za=k;
        L.getNumberOfRows=function(){
            return this.D[D]
        };
        L.getNumberOfColumns=function(){
            return this.z[D]
        };
    
        Na(L,function(){
            return new S(this[Bc]())
        });
        L.getColumnId=function(a){
            R(this,a);
            return this.z[a].id||K
        };
    
        L.getColumnIndex=function(a){
            for(var b=this.z,c=0;c<b[D];c++)if(b[c].id==a)return c;return-1
        };
    
        L.getColumnLabel=function(a){
            R(this,a);
            return this.z[a][Gd]||K
        };
    
        L.getColumnPattern=function(a){
            R(this,a);
            return this.z[a].pattern
        };
    
        L.getColumnRole=function(a){
            a=this[Kc](a,Ml);
            return a=O(a)?a:K
        };
    
        L.getColumnType=function(a){
            R(this,a);
            return this.z[a][B]
        };
        Ba(L,function(a,b){
            Zq(this,a);
            R(this,b);
            var c=this.Ka(a,b),e=k;
            c&&(e=c.v,e=pn(e)?e:k);
            return e
        });
        L.Ka=function(a,b){
            return this.D[a].c[b]
        };
    
        L.hk=function(a,b){
            this.za[a]=this.za[a]||[];
            var c=this.za[a],e=c[b]||{};
    
            return c[b]=e
        };
    
        L.Vj=function(a,b){
            var c=this.za[a];
            c&&c[b]&&(c[b]={})
        };
        L.getFormattedValue=function(a,b){
            Zq(this,a);
            R(this,b);
            var c=this.Ka(a,b),e=K;
            if(c)if("undefined"!=typeof c.f&&c.f!=k)e=c.f;
                else if(c=this.hk(a,b),pn(c.oh))e=c.oh;
                else{
                    var f=this[C](a,b);
                    f===k||(e=gr(f,this[Nb](b)));
                    c.oh=e
                }
            return e
        };
    
        L.getProperty=function(a,b,c){
            Zq(this,a);
            R(this,b);
            return(a=(a=this.Ka(a,b))&&a.p)&&c in a?a[c]:k
        };
    
        L.getProperties=function(a,b){
            Zq(this,a);
            R(this,b);
            var c=this.Ka(a,b);
            c||(c={
                v:k,
                f:k
            },this.D[a].c[b]=c);
            c.p||(c.p={});
            return c.p
        };
    
        L.getTableProperties=function(){
            return this.Na
        };
        L.getTableProperty=function(a){
            var b=this.Na;
            return b&&a in b?b[a]:k
        };
    
        L.setTableProperties=function(a){
            this.Na=a
        };
    
        L.setTableProperty=function(a,b){
            this.Na||(this.Na={});
            this.Na[a]=b
        };
    
        Ia(L,function(a,b,c){
            this[cc](a,b,c,g,g)
        });
        L.setFormattedValue=function(a,b,c){
            this[cc](a,b,g,c,g)
        };
    
        L.setProperties=function(a,b,c){
            this[cc](a,b,g,g,c)
        };
    
        L.setProperty=function(a,b,c,e){
            this[zc](a,b)[c]=e
        };
        L.setCell=function(a,b,c,e,f){
            Zq(this,a);
            R(this,b);
            this.Vj(a,b);
            var h=this.Ka(a,b);
            h||(h={},this.D[a].c[b]=h);
            "undefined"!=typeof c&&($q(this,b,c),h.v=c);
            "undefined"!=typeof e&&(h.f=e);
            pn(f)&&(h.p=tn(f)?f:{})
        };
    
        L.setRowProperties=function(a,b){
            Zq(this,a);
            this.D[a].p=b
        };
    
        L.setRowProperty=function(a,b,c){
            this[Xb](a)[b]=c
        };
    
        L.getRowProperty=function(a,b){
            Zq(this,a);
            var c=this.D[a];
            return(c=c&&c.p)&&b in c?c[b]:k
        };
    
        L.getRowProperties=function(a){
            Zq(this,a);
            a=this.D[a];
            a.p||(a.p={});
            return a.p
        };
        L.setColumnLabel=function(a,b){
            R(this,a);
            this.z[a].label=b
        };
    
        L.setColumnProperties=function(a,b){
            R(this,a);
            this.z[a].p=b
        };
    
        L.setColumnProperty=function(a,b,c){
            this[vb](a)[b]=c
        };
    
        L.getColumnProperty=function(a,b){
            R(this,a);
            var c=this.z[a];
            return(c=c&&c.p)&&b in c?c[b]:k
        };
    
        L.getColumnProperties=function(a){
            R(this,a);
            a=this.z[a];
            a.p||(a.p={});
            return a.p
        };
        L.insertColumn=function(a,b,c,e){
            a!==this.z[D]&&(this.za=[],R(this,a));
            tn(b)||(b={
                id:e||K,
                label:c||K,
                pattern:K,
                type:b
            });
            c=b[B];
            mp(ir,c)||d(r("Invalid type: "+c+$e));
            if(c=b.role)e=b.p||{},e.role=c,b.p=e;
            this.z[Id](a,0,b);
            for(b=0;b<this.D[D];b++)this.D[b].c[Id](a,0,{
                v:k,
                f:k
            })
        };
    
        L.addColumn=function(a,b,c){
            this.insertColumn(this.z[D],a,b,c);
            return this.z[D]-1
        };
    
        L.vj=function(a,b){
            var c=Wq(b);
            $q(this,a,c.v);
            return c
        };
        L.insertRows=function(a,b){
            a!==this.D[D]&&(this.za=[],Zq(this,a));
            var c;
            if(qn(b))c=b;
            else if(typeof b==cl){
                (b!=q[eb](b)||0>b)&&d(r("Invalid value for numOrArray: "+b+". If numOrArray is a number it should be a nonnegative integer."));
                c=[];
                for(var e=0;e<b;e++)c[e]=k
            }else d(r("Invalid value for numOrArray. Should be a number or an array of arrays of cells."));
            for(var e=[],f=0;f<c[D];f++){
                var h=c[f],j=[];
                if(h===k)for(h=0;h<this.z[D];h++)j[t]({
                    v:k,
                    f:k
                });
                else if(qn(h)){
                    h[D]!=this.z[D]&&d(r("Row given with size different than "+
                        this.z[D]+" (the number of columns in the table)."));
                    for(var p=0;p<h[D];p++)j[t](this.vj(p,h[p]))
                }else d(r("Every row given must be either null or an array."));
                h={};
        
                h.c=j;
                e[t](h);
                1E4==e[D]&&(j=e,En(po,this.D,a,0)[xd](k,j),a+=e[D],e=[])
            }
            En(po,this.D,a,0)[xd](k,e);
            return a+e[D]-1
        };
    
        L.addRows=function(a){
            if(typeof a==cl||qn(a))return this.insertRows(this.D[D],a);
            d(r("Argument given to addRows must be either a number or an array"))
        };
        L.addRow=function(a){
            if(qn(a))return this[jc]([a]);
            a!=k&&d(r("If argument is given to addRow, it must be an array, or null"));
            return this[jc](1)
        };
    
        L.getColumnRange=function(a){
            return cr(this,a)
        };
    
        L.getSortedRows=function(a){
            return dr(this,a)
        };
    
        L.sort=function(a){
            this.za=[];
            var a=Yq(this,a),b=this;
            ro(this.D,function(c,e){
                for(var f=0;f<a[D];f++){
                    var h=a[f],j=h.column,p=c.c[j],s=e.c[j],p=p?p.v:k,s=s?s.v:k,j=br(b[Nb](j),p,s);
                    if(0!=j)return j*(h.desc?-1:1)
                }
                return 0
            })
        };
        L.toJSON=function(){
            return On({
                cols:this.z,
                rows:this.D,
                p:this.Na
            })
        };
    
        L.getDistinctValues=function(a){
            return er(this,a)
        };
    
        L.getFilteredRows=function(a){
            return fr(this,a)
        };
    
        L.removeRows=function(a,b){
            0>=b||(this.za=[],Zq(this,a),a+b>this.D[D]&&(b=this.D[D]-a),this.D[Id](a,b))
        };
    
        L.removeRow=function(a){
            this.removeRows(a,1)
        };
    
        L.removeColumns=function(a,b){
            if(!(0>=b)){
                this.za=[];
                R(this,a);
                a+b>this.z[D]&&(b=this.z[D]-a);
                this.z[Id](a,b);
                for(var c=0;c<this.D[D];c++)this.D[c].c[Id](a,b)
            }
        };
        L.removeColumn=function(a){
            this.removeColumns(a,1)
        };
    
        function jr(a){
            var b=a.version||of;
            this.mj=mp(kr,b)?b:of;
            this.Se=a.status;
            this.fb=[];
            this.gb=[];
            this.gb=a.warnings||[];
            this.fb=a[Ed]||[];
            lr(this.gb);
            lr(this.fb);
            this.Se!=Mi&&(this.Kg=a.sig,this.g=new S(a.table,this.mj))
        }
        function lr(a){
            for(var b=0;b<a[D];b++){
                var c=a[b].detailed_message;
                c&&(a[b].detailed_message=!c?K:c[Ab](mr)&&!c[Ab](nr)?c:c[v](/&/g,he)[v](/</g,je)[v](/>/g,ie)[v](/\"/g,ke))
            }
        }
        var mr=/^[^<]*(<a(( )+target=('_blank')?("_blank")?)?( )+(href=('[^']*')?("[^"]*")?)>[^<]*<\/a>[^<]*)*$/,nr=/javascript((s)?( )?)*:/,kr={
            kl:nf,
            ll:of
        };

        L=jr[F];
        L.Kg=k;
        L.g=k;
        L.isError=function(){
            return this.Se==Mi
        };
    
        L.hasWarning=function(){
            return this.Se==Ym
        };
    
        L.containsReason=function(a){
            for(var b=0;b<this.fb[D];b++)if(this.fb[b].reason==a)return i;for(b=0;b<this.gb[D];b++)if(this.gb[b].reason==a)return i;return l
        };
    
        L.getDataSignature=function(){
            return this.Kg
        };
    
        L.getDataTable=function(){
            return this.g
        };
        L.wf=function(a){
            return this[Gb]()&&this.fb&&this.fb[0]&&this.fb[0][a]?this.fb[0][a]:this.hasWarning()&&this.gb&&this.gb[0]&&this.gb[0][a]?this.gb[0][a]:k
        };
    
        L.getReasons=function(){
            var a=this.wf(Fl);
            return a!=k&&a!=K?[a]:[]
        };
    
        L.getMessage=function(){
            return this.wf(Mk)||K
        };
    
        L.getDetailedMessage=function(){
            return this.wf(vi)||K
        };
    
        function or(a,b){
            var c=b||{};
    
            this.bf=c.sendMethod||Dh;
            mp(pr,this.bf)||d(r("Send method not supported: "+this.bf));
            this.Mg=c.makeRequestParams_||{};
    
            jp(a)&&(a=this.ek(a));
            var e=a,c=jp(e),e=$o(Yo(e)[5]||k),e=dp[Ya](e);
            this.Hj=c&&e;
            this.Gj=a;
            this.Hg=qr++;
            rr[t](this)
        }
        var pr={
            ml:bn,
            nl:cn,
            hl:"scriptInjection",
            fl:Gk,
            $k:Dh
        },sr=new $p({
            "X-DataSource-Auth":"a"
        }),qr=0,tr={};

        or[F].ph=30;
        var rr=[],ur=M.gadgets;
        function vr(){
            for(var a=0;a<rr[D];a++){
                var b=rr[a];
                b.gf&&b.Ed()
            }
        }
        L=or[F];
        L.ek=function(a){
            var b=new Nq(a);
            433==b.vb&&b.kd(k);
            var c=b.Xa,c=c[v](/\/ccc$/,kf);
            /\/pub$/[Ya](c)&&(c=c[v](/\/pub$/,kf),b.hd(Al,rf));
            b.jd(c);
            var c=$o(Yo(a)[3]||k),a=(ja(Yo(a)[4]||k)||k)!=k,e=hp[Ya](c),c=ip[Ya](c)&&!e&&a;
            b.ld(c?ek:jk);
            return b[sc]()
        };
    
        function wr(a){
            a[$c].Lg()?(a=Wn(a[$c].uk()),a[Ab](/^({.*})$/)?(a=Sn(a),xr(a)):Gn(Tn(a))):d(r("google.visualization.Query: "+a[$c].tk()))
        }
        function xr(a){
            var b=a.reqId,c=tr[b];
            c?(tr[b]=k,c.Jd(a)):d(r("Missing query for request id: "+b))
        }
        L.jf=k;
        L.Hd=k;
        L.Od=k;
        L.Ea=k;
        L.We=k;
        L.ic=k;
        L.gf=i;
        L.ub=0;
        L.Pe=k;
        L.va=l;
        L.setRefreshInterval=function(a){
            (typeof a!=cl||0>a)&&d(r("Refresh interval must be a non-negative number"));
            this.ub=a;
            this.rh()
        };
    
        L.ff=function(){
            this.Od&&(ca[$a](this.Od),this.Od=k)
        };
    
        L.ik=function(){
            this.Lh(Am,Mg)
        };
    
        L.Lh=function(a,b,c){
            this.Jd({
                version:of,
                status:Mi,
                errors:[{
                    reason:a,
                    message:b,
                    detailed_message:c
                }]
            })
        };
        L.Lj=function(a){
            var b={};
    
            this.Ea&&(b.tq=ma(this.Ea));
            var c=Il+ma(this.Hg),e=this.Pe;
            e&&(c+=Bf+e);
            this.We&&(c+=Cf+this.We);
            b.tqx=c;
            if(this.ic){
                var c=[],f;
                for(f in this.ic)c[t](f+zf+this.ic[f]);b.tqh=c[Jd](Af)
            }
            f=a;
            a=f[w](be);
            -1!=a&&(f=f[ud](0,a));
            c=f[w](Jf);
            e=a=K;
            e=[];
            -1==c?a=f:(a=f[ud](0,c),e=f[ud](c+1),e=e[Jc](ge));
            f=[];
            for(c=0;c<e[D];c++){
                var h={};
        
                h.name=e[c][Jc](Hf)[0];
                h.$e=e[c];
                f[t](h)
            }
            for(var j in b){
                e=b[j];
                h=l;
                for(c=0;c<f[D];c++)if(f[c][gc]==j){
                    f[c].$e=j+Hf+aa(e);
                    h=i;
                    break
                }
                h||(c={},c.name=j,
                    c.$e=j+Hf+aa(e),f[t](c))
            }
            b=a;
            if(0<f[D]){
                b+=Jf;
                j=[];
                for(c=0;c<f[D];c++)j[t](f[c].$e);
                b+=j[Jd](ge)
            }
            a=b;
            this.ub&&(b=new Nq(a),Ho&&b.Fj(),a=b[sc]());
            return a
        };
        L.Ed=function(){
            var a=this.Lj(this.Gj);
            tr[ma(this.Hg)]=this;
            var b=this.bf,c=jg;
            b==cn&&(b=bn,c=Kg);
            if(b==Dh)if(/[?&]alt=gviz(&[^&]*)*$/[Ya](a))b=Gk;
                else{
                    var b=a.search(ap),e;
                        b:{
                            for(e=0;0<=(e=a[w](Gm,e))&&e<b;){
                                var f=a[od](e-1);
                                if(38==f||63==f)if(f=a[od](e+4),!f||61==f||38==f||35==f)break b;
                                e+=5
                            }
                            e=-1
                        }
                    if(0>e)b=k;
                    else{
                        f=a[w](ge,e);
                        if(0>f||f>b)f=b;
                        e+=5;
                        b=na(a.substr(e,f-e)[v](/\+/g,Rd))
                    }
                    b=b||Dh;
                    mp(pr,b)||(b=Dh)
                }
            if(b==Gk)ln(Yi)?this.Oj(a,this.Mg):d(r("gadgets.io.makeRequest is not defined."));
            else{
                if(!(e=
                    b==bn)){
                    if(b=b==Dh)e=(new Nq(M[Pc][td])).Nj(new Nq(a))[sc](),b=Yo(M[Pc][td]),e=Yo(e),b=b[3]==e[3]&&b[1]==e[1]&&b[4]==e[4];
                    e=b
                }
                e?(b=g,e=a,c==Kg&&(a=a[Jc](Jf),1<=a[D]&&(e=a[0]),2<=a[D]&&(b=a[1])),Jq[Cb](e,wr,c,b,sr)):(c=ga[lc](Jh)[0],b=this.Pe===k,this.Hj&&b?(b=ga[Ib](ok),this.Mj(b,a),c[Ta](b)):this.hf(a))
            }
        };

        L.Mj=function(a,b){
            var c=this;
            a.onerror=function(){
                c.hf(b)
            };
        
            a.onload=function(){
                c.hf(b)
            };
        
            Qa(a[H],$k);
            a.src=b+le+(new Date).getTime()
        };
        L.Oj=function(a,b){
            b[ur.io[hb].CONTENT_TYPE]==k&&(b[ur.io[hb].CONTENT_TYPE]=ur.io.ContentType.TEXT);
            b[ur.io[hb].AUTHORIZATION]==k&&(b[ur.io[hb].AUTHORIZATION]=ur.io.AuthorizationType.SIGNED);
            b.OAUTH_ENABLE_PRIVATE_NETWORK==k&&(b.OAUTH_ENABLE_PRIVATE_NETWORK=i);
            b.OAUTH_ADD_EMAIL==k&&(b.OAUTH_ADD_EMAIL=i);
            ur.io.makeRequest(a,Dn(this.Dk,this),b);
            this.yh()
        };
    
        L.Dk=function(a){
            if(a!=k&&a.data)Gn(Tn(a.data));
            else{
                var b=K;
                a&&a[Ed]&&(b=a[Ed][Jd](Rd));
                this.Lh(Hk,Zi,b)
            }
        };

        L.hf=function(a){
            this.yh();
            In(a);
            this.rh()
        };
        L.yh=function(){
            var a=this;
            this.ff();
            this.Od=ca[Fc](function(){
                a.ik()
            },1E3*this.ph)
        };
    
        L.Zg=function(){
            this.Hd&&(ca[$a](this.Hd),this.Hd=k)
        };
    
        L.rh=function(){
            this.Zg();
            if(0!=this.ub&&this.gf&&this.va){
                var a=this;
                this.Hd=ca[Fc](function(){
                    a.Ed()
                },1E3*this.ub)
            }
        };

        L.send=function(a){
            this.va=i;
            this.jf=a;
            this.Ed()
        };
    
        L.makeRequest=function(a,b){
            this.va=i;
            this.jf=a;
            this.Mg=b||{};
    
            this.Ed()
        };
    
        L.abort=function(){
            this.va=l;
            this.ff();
            this.Zg()
        };
        L.Jd=function(a){
            this.ff();
            a=new jr(a);
            if(!a.containsReason(al)){
                this.Pe=a[Gb]()?k:a.getDataSignature();
                var b=this.jf;
                b[I](b,a)
            }
        };

        L.setTimeout=function(a){
            (typeof a!=cl||ha(a)||0>=a)&&d(r("Timeout must be a positive number"));
            this.ph=a
        };
    
        L.setRefreshable=function(a){
            typeof a!=Kh&&d(r("Refreshable must be a boolean"));
            return this.gf=a
        };
    
        L.setQuery=function(a){
            typeof a!=lm&&d(r("queryString must be a string"));
            this.Ea=a
        };
    
        L.Uk=function(a){
            this.We=a;
            a!=k&&this.Bh(Lm,a)
        };
        L.Bh=function(a,b){
            a=a[v](/\\/g,jh);
            b=b[v](/\\/g,jh);
            a=a[v](/:/g,kh);
            b=b[v](/:/g,kh);
            a=a[v](/;/g,lh);
            b=b[v](/;/g,lh);
            this.ic||(this.ic={});
            this.ic[a]=b
        };
    
        function yr(){
            var a;
            zr||(zr=i,M.IDIModule&&M.IDIModule.registerListener(vr,{
                pollingInterval:100
            }),M.gadgets&&(Ar(af),this.xh()));
            a=ga;
            a=a.querySelectorAll&&a.querySelector?a.querySelectorAll(Pf):a[lc](Pf);
            this.Fk=Jn(a[0])
        }
        var zr=l;
        yr[F].Dh=200;
        function Br(){
            return!!M.gadgets&&!!M.gadgets.rpc
        }
        yr[F].xh=function(){
            if(Br()){
                var a=M.gadgets;
                wn(a.rpc.register)&&a.rpc.register(Gl,vr)
            }else 0<this.Dh&&(this.Dh--,ca[Fc](Dn(this.xh,this),100))
        };
        yr[F].createQueryFromPrefs=function(a){
            var b=a.getString(qh),c=b[Md]();
            if(0==c[w](fk)||0==c[w](kk))b=na(b);
            b=new or(b);
            a=a.getInt(ph);
            b[Zb](a);
            return b
        };
    
        yr[F].validateResponse=function(a){
            return this.Fk(a)
        };
    
        function Ar(a){
            if(Br()){
                var b=M.gadgets;
                try{
                    b.rpc.getRelayUrl(a)||b.rpc.setRelayUrl(a,hk)
                }catch(c){
                    wn(b.rpc.setRelayUrl)&&b.rpc.setRelayUrl(a,hk)
                }
            }
        }
        M.gadgets&&!Br()&&In("http://www.gmodules.com/gadgets/rpc/rpc.v.js");
        Ar(af);
        function Cr(a){
            var b=a.__eventTarget;
            b==k&&(b=new Dq,a.__eventTarget=b);
            return a=b
        }
        function Dr(a){
            this.Pk=a
        }
        Dr[F].getKey=function(){
            return this.Pk
        };
    
        function Er(a,b){
            iq[I](this,a);
            this.Rk=b
        }
        P(Er,iq);
        function Fr(a,b,c,e){
            this.Ea=a;
            this.Dg=b;
            this.Za=c||{};
    
            this.tc=e;
            this.Fc=k;
            e&&(this.Fc=this.cf=Jn(e));
            (!b||!(Gi in b)||typeof b[hd]!=Wi)&&d(r("Visualization must have a draw method."))
        }
        L=Fr[F];
        L.cf=k;
        L.gh=k;
        L.fh=k;
        L.g=k;
        L.setOptions=function(a){
            this.Za=a||{}
        };

        L.draw=function(){
            this.g&&this.Dg[hd](this.g,this.Za)
        };
    
        L.Tk=function(a){
            var b=this.tc;
            this.Fc=a?a:b?this.Fc=this.cf:k
        };
        L.sendAndDraw=function(){
            this.Fc||d(r("If no container was supplied, a custom error handler must be supplied instead."));
            var a=this;
            this.Ea[Cb](function(b){
                var c=a.gh;
                c&&c(b);
                a.Jd(b);
                (c=a.fh)&&c(b)
            })
        };
    
        L.Jd=function(a){
            var b=this.Fc;
            b(a)&&(this.g=a[ob](),this.Dg[hd](this.g,this.Za))
        };
    
        L.setCustomResponseHandler=function(a){
            a!=k&&(typeof a!=Wi&&d(r("Custom response handler must be a function.")),this.gh=a)
        };
        L.setCustomPostResponseHandler=function(a){
            a!=k&&(typeof a!=Wi&&d(r("Custom post response handler must be a function.")),this.fh=a)
        };
    
        L.abort=function(){
            this.Ea[Ec]()
        };
    
        function T(a){
            this.g=a;
            for(var b=[],a=a[mb](),c=0;c<a;c++)b[t](c);
            this.t=b;
            this.Ja=i;
            this.Ia=k;
            this.Fe=[];
            this.Ee=i
        }
        L=T[F];
        L.bj=function(){
            for(var a=0;a<this.t[D];a++)tn(this.t[a])&&(this.Fe[a]=[]);
            this.Ee=l
        };
    
        L.Ec=function(){
            this.Ee=i
        };
    
        L.Xj=function(){
            for(var a=[],b=this.g[xc](),c=0;c<b;c++)a[t](c);
            this.Ia=a;
            this.Ec()
        };
        L.setColumns=function(a){
            for(var b=this.g,c=lp(Gr),e=0;e<a[D];e++){
                var f=a[e];
                if(vn(f))R(b,f);
                else if(tn(f)){
                    var h=f.sourceColumn,f=f.calc;
                    O(f)&&((!c||c&&!ko(c,f))&&d(r('Unknown function "'+f+Xd)),h!=k&&R(b,h))
                }else d(r("Invalid column input, expected either a number or an object."))
            }
            this.t=An(a);
            a=this.g;
            b=this.t;
            for(c=0;c<b[D];c++)if(e=b[c],tn(e)){
                if(h=e.role)f=e.properties||{},f.role=h,e.properties=f;
                h=e.sourceColumn;
                vn(h)&&(R(a,h),e.calc=e.calc||lk,za(e,e[B]||a[Nb](h)))
            }
            this.Ec()
        };
        L.dh=function(a,b){
            if(qn(a)){
                pn(b)&&d(r("If the first parameter is an array, no second parameter is expected"));
                for(var c=0;c<a[D];c++)Zq(this.g,a[c]);
                return no(a)
            }
            if(on(a)==cl){
                !on(b)==cl&&d(r("If first parameter is a number, second parameter must be specified and be a number."));
                a>b&&d(r("The first parameter (min) must be smaller than or equal to the second parameter (max)."));
                Zq(this.g,a);
                Zq(this.g,b);
                for(var e=[],c=a;c<=b;c++)e[t](c);
                return e
            }
            d(r("First parameter must be a number or an array."))
        };
        L.setRows=function(a,b){
            this.Ia=this.dh(a,b);
            this.Ja=l;
            this.Ec()
        };
    
        L.getViewColumns=function(){
            return An(this.t)
        };
    
        L.getViewRows=function(){
            if(this.Ja){
                for(var a=[],b=this.g[xc](),c=0;c<b;c++)a[t](c);
                return a
            }
            return no(this.Ia)
        };
    
        L.hideColumns=function(a){
            this[Kd](ho(this.t,function(b){
                return!ko(a,b)
            }));
            this.Ec()
        };
    
        L.hideRows=function(a,b){
            var c=this.dh(a,b);
            this.Ja&&(this.Xj(),this.Ja=l);
            this.setRows(ho(this.Ia,function(a){
                return!ko(c,a)
            }));
            this.Ec()
        };
        L.getViewColumnIndex=function(a){
            for(var b=0;b<this.t[D];b++){
                var c=this.t[b];
                if(c==a||tn(c)&&c.sourceColumn==a)return b
            }
            return-1
        };
    
        L.getViewRowIndex=function(a){
            return this.Ja?0>a||a>=this.g[xc]()?-1:a:fo(this.Ia,a)
        };
    
        L.getTableColumnIndex=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?a:tn(a)&&vn(a.sourceColumn)?a.sourceColumn:-1
        };
        L.getUnderlyingTableColumnIndex=function(a){
            a=this.getTableColumnIndex(a);
            if(-1==a)return a;
            wn(this.g.getUnderlyingTableColumnIndex)&&(a=this.g.getUnderlyingTableColumnIndex(a));
            return a
        };
    
        L.getTableRowIndex=function(a){
            Zq(this,a);
            return this.Ja?a:this.Ia[a]
        };
    
        L.getUnderlyingTableRowIndex=function(a){
            a=this[Sb](a);
            wn(this.g.getUnderlyingTableRowIndex)&&(a=this.g.getUnderlyingTableRowIndex(a));
            return a
        };
    
        L.getNumberOfRows=function(){
            return this.Ja?this.g[xc]():this.Ia[D]
        };
    
        L.getNumberOfColumns=function(){
            return this.t[D]
        };
        L.getColumnId=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?this.g.getColumnId(a):a.id||K
        };
    
        L.getColumnIndex=function(a){
            for(var b=0;b<this.t[D];b++){
                var c=this.t[b];
                if(tn(c)&&c.id==a)return b
            }
            a=this.g.getColumnIndex(a);
            return this.getViewColumnIndex(a)
        };
    
        L.getColumnLabel=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?this.g[Jb](a):a[Gd]||K
        };
    
        L.getColumnPattern=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?this.g[Oc](a):k
        };
    
        L.getColumnRole=function(a){
            a=this[Kc](a,Ml);
            return a=O(a)?a:K
        };
        L.getColumnType=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?this.g[Nb](a):a[B]
        };
    
        L.nj=function(a,b){
            this.Ee&&this.bj();
            var c=this.Fe[b][a];
            if(pn(c))return c;
            var c=k,e=this.t[b],f=e.calc;
            O(f)?(f=Gr[f],c=f(this.g,a,e)):wn(f)&&(c=f[I](k,this.g,a));
            c=Wq(c);
            this.cj(c,e[B]);
            return this.Fe[b][a]=c
        };
    
        L.cj=function(a,b){
            var c=a.v;
            Un(co(b))&&d(r('"type" must be specified'));
            ar(c,b)||d(r(bh+c+Td+b))
        };
        L.Ka=function(a,b){
            R(this,b);
            var c=this.t[b],e=k,f=this[Sb](a);
            tn(c)?(e=this.nj(f,b),e.p=tn(e.p)?e.p:{}):vn(c)?e={
                v:this.g[C](f,c),
                f:k,
                p:k
            }:d(r("Invalid column definition: "+e));
            return e
        };
    
        Ba(L,function(a,b){
            return this.Ka(a,b).v
        });
        L.getFormattedValue=function(a,b){
            var c=this.Ka(a,b);
            if(c.f==k){
                var e=this.t[b];
                if(tn(e))e=this[Nb](b),c.f=c.v!=k?gr(c.v,e):K;
                else if(vn(e)){
                    var f=this[Sb](a);
                    c.f=this.g[Dd](f,e)
                }
            }
            return c.f
        };

        L.getProperty=function(a,b,c){
            a=this[zc](a,b)[c];
            return pn(a)?a:k
        };
        L.getProperties=function(a,b){
            var c=this.Ka(a,b);
            if(!c.p){
                var c=this[Sb](a),e=this.getTableColumnIndex(b);
                return this.g[zc](c,e)
            }
            return c.p
        };
    
        L.getColumnProperty=function(a,b){
            R(this,a);
            var c=this.t[a];
            return vn(c)?this.g[Kc](c,b):this[vb](a)[b]||k
        };
    
        L.getColumnProperties=function(a){
            R(this,a);
            a=this.t[a];
            return vn(a)?this.g[vb](a):a.properties||{}
        };

        L.getTableProperty=function(a){
            return this.g.getTableProperty(a)
        };
    
        L.getTableProperties=function(){
            return this.g[Yb]()
        };
        L.getRowProperty=function(a,b){
            var c=this[Sb](a);
            return this.g.getRowProperty(c,b)
        };
    
        L.getRowProperties=function(a){
            Zq(this,a);
            a=this[Sb](a);
            return this.g[Xb](a)
        };
    
        L.getColumnRange=function(a){
            return cr(this,a)
        };
    
        L.getDistinctValues=function(a){
            return er(this,a)
        };
    
        L.getSortedRows=function(a){
            return dr(this,a)
        };
    
        L.getFilteredRows=function(a){
            return fr(this,a)
        };
        L.toDataTable=function(){
            var a=this.g;
            wn(a[Kb])&&(a=a[Kb]());
            var a=Rn(a[Bc]()),b=this[mb](),c=this[xc](),e,f,h,j=[],p=[];
            for(e=0;e<b;e++)h=this.t[e],tn(h)?(f=op(h),delete f.calc,delete f.sourceColumn):vn(h)?f=a.cols[h]:d(r(sg)),j[t](f);
            for(f=0;f<c;f++){
                var s=a[wd][this.Ja?f:this.Ia[f]],x=[];
                for(e=0;e<b;e++){
                    h=this.t[e];
                    var z;
                    tn(h)?z={
                        v:this[C](f,e)
                    }:vn(h)?z=s.c[this.t[e]]:d(r(sg));
                    x[t](z)
                }
                s.c=x;
                p[t](s)
            }
            a.cols=j;
            a.rows=p;
            return a=new S(a)
        };
        L.toJSON=function(){
            for(var a={},b=[],c=0;c<this.t[D];c++){
                var e=this.t[c];
                (!tn(e)||O(e.calc))&&b[t](e)
            }
            0==b[D]||(a.columns=b);
            this.Ja||(a.rows=no(this.Ia));
            return On(a)
        };
        var Gr={
            emptyString:function(){
                return K
            },
            error:function(a,b,c){
                var e=c.sourceColumn,f=c.magnitude;
                if(!vn(e)||!vn(f))return k;
                a=a[C](b,e);
                return!vn(a)?k:c.errorType==ul?a+a*(f/100):a+f
            },
            stringify:function(a,b,c){
                c=c.sourceColumn;
                return!vn(c)?K:a[Dd](b,c)
            },
            fillFromTop:function(a,b,c){
                c=c.sourceColumn;
                return!vn(c)?k:hr(a,b,c,i)
            },
            fillFromBottom:function(a,b,c){
                c=c.sourceColumn;
                return!vn(c)?k:hr(a,b,c,l)
            },
            identity:function(a,b,c){
                c=c.sourceColumn;
                return!vn(c)?k:a[C](b,c)
            }
        };

        var V={
            vf:"google-visualization-errors"
        };

        V.rg=V.vf+"-";
        V.uh=V.vf+zf;
        V.qf=V.vf+"-all-";
        V.Ge=V.uh+" container is null";
        V.Ki="background-color: #c00000; color: white; padding: 2px;";
        V.Mi="background-color: #fff4c2; color: black; white-space: nowrap; padding: 2px; border: 1px solid black;";
        V.Ni="font: normal 0.8em arial,sans-serif; margin-bottom: 5px;";
        V.Li="font-size: 1.1em; color: #0000cc; font-weight: bold; cursor: pointer; padding-left: 10px; color: black;text-align: right; vertical-align: top;";
        V.qg=0;
        V.addError=function(a,b,c,e){
            V.He(a)||d(r(V.Ge+". message: "+b));
            var c=V.Pi(b,c,e),f=c.errorMessage,b=c.detailedMessage,c=c.options,h=c.showInTooltip!=k?!!c.showInTooltip:i,j=(c[B]==Ym?Ym:Mi)==Mi?V.Ki:V.Mi,j=j+(c[H]?c[H]:K),p=!!c.removable,e=xp(),f=e.d(gm,{
                style:j
            },e[lb](f)),j=V.rg+V.qg++,s=e.d(Ci,{
                id:j,
                style:V.Ni
            },f);
            b&&(h?f.title=b:(h=ga[Ib](gm),qa(h,b),e[Ta](s,e.d(Ci,{
                style:pl
            },h))));
            p&&(b=e.d(gm,{
                style:V.Li
            },e[lb](hn)),b.onclick=En(V.Je,s),e[Ta](f,b));
            V.Oi(a,s);
            c.removeDuplicates&&V.Qi(a,s);
            return j
        };
        V.removeAll=function(a){
            V.He(a)||d(r(V.Ge));
            if(a=V.pf(a,l))Qa(a[H],$k),Lp(a)
        };
        
        V.addErrorFromQueryResponse=function(a,b){
            V.He(a)||d(r(V.Ge));
            b||d(r(V.uh+" response is null"));
            if(!b[Gb]()&&!b.hasWarning())return k;
            var c=b.getReasons(),e=i;
            b[Gb]()&&(e=!(ko(c,Qm)||ko(c,sk)));
            var c=b.getMessage(),f=b.getDetailedMessage(),e={
                showInTooltip:e
            };
    
            za(e,b[Gb]()?Mi:Ym);
            e.removeDuplicates=i;
            return V[Ac](a,c,f,e)
        };
    
        V.removeError=function(a){
            a=ga[fb](a);
            return V.sf(a)?(V.Je(a),i):l
        };
        V.getContainer=function(a){
            a=ga[fb](a);
            return V.sf(a)?a[Fd][Fd]:k
        };
    
        V.createProtectedCallback=function(a,b){
            return function(){
                try{
                    a[xd](k,arguments)
                }catch(c){
                    wn(b)?b(c):google[G][Ed][Ac](b,c[Sc])
                }
            }
        };

        V.Je=function(a){
            var b=a[Fd];
            Np(a);
            0==b[ac][D]&&Qa(b[H],$k)
        };
    
        V.sf=function(a){
            return Jp(a)&&a.id&&0==a.id[gd](V.rg,0)&&(a=a[Fd])&&(a.id&&0==a.id[gd](V.qf,0))&&a[Fd]?i:l
        };
        V.Pi=function(a,b,c){
            var e=a!=k&&a?a:Mi,f=K,h={},j=arguments[D];
            2==j?b&&on(b)==el?h=b:f=b!=k?b:f:3==j&&(f=b!=k?b:f,h=c||{});
            e=Wn(e);
            f=Wn(f);
            return{
                errorMessage:e,
                detailedMessage:f,
                options:h
            }
        };

        V.He=function(a){
            return a!=k&&Jp(a)
        };
    
        V.pf=function(a,b){
            for(var c=a[ac],e=k,f=xp(),h=0;h<c[D];h++)if(c[h].id&&0==c[h].id[gd](V.qf,0)){
                e=c[h];
                f.removeNode(e);
                break
            }!e&&b&&(e=V.qf+V.qg++,e=Gp(Ci,{
                id:e,
                style:Bi
            },k));
            e&&((c=a[Ob])?f.ne(e,c):f[Ta](a,e));
            return e
        };
    
        V.Oi=function(a,b){
            var c=V.pf(a,i);
            Qa(c[H],Hh);
            c[Ta](b)
        };
        V.yk=function(a,b){
            var c=V.pf(a,i);
            go(c&&c[ac],function(a){
                V.sf(a)&&b(a)
            })
        };
    
        V.Qi=function(a,b){
            var c=/id="?google-visualization-errors-[0-9]*"?/,e=Pp(b),e=e[v](c,K),f=[];
            V.yk(a,function(a){
                if(a!=b){
                    var j=Pp(a),j=j[v](c,K);
                    j==e&&f[t](a)
                }
            });
            go(f,V.Je);
            return f[D]
        };

        var Hr={
            aliceblue:"#f0f8ff",
            antiquewhite:"#faebd7",
            aqua:"#00ffff",
            aquamarine:"#7fffd4",
            azure:"#f0ffff",
            beige:"#f5f5dc",
            bisque:"#ffe4c4",
            black:"#000000",
            blanchedalmond:"#ffebcd",
            blue:"#0000ff",
            blueviolet:"#8a2be2",
            brown:"#a52a2a",
            burlywood:"#deb887",
            cadetblue:"#5f9ea0",
            chartreuse:"#7fff00",
            chocolate:"#d2691e",
            coral:"#ff7f50",
            cornflowerblue:"#6495ed",
            cornsilk:"#fff8dc",
            crimson:"#dc143c",
            cyan:"#00ffff",
            darkblue:"#00008b",
            darkcyan:"#008b8b",
            darkgoldenrod:"#b8860b",
            darkgray:"#a9a9a9",
            darkgreen:"#006400",
            darkgrey:"#a9a9a9",
            darkkhaki:"#bdb76b",
            darkmagenta:"#8b008b",
            darkolivegreen:"#556b2f",
            darkorange:"#ff8c00",
            darkorchid:"#9932cc",
            darkred:"#8b0000",
            darksalmon:"#e9967a",
            darkseagreen:"#8fbc8f",
            darkslateblue:"#483d8b",
            darkslategray:"#2f4f4f",
            darkslategrey:"#2f4f4f",
            darkturquoise:"#00ced1",
            darkviolet:"#9400d3",
            deeppink:"#ff1493",
            deepskyblue:"#00bfff",
            dimgray:"#696969",
            dimgrey:"#696969",
            dodgerblue:"#1e90ff",
            firebrick:"#b22222",
            floralwhite:"#fffaf0",
            forestgreen:"#228b22",
            fuchsia:"#ff00ff",
            gainsboro:"#dcdcdc",
            ghostwhite:"#f8f8ff",
            gold:"#ffd700",
            goldenrod:"#daa520",
            gray:"#808080",
            green:"#008000",
            greenyellow:"#adff2f",
            grey:"#808080",
            honeydew:"#f0fff0",
            hotpink:"#ff69b4",
            indianred:"#cd5c5c",
            indigo:"#4b0082",
            ivory:"#fffff0",
            khaki:"#f0e68c",
            lavender:"#e6e6fa",
            lavenderblush:"#fff0f5",
            lawngreen:"#7cfc00",
            lemonchiffon:"#fffacd",
            lightblue:"#add8e6",
            lightcoral:"#f08080",
            lightcyan:"#e0ffff",
            lightgoldenrodyellow:"#fafad2",
            lightgray:"#d3d3d3",
            lightgreen:"#90ee90",
            lightgrey:"#d3d3d3",
            lightpink:"#ffb6c1",
            lightsalmon:"#ffa07a",
            lightseagreen:"#20b2aa",
            lightskyblue:"#87cefa",
            lightslategray:"#778899",
            lightslategrey:"#778899",
            lightsteelblue:"#b0c4de",
            lightyellow:"#ffffe0",
            lime:"#00ff00",
            limegreen:"#32cd32",
            linen:"#faf0e6",
            magenta:"#ff00ff",
            maroon:"#800000",
            mediumaquamarine:"#66cdaa",
            mediumblue:"#0000cd",
            mediumorchid:"#ba55d3",
            mediumpurple:"#9370d8",
            mediumseagreen:"#3cb371",
            mediumslateblue:"#7b68ee",
            mediumspringgreen:"#00fa9a",
            mediumturquoise:"#48d1cc",
            mediumvioletred:"#c71585",
            midnightblue:"#191970",
            mintcream:"#f5fffa",
            mistyrose:"#ffe4e1",
            moccasin:"#ffe4b5",
            navajowhite:"#ffdead",
            navy:"#000080",
            oldlace:"#fdf5e6",
            olive:"#808000",
            olivedrab:"#6b8e23",
            orange:"#ffa500",
            orangered:"#ff4500",
            orchid:"#da70d6",
            palegoldenrod:"#eee8aa",
            palegreen:"#98fb98",
            paleturquoise:"#afeeee",
            palevioletred:"#d87093",
            papayawhip:"#ffefd5",
            peachpuff:"#ffdab9",
            peru:"#cd853f",
            pink:"#ffc0cb",
            plum:"#dda0dd",
            powderblue:"#b0e0e6",
            purple:"#800080",
            red:"#ff0000",
            rosybrown:"#bc8f8f",
            royalblue:"#4169e1",
            saddlebrown:"#8b4513",
            salmon:"#fa8072",
            sandybrown:"#f4a460",
            seagreen:"#2e8b57",
            seashell:"#fff5ee",
            sienna:"#a0522d",
            silver:"#c0c0c0",
            skyblue:"#87ceeb",
            slateblue:"#6a5acd",
            slategray:"#708090",
            slategrey:"#708090",
            snow:"#fffafa",
            springgreen:"#00ff7f",
            steelblue:"#4682b4",
            tan:"#d2b48c",
            teal:"#008080",
            thistle:"#d8bfd8",
            tomato:"#ff6347",
            turquoise:"#40e0d0",
            violet:"#ee82ee",
            wheat:"#f5deb3",
            white:"#ffffff",
            whitesmoke:"#f5f5f5",
            yellow:"#ffff00",
            yellowgreen:"#9acd32"
        };

        function Ir(a){
            var b={},a=ma(a),c=a[jb](0)==be?a:be+a;
            if(Jr[Ya](c))return a=c,Jr[Ya](a)||d(r("'"+a+"' is not a valid hex color")),4==a[D]&&(a=a[v](Kr,ce)),b.yf=a[Md](),za(b,Xj),b;
                a:{
                    var e=a[Ab](Lr);
                    if(e){
                        var c=ja(e[1]),f=ja(e[2]),e=ja(e[3]);
                        if(0<=c&&255>=c&&0<=f&&255>=f&&0<=e&&255>=e){
                            c=[c,f,e];
                            break a
                        }
                    }
                    c=[]
                }
            if(c[D])return f=c[0],a=c[1],c=c[2],f=ja(f),a=ja(a),c=ja(c),(ha(f)||0>f||255<f||ha(a)||0>a||255<a||ha(c)||0>c||255<c)&&d(r('"('+f+ve+a+ve+c+'") is not a valid RGB color')),f=Mr(f[sc](16)),a=Mr(a[sc](16)),
                c=Mr(c[sc](16)),b.yf=be+f+a+c,za(b,Kl),b;
            if(Hr&&(c=Hr[a[Md]()]))return b.yf=c,za(b,Wk),b;
            d(r(a+" is not a valid color string"))
        }
        var Kr=/#(.)(.)(.)/,Jr=/^#(?:[0-9a-f]{3}){1,2}$/i,Lr=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        function Mr(a){
            return 1==a[D]?mf+a:a
        };
    
        function Nr(a){
            return a==$k||a==K||a==Jm?$k:Ir(a).yf
        };
    
        function Or(a,b,c,e){
            this.top=a;
            Sa(this,b);
            Pa(this,c);
            sa(this,e)
        }
        Na(Or[F],function(){
            return new Or(this.top,this[Nd],this[rd],this[A])
        });
        Or[F].contains=function(a){
            return!this||!a?l:a instanceof Or?a[A]>=this[A]&&a[Nd]<=this[Nd]&&a.top>=this.top&&a[rd]<=this[rd]:a.x>=this[A]&&a.x<=this[Nd]&&a.y>=this.top&&a.y<=this[rd]
        };
    
        function Pr(a){
            a=a||{};
    
            this.wg=$k;
            a.fill!=k&&this.fj(a.fill);
            this.vg=1;
            a.Ne!=k&&this.gj(a.Ne);
            this.ug=$k;
            a.stroke!=k&&this.ij(a.stroke);
            this.Cg=1;
            a.Bg!=k&&this.Ig(a.Bg);
            this.Ag=1;
            a.Oe!=k&&this.kj(a.Oe);
            this.zg=dm;
            a.yg!=k&&this.jj(a.yg);
            this.ya=k;
            a.ya&&(this.ya=op(a.ya),this.ya.dj=Nr(this.ya.dj),this.ya.ej=Nr(this.ya.ej));
            this.xg=k;
            a.pattern&&this.hj(a.pattern)
        }
        L=Pr[F];
        L.getProperties=function(){
            return{
                fill:this.wg,
                Ne:this.vg,
                stroke:this.ug,
                Bg:this.Cg,
                Oe:this.Ag,
                yg:this.zg,
                ya:this.ya?op(this.ya):k,
                pattern:this.xg
            }
        };

        Na(L,function(){
            return new Pr(this[zc]())
        });
        L.fj=function(a){
            this.wg=Nr(a)
        };
    
        L.gj=function(a){
            this.vg=q.min(q.max(a,0),1)
        };
    
        L.ij=function(a,b){
            this.ug=Nr(a);
            b!=k&&this.Ig(b)
        };
    
        L.Ig=function(a){
            this.Cg=a
        };
    
        L.kj=function(a){
            this.Ag=q.min(q.max(a,0),1)
        };
    
        L.jj=function(a){
            this.zg=a
        };
    
        L.hj=function(a){
            this.xg=a
        };
    
        new Pr({
            Ne:0,
            fill:"white",
            Oe:0,
            stroke:"white"
        });
        function Qr(a){
            if(sn(a)){
                var b=new Date;
                b.setTime(a.valueOf());
                return b
            }
            var c=on(a);
            if(c==el||c==Ch){
                if(a[Yc])return a[Yc]();
                c=c==Ch?[]:{};
        
                for(b in a)c[b]=Qr(a[b]);return c
            }
            return a
        };
    
        function Rr(a,b,c,e){
            sa(this,a);
            this.top=b;
            pa(this,c);
            Ra(this,e)
        }
        Na(Rr[F],function(){
            return new Rr(this[A],this.top,this[u],this[J])
        });
        Rr[F].pj=function(a){
            var b=q.max(this[A],a[A]),c=q.min(this[A]+this[u],a[A]+a[u]);
            if(b<=c){
                var e=q.max(this.top,a.top),a=q.min(this.top+this[J],a.top+a[J]);
                if(e<=a)return sa(this,b),this.top=e,pa(this,c-b),Ra(this,a-e),i
            }
            return l
        };
        Rr[F].contains=function(a){
            return a instanceof Rr?this[A]<=a[A]&&this[A]+this[u]>=a[A]+a[u]&&this.top<=a.top&&this.top+this[J]>=a.top+a[J]:a.x>=this[A]&&a.x<=this[A]+this[u]&&a.y>=this.top&&a.y<=this.top+this[J]
        };
    
        function Sr(a,b){
            var c=zp(a);
            return c[bc]&&c[bc].getComputedStyle&&(c=c[bc].getComputedStyle(a,k))?c[b]||c.getPropertyValue(b)||K:K
        }
        function Tr(a,b){
            return Sr(a,b)||(a[sd]?a[sd][b]:k)||a[H]&&a[H][b]
        }
        function Ur(a){
            return Tr(a,wl)
        }
        function Vr(a,b,c){
            var e,f=Go&&(Ao||Ko)&&Uo(tf);
            b instanceof to?(e=b.x,b=b.y):(e=b,b=c);
            sa(a[H],Wr(e,f));
            a[H].top=Wr(b,f)
        }
        function Xr(a){
            var b=a[Va]();
            Q&&(a=a.ownerDocument,sa(b,b[A]-(a[oc][Rb]+a[Wc][Rb])),b.top-=a[oc][Ub]+a[Wc][Ub]);
            return b
        }
        function Yr(a){
            if(Q&&!Wo(8))return a[Lc];
            for(var b=zp(a),c=Tr(a,wl),e=c==Qi||c==sh,a=a[Fd];a&&a!=b;a=a[Fd])if(c=Tr(a,wl),e=e&&c==km&&a!=b[oc]&&a!=b[Wc],!e&&(a[fd]>a[Dc]||a[Lb]>a[md]||c==Qi||c==sh||c==Hl))return a;return k
        }
        function Zr(a){
            for(var b=new Or(0,fa,fa,0),c=xp(a),e=c.l[Wc],f=c.l[oc],h=c.Sj();a=Yr(a);)if((!Q||0!=a[Dc])&&(!Ho||0!=a[md]||a!=e)&&a!=e&&a!=f&&Tr(a,nl)!=Wm){
                var j=$r(a),p;
                p=a;
                if(Go&&!Uo(tf)){
                    var s=la(Sr(p,Qh));
                    if(as(p))var x=p.offsetWidth-p[Dc]-s-la(Sr(p,Sh)),s=s+x;
                    p=new to(s,la(Sr(p,Uh)))
                }else p=new to(p[Rb],p[Ub]);
                j.x+=p.x;
                j.y+=p.y;
                b.top=q.max(b.top,j.y);
                Sa(b,q.min(b[Nd],j.x+a[Dc]));
                Pa(b,q.min(b[rd],j.y+a[md]));
                sa(b,q.max(b[A],j.x))
            }
            e=h[nd];
            h=h[qc];
            sa(b,q.max(b[A],e));
            b.top=q.max(b.top,h);
            c=c.Uj();
            Sa(b,q.min(b[Nd],e+c[u]));
            Pa(b,q.min(b[rd],h+c[J]));
            return 0<=b.top&&0<=b[A]&&b[rd]>b.top&&b[Nd]>b[A]?b:k
        }
        function $r(a){
            var b,c=zp(a),e=Tr(a,wl),f=Go&&c[Bb]&&!a[Va]&&e==sh&&(b=c[Bb](a))&&(0>b[yb]||0>b[zb]),h=new to(0,0),j;
            b=c?zp(c):ga;
            j=Q&&!Wo(9)&&!xp(b).Te()?b[Wc]:b[oc];
            if(a==j)return h;
            if(a[Va])b=Xr(a),a=xp(c).Tb(),h.x=b[A]+a.x,h.y=b.top+a.y;
            else if(c[Bb]&&!f)b=c[Bb](a),a=c[Bb](j),h.x=b[yb]-a[yb],h.y=b[zb]-a[zb];
            else{
                b=a;
                do{
                    h.x+=b[Rc];
                    h.y+=b[Hd];
                    b!=a&&(h.x+=b[Rb]||0,h.y+=b[Ub]||0);
                    if(Ho&&Ur(b)==Qi){
                        h.x+=c[Wc][nd];
                        h.y+=c[Wc][qc];
                        break
                    }
                    b=b[Lc]
                }while(b&&b!=a);
                if(Fo||Ho&&e==sh)h.y-=c[Wc][Hd];
                for(b=a;(b=
                    Yr(b))&&b!=c[Wc]&&b!=j;)if(h.x-=b[nd],!Fo||b[zd]!=Xg)h.y-=b[qc]
            }
            return h
        }
        function bs(a,b,c){
            b instanceof vo?(c=b[J],b=b[u]):c==g&&d(r("missing height argument"));
            pa(a[H],Wr(b,i));
            Ra(a[H],Wr(c,i))
        }
        function Wr(a,b){
            typeof a==cl&&(a=(b?q.round(a):a)+Bl);
            return a
        }
        function cs(a){
            if(Tr(a,Ai)!=$k)return ds(a);
            var b=a[H],c=b.display,e=b.visibility,f=b.position;
            Ea(b,Yj);
            b.position=sh;
            Qa(b,pk);
            a=ds(a);
            Qa(b,c);
            b.position=f;
            Ea(b,e);
            return a
        }
        function ds(a){
            var b=a.offsetWidth,c=a.offsetHeight,e=Ho&&!b&&!c;
            return(!pn(b)||e)&&a[Va]?(a=Xr(a),new vo(a[Nd]-a[A],a[rd]-a.top)):new vo(b,c)
        }
        function es(a){
            var b=$r(a),a=cs(a);
            return new Rr(b.x,b.y,a[u],a[J])
        }
        function fs(a,b){
            var c=a[H];
            gl in c?c.opacity=b:Dg in c?c.MozOpacity=b:Pi in c&&(c.filter=b===K?K:zh+100*b+te)
        }
        function gs(a,b){
            Qa(a[H],b?K:$k)
        }
        function as(a){
            return Nl==Tr(a,xi)
        }
        var hs=Go?"MozUserSelect":Ho?"WebkitUserSelect":k;
        function is(a,b,c){
            c=!c?a[lc](ue):k;
            if(hs){
                if(b=b?$k:K,a[H][hs]=b,c)for(var a=0,e;e=c[a];a++)e[H][hs]=b
            }else if(Q||Fo)if(b=b?fl:K,a[Tb](Pm,b),c)for(a=0;e=c[a];a++)e[Tb](Pm,b)
        }
        function js(a,b,c,e){
            if(/^\d+px?$/[Ya](b))return ka(b,10);
            var f=a[H][c],h=a.runtimeStyle[c];
            a.runtimeStyle[c]=a[sd][c];
            a[H][c]=b;
            b=a[H][e];
            a[H][c]=f;
            a.runtimeStyle[c]=h;
            return b
        }
        function ks(a,b){
            return js(a,a[sd]?a[sd][b]:k,Ck,vl)
        }
        var ls={
            thin:2,
            medium:4,
            thick:6
        };
        function ms(a,b){
            if((a[sd]?a[sd][b+Vg]:k)==$k)return 0;
            var c=a[sd]?a[sd][b+eh]:k;
            return c in ls?ls[c]:js(a,c,Ck,vl)
        }
        function ns(a){
            if(Q){
                var b=ms(a,Ph),c=ms(a,Rh),e=ms(a,Th),a=ms(a,Nh);
                return new Or(e,c,a,b)
            }
            b=Sr(a,Qh);
            c=Sr(a,Sh);
            e=Sr(a,Uh);
            a=Sr(a,Oh);
            return new Or(la(e),la(c),la(a),la(b))
        }
        var os=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
        function ps(){
            var a=ln(Rj);
            a!=k||(a=gk);
            var b=ln(Tj);
            b!=k||(b=sf);
            return a+jf+b
        }
        function qs(a){
            var b=ln(a);
            wn(b)||(b=ln(Sj+a),wn(b)||(b=k));
            return b
        };
    
        var rs={
            AnnotatedTimeLine:"annotatedtimeline",
            AreaChart:mi,
            BarChart:mi,
            BubbleChart:mi,
            CandlestickChart:mi,
            ColumnChart:mi,
            ComboChart:mi,
            Gauge:"gauge",
            GeoChart:"geochart",
            GeoMap:"geomap",
            ImageAreaChart:"imageareachart",
            ImageBarChart:"imagebarchart",
            ImageCandlestickChart:"imagechart",
            ImageChart:"imagechart",
            ImageLineChart:"imagelinechart",
            ImagePieChart:"imagepiechart",
            ImageSparkLine:"imagesparkline",
            IntensityMap:"intensitymap",
            LineChart:mi,
            Map:"map",
            MotionChart:"motionchart",
            OrgChart:"orgchart",
            PieChart:mi,
            RangeSelector:mi,
            ScatterChart:mi,
            SparklineChart:mi,
            SteppedAreaChart:mi,
            Table:"table",
            Timeline:"timeline",
            TreeMap:"treemap",
            StringFilter:li,
            NumberRangeFilter:li,
            CategoryFilter:li,
            ChartRangeFilter:li,
            Dashboard:li
        };

        function ss(a,b){
            var c=a.useFormatFromData;
            if((!un(c)||c)&&Un(co(a.format))){
                for(var c=b=ho(b,function(a){
                    return!Un(co(a))
                }),e={},f=0,h=0;h<c[D];){
                    var j=c[h++],p=tn(j)?dl+xn(j):(typeof j)[jb](0)+j;
                    da[F][Tc][I](e,p)||(e[p]=i,c[f++]=j)
                }
                Ha(c,f);
                1==b[D]&&(c=b[0],Un(co(c))||(c=c[v](/\d/g,mf),c=c[v](/#{10,}/,ia(11)[Jd](be))),a.format=c)
            }
        };

        function ts(a,b){
            var c=a[C](b,0),e=a[C](b,1);
            return c==k||e==k?k:new to(c,e)
        };
    
        function us(a){
            var b=a.ea,c=a[ob](),a=a[gb](),e;
                a:if(e=a.useFormatFromData,un(e)&&!e)e=l;
                else{
                    e=[Rm,um,sm,tm,Di];
                    for(var f=0;f<e[D];f++)if(ln(e[f]+cf,a)){
                        e=l;
                        break a
                    }
                    e=i
                }
            if(e)if(b==Tf)3>c[mb]()||(b=c[Oc](1),e=a.hAxis||{},ss(e,[b]),a.hAxis=e,c=c[Oc](2),b=a.vAxes||{},e=b[0]||{},ss(e,[c]),b[0]=e,a.vAxes=b);
                else{
                    e=a.vAxes||[{},{}];
                    for(var f=a.hAxis||{},h=e[0]||{},j=e[1]||{},p=[],s=[],x=c&&c[mb]()||0,z=0;z<x;z++)if(c[Nb](z)==cl){
                        var E=c[Oc](z),ea;
                        ea=z;
                        0==ea?ea=k:(ea--,ea=((a.series||{})[ea]||{}).targetAxisIndex||
                            0);
                        switch(ea){
                            case 0:
                                p[t](E);
                                break;
                            case 1:
                                s[t](E)
                        }
                    }
                    b==Sf?ss(f,p):(ss(h,p),ss(j,s));
                    0<x&&c[Nb](0)!=lm&&(b=b==Sf?h:f,E=c[Oc](0),ss(b,[E]));
                    e[0]=h;
                    e[1]=j;
                    a.vAxes=e;
                    a.hAxis=f
                }
        }
        function vs(a){
            if(a[bd](wh)){
                var b=a[ob]();
                if(a.ea==Rg&&2==b[mb]()){
                    var c;
                    c=b[xc]();
                    for(var e=new to,f=0;f<c;f++){
                        var h=ts(b,f);
                        h!=k&&(e.x+=h.x,e.y+=h.y)
                    }
                    c=new to(e.x/c,e.y/c);
                    for(h=f=e=0;h<b[xc]();h++){
                        var j=ts(b,h);
                        j!=k&&(j=new to(j.x-c.x,j.y-c.y),e+=j.x*j.y,f+=j.x*j.x)
                    }
                    var p,s;
                    p=e/f||1;
                    s=c.y-p*c.x;
                    c=new google[G][jd](b);
                    c[Kd]([0,1,{
                        type:cl,
                        calc:function(a,c){
                            var e=ts(b,c);
                            return e!=k?p*e.x+s:k
                        }
                    }]);
                    a[dd](c);
                    a[Od](Tl,2);
                    a[Od](Ul,0);
                    a[Od](Vl,l)
                }
                a[Od](wh,k)
            }
        }
        function ws(a){
            var b=a[ob](),c=a[wc]();
            if(qn(c))for(var e=0;e<c[D];e++)b=google[G][jd].fromJSON(b,c[e]);else c!=k&&(b=google[G][jd].fromJSON(b,c));
            a[Uc](k);
            a[dd](b)
        }
        function xs(a){
            var b=a.ea;
            if((rs[b]||k)==mi&&b!=Rg){
                var b=a[ob](),c=a[bd](Uj);
                if(c!=k){
                    for(var e=[{
                        calc:c?mm:Ii,
                        sourceColumn:0,
                        type:lm
                    }],f=c?1:0,c=b[mb]();f<c;f++)e[t](f);
                    b=new google[G][jd](b);
                    b[Kd](e);
                    a[Od](Uj,k);
                    a[dd](b)
                }
            }
        };

        function ys(a,b){
            var c=b||{};
    
            O(c)&&(c=Rn(c));
            this.fg=c.containerId||k;
            this.dd=a;
            this.ea=c[a+ah]||k;
            this.hg=c[a+Gg]||k;
            Ma(this,k);
            this.od=k;
            this.gg=c.dataSourceUrl||k;
            this.g=k;
            this[dd](c.dataTable);
            this.Za=c.options||{};
    
            this.Fa=c.state||{};
    
            var e=c.packages;
            this.ig=pn(e)?e:k;
            this.Ea=c.query||k;
            this.ub=c.refreshInterval||k;
            this.Eb=c.view||k;
            this.$f=[ws,xs,us,vs]
        }
        L=ys[F];
        L.Yg=k;
        L.Qd=k;
        L.tc=k;
        Na(L,function(){
            return new this[Mc](this[Bc]())
        });
        L.draw=function(a){
            a=Ap(a||K);
            Jp(a)||(a=Ap(this[qd]()),Jp(a)||d(r("The container is null or not defined.")));
            this.tc=a;
            try{
                if(this.ea==k&&d(r("The "+this.dd+" type is not defined.")),qs(this.ea))this.bh(a);
                else{
                    var b=Dn(this.bh,this,a),b=google[G][Ed].createProtectedCallback(b,Dn(this.af,this,a));
                    this.Rj(b)
                }
            }catch(c){
                this.af(a,c)
            }
        };

        L.toJSON=function(){
            return this.Ch(this[ob]())
        };
        L.Ch=function(a){
            var b=this[pd](),c=g;
            a===k||(c=wn(a[Kb])?Rn(a[Kb]()[Bc]()):Rn(a[Bc]()));
            a={
                containerId:this[qd]()||g,
                dataSourceUrl:this[Zc]()||g,
                dataTable:c,
                options:this[gb]()||g,
                state:this[ld]()||g,
                packages:b===k?g:b,
                refreshInterval:this[kd]()||g,
                query:this[vd]()||g,
                view:this[wc]()||g
            };
        
            a[this.dd+ah]=this.ea||g;
            a[this.dd+Gg]=this[Eb]()||g;
            this.kh(a);
            return On(a)
        };
    
        L.kh=function(){};

        L.getDataSourceUrl=function(){
            return this.gg
        };
    
        L.getDataTable=function(){
            return this.g
        };
    
        L.Jh=function(){
            return this.ea
        };
        L.getName=function(){
            return this.hg
        };
    
        L.xf=function(){
            return this[G]
        };
    
        L.getContainerId=function(){
            return this.fg
        };
    
        L.getQuery=function(){
            return this.Ea
        };
    
        L.getRefreshInterval=function(){
            return this.ub
        };
    
        L.getOption=function(a,b){
            return zs(this.Za,a,b)
        };
    
        function zs(a,b,c){
            a=-1==b[w]($e)?a[b]:ln(b,a);
            c=pn(c)?c:k;
            return a!=k?a:c
        }
        L.getOptions=function(){
            return this.Za
        };
    
        L.getState=function(){
            return this.Fa
        };
    
        L.setDataSourceUrl=function(a){
            this.gg=a
        };
        L.setDataTable=function(a){
            this.g=a==k?k:wn(a[Yb])?a:qn(a)?google[G].arrayToDataTable(a):new google[G].DataTable(a)
        };
    
        L.nf=function(a){
            this.ea=a
        };
    
        L.zf=function(a){
            this.hg=a
        };
    
        L.setContainerId=function(a){
            this.fg=a
        };
    
        L.setQuery=function(a){
            this.Ea=a
        };
    
        L.setRefreshInterval=function(a){
            this.ub=a
        };
        L.setOption=function(a,b){
            var c=this.Za,e=a;
            if(b==k){
                if(zs(c,e)!==k){
                    var f=e[Jc]($e);
                    1<f[D]&&(e=f.pop(),c=zs(c,f[Jd]($e)));
                    delete c[e]
                }
            }else{
                e=e[Jc]($e);
                c=c||M;
                !(e[0]in c)&&c[Ld]&&c[Ld](Tm+e[0]);
                for(;e[D]&&(f=e.shift());)!e[D]&&pn(b)?c[f]=b:c=c[f]?c[f]:c[f]={}
            }
        };

        L.setOptions=function(a){
            this.Za=a||{}
        };

        Fa(L,function(a){
            this.Fa=a||{}
        });
        L.setPackages=function(a){
            this.ig=a
        };
    
        L.setView=function(a){
            this.Eb=a
        };
    
        L.Yk=function(a){
            a!=this[G]&&(this.od=a)
        };
        L.getSnapshot=function(){
            return new this[Mc](this.Ch(this.Yg||this[ob]()))
        };
    
        L.getView=function(){
            return this.Eb
        };
    
        L.getPackages=function(){
            return this.ig
        };
    
        L.af=function(a,b){
            var c=b&&b[Sc]||Mi,e=google[G][Ed][Ac](a,c);
            google[G][db].trigger(this,Mi,{
                id:e,
                message:c
            })
        };
    
        L.xk=function(a,b){
            var c=b.getMessage(),e=b.getDetailedMessage(),f=google[G][Ed].addErrorFromQueryResponse(a,b);
            google[G][db].trigger(this,Mi,{
                id:f,
                message:c,
                detailedMessage:e
            })
        };
        L.Kk=function(){
            var a=this[pd]();
            if(a==k){
                var b=this.ea,b=b[v](Sj,K),a=rs[b]||k;
                a==k&&d(r("Invalid visualization type: "+b))
            }
            O(a)&&(a=[a]);
            return a
        };
        L.td=function(a,b){
            var c=qs(this.ea);
            c||d(r("Invalid "+this.dd+" type: "+this.ea));
            this.od&&(this.$g(),Ma(this,this.od),this.od=k);
            !this[G]||this[G][Mc]!=c||!this.Jj(a,this[G])?(this.$g(),c=new c(a)):c=this[G];
            this.Ij(c);
            this.Yg=b;
            for(var e=Qr(this[gb]()),e=new W({
                chartType:this.ea,
                dataTable:b,
                options:e,
                view:this[wc]()
            }),f=0;f<this.$f[D];f++)this.$f[f](e);
            c[hd](e[ob](),e[gb](),this[ld]())
        };
    
        L.pushView=function(a){
            qn(this.Eb)?this.Eb[t](a):this.Eb=this.Eb===k?[a]:[this.Eb,a]
        };
        L.lk=function(a,b){
            if(b[Gb]())this.xk(a,b);
            else{
                var c=b[ob]();
                this.td(a,c)
            }
        };

        L.Ij=function(a){
            var b=this;
            this.wk();
            var c=[];
            go([Dl,Ql,Mi,jm],function(e){
                var f=google[G][db].addListener(a,e,function(c){
                    e==Dl&&Ma(b,a);
                    (e==Dl||e==jm)&&wn(a[ld])&&b[pc](a[ld][I](a));
                    google[G][db].trigger(b,e,c)
                });
                c[t](f)
            });
            this.Qd=c
        };
    
        L.Rj=function(a){
            var a={
                packages:this.Kk(),
                callback:a
            },b=ln(Tj);
            b===k&&(b=sf);
            google.load(Xm,b,a)
        };
        L.bh=function(a){
            var b=this[ob]();
            b?this.td(a,b):(b=Dn(this.lk,this,a),b=google[G][Ed].createProtectedCallback(b,Dn(this.af,this,a)),this.sendQuery(b,i))
        };
    
        L.sendQuery=function(a,b){
            var c=un(b)?b:l,e=this[Zc]()||K,e=new google[G].Query(e),f=this[kd]();
            f&&c&&e[Zb](f);
            (c=this[vd]())&&e[Vc](c);
            e[Cb](a)
        };
    
        L.$g=function(){
            this[G]&&wn(this[G].clearChart)&&this[G].clearChart();
            Ma(this,k)
        };
    
        L.wk=function(){
            qn(this.Qd)&&(go(this.Qd,function(a){
                google[G][db].removeListener(a)
            }),this.Qd=k)
        };
        L.Jj=function(a,b){
            return b&&wn(b[Cd])?b[Cd]()==a:l
        };
    
        function W(a){
            ys[I](this,ai,a)
        }
        P(W,ys);
        L=W[F];
        L.getChart=ys[F].xf;
        L.setChart=ys[F].Yk;
        L.setChartType=ys[F].nf;
        L.getChartType=ys[F].Jh;
        L.setChartName=ys[F].zf;
        L.getChartName=ys[F][Eb];
        function X(a){
            ys[I](this,ki,a)
        }
        P(X,ys);
        L=X[F];
        L.getControl=ys[F].xf;
        L.setControlType=ys[F].nf;
        L.getControlType=ys[F].Jh;
        L.setControlName=ys[F].zf;
        L.getControlName=ys[F][Eb];
        function Y(a){
            ys[I](this,oi,a);
            a=a||{};
    
            O(a)&&(a=Rn(a));
            this.xa=a.wrappers||k;
            this.ec=a.bindings||k;
            this.nf(a.dashboardType||bg);
            this.lf()
        }
        P(Y,ys);
        L=Y[F];
        L.td=function(a,b){
            function c(a){
                return h[a]
            }
            dq(this[G]);
            for(var e=new google[G].Dashboard(a),f=this.ec||[],h=this.xa,j=f[D],p=0;p<j;p++){
                var s=io(f[p].controls,c),x=io(f[p].participants,c);
                e[dc](s,x)
            }
            Ma(this,e);
            Y.b.td[I](this,a,b)
        };
    
        L.kh=function(a){
            a.wrappers=this.xa?io(this.xa,function(a){
                return a[Bc]()
            }):g;
            a.bindings=this.ec||g
        };
        L.setWrappers=function(a){
            this.xa=a||k;
            this.lf()
        };
    
        L.getWrappers=function(){
            return this.xa
        };
    
        L.setBindings=function(a){
            this.ec=a||k;
            this.lf()
        };
    
        L.getBindings=function(){
            return this.ec
        };
    
        L.getDashboard=ys[F].xf;
        L.setDashboardName=ys[F].zf;
        L.getDashboardName=ys[F][Eb];
        L.lf=function(){
            var a=this.xa,b=this.ec;
            if(!(qn(a)?0==a[D]:1)||!(qn(b)?0==b[D]:1))this.xa=io(a,this.$j,this),this.ec=io(b,this.Zj,this)
        };
        
        L.$j=function(a){
            this.mh(a)||(a=google[G].createWrapper(a));
            a[dd](k);
            a[Gc](k);
            return a
        };
        L.Zj=function(a){
            var b=a.controls,c=a.participants;
            ((qn(b)?0==b[D]:1)||(qn(c)?0==c[D]:1))&&d(r("invalid binding: "+a));
            b=io(b,this.Hh,this);
            c=io(c,this.Hh,this);
            return{
                controls:b,
                participants:c
            }
        };

        L.Hh=function(a){
            !/[^0-9]/[Ya](a)&&(a=ka(a,10));
            if(vn(a))return a;
            var b=a;
            if(this.dk(a))return this.mh(b)||(b=google[G].createWrapper(b)),this.xa[t](b),this.xa[D]-1;
            a=this.ck();
            a=!Un(co(b))?fo(a,b):-1;
            -1==a&&d(r("Invalid wrapper name: "+b));
            return a
        };
    
        L.mh=function(a){
            return wn(a[Bc])
        };
        L.dk=function(a){
            var b=/${.*}^/;
            return tn(a)||O(a)&&b[Ya](a)
        };
    
        L.ck=function(){
            return io(this.xa,function(a){
                return a[Eb]()
            })
        };
    
        function As(a,b){
            Bs(a)[hd](b)
        }
        function Bs(a){
            a=a||{};
    
            O(a)&&(a=Rn(a));
            return a.controlType?new google[G].ControlWrapper(a):a.dashboardType?new google[G].DashboardWrapper(a):new google[G].ChartWrapper(a)
        };
    
        function Cs(a){
            for(var b=0,c=0;c<a[D];c++)b+=a[c];
            return b
        };
    
        function Ds(a,b,c,e,f){
            this.S=!!b;
            a&&this.hc(a,e);
            ya(this,f!=g?f:this.oa||0);
            this.S&&ya(this,-1*this[$b]);
            this.Bd=!c
        }
        P(Ds,Xp);
        L=Ds[F];
        L.ma=k;
        L.oa=0;
        L.Ie=l;
        L.hc=function(a,b,c){
            if(this.ma=a)this.oa=vn(b)?b:1!=this.ma[cb]?0:this.S?-1:1;
            vn(c)&&ya(this,c)
        };
    
        L.pe=function(a){
            this.ma=a.ma;
            this.oa=a.oa;
            ya(this,a[$b]);
            this.S=a.S;
            this.Bd=a.Bd
        };
    
        Na(L,function(){
            return new Ds(this.ma,this.S,!this.Bd,this.oa,this[$b])
        });
        L.Yj=function(){
            var a=this.S?1:-1;
            this.oa==a&&(this.oa=-1*a,ya(this,this[$b]+this.oa*(this.S?-1:1)))
        };
    
        La(L,function(){
            var a;
            if(this.Ie){
                (!this.ma||this.Bd&&0==this[$b])&&d(Wp);
                a=this.ma;
                var b=this.S?-1:1;
                if(this.oa==b){
                    var c=this.S?a[ad]:a[Ob];
                    c?this.hc(c):this.hc(a,-1*b)
                }else(c=this.S?a.previousSibling:a[hc])?this.hc(c):this.hc(a[Fd],-1*b);
                ya(this,this[$b]+this.oa*(this.S?-1:1))
            }else this.Ie=i;
            (a=this.ma)||d(Wp);
            return a
        });
        L.uj=function(){
            return 1==this.oa
        };
        L.splice=function(a){
            var b=this.ma;
            this.Yj();
            this.S=!this.S;
            Ds[F].next[I](this);
            this.S=!this.S;
            for(var c=rn(arguments[0])?arguments[0]:arguments,e=c[D]-1;0<=e;e--)b[Fd]&&b[Fd][qb](c[e],b[hc]);
            Np(b)
        };
    
        function Es(a,b){
            Ds[I](this,a,b,i)
        }
        P(Es,Ds);
        function Fs(a,b,c,e,f){
            var h;
            if(a&&(this.H=a,this.L=b,this.A=c,this.K=e,1==a[cb]&&a[zd]!=Qf&&(a=a[ac],(b=a[b])?(this.H=b,this.L=0):(a[D]&&(this.H=a[a[D]-1]),h=i)),1==c[cb]))(this.A=c[ac][e])?this.K=0:this.A=c;
            Ds[I](this,f?this.A:this.H,f,i);
            if(h)try{
                this.next()
            }catch(j){
                j!=Wp&&d(j)
            }
        }
        P(Fs,Es);
        L=Fs[F];
        L.H=k;
        L.A=k;
        L.L=0;
        L.K=0;
        L.ka=function(){
            return this.H
        };
    
        L.Ga=function(){
            return this.A
        };
    
        L.lj=function(){
            return this.Ie&&this.ma==this.A&&(!this.K||!this.uj())
        };
    
        La(L,function(){
            this.lj()&&d(Wp);
            return Fs.b.next[I](this)
        });
        L.pe=function(a){
            this.H=a.H;
            this.A=a.A;
            this.L=a.L;
            this.K=a.K;
            this.Rf=a.Rf;
            Fs.b.pe[I](this,a)
        };
    
        Na(L,function(){
            var a=new Fs(this.H,this.L,this.A,this.K,this.Rf);
            a.pe(this);
            return a
        });
        function Gs(){}
        Gs[F].tg=function(a,b){
            var c=b&&!a[Ua](),e=a.m;
            try{
                return c?0<=this.da(e,0,1)&&0>=this.da(e,1,0):0<=this.da(e,0,0)&&0>=this.da(e,1,1)
            }catch(f){
                return Q||d(f),l
            }
        };

        Gs[F].Gh=function(){
            return new Fs(this.ka(),this.Va(),this.Ga(),this.xb())
        };
    
        function Hs(a){
            this.m=a
        }
        P(Hs,Gs);
        function Is(a){
            var b=zp(a).createRange();
            if(3==a[cb])b[vc](a,0),b[tb](a,a[D]);
            else if(Js(a)){
                for(var c,e=a;(c=e[Ob])&&Js(c);)e=c;
                b[vc](e,0);
                for(e=a;(c=e[ad])&&Js(c);)e=c;
                b[tb](e,1==e[cb]?e[ac][D]:e[D])
            }else c=a[Fd],a=fo(c[ac],a),b[vc](c,a),b[tb](c,a+1);
            return b
        }
        function Ks(a,b,c,e){
            var f=zp(a).createRange();
            f[vc](a,b);
            f[tb](c,e);
            return f
        }
        L=Hs[F];
        Na(L,function(){
            return new this[Mc](this.m.cloneRange())
        });
        L.getContainer=function(){
            return this.m.commonAncestorContainer
        };
        L.ka=function(){
            return this.m.startContainer
        };
    
        L.Va=function(){
            return this.m.startOffset
        };
    
        L.Ga=function(){
            return this.m.endContainer
        };
    
        L.xb=function(){
            return this.m.endOffset
        };
    
        L.da=function(a,b,c){
            return this.m.compareBoundaryPoints(1==c?1==b?M.Range.START_TO_START:M.Range.START_TO_END:1==b?M.Range.END_TO_START:M.Range.END_TO_END,a)
        };
    
        L.isCollapsed=function(){
            return this.m.collapsed
        };
    
        L.select=function(a){
            var b=Fp(zp(this.ka()));
            this.Cc(b.getSelection(),a)
        };
    
        L.Cc=function(a){
            a.removeAllRanges();
            a.addRange(this.m)
        };
        L.collapse=function(a){
            this.m[ab](a)
        };
    
        function Ls(a){
            this.m=a
        }
        P(Ls,Hs);
        Ls[F].Cc=function(a,b){
            if(!b||this[Ua]())Ls.b.Cc[I](this,a,b);else a[ab](this.Ga(),this.xb()),a.extend(this.ka(),this.Va())
        };
        
        function Ms(a,b){
            this.m=a;
            this.Zi=b
        }
        P(Ms,Gs);
        function Ns(a){
            var b=zp(a)[Wc].createTextRange();
            if(1==a[cb])b.moveToElementText(a),Js(a)&&!a[ac][D]&&b[ab](l);
            else{
                for(var c=0,e=a;e=e.previousSibling;){
                    var f=e[cb];
                    if(3==f)c+=e[D];
                    else if(1==f){
                        b.moveToElementText(e);
                        break
                    }
                }
                e||b.moveToElementText(a[Fd]);
                b[ab](!e);
                c&&b.move($h,c);
                b.moveEnd($h,a[D])
            }
            return b
        }
        function Os(a,b,c,e){
            var f=a,h=b,j=c,p=e,s=l;
            1==f[cb]&&(h=f[ac][h],s=!h,f=h||f[ad]||f,h=0);
            var x=Ns(f);
            h&&x.move($h,h);
            if(f==j&&h==p)x[ab](i);else s&&x[ab](l),s=l,1==j[cb]&&(j=(h=j[ac][p])||j[ad]||j,p=0,s=!h),f=Ns(j),f[ab](!s),p&&f.moveEnd($h,p),x.setEndPoint(fg,f);
            p=new Ms(x,zp(a));
            p.H=a;
            p.L=b;
            p.A=c;
            p.K=e;
            return p
        }
        L=Ms[F];
        L.Ha=k;
        L.H=k;
        L.A=k;
        L.L=-1;
        L.K=-1;
        Na(L,function(){
            var a=new Ms(this.m.duplicate(),this.Zi);
            a.Ha=this.Ha;
            a.H=this.H;
            a.A=this.A;
            return a
        });
        L.getContainer=function(){
            if(!this.Ha){
                var a=this.m.text,b=this.m.duplicate(),c=a[v](/ +$/,K);
                (c=a[D]-c[D])&&b.moveEnd($h,-c);
                c=b.parentElement();
                b=b.htmlText[v](/(\r\n|\r|\n)+/g,Rd)[D];
                if(this[Ua]()&&0<b)return this.Ha=c;
                for(;b>c.outerHTML[v](/(\r\n|\r|\n)+/g,Rd)[D];)c=c[Fd];
                for(;1==c[ac][D]&&c.innerText==(3==c[Ob][cb]?c[Ob].nodeValue:c[Ob].innerText)&&Js(c[Ob]);)c=c[Ob];
                0==a[D]&&(c=this.Rg(c));
                this.Ha=c
            }
            return this.Ha
        };
        L.Rg=function(a){
            for(var b=a[ac],c=0,e=b[D];c<e;c++){
                var f=b[c];
                if(Js(f)){
                    var h=Ns(f),j=h.htmlText!=f.outerHTML;
                    if(this[Ua]()&&j?0<=this.da(h,1,1)&&0>=this.da(h,1,0):this.m.inRange(h))return this.Rg(f)
                }
            }
            return a
        };

        L.ka=function(){
            this.H||(this.H=this.Ac(1),this[Ua]()&&(this.A=this.H));
            return this.H
        };
    
        L.Va=function(){
            0>this.L&&(this.L=this.Ug(1),this[Ua]()&&(this.K=this.L));
            return this.L
        };
    
        L.Ga=function(){
            if(this[Ua]())return this.ka();
            this.A||(this.A=this.Ac(0));
            return this.A
        };
        L.xb=function(){
            if(this[Ua]())return this.Va();
            0>this.K&&(this.K=this.Ug(0),this[Ua]()&&(this.L=this.K));
            return this.K
        };
    
        L.da=function(a,b,c){
            return this.m.compareEndPoints((1==b?Sg:eg)+$g+(1==c?Sg:eg),a)
        };
        L.Ac=function(a,b){
            var c=b||this[Cd]();
            if(!c||!c[Ob])return c;
            for(var e=1==a,f=0,h=c[ac][D];f<h;f++){
                var j=e?f:h-f-1,p=c[ac][j],s;
                try{
                    s=Ps(p)
                }catch(x){
                    continue
                }
                var z=s.m;
                if(this[Ua]())if(Js(p)){
                    if(s.tg(this))return this.Ac(a,p)
                }else{
                    if(0==this.da(z,1,1)){
                        this.L=this.K=j;
                        break
                    }
                }else{
                    if(this.tg(s)){
                        if(!Js(p)){
                            e?this.L=j:this.K=j+1;
                            break
                        }
                        return this.Ac(a,p)
                    }
                    if(0>this.da(z,1,0)&&0<this.da(z,0,1))return this.Ac(a,p)
                }
            }
            return c
        };
        L.zj=function(a,b,c){
            return this.m.compareEndPoints((1==b?Sg:eg)+$g+(1==c?Sg:eg),Ps(a).m)
        };
    
        L.Ug=function(a,b){
            var c=1==a,e=b||(c?this.ka():this.Ga());
            if(1==e[cb]){
                for(var e=e[ac],f=e[D],h=c?1:-1,j=c?0:f-1;0<=j&&j<f;j+=h){
                    var p=e[j];
                    if(!Js(p)&&0==this.zj(p,a,a))return c?j:j+1
                }
                return-1==j?0:j
            }
            f=this.m.duplicate();
            h=Ns(e);
            f.setEndPoint(c?fg:Ug,h);
            f=f.text[D];
            return c?e[D]-f:f
        };
    
        L.isCollapsed=function(){
            return 0==this.m.compareEndPoints(Tg,this.m)
        };
    
        L.select=function(){
            this.m.select()
        };
        L.collapse=function(a){
            this.m[ab](a);
            a?(this.A=this.H,this.K=this.L):(this.H=this.A,this.L=this.K)
        };
    
        function Qs(a){
            this.m=a
        }
        P(Qs,Hs);
        Qs[F].Cc=function(a){
            a[ab](this.ka(),this.Va());
            (this.Ga()!=this.ka()||this.xb()!=this.Va())&&a.extend(this.Ga(),this.xb());
            0==a.rangeCount&&a.addRange(this.m)
        };
    
        function Rs(a){
            this.m=a
        }
        P(Rs,Hs);
        Rs[F].da=function(a,b,c){
            return Uo(vf)?Rs.b.da[I](this,a,b,c):this.m.compareBoundaryPoints(1==c?1==b?M.Range.START_TO_START:M.Range.END_TO_START:1==b?M.Range.START_TO_END:M.Range.END_TO_END,a)
        };
    
        Rs[F].Cc=function(a,b){
            a.removeAllRanges();
            b?a.setBaseAndExtent(this.Ga(),this.xb(),this.ka(),this.Va()):a.setBaseAndExtent(this.ka(),this.Va(),this.Ga(),this.xb())
        };
    
        function Ps(a){
            if(Q&&!Wo(9)){
                var b=new Ms(Ns(a),zp(a));
                if(Js(a)){
                    for(var c,e=a;(c=e[Ob])&&Js(c);)e=c;
                    b.H=e;
                    b.L=0;
                    for(e=a;(c=e[ad])&&Js(c);)e=c;
                    b.A=e;
                    b.K=1==e[cb]?e[ac][D]:e[D];
                    b.Ha=a
                }else b.H=b.A=b.Ha=a[Fd],b.L=fo(b.Ha[ac],a),b.K=b.L+1;
                a=b
            }else a=Ho?new Rs(Is(a)):Go?new Ls(Is(a)):Fo?new Qs(Is(a)):new Hs(Is(a));
            return a
        }
        function Js(a){
            var b;
                a:if(1!=a[cb])b=l;
                else{
                    switch(a[zd]){
                        case Lf:case Mf:case Of:case Qf:case Uf:case Vf:case dg:case ig:case mg:case pg:case qg:case og:case rg:case wg:case xg:case Eg:case Fg:case yg:case Ig:case Jg:case Ng:case Pg:case Qg:case Yg:case dh:
                            b=l;
                            break a
                    }
                    b=i
                }
            return b||3==a[cb]
        };
    
        function Ss(a,b,c){
            a[Tb](Bh+b,c)
        };
    
        function Ts(a,b,c,e,f){
            if(!Q&&(!Ho||!Uo(uf)))return i;
            if(Ao&&f)return Us(a);
            if(f&&!e||!c&&(17==b||18==b)||Q&&e&&b==a)return l;
            switch(a){
                case 13:
                    return!(Q&&Wo(9));
                case 27:
                    return!Ho
            }
            return Us(a)
        }
        function Us(a){
            if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||Ho&&0==a)return i;
            switch(a){
                case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:
                    return i;
                default:
                    return l
            }
        }
        function Vs(a){
            switch(a){
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };

        function Ws(a){
            this.Qg=a;
            this.C=[]
        }
        P(Ws,bq);
        var Xs=[];
        L=Ws[F];
        L.h=function(a,b,c,e,f){
            qn(b)||(Xs[0]=b,b=Xs);
            for(var h=0;h<b[D];h++){
                var j=sq(a,b[h],c||this,e||l,f||this.Qg||this);
                this.C[t](j)
            }
            return this
        };
    
        L.W=function(a,b,c,e,f){
            if(qn(b))for(var h=0;h<b[D];h++)this.W(a,b[h],c,e,f);
            else{
                a:{
                    c=c||this;
                    f=f||this.Qg||this;
                    e=!!e;
                    if(a=wq(a,b,e))for(b=0;b<a[D];b++)if(!a[b].Ab&&a[b].$b==c&&a[b][ub]==e&&a[b].qd==f){
                        a=a[b];
                        break a
                    }
                    a=k
                }
            a&&(a=a.key,xq(a),lo(this.C,a))
            }
            return this
        };
        L.removeAll=function(){
            go(this.C,xq);
            Ha(this.C,0)
        };
    
        L.j=function(){
            Ws.b.j[I](this);
            this[ed]()
        };
    
        xa(L,function(){
            d(r("EventHandler.handleEvent not implemented"))
        });
        function Ys(a,b,c){
            Oa(this,a);
            this.handle=b||a;
            this.Xe=c||new Rr(NaN,NaN,NaN,NaN);
            this.l=zp(a);
            this.Da=new Ws(this);
            sq(this.handle,[Fm,Qk],this.Uf,l,this)
        }
        P(Ys,Dq);
        var Zs=Q||Go&&Uo("1.9.3");
        L=Ys[F];
        Ca(L,0);
        Da(L,0);
        ta(L,0);
        va(L,0);
        L.cg=0;
        L.dg=0;
        L.cc=0;
        L.dc=0;
        L.lb=i;
        L.zb=l;
        L.bg=0;
        L.Si=l;
        L.xe=l;
        L.O=function(){
            return this.Da
        };
    
        L.Zf=function(a){
            this.Xe=a||new Rr(NaN,NaN,NaN,NaN)
        };
    
        L.j=function(){
            Ys.b.j[I](this);
            vq(this.handle,[Fm,Qk],this.Uf,l,this);
            this.Sf();
            Oa(this,k);
            this.Da=this.handle=k
        };
        L.Pg=function(){
            pn(this.$a)||(this.$a=as(this[$c]));
            return this.$a
        };
        L.Uf=function(a){
            var b=a[B]==Qk;
            if(this.lb&&!this.zb&&(!b||a.ge())){
                this.te(a);
                if(0==this.bg)if(this.ag(a))this.zb=i,a[pb]();else return;else a[pb]();
                this.Hi();
                Ca(this,this.cg=a[mc]);
                Da(this,this.dg=a[nc]);
                ta(this,a[yb]);
                va(this,a[zb]);
                if(this.xe){
                    var a=this[$c],b=a[Rc],c=a[Lc];
                    !c&&Ur(a)==Qi&&(c=zp(a)[oc]);
                    if(c){
                        if(Go)var e=ns(c),b=b+e[A];else Wo(8)&&(e=ns(c),b-=e[A]);
                        a=as(c)?c[Dc]-(b+a.offsetWidth):b
                    }else a=b
                }else a=this[$c][Rc];
                this.cc=a;
                this.dc=this[$c][Hd];
                this.Ce=xp(this.l).Tb();
                Fn()
            }
            else this[y](Hi)
        };
        L.Hi=function(){
            var a=this.l,b=a[oc],c=!Zs;
            this.Da.h(a,[Em,Rk],this.Ri,c);
            this.Da.h(a,[Dm,Uk],this.md,c);
            Zs?(b.setCapture(l),this.Da.h(b,Fk,this.md)):this.Da.h(Fp(a),Ih,this.md);
            Q&&this.Si&&this.Da.h(a,Fi,jq);
            this.Ui&&this.Da.h(this.Ui,Pl,this.Ti,c)
        };
        L.ag=function(a){
            return this[y](new $s(im,this,a[mc],a[nc],a))
        };
        L.Sf=function(){
            this.Da[ed]();
            Zs&&this.l.releaseCapture()
        };
        L.md=function(a,b){
            this.Sf();
            if(this.zb){
                this.te(a);
                this.zb=l;
                var c=this.Fg(this.cc),e=this.Gg(this.dc);
                this[y](new $s(Ki,this,a[mc],a[nc],a,c,e,b||a[B]==Cm))
            }else this[y](Hi);
            (a[B]==Dm||a[B]==Cm)&&a[pb]()
        };
        L.te=function(a){
            var b=a[B];
            b==Fm||b==Em?a.Ib(a.V[rb][0],a.currentTarget):(b==Dm||b==Cm)&&a.Ib(a.V.changedTouches[0],a.currentTarget)
        };
        L.Ri=function(a){
            if(this.lb){
                this.te(a);
                var b=(this.xe&&this.Pg()?-1:1)*(a[mc]-this[mc]),c=a[nc]-this[nc];
                Ca(this,a[mc]);
                Da(this,a[nc]);
                ta(this,a[yb]);
                va(this,a[zb]);
                if(!this.zb){
                    var e=this.cg-this[mc],f=this.dg-this[nc];
                    if(e*e+f*f>this.bg)if(this.ag(a))this.zb=i;
                        else{
                            this.kc||this.md(a);
                            return
                        }
                }
                c=this.Ng(b,c);
                b=c.x;
                c=c.y;
                this.zb&&this[y](new $s(Eh,this,a[mc],a[nc],a,b,c))&&(this.Og(a,b,c,l),a[pb]())
            }
        };
        L.Ng=function(a,b){
            var c=xp(this.l).Tb(),a=a+(c.x-this.Ce.x),b=b+(c.y-this.Ce.y);
            this.Ce=c;
            this.cc+=a;
            this.dc+=b;
            var c=this.Fg(this.cc),e=this.Gg(this.dc);
            return new to(c,e)
        };
    
        L.Ti=function(a){
            var b=this.Ng(0,0);
            Ca(a,this[mc]);
            Da(a,this[nc]);
            this.Og(a,b.x,b.y,i)
        };
    
        L.Og=function(a,b,c){
            this.Lk(b,c);
            this[y](new $s(Ei,this,a[mc],a[nc],a,b,c))
        };
    
        L.Fg=function(a){
            var b=this.Xe,c=!ha(b[A])?b[A]:k,b=!ha(b[u])?b[u]:0;
            return q.min(c!=k?c+b:fa,q.max(c!=k?c:-fa,a))
        };
        L.Gg=function(a){
            var b=this.Xe,c=!ha(b.top)?b.top:k,b=!ha(b[J])?b[J]:0;
            return q.min(c!=k?c+b:fa,q.max(c!=k?c:-fa,a))
        };
    
        L.Lk=function(a,b){
            this.xe&&this.Pg()?Sa(this[$c][H],a+Bl):sa(this[$c][H],a+Bl);
            this[$c][H].top=b+Bl
        };
    
        function $s(a,b,c,e,f,h,j){
            iq[I](this,a);
            Ca(this,c);
            Da(this,e);
            sa(this,pn(h)?h:b.cc);
            this.top=pn(j)?j:b.dc
        }
        P($s,iq);
        function at(a){
            this.i=a;
            a=Q?Ti:Ih;
            this.mi=sq(this.i,Q?Si:Ri,this,!Q);
            this.ni=sq(this.i,a,this,!Q)
        }
        P(at,Dq);
        xa(at[F],function(a){
            var b=new kq(a.V);
            za(b,a[B]==Si||a[B]==Ri?Si:Ti);
            this[y](b)
        });
        at[F].j=function(){
            at.b.j[I](this);
            xq(this.mi);
            xq(this.ni);
            delete this.i
        };
    
        function bt(){}
        nn(bt);
        bt[F].Qk=0;
        bt[F].qk=function(){
            return zf+(this.Qk++)[sc](36)
        };
    
        bt.la();
        function ct(a){
            this.Ta=a||xp();
            this.$a=dt
        }
        P(ct,Dq);
        ct[F].rk=bt.la();
        var dt=k;
        function et(a,b){
            switch(a){
                case 1:
                    return b?yi:Ji;
                case 2:
                    return b?ak:Nm;
                case 4:
                    return b?uh:ti;
                case 8:
                    return b?Ql:Om;
                case 16:
                    return b?bi:Mm;
                case 32:
                    return b?Ri:Ih;
                case 64:
                    return b?hl:fi
            }
            d(r("Invalid component state"))
        }
        L=ct[F];
        L.wd=k;
        L.q=l;
        L.i=k;
        L.$a=k;
        L.de=k;
        L.ta=k;
        L.P=k;
        L.Aa=k;
        L.bi=l;
        L.Lb=function(){
            return this.wd||(this.wd=this.rk.qk())
        };
    
        L.a=function(){
            return this.i
        };
    
        L.Tf=function(a){
            this.i=a
        };
        L.O=function(){
            return this.Ub||(this.Ub=new Ws(this))
        };
    
        L.Ud=function(a){
            this==a&&d(r(ch));
            a&&(this.ta&&this.wd&&this.ta.Xd(this.wd)&&this.ta!=a)&&d(r(ch));
            this.ta=a;
            ct.b.Ke[I](this,a)
        };
    
        L.getParent=function(){
            return this.ta
        };
    
        L.Ke=function(a){
            this.ta&&this.ta!=a&&d(r("Method not supported"));
            ct.b.Ke[I](this,a)
        };
    
        L.r=function(){
            return this.Ta
        };
    
        L.d=function(){
            this.i=this.Ta[Ib](Ci)
        };
    
        L.kb=function(a){
            this.If(a)
        };
        L.If=function(a,b){
            this.q&&d(r(Zf));
            this.i||this.d();
            a?a[qb](this.i,b||k):this.Ta.l[Wc][Ta](this.i);
            (!this.ta||this.ta.q)&&this.I()
        };
    
        L.I=function(){
            this.q=i;
            this.hb(function(a){
                !a.q&&a.a()&&a.I()
            })
        };
    
        L.T=function(){
            this.hb(function(a){
                a.q&&a.T()
            });
            this.Ub&&this.Ub[ed]();
            this.q=l
        };
    
        L.j=function(){
            ct.b.j[I](this);
            this.q&&this.T();
            this.Ub&&(this.Ub.U(),delete this.Ub);
            this.hb(function(a){
                a.U()
            });
            !this.bi&&this.i&&Np(this.i);
            this.ta=this.de=this.i=this.Aa=this.P=k
        };
    
        L.Wk=function(a){
            this.de=a
        };
        L.xd=function(a,b){
            this.vc(a,this.Pa(),b)
        };
        L.vc=function(a,b,c){
            a.q&&(c||!this.q)&&d(r(Zf));
            (0>b||b>this.Pa())&&d(r("Child component index out of bounds"));
            if(!this.Aa||!this.P)this.Aa={},this.P=[];
            if(a[Wa]()==this){
                var e=a.Lb();
                this.Aa[e]=a;
                lo(this.P,a)
            }else{
                var e=this.Aa,f=a.Lb();
                f in e&&d(r('The object already contains the key "'+f+Xd));
                e[f]=a
            }
            a.Ud(this);
            po(this.P,b,0,a);
            a.q&&this.q&&a[Wa]()==this?(c=this.N(),c[qb](a.a(),c[ac][b]||k)):c?(this.i||this.d(),b=this.Qa(b+1),a.If(this.N(),b?b.i:k)):this.q&&(!a.q&&a.i&&a.i[Fd])&&a.I()
        };
    
        L.N=function(){
            return this.i
        };
        L.fe=function(){
            this.$a==k&&(this.$a=as(this.q?this.i:this.Ta.l[Wc]));
            return this.$a
        };
    
        L.Wb=function(a){
            this.q&&d(r(Zf));
            this.$a=a
        };
    
        L.Hk=function(){
            return!!this.P&&0!=this.P[D]
        };
    
        L.Pa=function(){
            return this.P?this.P[D]:0
        };
    
        L.Xd=function(a){
            return this.Aa&&a?(a in this.Aa?this.Aa[a]:g)||k:k
        };
    
        L.Qa=function(a){
            return this.P?this.P[a]||k:k
        };
    
        L.hb=function(a,b){
            this.P&&go(this.P,a,b)
        };
    
        L.Oc=function(a){
            return this.P&&a?fo(this.P,a):-1
        };
        L.removeChild=function(a,b){
            if(a){
                var c=O(a)?a:a.Lb(),a=this.Xd(c);
                c&&a&&(np(this.Aa,c),lo(this.P,a),b&&(a.T(),a.i&&Np(a.i)),a.Ud(k))
            }
            a||d(r("Child is not in parent component"));
            return a
        };
    
        L.Ik=function(a,b){
            return this[Xc](this.Qa(a),b)
        };
    
        L.og=function(a){
            for(var b=[];this.Hk();)b[t](this.Ik(0,a));
            return b
        };
    
        function ft(a,b){
            ct[I](this,b);
            this.oi=!!a
        }
        P(ft,ct);
        L=ft[F];
        L.Vd=k;
        L.n=l;
        L.X=k;
        L.Q=k;
        L.sa=k;
        L.w=function(){
            return Hj
        };
    
        L.Uc=function(){
            return this.X
        };
    
        L.d=function(){
            ft.b.d[I](this);
            var a=this.a();
            vp(a,this.w());
            Tp(a,i);
            gs(a,l);
            this.ei();
            this.di()
        };
    
        L.ei=function(){
            this.oi&&!this.Q&&(this.Q=this.r().d(mk,{
                frameborder:0,
                style:Mh,
                src:tk
            }),Ja(this.Q,this.w()+ye),gs(this.Q,l),fs(this.Q,0));
            this.X||(this.X=this.r().d(Ci,this.w()+ye),gs(this.X,l))
        };
        L.di=function(){
            this.sa||(this.sa=this.r()[Ib](gm),gs(this.sa,l),Tp(this.sa,i),this.sa[H].position=sh)
        };
    
        L.Xh=function(){
            this.Q&&Mp(this.Q,this.a());
            Mp(this.X,this.a())
        };
    
        L.I=function(){
            this.Xh();
            ft.b.I[I](this);
            var a=this.a();
            a[Fd]&&a[Fd][qb](this.sa,a[hc]);
            this.Vd=new at(this.r().l);
            this.O().h(this.Vd,Si,this.Wh)
        };
    
        L.T=function(){
            this.n&&this.F(l);
            dq(this.Vd);
            ft.b.T[I](this);
            Np(this.Q);
            Np(this.X);
            Np(this.sa)
        };
        L.F=function(a){
            a!=this.n&&(this.Sb&&this.Sb[rc](),this.oc&&this.oc[rc](),this.Vb&&this.Vb[rc](),this.qc&&this.qc[rc](),a?this.tj():this.rj())
        };
    
        L.tj=function(){
            this[y](Gh)&&(this.le(),this.mc(),this.O().h(this.r().Sc(),Jl,this.le),this.Xf(i),this[Hb](),this.n=i,this.Sb&&this.oc?(uq(this.Sb,Ki,this.Yc,l,this),this.oc[Vb](),this.Sb[Vb]()):this.Yc())
        };
        L.rj=function(){
            this[y](Fh)&&(this.O().W(this.r().Sc(),Jl,this.le),this.n=l,this.Vb&&this.qc?(uq(this.Vb,Ki,this.$c,l,this),this.qc[Vb](),this.Vb[Vb]()):this.$c())
        };
    
        L.Xf=function(a){
            this.Q&&gs(this.Q,a);
            this.X&&gs(this.X,a);
            gs(this.a(),a);
            gs(this.sa,a)
        };
    
        L.Yc=function(){
            this[y](cm)
        };
    
        L.$c=function(){
            this.Xf(l);
            this[y]($j)
        };
    
        L.focus=function(){
            this.sh()
        };
        L.le=function(){
            this.Q&&gs(this.Q,l);
            this.X&&gs(this.X,l);
            var a=this.r().l,b=Dp(Fp(a)||ca||ca),c=q.max(b[u],q.max(a[Wc][fd],a[oc][fd])),a=q.max(b[J],q.max(a[Wc][Lb],a[oc][Lb]));
            this.Q&&(gs(this.Q,i),bs(this.Q,c,a));
            this.X&&(gs(this.X,i),bs(this.X,c,a))
        };
    
        L.mc=function(){
            var a=this.r().l,b=Fp(a)||ca;
            if(Ur(this.a())==Qi)var c=a=0;else c=this.r().Tb(),a=c.x,c=c.y;
            var e=cs(this.a()),b=Dp(b||ca),a=q.max(a+b[u]/2-e[u]/2,0),c=q.max(c+b[J]/2-e[J]/2,0);
            Vr(this.a(),a,c);
            Vr(this.sa,a,c)
        };
        L.Wh=function(a){
            a[$c]==this.sa&&(a=this.sh,wn(a)?this&&(a=Dn(a,this)):a&&typeof a[Wb]==Wi?a=Dn(a[Wb],a):d(r(tg)),Fq[Fc](a,0))
        };
    
        L.sh=function(){
            try{
                Q&&this.r().l[Wc][Hb](),this.a()[Hb]()
            }catch(a){}
        };

        L.j=function(){
            dq(this.Sb);
            this.Sb=k;
            dq(this.Vb);
            this.Vb=k;
            dq(this.oc);
            this.oc=k;
            dq(this.qc);
            this.qc=k;
            ft.b.j[I](this)
        };
    
        function gt(a,b,c){
            ft[I](this,b,c);
            this.ra=a||Ok;
            this.Ra=(new ht).Z(it,i).Z(jt,l,i)
        }
        P(gt,ft);
        L=gt[F];
        L.si=i;
        L.Cf=i;
        L.Df=i;
        L.Yh=i;
        L.Wd=0.5;
        L.Vh=K;
        L.ha=K;
        L.Wa=k;
        L.Ji=l;
        L.Qb=k;
        L.Jc=k;
        L.Gf=k;
        L.Ic=k;
        L.lc=k;
        L.Oa=k;
        L.Mb="dialog";
        L.w=function(){
            return this.ra
        };
    
        Aa(L,function(a){
            this.ha=a;
            this.lc&&qa(this.lc,a)
        });
        L.uf=function(a){
            this.Mb=a
        };
    
        L.vd=function(){
            this.a()||this.kb()
        };
    
        L.N=function(){
            this.vd();
            return this.lc
        };
    
        L.Yi=function(){
            this.vd();
            return this.Jc
        };
    
        L.Xi=function(){
            this.vd();
            return this.Oa
        };
        L.Uc=function(){
            this.vd();
            return gt.b.Uc[I](this)
        };
    
        L.Uh=function(a){
            this.Wd=a;
            this.a()&&(a=this.Uc())&&fs(a,this.Wd)
        };
    
        L.ai=function(a){
            this.Df=a;
            if(this.q){
                var b=this.r(),c=this.Uc(),e=this.Q;
                a?(e&&b.ne(e,this.a()),b.ne(c,this.a())):(b.removeNode(e),b.removeNode(c))
            }
        };

        L.qi=function(){
            return new Ys(this.a(),this.Qb)
        };
        L.Ef=function(a){
            if(this.a()){
                var b=this.Qb,c=this.ra+We;
                a?vp(b,c):wp(b,c)
            }
            a&&!this.Wa?(this.Wa=this.qi(),vp(this.Qb,this.ra+We),sq(this.Wa,im,this.ri,l,this)):!a&&this.Wa&&(this.Wa.U(),this.Wa=k)
        };
        L.d=function(){
            gt.b.d[I](this);
            var a=this.a(),b=this.r();
            this.Qb=b.d(Ci,{
                className:this.ra+Te,
                id:this.Lb()
            },this.Jc=b.d(gm,this.ra+Xe,this.Vh),this.Ic=b.d(gm,this.ra+Ve));
            Kp(a,this.Qb,this.lc=b.d(Ci,this.ra+De),this.Oa=b.d(Ci,this.ra+ze));
            this.Gf=this.Qb.id;
            a[Tb](Ml,this.Mb);
            Ss(a,Ak,this.Gf||K);
            this.ha&&qa(this.lc,this.ha);
            gs(this.Ic,this.Cf);
            this.Ra&&this.Ra.Th(this.Oa);
            gs(this.Oa,!!this.Ra);
            this.Uh(this.Wd)
        };
        L.I=function(){
            gt.b.I[I](this);
            this.O().h(this.a(),xk,this.Jf).h(this.a(),yk,this.Jf);
            this.O().h(this.Oa,ei,this.Zh);
            this.Ef(this.Yh);
            this.O().h(this.Ic,ei,this.$h);
            this.a()[Tb](Ml,this.Mb);
            this.Jc.id!==K&&Ss(this.a(),Ak,this.Jc.id);
            this.Df||this.ai(l)
        };
    
        L.T=function(){
            this.n&&this.F(l);
            this.Ef(l);
            gt.b.T[I](this)
        };
    
        L.F=function(a){
            a!=this.n&&(this.q||this.kb(),gt.b.F[I](this,a))
        };
    
        L.Yc=function(){
            gt.b.Yc[I](this);
            this[y](yh)
        };
    
        L.$c=function(){
            gt.b.$c[I](this);
            this[y](xh);
            this.Ji&&this.U()
        };
        L.focus=function(){
            gt.b[Hb][I](this);
            if(this.Ra){
                var a=this.Ra.Lc;
                if(a)for(var b=this.r().l,c=this.Oa[lc](Wh),e=0,f;f=c[e];e++)if(f[gc]==a){
                    try{
                        if(Ho||Fo){
                            var h=b[Ib](rk);
                            h[H].cssText=xl;
                            this.a()[Ta](h);
                            h[Hb]();
                            this.a()[Xc](h)
                        }
                        f[Hb]()
                    }catch(j){}
                    break
                }
            }
        };

        L.ri=function(){
            var a=this.r().l,b=Dp(Fp(a)||ca||ca),c=q.max(a[Wc][fd],b[u]),a=q.max(a[Wc][Lb],b[J]),e=cs(this.a());
            Ur(this.a())==Qi?this.Wa.Zf(new Rr(0,0,q.max(0,b[u]-e[u]),q.max(0,b[J]-e[J]))):this.Wa.Zf(new Rr(0,0,c-e[u],a-e[J]))
        };
        L.$h=function(){
            if(this.Cf){
                var a=this.Ra,b=a&&a.ze;
                b?(a=a.get(b),this[y](new kt(b,a))&&this.F(l)):this.F(l)
            }
        };

        L.j=function(){
            this.Oa=this.Ic=k;
            gt.b.j[I](this)
        };
    
        L.Zh=function(a){
            if((a=this.Wj(a[$c]))&&!a[Qc]){
                var a=a[gc],b=this.Ra.get(a);
                this[y](new kt(a,b))&&this.F(l)
            }
        };

        L.Wj=function(a){
            for(;a!=k&&a!=this.Oa;){
                if(a[zd]==Rf)return a;
                a=a[Fd]
            }
            return k
        };
        L.Jf=function(a){
            var b=l,c=l,e=this.Ra,f=a[$c];
            if(a[B]==xk)if(this.si&&27==a[Mb]){
                var h=e&&e.ze,f=f[zd]==Og&&!f[Qc];
                h&&!f?(c=i,b=e.get(h),b=this[y](new kt(h,b))):f||(b=i)
            }else 9==a[Mb]&&(a[yd]&&f==this.a())&&(c=i);
            else if(13==a[Mb]){
                if(f[zd]==Rf)h=f[gc];
                else if(e){
                    var j=e.Lc,p=j&&e.ti(j),f=(f[zd]==Wg||f[zd]==Og)&&!f[Qc];
                    p&&(!p[Qc]&&!f)&&(h=j)
                }
                h&&e&&(c=i,b=this[y](new kt(h,ma(e.get(h)))))
            }
            if(b||c)a[Nc](),a[pb]();
            b&&this.F(l)
        };
    
        function kt(a,b){
            za(this,wi);
            this.key=a;
            this.caption=b
        }
        P(kt,iq);
        function ht(a){
            this.Ta=a||xp();
            $p[I](this)
        }
        P(ht,$p);
        L=ht[F];
        L.ra="goog-buttonset";
        L.Lc=k;
        L.i=k;
        L.ze=k;
        L.set=function(a,b,c,e){
            $p[F].set[I](this,a,b);
            c&&(this.Lc=a);
            e&&(this.ze=a);
            return this
        };
    
        L.Z=function(a,b,c){
            return this.set(a.key,a.caption,b,c)
        };
    
        L.Th=function(a){
            this.i=a;
            this.kb()
        };
    
        L.kb=function(){
            if(this.i){
                qa(this.i,K);
                var a=xp(this.i);
                Zp(this,function(b,c){
                    var e=a.d(Wh,{
                        name:c
                    },b);
                    c==this.Lc&&Ja(e,this.ra+Ee);
                    this.i[Ta](e)
                },this)
            }
        };

        L.a=function(){
            return this.i
        };
    
        L.r=function(){
            return this.Ta
        };
        L.ti=function(a){
            for(var b=this.Mk(),c=0,e;e=b[c];c++)if(e[gc]==a||e.id==a)return e;return k
        };
    
        L.Mk=function(){
            return this.i[lc](Rf)
        };
    
        var it={
            key:"ok",
            caption:"OK"
        },jt={
            key:"cancel",
            caption:"Cancel"
        },lt={
            key:"yes",
            caption:"Yes"
        },mt={
            key:"no",
            caption:"No"
        },nt={
            key:"save",
            caption:"Save"
        },ot={
            key:"continue",
            caption:"Continue"
        };

        "undefined"!=typeof ga&&((new ht).Z(it,i,i),(new ht).Z(it,i).Z(jt,l,i),(new ht).Z(lt,i).Z(mt,l,i),(new ht).Z(lt).Z(mt,i).Z(jt,l,i),(new ht).Z(ot).Z(nt).Z(jt,i,i));
        function pt(a,b){
            a&&this.Kf(a,b)
        }
        P(pt,Dq);
        L=pt[F];
        L.i=k;
        L.zd=k;
        L.Re=k;
        L.Ad=k;
        L.cb=-1;
        L.bb=-1;
        L.ef=l;
        var qt={
            3:13,
            12:144,
            63232:38,
            63233:40,
            63234:37,
            63235:39,
            63236:112,
            63237:113,
            63238:114,
            63239:115,
            63240:116,
            63241:117,
            63242:118,
            63243:119,
            63244:120,
            63245:121,
            63246:122,
            63247:123,
            63248:44,
            63272:46,
            63273:36,
            63275:35,
            63276:33,
            63277:34,
            63289:144,
            63302:45
        },rt={
            Up:38,
            Down:40,
            Left:37,
            Right:39,
            Enter:13,
            F1:112,
            F2:113,
            F3:114,
            F4:115,
            F5:116,
            F6:117,
            F7:118,
            F8:119,
            F9:120,
            F10:121,
            F11:122,
            F12:123,
            "U+007F":46,
            Home:36,
            End:35,
            PageUp:33,
            PageDown:34,
            Insert:45
        },st=Q||Ho&&Uo(uf),tt=Ao&&Go;
        L=pt[F];
        L.xj=function(a){
            if(Ho&&(17==this.cb&&!a[Ic]||18==this.cb&&!a[tc]))this.bb=this.cb=-1;
            if(st&&!Ts(a[Mb],this.cb,a[yd],a[Ic],a[tc]))this[Wb](a);else this.bb=Go?Vs(a[Mb]):a[Mb],tt&&(this.ef=a[tc])
        };
        
        L.yj=function(a){
            this.bb=this.cb=-1;
            this.ef=a[tc]
        };
        xa(L,function(a){
            var b=a.V,c,e,f=b[tc];
            Q&&a[B]==yk?(c=this.bb,e=13!=c&&27!=c?b[Mb]:0):Ho&&a[B]==yk?(c=this.bb,e=0<=b[Fb]&&63232>b[Fb]&&Us(c)?b[Fb]:0):Fo?(c=this.bb,e=Us(c)?b[Mb]:0):(c=b[Mb]||this.bb,e=b[Fb]||0,tt&&(f=this.ef),Ao&&(63==e&&224==c)&&(c=191));
            var h=c,j=b.keyIdentifier;
            c?63232<=c&&c in qt?h=qt[c]:25==c&&a[yd]&&(h=9):j&&j in rt&&(h=rt[j]);
            a=h==this.cb;
            this.cb=h;
            b=new ut(h,e,a,b);
            Ga(b,f);
            this[y](b)
        });
        L.a=function(){
            return this.i
        };
        L.Kf=function(a,b){
            this.Ad&&this.detach();
            this.i=a;
            this.zd=sq(this.i,yk,this,b);
            this.Re=sq(this.i,xk,this.xj,b,this);
            this.Ad=sq(this.i,zk,this.yj,b,this)
        };
    
        L.detach=function(){
            this.zd&&(xq(this.zd),xq(this.Re),xq(this.Ad),this.Ad=this.Re=this.zd=k);
            this.i=k;
            this.bb=this.cb=-1
        };
    
        L.j=function(){
            pt.b.j[I](this);
            this.detach()
        };
    
        function ut(a,b,c,e){
            e&&this.Ib(e,g);
            za(this,wk);
            wa(this,a);
            this.charCode=b;
            this.repeat=c
        }
        P(ut,kq);
        function vt(){}
        var wt;
        nn(vt);
        L=vt[F];
        L.eb=function(){};

        L.d=function(a){
            var b=a.r().d(Ci,this.Zb(a)[Jd](Rd),a.ha);
            this.kg(a,b);
            return b
        };
    
        L.N=function(a){
            return a
        };
    
        L.ud=function(a,b,c){
            if(a=a.a?a.a():a)if(Q&&!Uo(xf)){
                var e=this.jg(up(a),b);
                e[t](b);
                En(c?vp:wp,a)[xd](k,e)
            }else c?vp(a,b):wp(a,b)
        };
        
        L.Wg=function(a,b,c){
            this.ud(a,b,c)
        };
    
        L.Nb=function(a){
            a.fe()&&this.Wb(a.a(),i);
            a[cd]()&&this.qb(a,a.n)
        };
    
        L.ki=function(a,b){
            var c=b||this.eb();
            c&&a[Tb](Ml,c)
        };
        L.kg=function(a,b){
            a[cd]()||this.Ca(b,1,i);
            a.Kj()&&this.Ca(b,8,i);
            a.R(16)&&this.Ca(b,16,a.ee());
            a.R(64)&&this.Ca(b,64,a.pc())
        };
    
        L.Vc=function(a,b){
            is(a,!b,!Q&&!Fo)
        };
    
        L.Wb=function(a,b){
            this.ud(a,this.gc()+Re,b)
        };
    
        L.ib=function(a){
            var b;
            return a.R(32)&&(b=a.M())?Sp(b):l
        };
    
        L.qb=function(a,b){
            var c;
            if(a.R(32)&&(c=a.M())){
                if(!b&&a.Xg()){
                    try{
                        c.blur()
                    }catch(e){}
                    a.Xg()&&a.pb(k)
                }
                Sp(c)!=b&&Tp(c,b)
            }
        };

        L.F=function(a,b){
            gs(a,b)
        };
        Fa(L,function(a,b,c){
            var e=a.a();
            if(e){
                var f=this.bd(b);
                f&&this.ud(a,f,c);
                this.Ca(e,b,c)
            }
        });
        L.Ca=function(a,b,c){
            wt||(wt={
                1:zi,
                8:Rl,
                16:ci,
                64:Ni
            });
            (b=wt[b])&&Ss(a,b,c)
        };
    
        Aa(L,function(a,b){
            var c=this.N(a);
            if(c&&(Lp(c),b))if(O(b))if(xm in c)c.textContent=b;
                else if(c[Ob]&&3==c[Ob][cb]){
                    for(;c[ad]!=c[Ob];)c[Xc](c[ad]);
                    c[Ob].data=b
                }else Lp(c),c[Ta](zp(c)[lb](b));
            else{
                var e=function(a){
                    if(a){
                        var b=zp(c);
                        c[Ta](O(a)?b[lb](a):a)
                    }
                };
        
                qn(b)?go(b,e):rn(b)&&!(Zk in b)?go(no(b),e):e(b)
            }
        });
        L.M=function(a){
            return a.a()
        };
        L.w=function(){
            return xj
        };
    
        L.gc=function(){
            return this.w()
        };
    
        L.Zb=function(a){
            var b=this.w(),c=[b],e=this.gc();
            e!=b&&c[t](e);
            b=this.Dj(a[ld]());
            c[t][xd](c,b);
            (a=a.wa)&&c[t][xd](c,a);
            Q&&!Uo(xf)&&c[t][xd](c,this.jg(c));
            return c
        };
    
        L.jg=function(a,b){
            var c=[];
            b&&(a=a[ib]([b]));
            go([],function(e){
                jo(e,En(ko,a))&&(!b||ko(e,b))&&c[t](e[Jd](oh))
            });
            return c
        };
    
        L.Dj=function(a){
            for(var b=[];a;){
                var c=a&-a;
                b[t](this.bd(c));
                a&=~c
            }
            return b
        };
    
        L.bd=function(a){
            this.th||this.Bk();
            return this.th[a]
        };
        L.Bk=function(){
            var a=this.gc();
            this.th={
                1:a+Fe,
                2:a+Ke,
                4:a+xe,
                8:a+Se,
                16:a+Ce,
                32:a+He,
                64:a+Pe
            }
        };

        function xt(a,b){
            a||d(r("Invalid class name "+a));
            wn(b)||d(r("Invalid decorator function "+b))
        }
        var yt={};

        function zt(a,b,c){
            ct[I](this,c);
            if(!b){
                for(var b=this[Mc],e;b;){
                    e=xn(b);
                    if(e=yt[e])break;
                    b=b.b?b.b[Mc]:k
                }
                b=e?wn(e.la)?e.la():new e:k
            }
            this.k=b;
            this.Pf(a)
        }
        P(zt,ct);
        L=zt[F];
        L.ha=k;
        L.Fa=0;
        L.nc=39;
        L.Nd=255;
        L.Gd=0;
        L.n=i;
        L.wa=k;
        L.Yd=i;
        L.Zd=l;
        L.Mb=k;
        L.be=function(a){
            this.q&&a!=this.Yd&&this.Hf(a);
            this.Yd=a
        };
    
        L.M=function(){
            return this.k.M(this)
        };
    
        L.Pc=function(){
            return this.ba||(this.ba=new pt)
        };
    
        L.Gk=function(a){
            a&&(this.wa?ko(this.wa,a)||this.wa[t](a):this.wa=[a],this.k.Wg(this,a,i))
        };
        L.Jk=function(a){
            a&&this.wa&&(lo(this.wa,a),0==this.wa[D]&&(this.wa=k),this.k.Wg(this,a,l))
        };
    
        L.ud=function(a,b){
            b?this.Gk(a):this.Jk(a)
        };
    
        L.d=function(){
            var a=this.k.d(this);
            this.Tf(a);
            this.k.ki(a,this.Mb);
            this.Zd||this.k.Vc(a,l);
            this.n||this.k.F(a,l)
        };
    
        L.uf=function(a){
            this.Mb=a
        };
    
        L.N=function(){
            return this.k.N(this.a())
        };
        L.I=function(){
            zt.b.I[I](this);
            this.k.Nb(this);
            if(this.nc&-2&&(this.Yd&&this.Hf(i),this.R(32))){
                var a=this.M();
                if(a){
                    var b=this.Pc();
                    b.Kf(a);
                    this.O().h(b,wk,this.pa).h(a,Ri,this.Qc).h(a,Ih,this.pb)
                }
            }
        };

        L.Hf=function(a){
            var b=this.O(),c=this.a();
            a?(b.h(c,Tk,this.ke).h(c,Qk,this.jb).h(c,Uk,this.ob).h(c,Sk,this.je),this.uc!=mn&&b.h(c,ji,this.uc),Q&&b.h(c,si,this.Qf)):(b.W(c,Tk,this.ke).W(c,Qk,this.jb).W(c,Uk,this.ob).W(c,Sk,this.je),this.uc!=mn&&b.W(c,ji,this.uc),Q&&b.W(c,si,this.Qf))
        };
        L.T=function(){
            zt.b.T[I](this);
            this.ba&&this.ba.detach();
            this.n&&this[cd]()&&this.k.qb(this,l)
        };
    
        L.j=function(){
            zt.b.j[I](this);
            this.ba&&(this.ba.U(),delete this.ba);
            delete this.k;
            this.wa=this.ha=k
        };
    
        Aa(L,function(a){
            this.k[fc](this.a(),a);
            this.Pf(a)
        });
        L.Pf=function(a){
            this.ha=a
        };
        L.rc=function(){
            var a=this.ha;
            if(!a)return K;
            if(!O(a))if(qn(a))a=io(a,Up)[Jd](K);
                else{
                    if(tp&&qk in a)a=a.innerText[v](/(\r\n|\r|\n)/g,Pd);
                    else{
                        var b=[];
                        Vp(a,b,i);
                        a=b[Jd](K)
                    }
                    a=a[v](/ \xAD /g,Rd)[v](/\xAD/g,K);
                    a=a[v](/\u200B/g,K);
                    tp||(a=a[v](/ +/g,Rd));
                    a!=Rd&&(a=a[v](/^\s*/,K))
                }
            return Vn(a)
        };
    
        L.Wb=function(a){
            zt.b.Wb[I](this,a);
            var b=this.a();
            b&&this.k.Wb(b,a)
        };
    
        L.Vc=function(a){
            this.Zd=a;
            var b=this.a();
            b&&this.k.Vc(b,a)
        };
        L.F=function(a,b){
            if(b||this.n!=a&&this[y](a?cm:$j)){
                var c=this.a();
                c&&this.k.F(c,a);
                this[cd]()&&this.k.qb(this,a);
                this.n=a;
                return i
            }
            return l
        };
    
        L.isEnabled=function(){
            return!this.ia(1)
        };
    
        L.qa=function(a){
            this.jc(2,a)&&this[pc](2,a)
        };
    
        L.va=function(){
            return this.ia(4)
        };
    
        L.setActive=function(a){
            this.jc(4,a)&&this[pc](4,a)
        };
    
        L.Kj=function(){
            return this.ia(8)
        };
    
        L.Ve=function(a){
            this.jc(8,a)&&this[pc](8,a)
        };
    
        L.ee=function(){
            return this.ia(16)
        };
    
        L.wj=function(a){
            this.jc(16,a)&&this[pc](16,a)
        };
    
        L.Xg=function(){
            return this.ia(32)
        };
        L.nh=function(a){
            this.jc(32,a)&&this[pc](32,a)
        };
    
        L.pc=function(){
            return this.ia(64)
        };
    
        L.G=function(a){
            this.jc(64,a)&&this[pc](64,a)
        };
    
        L.getState=function(){
            return this.Fa
        };
    
        L.ia=function(a){
            return!!(this.Fa&a)
        };
    
        Fa(L,function(a,b){
            this.R(a)&&b!=this.ia(a)&&(this.k[pc](this,a,b),this.Fa=b?this.Fa|a:this.Fa&~a)
        });
        L.hh=function(a){
            this.Fa=a
        };
    
        L.R=function(a){
            return!!(this.nc&a)
        };
    
        L.ja=function(a,b){
            this.q&&(this.ia(a)&&!b)&&d(r(Zf));
            !b&&this.ia(a)&&this[pc](a,l);
            this.nc=b?this.nc|a:this.nc&~a
        };
        L.Y=function(a){
            return!!(this.Nd&a)&&this.R(a)
        };
    
        L.fk=function(a,b){
            this.Nd=b?this.Nd|a:this.Nd&~a
        };
    
        L.Wf=function(a,b){
            this.Gd=b?this.Gd|a:this.Gd&~a
        };
    
        L.jc=function(a,b){
            return this.R(a)&&this.ia(a)!=b&&(!(this.Gd&a)||this[y](et(a,b)))&&!this.kc
        };
    
        L.ke=function(a){
            (!a[Za]||!Op(this.a(),a[Za]))&&(this[y](Li)&&this[cd]()&&this.Y(2))&&this.qa(i)
        };
    
        L.je=function(a){
            if((!a[Za]||!Op(this.a(),a[Za]))&&this[y](Bk))this.Y(4)&&this[kc](l),this.Y(2)&&this.qa(l)
        };
        
        L.uc=mn;
        L.jb=function(a){
            this[cd]()&&(this.Y(2)&&this.qa(i),a.ge()&&(this.Y(4)&&this[kc](i),this.k.ib(this)&&this.M()[Hb]()));
            !this.Zd&&a.ge()&&a[pb]()
        };
    
        L.ob=function(a){
            this[cd]()&&(this.Y(2)&&this.qa(i),this.va()&&(this.rb(a)&&this.Y(4))&&this[kc](l))
        };
    
        L.Qf=function(a){
            this[cd]()&&this.rb(a)
        };
    
        L.rb=function(a){
            this.Y(16)&&this.wj(!this.ee());
            this.Y(8)&&this.Ve(i);
            this.Y(64)&&this.G(!this.pc());
            var b=new iq(th,this);
            a&&(Ga(b,a[tc]),b.ctrlKey=a[Ic],b.metaKey=a[sb],b.shiftKey=a[yd],b.Qe=a.Qe);
            return this[y](b)
        };
        L.Qc=function(){
            this.Y(32)&&this.nh(i)
        };
    
        L.pb=function(){
            this.Y(4)&&this[kc](l);
            this.Y(32)&&this.nh(l)
        };
    
        L.pa=function(a){
            return this.n&&this[cd]()&&this.ua(a)?(a[pb](),a[Nc](),i):l
        };
    
        L.ua=function(a){
            return 13==a[Mb]&&this.rb(a)
        };
    
        wn(zt)||d(r("Invalid component class "+zt));
        wn(vt)||d(r("Invalid renderer class "+vt));
        var At=xn(zt);
        yt[At]=vt;
        xt(xj,function(){
            return new zt(k)
        });
        function Bt(){
            this.vh=[]
        }
        P(Bt,vt);
        nn(Bt);
        L=Bt[F];
        L.ad=function(a){
            var b=this.vh[a];
            if(!b){
                switch(a){
                    case 0:
                        b=this.gc()+Ie;
                        break;
                    case 1:
                        b=this.gc()+Be;
                        break;
                    case 2:
                        b=this.gc()+De
                }
                this.vh[a]=b
            }
            return b
        };
    
        L.eb=function(){
            return Lk
        };
    
        L.d=function(a){
            var b=a.r().d(Ci,this.Zb(a)[Jd](Rd),this.ui(a.ha,a.r()));
            this.wi(a,b,a.R(8)||a.R(16));
            return b
        };
    
        L.N=function(a){
            return a&&a[Ob]
        };
    
        Aa(L,function(a,b){
            var c=this.N(a),e=this.me(a)?c[Ob]:k;
            Bt.b[fc][I](this,a,b);
            e&&!this.me(a)&&c[qb](e,c[Ob]||k)
        });
        L.ui=function(a,b){
            var c=this.ad(2);
            return b.d(Ci,c,a)
        };
    
        L.me=function(a){
            if(a=this.N(a)){
                var a=a[Ob],b=this.ad(1);
                return!!a&&ko(up(a),b)
            }
            return l
        };
    
        L.wi=function(a,b,c){
            if(c!=this.me(b))if(c?vp(b,Ij):wp(b,Ij),b=this.N(b),c)c=this.ad(1),b[qb](a.r().d(Ci,c),b[Ob]||k);else b[Xc](b[Ob])
        };
        
        L.bd=function(a){
            switch(a){
                case 2:
                    return this.ad(0);
                case 16:case 8:
                    return Jj;
                default:
                    return Bt.b.bd[I](this,a)
            }
        };

        L.w=function(){
            return Dj
        };
    
        function Ct(a,b,c,e){
            zt[I](this,a,e||Bt.la(),c);
            this[Cc](b)
        }
        P(Ct,zt);
        L=Ct[F];
        Ba(L,function(){
            var a=this.de;
            return a!=k?a:this.rc()
        });
        Ia(L,function(a){
            this.Wk(a)
        });
        L.rc=function(){
            var a=this.ha;
            return qn(a)?(a=io(a,function(a){
                var c=up(a);
                return ko(c,Ej)||ko(c,Fj)?K:Up(a)
            })[Jd](K),Vn(a)):Ct.b.rc[I](this)
        };
    
        L.ob=function(a){
            var b=this[Wa]();
            if(b){
                var c=b.Vf;
                b.Vf=k;
                if(b=c&&vn(a[mc]))b=new to(a[mc],a[nc]),b=c==b?i:!c||!b?l:c.x==b.x&&c.y==b.y;
                if(b)return
            }
            Ct.b.ob[I](this,a)
        };
        L.ua=function(a){
            return a[Mb]==this.eg&&this.rb(a)?i:Ct.b.ua[I](this,a)
        };
    
        L.vi=function(){
            return this.eg
        };
    
        xt(Dj,function(){
            return new Ct(k)
        });
        function Dt(a,b,c,e,f,h,j,p,s){
            var x,z;
            if(x=c[Lc]){
                var E=x[zd]==ng||x[zd]==Pf;
                if(!E||Ur(x)!=km)z=$r(x),E||(E=(E=as(x))&&Go?-x[nd]:E&&(!Q||!Uo(yf))?x[fd]-x[Dc]-x[nd]:x[nd],z=uo(z,new to(E,x[qc])))
            }
            x=z||new to;
            z=es(a);
            (E=Zr(a))&&z.pj(new Rr(E[A],E.top,E[Nd]-E[A],E[rd]-E.top));
            var E=xp(a),ea=xp(c);
            if(E.l!=ea.l){
                var ba=E.l[Wc],ea=ea.Sc(),kb=new to(0,0),ua=Fp(zp(ba)),Db=ba;
                do{
                    var Z;
                    if(ua==ea)Z=$r(Db);
                    else{
                        Z=Db;
                        var $=new to;
                        if(1==Z[cb]){
                            if(Z[Va]){
                                var U=Xr(Z);
                                $.x=U[A];
                                $.y=U.top
                            }else{
                                var U=xp(Z).Tb(),Ka=
                                $r(Z);
                                $.x=Ka.x-U.x;
                                $.y=Ka.y-U.y
                            }
                            Go&&!Uo(12)&&(U=g,U=g,Q?U=Ne:Ho?U=Ze:Fo?U=Oe:Go&&(U=Me),Ka=g,U&&(Ka=Tr(Z,U)),Ka||(Ka=Tr(Z,Im)),Ka?(Z=Ka[Ab](os),U=!Z?new to(0,0):new to(la(Z[1]),la(Z[2]))):U=new to(0,0),$=new to($.x+U.x,$.y+U.y))
                        }else U=wn(Z.oj),Ka=Z,Z[rb]?Ka=Z[rb][0]:U&&Z.V[rb]&&(Ka=Z.V[rb][0]),$.x=Ka[mc],$.y=Ka[nc];
                        Z=$
                    }
                    kb.x+=Z.x;
                    kb.y+=Z.y
                }while(ua&&ua!=ea&&(Db=ua.frameElement)&&(ua=ua.parent));
                ba=uo(kb,$r(ba));
                Q&&!E.Te()&&(ba=uo(ba,E.Tb()));
                sa(z,z[A]+ba.x);
                z.top+=ba.y
            }
            a=(b&4&&as(a)?b^2:b)&-5;
            b=new to(a&
                2?z[A]+z[u]:z[A],a&1?z.top+z[J]:z.top);
            b=uo(b,x);
            f&&(b.x+=(a&2?-1:1)*f.x,b.y+=(a&1?-1:1)*f.y);
            var N;
            if(j)if(s)N=s;
                else if(N=Zr(c))N.top-=x.y,Sa(N,N[Nd]-x.x),Pa(N,N[rd]-x.y),sa(N,N[A]-x.x);
                a:{
                    s=b[Yc]();
                    f=0;
                    a=(e&4&&as(c)?e^2:e)&-5;
                    e=cs(c);
                    p=p?p[Yc]():e[Yc]();
                    if(h||0!=a)(a&2?s.x-=p[u]+(h?h[Nd]:0):h&&(s.x+=h[A]),a&1)?s.y-=p[J]+(h?h[rd]:0):h&&(s.y+=h.top);
                    if(j){
                        if(N){
                            h=s;
                            f=0;
                            if(65==(j&65)&&(h.x<N[A]||h.x>=N[Nd]))j&=-2;
                            if(132==(j&132)&&(h.y<N.top||h.y>=N[rd]))j&=-5;
                            h.x<N[A]&&j&1&&(h.x=N[A],f|=1);
                            h.x<N[A]&&
                            (h.x+p[u]>N[Nd]&&j&16)&&(pa(p,q.max(p[u]-(h.x+p[u]-N[Nd]),0)),f|=4);
                            h.x+p[u]>N[Nd]&&j&1&&(h.x=q.max(N[Nd]-p[u],N[A]),f|=1);
                            j&2&&(f|=(h.x<N[A]?16:0)|(h.x+p[u]>N[Nd]?32:0));
                            h.y<N.top&&j&4&&(h.y=N.top,f|=2);
                            h.y>=N.top&&(h.y+p[J]>N[rd]&&j&32)&&(Ra(p,q.max(p[J]-(h.y+p[J]-N[rd]),0)),f|=8);
                            h.y+p[J]>N[rd]&&j&4&&(h.y=q.max(N[rd]-p[J],N.top),f|=2);
                            j&8&&(f|=(h.y<N.top?64:0)|(h.y+p[J]>N[rd]?128:0));
                            j=f
                        }else j=256;
                        f=j;
                        if(f&496){
                            c=f;
                            break a
                        }
                    }
                    Vr(c,s);
                    if(!(e==p||(!e||!p?0:e[u]==p[u]&&e[J]==p[J])))h=xp(zp(c)).Te(),
                        Q&&(!h||!Uo(yf))?(j=c[H],h?(Q?(h=ks(c,rl),e=ks(c,sl),s=ks(c,tl),N=ks(c,ql),h=new Or(s,e,N,h)):(h=Sr(c,rl),e=Sr(c,sl),s=Sr(c,tl),N=Sr(c,ql),h=new Or(la(s),la(e),la(N),la(h))),c=ns(c),j.pixelWidth=p[u]-c[A]-h[A]-h[Nd]-c[Nd],j.pixelHeight=p[J]-c.top-h.top-h[rd]-c[rd]):(j.pixelWidth=p[u],j.pixelHeight=p[J])):(c=c[H],Go?c.MozBoxSizing=Lh:Ho?c.WebkitBoxSizing=Lh:c.boxSizing=Lh,pa(c,q.max(p[u],0)+Bl),Ra(c,q.max(p[J],0)+Bl));
                    c=f
                }
            return c
        };

        function Et(){}
        Et[F].mc=function(){};

        function Ft(a,b,c){
            this.element=a;
            this.Xc=b;
            this.vk=c
        }
        P(Ft,Et);
        Ft[F].mc=function(a,b,c){
            Dt(this[Bd],this.Xc,a,b,g,c,this.vk)
        };
    
        function Gt(a,b,c,e){
            Ft[I](this,a,b);
            this.Id=c?5:0;
            this.of=e||g
        }
        P(Gt,Ft);
        Gt[F].kk=function(){
            return this.Id
        };
    
        Gt[F].Vk=function(a){
            this.Id=a
        };
    
        Gt[F].mc=function(a,b,c,e){
            var f=Dt(this[Bd],this.Xc,a,b,k,c,10,e,this.of);
            if(f&496){
                var h=this.Md(f,this.Xc),b=this.Md(f,b),f=Dt(this[Bd],h,a,b,k,c,10,e,this.of);
                f&496&&(h=this.Md(f,h),b=this.Md(f,b),Dt(this[Bd],h,a,b,k,c,this.Id,e,this.of))
            }
        };

        Gt[F].Md=function(a,b){
            a&48&&(b^=2);
            a&192&&(b^=1);
            return b
        };
    
        function Ht(a,b,c,e){
            Gt[I](this,a,b,c||e);
            if(c||e)this.Vk(65|(e?32:132))
        }
        P(Ht,Gt);
        var It,Jt;
        Jt=It=l;
        var Kt=Bo();
        Kt&&(-1!=Kt[w]("Firefox")||-1!=Kt[w]("Camino")||(-1!=Kt[w]("iPhone")||-1!=Kt[w]("iPod")?It=i:-1!=Kt[w]("iPad")?Jt=i:-1!=Kt[w]("Android")||-1!=Kt[w]("Chrome")||Kt[w]("Safari")));
        var Lt=It,Mt=Jt;
        function Nt(){}
        P(Nt,vt);
        nn(Nt);
        L=Nt[F];
        L.eb=function(){
            return Wh
        };
    
        L.Ca=function(a,b,c){
            16==b?Ss(a,zl,c):Nt.b.Ca[I](this,a,b,c)
        };
    
        L.d=function(a){
            var b=Nt.b.d[I](this,a),c=a.Wc();
            c&&this.$d(b,c);
            (c=a[C]())&&this[Cc](b,c);
            a.R(16)&&this.Ca(b,16,a.ee());
            return b
        };
    
        Ba(L,mn);
        Ia(L,mn);
        L.Wc=function(a){
            return a.title
        };
    
        L.$d=function(a,b){
            a&&(a.title=b||K)
        };
    
        L.w=function(){
            return vj
        };
    
        function Ot(){}
        P(Ot,Nt);
        nn(Ot);
        L=Ot[F];
        L.eb=function(){};

        L.d=function(a){
            this.Ii(a);
            return a.r().d(Wh,{
                "class":this.Zb(a)[Jd](Rd),
                disabled:!a[cd](),
                title:a.Wc()||K,
                value:a[C]()||K
            },a.rc()||K)
        };
    
        L.Nb=function(a){
            a.O().h(a.a(),ei,a.rb)
        };
    
        L.Vc=mn;
        L.Wb=mn;
        L.ib=function(a){
            return a[cd]()
        };
    
        L.qb=mn;
        Fa(L,function(a,b,c){
            Ot.b[pc][I](this,a,b,c);
            if((a=a.a())&&1==b)a.disabled=c
        });
        Ba(L,function(a){
            return a[nb]
        });
        Ia(L,function(a,b){
            a&&(a.value=b)
        });
        L.Ca=mn;
        L.Ii=function(a){
            a.be(l);
            a.fk(255,l);
            a.ja(32,l)
        };
    
        function Pt(a,b,c){
            zt[I](this,a,b||Ot.la(),c)
        }
        P(Pt,zt);
        L=Pt[F];
        Ba(L,function(){
            return this.Nf
        });
        Ia(L,function(a){
            this.Nf=a;
            this.k[Cc](this.a(),a)
        });
        L.Wc=function(){
            return this.Lf
        };
    
        L.$d=function(a){
            this.Lf=a;
            this.k.$d(this.a(),a)
        };
    
        L.j=function(){
            Pt.b.j[I](this);
            delete this.Nf;
            delete this.Lf
        };
    
        L.I=function(){
            Pt.b.I[I](this);
            if(this.R(32)){
                var a=this.M();
                a&&this.O().h(a,zk,this.ua)
            }
        };

        L.ua=function(a){
            return 13==a[Mb]&&a[B]==wk||32==a[Mb]&&a[B]==zk?this.rb(a):32==a[Mb]
        };
    
        xt(vj,function(){
            return new Pt(k)
        });
        function Qt(){}
        P(Qt,vt);
        nn(Qt);
        Qt[F].d=function(a){
            return a.r().d(Ci,this.w())
        };
    
        Aa(Qt[F],function(){});
        Qt[F].w=function(){
            return Gj
        };
    
        function Rt(a,b){
            zt[I](this,k,a||Qt.la(),b);
            this.ja(1,l);
            this.ja(2,l);
            this.ja(4,l);
            this.ja(32,l);
            this.hh(1)
        }
        P(Rt,zt);
        Rt[F].I=function(){
            Rt.b.I[I](this);
            this.a()[Tb](Ml,Sl)
        };
    
        xt(Gj,function(){
            return new Rt
        });
        function St(){}
        nn(St);
        L=St[F];
        L.eb=function(){};

        L.Of=function(a,b){
            a&&(a.tabIndex=b?0:-1)
        };
    
        L.d=function(a){
            return a.r().d(Ci,this.Zb(a)[Jd](Rd))
        };
    
        L.N=function(a){
            return a
        };
    
        L.Nb=function(a){
            a=a.a();
            is(a,i,Go);
            Q&&(a.hideFocus=i);
            var b=this.eb();
            b&&a[Tb](Ml,b)
        };
    
        L.M=function(a){
            return a.a()
        };
    
        L.w=function(){
            return wj
        };
    
        L.Zb=function(a){
            var b=this.w(),c=[b,a.Yb==bk?b+Je:b+Ye];
            a[cd]()||c[t](b+Fe);
            return c
        };
    
        function Tt(a,b,c){
            ct[I](this,c);
            this.k=b||St.la();
            this.Yb=a||Vm
        }
        P(Tt,ct);
        L=Tt[F];
        L.ce=k;
        L.ba=k;
        L.k=k;
        L.Yb=k;
        L.n=i;
        L.lb=i;
        L.Ae=i;
        L.aa=-1;
        L.J=k;
        L.ae=l;
        L.li=l;
        L.ji=i;
        L.Ba=k;
        L.M=function(){
            return this.ce||this.k.M(this)
        };
    
        L.Pc=function(){
            return this.ba||(this.ba=new pt(this.M()))
        };
    
        L.d=function(){
            this.Tf(this.k.d(this))
        };
    
        L.N=function(){
            return this.k.N(this.a())
        };
        L.I=function(){
            Tt.b.I[I](this);
            this.hb(function(a){
                a.q&&this.Af(a)
            },this);
            var a=this.a();
            this.k.Nb(this);
            this.F(this.n,i);
            this.O().h(this,Li,this.Rd).h(this,ak,this.Sd).h(this,Nm,this.Td).h(this,hl,this.Ph).h(this,fi,this.Nh).h(a,Qk,this.jb).h(zp(a),Uk,this.Oh).h(a,[Qk,Uk,Tk,Sk,ji],this.Mh);
            this.ib()&&this.Bf(i)
        };
    
        L.Bf=function(a){
            var b=this.O(),c=this.M();
            a?b.h(c,Ri,this.Qc).h(c,Ih,this.pb).h(this.Pc(),wk,this.pa):b.W(c,Ri,this.Qc).W(c,Ih,this.pb).W(this.Pc(),wk,this.pa)
        };
        L.T=function(){
            this.Pb(-1);
            this.J&&this.J.G(l);
            this.ae=l;
            Tt.b.T[I](this)
        };
    
        L.j=function(){
            Tt.b.j[I](this);
            this.ba&&(this.ba.U(),this.ba=k);
            this.k=this.J=this.Ba=this.ce=k
        };
    
        L.Rd=function(){
            return i
        };
    
        L.Sd=function(a){
            var b=this.Oc(a[$c]);
            if(-1<b&&b!=this.aa){
                var c=this.Rb();
                c&&c.qa(l);
                this.aa=b;
                c=this.Rb();
                this.ae&&c[kc](i);
                this.ji&&(this.J&&c!=this.J)&&(c.R(64)?c.G(i):this.J.G(l))
            }
            Ss(this.a(),vh,a[$c].a().id)
        };
    
        L.Td=function(a){
            a[$c]==this.Rb()&&(this.aa=-1);
            Ss(this.a(),vh,K)
        };
        L.Ph=function(a){
            if((a=a[$c])&&a!=this.J&&a[Wa]()==this)this.J&&this.J.G(l),this.J=a
        };
        
        L.Nh=function(a){
            a[$c]==this.J&&(this.J=k)
        };
    
        L.jb=function(a){
            this.lb&&this.Ob(i);
            var b=this.M();
            b&&Sp(b)?b[Hb]():a[pb]()
        };
    
        L.Oh=function(){
            this.Ob(l)
        };
    
        L.Mh=function(a){
            var b=this.Tj(a[$c]);
            if(b)switch(a[B]){
                case Qk:
                    b.jb(a);
                    break;
                case Uk:
                    b.ob(a);
                    break;
                case Tk:
                    b.ke(a);
                    break;
                case Sk:
                    b.je(a);
                    break;
                case ji:
                    b.uc(a)
            }
        };
        L.Tj=function(a){
            if(this.Ba)for(var b=this.a();a&&a!==b;){
                var c=a.id;
                if(c in this.Ba)return this.Ba[c];
                a=a[Fd]
            }
            return k
        };
    
        L.Qc=function(){};

        L.pb=function(){
            this.Pb(-1);
            this.Ob(l);
            this.J&&this.J.G(l)
        };
    
        L.pa=function(a){
            return this[cd]()&&this.n&&(0!=this.Pa()||this.ce)&&this.ua(a)?(a[pb](),a[Nc](),i):l
        };
        L.ua=function(a){
            var b=this.Rb();
            if(b&&typeof b.pa==Wi&&b.pa(a)||this.J&&this.J!=b&&typeof this.J.pa==Wi&&this.J.pa(a))return i;
            if(a[yd]||a[Ic]||a[sb]||a[tc])return l;
            switch(a[Mb]){
                case 27:
                    if(this.ib())this.M().blur();else return l;
                    break;
                case 36:
                    this.Vi();
                    break;
                case 35:
                    this.Wi();
                    break;
                case 38:
                    if(this.Yb==Vm)this.Me();else return l;
                    break;
                case 37:
                    if(this.Yb==bk)this.fe()?this.Le():this.Me();else return l;
                    break;
                case 40:
                    if(this.Yb==Vm)this.Le();else return l;
                    break;
                case 39:
                    if(this.Yb==bk)this.fe()?this.Me():
                        this.Le();else return l;
                    break;
                default:
                    return l
            }
            return i
        };
    
        L.Af=function(a){
            var b=a.a(),b=b.id||(b.id=a.Lb());
            this.Ba||(this.Ba={});
            this.Ba[b]=a
        };
    
        L.xd=function(a,b){
            Tt.b.xd[I](this,a,b)
        };
    
        L.vc=function(a,b,c){
            a.Wf(2,i);
            a.Wf(64,i);
            (this.ib()||!this.li)&&a.ja(32,l);
            a.be(l);
            Tt.b.vc[I](this,a,b,c);
            a.q&&this.q&&this.Af(a);
            b<=this.aa&&this.aa++
        };
        L.removeChild=function(a,b){
            if(a=O(a)?this.Xd(a):a){
                var c=this.Oc(a);
                -1!=c&&(c==this.aa?a.qa(l):c<this.aa&&this.aa--);
                (c=a.a())&&(c.id&&this.Ba)&&np(this.Ba,c.id)
            }
            a=Tt.b[Xc][I](this,a,b);
            a.be(i);
            return a
        };
    
        L.F=function(a,b){
            if(b||this.n!=a&&this[y](a?cm:$j)){
                this.n=a;
                var c=this.a();
                c&&(gs(c,a),this.ib()&&this.k.Of(this.M(),this.lb&&this.n),b||this[y](this.n?yh:xh));
                return i
            }
            return l
        };
    
        L.isEnabled=function(){
            return this.lb
        };
    
        L.ib=function(){
            return this.Ae
        };
        L.qb=function(a){
            a!=this.Ae&&this.q&&this.Bf(a);
            this.Ae=a;
            this.lb&&this.n&&this.k.Of(this.M(),a)
        };
    
        L.Pb=function(a){
            (a=this.Qa(a))?a.qa(i):-1<this.aa&&this.Rb().qa(l)
        };
    
        L.qa=function(a){
            this.Pb(this.Oc(a))
        };
    
        L.Rb=function(){
            return this.Qa(this.aa)
        };
    
        L.Vi=function(){
            this.Kd(function(a,b){
                return(a+1)%b
            },this.Pa()-1)
        };
    
        L.Wi=function(){
            this.Kd(function(a,b){
                a--;
                return 0>a?b-1:a
            },0)
        };
    
        L.Le=function(){
            this.Kd(function(a,b){
                return(a+1)%b
            },this.aa)
        };
    
        L.Me=function(){
            this.Kd(function(a,b){
                a--;
                return 0>a?b-1:a
            },this.aa)
        };
        L.Kd=function(a,b){
            for(var c=0>b?this.Oc(this.J):b,e=this.Pa(),c=a[I](this,c,e),f=0;f<=e;){
                var h=this.Qa(c);
                if(h&&this.Vg(h))return this.Cj(c),i;
                f++;
                c=a[I](this,c,e)
            }
            return l
        };
    
        L.Vg=function(a){
            return a.n&&a[cd]()&&a.R(2)
        };
    
        L.Cj=function(a){
            this.Pb(a)
        };
    
        L.Ob=function(a){
            this.ae=a
        };
    
        function Ut(){}
        P(Ut,vt);
        nn(Ut);
        Ut[F].w=function(){
            return Cj
        };
    
        function Vt(a,b,c){
            zt[I](this,a,c||Ut.la(),b);
            this.ja(1,l);
            this.ja(2,l);
            this.ja(4,l);
            this.ja(32,l);
            this.hh(1)
        }
        P(Vt,zt);
        xt(Cj,function(){
            return new Vt(k)
        });
        function Wt(){}
        P(Wt,St);
        nn(Wt);
        Wt[F].eb=function(){
            return Kk
        };
    
        Wt[F].sb=function(a,b){
            return Op(a.a(),b)
        };
    
        Wt[F].w=function(){
            return Aj
        };
    
        Wt[F].Nb=function(a){
            Wt.b.Nb[I](this,a);
            Ss(a.a(),Vj,Km)
        };
    
        xt(Gj,function(){
            return new Rt
        });
        function Xt(a,b){
            Tt[I](this,Vm,b||Wt.la(),a);
            this.qb(l)
        }
        P(Xt,Tt);
        L=Xt[F];
        L.qe=i;
        L.Ej=l;
        L.w=function(){
            return this.k.w()
        };
    
        L.sb=function(a){
            if(this.k.sb(this,a))return i;
            for(var b=0,c=this.Pa();b<c;b++){
                var e=this.Qa(b);
                if(typeof e.sb==Wi&&e.sb(a))return i
            }
            return l
        };
    
        L.Ua=function(a){
            this.xd(a,i)
        };
    
        L.bc=function(a,b){
            this.vc(a,b,i)
        };
    
        L.Hc=function(a){
            return this.Qa(a)
        };
    
        L.tf=function(){
            return this.Pa()
        };
        L.hc=function(a,b){
            var c=this.n;
            c||gs(this.a(),i);
            var e=this.a(),f=a,h=b,j=$r(e);
            f instanceof to&&(h=f.y,f=f.x);
            Vr(e,e[Rc]+(f-j.x),e[Hd]+(h-j.y));
            c||gs(this.a(),l)
        };
    
        L.pi=function(a){
            (this.qe=a)&&this.qb(i)
        };
    
        L.F=function(a,b,c){
            (b=Xt.b.F[I](this,a,b))&&(a&&this.q&&this.qe)&&this.M()[Hb]();
            this.Vf=a&&c&&vn(c[mc])?new to(c[mc],c[nc]):k;
            return b
        };
    
        L.Rd=function(a){
            this.qe&&this.M()[Hb]();
            return Xt.b.Rd[I](this,a)
        };
    
        L.Vg=function(a){
            return(this.Ej||a[cd]())&&a.n&&a.R(2)
        };
        L.ua=function(a){
            var b=Xt.b.ua[I](this,a);
            b||this.hb(function(c){
                !b&&(c.vi&&c.eg==a[Mb])&&(this[cd]()&&this.qa(c),b=c.pa(a))
            },this);
            return b
        };
    
        function Yt(){}
        P(Yt,Nt);
        nn(Yt);
        L=Yt[F];
        L.d=function(a){
            var b={
                "class":zj+this.Zb(a)[Jd](Rd),
                title:a.Wc()||K
            },b=a.r().d(Ci,b,this.he(a.ha,a.r()));
            this.kg(a,b);
            return b
        };
    
        L.eb=function(){
            return Wh
        };
    
        L.N=function(a){
            return a&&a[Ob][Ob]
        };
    
        L.he=function(a,b){
            return b.d(Ci,zj+(this.w()+Qe),b.d(Ci,zj+(this.w()+Le),a))
        };
    
        L.w=function(){
            return yj
        };
    
        function Zt(){}
        P(Zt,Yt);
        nn(Zt);
        Go&&Aa(Zt[F],function(a,b){
            var c=Zt.b.N[I](this,a&&a[Ob]);
            if(c){
                var e=this.createCaption(b,xp(a)),f=c[Fd];
                f&&f.replaceChild(e,c)
            }
        });
        L=Zt[F];
        L.N=function(a){
            a=Zt.b.N[I](this,a&&a[Ob]);
            Go&&(a&&a.__goog_wrapper_div)&&(a=a[Ob]);
            return a
        };
    
        L.he=function(a,b){
            return Zt.b.he[I](this,[this.createCaption(a,b),this.$i(b)],b)
        };
    
        L.createCaption=function(a,b){
            return b.d(Ci,zj+(this.w()+Ae),a)
        };
    
        L.$i=function(a){
            return a.d(Ci,zj+(this.w()+Ge),gn)
        };
    
        L.w=function(){
            return Bj
        };
    
        function $t(a,b,c,e){
            Pt[I](this,a,c||Zt.la(),e);
            this.ja(64,i);
            this.Rc=new Ht(k,5);
            b&&this.Tc(b);
            this.ci=k;
            this.$=new Eq(500);
            (Lt||Mt)&&!Uo(wf)&&this.Aj(i)
        }
        P($t,Pt);
        L=$t[F];
        L.Mc=l;
        L.Sh=l;
        L.I=function(){
            $t.b.I[I](this);
            this.e&&this.Nc(this.e,i);
            Ss(this.a(),Vj,Km)
        };
    
        L.T=function(){
            $t.b.T[I](this);
            if(this.e){
                this.G(l);
                this.e.T();
                this.Nc(this.e,l);
                var a=this.e.a();
                a&&Np(a)
            }
        };

        L.j=function(){
            $t.b.j[I](this);
            this.e&&(this.e.U(),delete this.e);
            delete this.Qh;
            this.$.U()
        };
        L.jb=function(a){
            $t.b.jb[I](this,a);
            this.va()&&(this.G(!this.pc(),a),this.e&&this.e.Ob(this.pc()))
        };
    
        L.ob=function(a){
            $t.b.ob[I](this,a);
            this.e&&!this.va()&&this.e.Ob(l)
        };
    
        L.rb=function(){
            this[kc](l);
            return i
        };
    
        L.gi=function(a){
            this.e&&(this.e.n&&!this.sb(a[$c]))&&this.G(l)
        };
    
        L.sb=function(a){
            return a&&Op(this.a(),a)||this.e&&this.e.sb(a)||l
        };
        L.ua=function(a){
            if(32==a[Mb]){
                if(a[pb](),a[B]!=zk)return i
            }else if(a[B]!=wk)return l;
            if(this.e&&this.e.n){
                var b=this.e.pa(a);
                return 27==a[Mb]?(this.G(l),i):b
            }
            return 40==a[Mb]||38==a[Mb]||32==a[Mb]?(this.G(i),i):l
        };
    
        L.re=function(){
            this.G(l)
        };
    
        L.hi=function(){
            this.va()||this.G(l)
        };
    
        L.pb=function(a){
            this.Mc||this.G(l);
            $t.b.pb[I](this,a)
        };
    
        L.sc=function(){
            this.e||this.Tc(new Xt(this.r()));
            return this.e||k
        };
        L.Tc=function(a){
            var b=this.e;
            if(a!=b&&(b&&(this.G(l),this.q&&this.Nc(b,l),delete this.e),a))this.e=a,a.Ud(this),a.F(l),a.pi(this.Mc),this.q&&this.Nc(a,i);
            return b
        };
    
        L.Ua=function(a){
            this.sc().xd(a,i)
        };
    
        L.bc=function(a,b){
            this.sc().vc(a,b,i)
        };
    
        L.Hc=function(a){
            return this.e?this.e.Qa(a):k
        };
    
        L.tf=function(){
            return this.e?this.e.Pa():0
        };
    
        L.F=function(a,b){
            var c=$t.b.F[I](this,a,b);
            c&&!this.n&&this.G(l);
            return c
        };
    
        L.fi=function(){
            return this.Rc.kk&&!!(this.Rc.Id&32)
        };
    
        L.Aj=function(a){
            this.Mc=a
        };
        L.G=function(a,b){
            $t.b.G[I](this,a);
            if(this.e&&this.ia(64)==a){
                if(a)this.e.q||(this.Sh?this.e.kb(this.a()[Fd]):this.e.kb()),this.nb=Zr(this.a()),this.mb=es(this.a()),this.Ff(),this.e.Pb(-1);
                else if(this[kc](l),this.e.Ob(l),this.a()&&Ss(this.a(),vh,K),this.Kc!=k){
                    this.Kc=g;
                    var c=this.e.a();
                    c&&bs(c,K,K)
                }
                this.e.F(a,l,b);
                this.kc||this.Rh(a)
            }
        };
        L.Ff=function(){
            if(this.e.q){
                var a=this.Rc;
                this.Rc.element=this.Qh||this.a();
                var b=this.e.a();
                this.e.n||(Ea(b[H],Yj),gs(b,i));
                !this.Kc&&this.fi()&&(this.Kc=cs(b));
                a.mc(b,a.Xc^1,this.ci,this.Kc);
                this.e.n||(gs(b,l),Ea(b[H],Wm))
            }
        };
        L.ii=function(){
            var a=es(this.a()),b=Zr(this.a());
            if(!(this.mb==a||(!this.mb||!a?0:this.mb[A]==a[A]&&this.mb[u]==a[u]&&this.mb.top==a.top&&this.mb[J]==a[J]))||!(this.nb==b||(!this.nb||!b?0:this.nb.top==b.top&&this.nb[Nd]==b[Nd]&&this.nb[rd]==b[rd]&&this.nb[A]==b[A])))this.mb=a,this.nb=b,this.Ff()
        };
        
        L.Nc=function(a,b){
            var c=this.O(),e=b?c.h:c.W;
            e[I](c,a,th,this.re);
            e[I](c,a,ak,this.Sd);
            e[I](c,a,Nm,this.Td)
        };
    
        L.Sd=function(a){
            Ss(this.a(),vh,a[$c].a().id)
        };
    
        L.Td=function(){
            this.e.Rb()||Ss(this.a(),vh,K)
        };
        L.Rh=function(a){
            var b=this.O(),c=a?b.h:b.W;
            c[I](b,this.r().l,Qk,this.gi,i);
            this.Mc&&c[I](b,this.e,Ih,this.hi);
            c[I](b,this.$,ym,this.ii);
            a?this.$.start():this.$[rc]()
        };
    
        xt(Bj,function(){
            return new $t(k)
        });
        function au(a){
            this.Cb=[];
            this.pk(a)
        }
        P(au,Dq);
        L=au[F];
        L.Db=k;
        L.Ah=k;
        L.tf=function(){
            return this.Cb[D]
        };
    
        L.sk=function(a){
            return a?fo(this.Cb,a):-1
        };
    
        L.Hc=function(a){
            return this.Cb[a]||k
        };
    
        L.pk=function(a){
            a&&(go(a,function(a){
                this.Ld(a,l)
            },this),oo(this.Cb,a))
        };
    
        L.Ua=function(a){
            this.bc(a,this.tf())
        };
    
        L.bc=function(a,b){
            a&&(this.Ld(a,l),po(this.Cb,b,0,a))
        };
    
        L.Bc=function(){
            return this.Db
        };
    
        L.Fb=function(a){
            a!=this.Db&&(this.Ld(this.Db,l),this.Db=a,this.Ld(a,i));
            this[y](Ql)
        };
    
        L.gd=function(){
            return this.sk(this.Db)
        };
        L.wh=function(a){
            this.Fb(this.Hc(a))
        };
    
        L.clear=function(){
            var a=this.Cb;
            if(!qn(a))for(var b=a[D]-1;0<=b;b--)delete a[b];
            Ha(a,0);
            this.Db=k
        };
    
        L.j=function(){
            au.b.j[I](this);
            delete this.Cb;
            this.Db=k
        };
    
        L.Ld=function(a,b){
            a&&(typeof this.Ah==Wi?this.Ah(a,b):typeof a.Ve==Wi&&a.Ve(b))
        };
    
        function bu(a,b,c,e){
            $t[I](this,a,b,c,e);
            this.Ak(a);
            this.uf(Ek)
        }
        P(bu,$t);
        L=bu[F];
        L.u=k;
        L.oe=k;
        L.I=function(){
            bu.b.I[I](this);
            this.ie();
            this.Mf();
            Ss(this.a(),Vj,Oi)
        };
    
        L.j=function(){
            bu.b.j[I](this);
            this.u&&(this.u.U(),this.u=k);
            this.oe=k
        };
    
        L.re=function(a){
            this.Fb(a[$c]);
            bu.b.re[I](this,a);
            a[Nc]();
            this[y](th)
        };
    
        L.aj=function(){
            var a=this.Bc();
            bu.b[Cc][I](this,a&&a[C]());
            this.ie()
        };
        L.Tc=function(a){
            var b=bu.b.Tc[I](this,a);
            a!=b&&(this.u&&this.u.clear(),a&&(this.u?a.hb(function(a){
                this.fd(a);
                this.u.Ua(a)
            },this):this.se(a)));
            return b
        };
    
        L.Ak=function(a){
            this.oe=a;
            this.ie()
        };
    
        L.Ua=function(a){
            this.fd(a);
            bu.b.Ua[I](this,a);
            this.u?this.u.Ua(a):this.se(this.sc())
        };
    
        L.bc=function(a,b){
            this.fd(a);
            bu.b.bc[I](this,a,b);
            this.u?this.u.bc(a,b):this.se(this.sc())
        };
    
        L.Fb=function(a){
            if(this.u){
                var b=this.Bc();
                this.u.Fb(a);
                a!=b&&this[y](Zh)
            }
        };

        L.wh=function(a){
            this.u&&this.Fb(this.u.Hc(a))
        };
        Ia(L,function(a){
            if(a!=k&&this.u)for(var b=0,c;c=this.u.Hc(b);b++)if(c&&typeof c[C]==Wi&&c[C]()==a){
                this.Fb(c);
                return
            }
            this.Fb(k)
        });
        L.Bc=function(){
            return this.u?this.u.Bc():k
        };
    
        L.gd=function(){
            return this.u?this.u.gd():-1
        };
    
        L.se=function(a){
            this.u=new au;
            a&&a.hb(function(a){
                this.fd(a);
                this.u.Ua(a)
            },this);
            this.Mf()
        };
    
        L.Mf=function(){
            this.u&&this.O().h(this.u,Ql,this.aj)
        };
    
        L.ie=function(){
            var a=this.Bc();
            this[fc](a?a.rc():this.oe)
        };
    
        L.fd=function(a){
            a.uf(a instanceof Ct?il:Sl)
        };
        L.G=function(a,b){
            bu.b.G[I](this,a,b);
            this.pc()&&this.sc().Pb(this.gd())
        };
    
        xt("goog-select",function(){
            return new bu(k)
        });
        function cu(a,b){
            this.Ta=xp();
            this.tc=a;
            this.ah=[];
                a:{
                    for(var c=ps()+lf,e=ga[lc](xg),f=0;f<e[D];f++)if(e[f]&&e[f][td]&&e[f][td]==c)break a;e=ga[Ib](Dk);
                    e.href=c;
                    e.rel=om;
                    za(e,vm);
                    if(0==ga[lc](Wj)[D]){
                        var c=ga[lc](ck)[0],f=ga[lc](Jh)[0],h=ga[Ib](Wj);
                        c[qb](h,f)
                    }
                    ga[lc](Wj)[0][Ta](e)
                }
            this.bk(b)
        }
        L=cu[F];
        L.ac=k;
        function du(a,b){
            var c=xp(),e,f,h=k;
            switch(a){
                case 2:
                    e=new gt(Pj);
                    h=Cl+e.Lb();
                    f=c.d(Ci,k,c.d(Ci,{
                        "class":Oj
                    },ag),c.d(Vh,k),c.d(yl,k,c.d(Ci,{
                        id:h
                    },b[Sc])));
                    break;
                case 3:
                    e=new gt(Kj);
                    f=c.d(Ci,k,c.d(Ci,{
                        "class":Oj
                    },ag),c.d(Vh,k));
                    var j=c.d(Ci,k,c.d(yl,k,b[Sc]));
                    c[Ta](f,j)
            }
            e[fc](f.innerHTML);
            qa(e.Yi(),kg);
            qa(e.Xi(),K);
            e.F(i);
            h&&(c=Ap(h),(Q&&!Wo(9)?Os(c,0,c,1):Ho?new Rs(Ks(c,0,c,1)):Go?new Ls(Ks(c,0,c,1)):Fo?new Qs(Ks(c,0,c,1)):new Hs(Ks(c,0,c,1))).select())
        }
        L.bk=function(a){
            var a=a||[],b=this.tc,c=this.Ta;
            c.og(b);
            b||d(r("Container is not defined"));
            var e=c.d(gm,k),f=[c.d(gm,k,Xf),c.d(Ci,{
                "class":Qj
            },jn)];
            this.ac=new bu(f);
            if(a)for(f=0;f<a[D];f++){
                var h=k,j=a[f],p=j.datasource,s=j.gadget,x=j.userprefs,z=j[G],E=j[ol],ea=j[H]||Zm;
                switch(j[B]){
                    case ni:
                        h=this.Dc(f,En(function(a){
                            ca[Xa]((new Nq(a)).hd(Hm,kl),lg)
                        },p),gg,Lj);
                        break;
                    case dk:
                        h=this.Dc(f,En(function(a,b){
                            du(2,{
                                message:Ff+ea+Zd+aa(a)+ne+aa(b)+eu(x)+Yd
                            })
                        },s,p),Lg,Nj);
                        break;
                    case uk:
                        h=this.Dc(f,En(function(a,
                            b,c){
                            du(3,{
                                message:Ef+aa(b)+pe+a+oe+aa(c)+re
                            })
                        },p,E,z),vg,Nj);
                        break;
                    case ck:
                        h=this.Dc(f,En(function(a){
                            ca[Xa]((new Nq(a)).hd(Hm,ll),lg)
                        },p),hg,Lj);
                        break;
                    case nk:
                        h=this.Dc(f,En(function(a,b,c){
                            ca[Xa](ik+aa(a)+ne+aa(b)+eu(c))
                        },s,p,x),Nf,Mj);
                        break;
                    default:
                        d(r("No such toolbar component as: "+j.toSource()))
                }
                h&&this.ac.Ua(h)
            }
            sq(this.ac,th,Dn(this.Ai,this));
            this.ac.kb(e);
            c[Ta](b,e)
        };
    
        L.gk=function(){
            this.ac.wh(-1)
        };
    
        L.Ai=function(){
            var a=this.ac.gd();
            this.ah[a]();
            this.gk()
        };
        L.Dc=function(a,b,c){
            c=new Ct(c);
            this.ah[a]=b;
            return c
        };
    
        function eu(a){
            if(!a)return K;
            var b=K,c;
            for(c in a)b+=me+c+Hf+aa(a[c]);return b
        };
    
        m("google.visualization.drawChart",As);
        m("google.visualization.drawFromUrl",function(a,b){
            var c=new Nq(b||ga[Pc][td]),e=c.jh(vk),f;
            e!=k?f=e:(f={},go(c.fa.Kb(),function(a){
                var b=c.jh(a);
                try{
                    b!=k&&(b=Rn(b))
                }catch(e){}
                f[a]=b
            }),f.options=An(f));
            As(f,a)
        });
        m("google.visualization.createUrl",function(a,b){
            O(a)&&(a=Rn(a));
            var c=[],e,f;
            for(f in a)if(f==jl){
                var h=a[f],j;
                for(j in h)e=h[j],O(e)||(e=On(e)),c[t](j+Hf+aa(ma(e)))
            }else e=a[f],O(e)||(e=wn(e[Bc])?e[Bc]():On(e)),c[t](f+Hf+aa(ma(e)));e=ps()+gf;
            e=e[v](/^https?:/,K);
            c=(b||e)+Jf+c[Jd](ge);
            c=c[v](/'/g,fe);
            return c=c[v](/"/g,ee)
        });
        m("google.visualization.createSnippet",function(a){
            var b=ps()+hf,b=b[v](/^https?:/,K),b=Gf+b+ae,a=Bs(a)[Bc](),a=a[v](/</g,je),a=a[v](/>/g,ie);
            return b=b+a+Qd
        });
        m("google.visualization.createWrapper",Bs);
        m("google.visualization.ChartWrapper",W);
        n(W[F],Gi,W[F][hd]);
        n(W[F],Bm,W[F][Bc]);
        n(W[F],sj,W[F].getSnapshot);
        n(W[F],gj,W[F][Zc]);
        n(W[F],hj,W[F][ob]);
        n(W[F],"getChartName",W[F].getChartName);
        n(W[F],"getChartType",W[F].getChartType);
        n(W[F],"getChart",W[F].getChart);
        n(W[F],fj,W[F][qd]);
        n(W[F],nj,W[F][pd]);
        n(W[F],oj,W[F][vd]);
        n(W[F],pj,W[F][kd]);
        n(W[F],"getView",W[F][wc]);
        n(W[F],"getOption",W[F][bd]);
        n(W[F],"getOptions",W[F][gb]);
        n(W[F],"getState",W[F][ld]);
        n(W[F],"pushView",W[F].pushView);
        n(W[F],"sendQuery",W[F].sendQuery);
        n(W[F],Xl,W[F][Gc]);
        n(W[F],Yl,W[F][dd]);
        n(W[F],"setChart",W[F].setChart);
        n(W[F],"setChartName",W[F].setChartName);
        n(W[F],"setChartType",W[F].setChartType);
        n(W[F],Wl,W[F].setContainerId);
        n(W[F],$l,W[F].setPackages);
        n(W[F],am,W[F][Vc]);
        n(W[F],bm,W[F][Zb]);
        n(W[F],"setView",W[F][Uc]);
        n(W[F],"setOption",W[F][Od]);
        n(W[F],Zl,W[F].setOptions);
        n(W[F],"setState",W[F][pc]);
        m("google.visualization.ControlWrapper",X);
        n(X[F],Gi,X[F][hd]);
        n(X[F],Bm,X[F][Bc]);
        n(X[F],sj,X[F].getSnapshot);
        n(X[F],gj,X[F][Zc]);
        n(X[F],hj,X[F][ob]);
        n(X[F],"getControlName",X[F].getControlName);
        n(X[F],"getControlType",X[F].getControlType);
        n(X[F],"getControl",X[F].getControl);
        n(X[F],fj,X[F][qd]);
        n(X[F],nj,X[F][pd]);
        n(X[F],oj,X[F][vd]);
        n(X[F],pj,X[F][kd]);
        n(X[F],"getView",X[F][wc]);
        n(X[F],"getOption",X[F][bd]);
        n(X[F],"getOptions",X[F][gb]);
        n(X[F],"getState",X[F][ld]);
        n(X[F],"sendQuery",X[F].sendQuery);
        n(X[F],Xl,X[F][Gc]);
        n(X[F],Yl,X[F][dd]);
        n(X[F],"setControlName",X[F].setControlName);
        n(X[F],"setControlType",X[F].setControlType);
        n(X[F],Wl,X[F].setContainerId);
        n(X[F],$l,X[F].setPackages);
        n(X[F],am,X[F][Vc]);
        n(X[F],bm,X[F][Zb]);
        n(X[F],"setView",X[F][Uc]);
        n(X[F],"setOption",X[F][Od]);
        n(X[F],Zl,X[F].setOptions);
        n(X[F],"setState",X[F][pc]);
        m("google.visualization.DashboardWrapper",Y);
        n(Y[F],Gi,Y[F][hd]);
        n(Y[F],Bm,Y[F][Bc]);
        n(Y[F],"getBindings",Y[F].getBindings);
        n(Y[F],gj,Y[F][Zc]);
        n(Y[F],hj,Y[F][ob]);
        n(Y[F],"getDashboard",Y[F].getDashboard);
        n(Y[F],"getDashboardName",Y[F].getDashboardName);
        n(Y[F],fj,Y[F][qd]);
        n(Y[F],nj,Y[F][pd]);
        n(Y[F],oj,Y[F][vd]);
        n(Y[F],pj,Y[F][kd]);
        n(Y[F],"getView",Y[F][wc]);
        n(Y[F],"getWrappers",Y[F].getWrappers);
        n(Y[F],"setBindings",Y[F].setBindings);
        n(Y[F],Xl,Y[F][Gc]);
        n(Y[F],Yl,Y[F][dd]);
        n(Y[F],"setDashboardName",Y[F].setDashboardName);
        n(Y[F],Wl,Y[F].setContainerId);
        n(Y[F],$l,Y[F].setPackages);
        n(Y[F],am,Y[F][Vc]);
        n(Y[F],bm,Y[F][Zb]);
        n(Y[F],"setView",Y[F][Uc]);
        n(Y[F],sj,Y[F].getSnapshot);
        n(Y[F],"setWrappers",Y[F].setWrappers);
        m("google.visualization.drawToolbar",function(a,b){
            new cu(a,b)
        });
        m("google.visualization.data.avg",function(a){
            return Cs(a)/a[D]
        });
        m("google.visualization.data.count",function(a){
            return a[D]
        });
        m("google.visualization.data.group",function(a,b,c){
            function e(a,b,c,e){
                return b[I](k,c[C](e,a))
            }
            var f=[],h=[];
            go(b,function(a){
                if(vn(a))f[t](a);
                else if(on(a)==el){
                    var b=a.column;
                    Pk in a&&h[t]([b,{
                        calc:En(e,b,a.modifier),
                        type:a[B],
                        label:a[Gd],
                        id:a.id
                    }]);
                    f[t](b)
                }
            });
            if(0!=h[D]){
                for(var j=new google[G][jd](a),p=j.getViewColumns(),s=a[xc](),x=0;x<s;x++)go(h,function(a){
                    p[a[0]]=a[1]
                });
                j[Kd](p);
                a=j
            }
            var z=new google[G].DataTable,E=[];
            go(f,function(c,e){
                var f=a[Nb](c),h=b[e][Gd]||a[Jb](c);
                z[Ad](f,h,b[e].id);
                E[t](f)
            });
            c=c||[];
            go(c,function(b){
                var c=b.column,c=b[Gd]||a[Jb](c);
                z[Ad](b[B],c,b.id)
            });
            var ea=[];
            go(f,function(a){
                ea[t]({
                    column:a
                })
            });
            for(var ba=a[Pb](ea),kb=[],ua=0;ua<c[D];ua++)kb[t]([]);
            for(ua=0;ua<ba[D];ua++){
                go(c,function(b,c){
                    kb[c][t](a[C](ba[ua],b.column))
                });
                j=l;
                if(ua<ba[D]-1){
                    j=i;
                    for(s=0;s<f[D];s++){
                        var x=a[C](ba[ua],f[s]),Db=a[C](ba[ua+1],f[s]);
                        if(0!=google[G].datautils.compareValues(E[s],x,Db)){
                            j=l;
                            break
                        }
                    }
                }
                if(!j){
                    var Z=z.addRow();
                    go(f,function(b,c){
                        z[Cc](Z,c,a[C](ba[ua],b))
                    });
                    var $=b[D];
                    go(c,function(a,b){
                        var c=a.aggregation[I](k,kb[b]);
                        z[Cc](Z,$+b,c)
                    });
                    for(j=0;j<c[D];j++)kb[j]=[]
                }
            }
            return z
        });
        m("google.visualization.data.join",function(a,b,c,e,f,h){
            var j=c==Ck||c==Vi,p=c==Ll||c==Vi,s=new google[G].DataTable,x=[];
            go(e,function(c){
                var e=a[Nb](c[0]),f=b[Nb](c[1]);
                e!=f&&d(r("Key types do not match:"+e+we+f));
                f=s[Ad](e,a[Jb](c[0]));
                s[xb](f,a[vb](c[0]));
                x[t](e)
            });
            var z=[],E=[];
            go(e,function(a){
                z[t]({
                    column:a[0]
                });
                E[t]({
                    column:a[1]
                })
            });
            var ea=a[Pb](z),ba=b[Pb](E);
            go(f,function(b){
                var c=s[Ad](a[Nb](b),a[Jb](b));
                s[xb](c,a[vb](b))
            });
            go(h,function(a){
                var c=s[Ad](b[Nb](a),b[Jb](a));
                s[xb](c,b[vb](a))
            });
            for(var kb=l,ua=0,Db=0,Z=0;ua<ea[D]||Db<ba[D];){
                var $=0,U=[];
                if(Db>=ba[D])if(j)U[0]=ea[ua],$=-1;else break;
                else if(ua>=ea[D])if(p)U[1]=ba[Db],$=1;else break;
                else{
                    U[0]=ea[ua];
                    U[1]=ba[Db];
                    for(var Ka=0;Ka<e[D];Ka++){
                        var $=a[C](U[0],e[Ka][0]),N=b[C](U[1],e[Ka][1]),$=google[G].datautils.compareValues(x[Ka],$,N);
                        if(0!=$)break
                    }
                }
                if(kb&&0!=$)kb=l,Db++;
                else{
                    if(-1==$&&j||1==$&&p||0==$){
                        s.addRow();
                        var Ue,ic;
                        -1==$&&j||0==$&&c!=Ll?(Ue=a,ic=0):(Ue=b,ic=1);
                        go(e,function(a,b){
                            c==Vi?s[Cc](Z,b,Ue[C](U[ic],a[ic])):s[cc](Z,
                                b,Ue[C](U[ic],a[ic]),Ue[Dd](U[ic],a[ic]),Ue[zc](U[ic],a[ic]))
                        });
                        if(-1==$&&j||0==$){
                            var Zj=e[D];
                            go(f,function(b,c){
                                s[cc](Z,c+Zj,a[C](U[0],b),a[Dd](U[0],b),a[zc](U[0],b))
                            })
                        }
                        if(1==$&&p||0==$)Zj=f[D]+e[D],go(h,function(a,c){
                            s[cc](Z,c+Zj,b[C](U[1],a),b[Dd](U[1],a),b[zc](U[1],a))
                        });
                        Z++
                    }
                    1==$?Db++:ua++;
                    0==$&&(kb=i)
                }
            }
            return s
        });
        m("google.visualization.data.max",function(a){
            if(0==a[D])return k;
            for(var b=a[0],c=1;c<a[D];c++){
                var e=a[c];
                e!=k&&e>b&&(b=e)
            }
            return b
        });
        m("google.visualization.data.min",function(a){
            if(0==a[D])return k;
            for(var b=a[0],c=1;c<a[D];c++){
                var e=a[c];
                e!=k&&e<b&&(b=e)
            }
            return b
        });
        m("google.visualization.data.month",function(a){
            return a[uc]()+1
        });
        m("google.visualization.data.sum",Cs);
        m("__gvizguard__",i);
        m("google.visualization.Query",or);
        n(or[F],Gk,or[F].makeRequest);
        n(or[F],bm,or[F][Zb]);
        n(or[F],am,or[F][Vc]);
        n(or[F],"send",or[F][Cb]);
        n(or[F],"setRefreshable",or[F].setRefreshable);
        n(or[F],"setTimeout",or[F][Fc]);
        n(or[F],"setHandlerType",or[F].Uk);
        n(or[F],"setHandlerParameter",or[F].Bh);
        n(or,"setResponse",xr);
        n(or[F],rh,or[F][Ec]);
        m("google.visualization.QueryResponse",jr);
        n(jr[F],hj,jr[F][ob]);
        n(jr[F],"isError",jr[F][Gb]);
        n(jr[F],"hasWarning",jr[F].hasWarning);
        n(jr[F],"getReasons",jr[F].getReasons);
        n(jr[F],"getMessage",jr[F].getMessage);
        n(jr[F],"getDetailedMessage",jr[F].getDetailedMessage);
        m("google.visualization.DataTable",S);
        n(S[F],"addColumn",S[F][Ad]);
        n(S[F],"addRow",S[F].addRow);
        n(S[F],"addRows",S[F][jc]);
        n(S[F],"clone",S[F][Yc]);
        n(S[F],"getColumnId",S[F].getColumnId);
        n(S[F],$i,S[F].getColumnIndex);
        n(S[F],aj,S[F][Jb]);
        n(S[F],bj,S[F][Oc]);
        n(S[F],dj,S[F][Kc]);
        n(S[F],cj,S[F][vb]);
        n(S[F],ej,S[F].getColumnRange);
        n(S[F],"getColumnRole",S[F].getColumnRole);
        n(S[F],"getColumnType",S[F][Nb]);
        n(S[F],ij,S[F].getDistinctValues);
        n(S[F],jj,S[F].getFilteredRows);
        n(S[F],kj,S[F][Dd]);
        n(S[F],lj,S[F][mb]);
        n(S[F],mj,S[F][xc]);
        n(S[F],"getProperties",S[F][zc]);
        n(S[F],"getProperty",S[F].getProperty);
        n(S[F],rj,S[F].getRowProperty);
        n(S[F],qj,S[F][Xb]);
        n(S[F],"getSortedRows",S[F][Pb]);
        n(S[F],uj,S[F].getTableProperty);
        n(S[F],tj,S[F][Yb]);
        n(S[F],"getValue",S[F][C]);
        n(S[F],"insertColumn",S[F].insertColumn);
        n(S[F],"insertRows",S[F].insertRows);
        n(S[F],"removeColumn",S[F].removeColumn);
        n(S[F],"removeColumns",S[F].removeColumns);
        n(S[F],"removeRow",S[F].removeRow);
        n(S[F],"removeRows",S[F].removeRows);
        n(S[F],"setCell",S[F][cc]);
        n(S[F],"setColumnLabel",S[F].setColumnLabel);
        n(S[F],"setColumnProperties",S[F][xb]);
        n(S[F],"setColumnProperty",S[F].setColumnProperty);
        n(S[F],"setFormattedValue",S[F].setFormattedValue);
        n(S[F],"setProperties",S[F].setProperties);
        n(S[F],"setProperty",S[F].setProperty);
        n(S[F],"setRowProperties",S[F].setRowProperties);
        n(S[F],"setRowProperty",S[F].setRowProperty);
        n(S[F],"setTableProperties",S[F].setTableProperties);
        n(S[F],"setTableProperty",S[F].setTableProperty);
        n(S[F],"setValue",S[F][Cc]);
        n(S[F],"sort",S[F].sort);
        n(S[F],Bm,S[F][Bc]);
        m("google.visualization.DataView",T);
        n(T,"fromJSON",function(a,b){
            O(b)&&(b=Rn(b));
            var c=new T(a),e=b.columns,f=b[wd];
            e!=k&&c[Kd](e);
            f!=k&&c.setRows(f);
            return c
        });
        n(T[F],"getColumnId",T[F].getColumnId);
        n(T[F],$i,T[F].getColumnIndex);
        n(T[F],aj,T[F][Jb]);
        n(T[F],bj,T[F][Oc]);
        n(T[F],dj,T[F][Kc]);
        n(T[F],dj,T[F][Kc]);
        n(T[F],cj,T[F][vb]);
        n(T[F],ej,T[F].getColumnRange);
        n(T[F],"getColumnRole",T[F].getColumnRole);
        n(T[F],"getColumnType",T[F][Nb]);
        n(T[F],ij,T[F].getDistinctValues);
        n(T[F],jj,T[F].getFilteredRows);
        n(T[F],kj,T[F][Dd]);
        n(T[F],lj,T[F][mb]);
        n(T[F],mj,T[F][xc]);
        n(T[F],"getProperties",T[F][zc]);
        n(T[F],"getProperty",T[F].getProperty);
        n(T[F],rj,T[F].getRowProperty);
        n(T[F],qj,T[F][Xb]);
        n(T[F],"getSortedRows",T[F][Pb]);
        n(T[F],"getTableColumnIndex",T[F].getTableColumnIndex);
        n(T[F],"getUnderlyingTableColumnIndex",T[F].getUnderlyingTableColumnIndex);
        n(T[F],"getTableRowIndex",T[F][Sb]);
        n(T[F],"getUnderlyingTableRowIndex",T[F].getUnderlyingTableRowIndex);
        n(T[F],uj,T[F].getTableProperty);
        n(T[F],tj,T[F][Yb]);
        n(T[F],"getValue",T[F][C]);
        n(T[F],"getViewColumnIndex",T[F].getViewColumnIndex);
        n(T[F],"getViewColumns",T[F].getViewColumns);
        n(T[F],"getViewRowIndex",T[F].getViewRowIndex);
        n(T[F],"getViewRows",T[F].getViewRows);
        n(T[F],"hideColumns",T[F].hideColumns);
        n(T[F],"hideRows",T[F].hideRows);
        n(T[F],"setColumns",T[F][Kd]);
        n(T[F],"setRows",T[F].setRows);
        n(T[F],"toDataTable",T[F][Kb]);
        n(T[F],Bm,T[F][Bc]);
        m("google.visualization.errors",V);
        n(V,"addError",V[Ac]);
        n(V,"removeAll",V[ed]);
        n(V,"removeError",V.removeError);
        n(V,"addErrorFromQueryResponse",V.addErrorFromQueryResponse);
        n(V,"getContainer",V[Cd]);
        n(V,"createProtectedCallback",V.createProtectedCallback);
        m("google.visualization.events.addListener",function(a,b,c){
            a=Cr(a);
            b=sq(a,b,function(a){
                c(a.Rk)
            });
            return new Dr(b)
        });
        m("google.visualization.events.trigger",function(a,b,c){
            a=Cr(a);
            Cq(a,new Er(b,c))
        });
        m("google.visualization.events.removeListener",function(a){
            a=a&&wn(a.getKey)&&a.getKey();
            return vn(a)?xq(a):l
        });
        m("google.visualization.events.removeAllListeners",function(a){
            var b=Cr(a),b=zq(b);
            dq(a.__eventTarget);
            a.__eventTarget=g;
            return b
        });
        m("google.visualization.QueryWrapper",Fr);
        n(Fr[F],Zl,Fr[F].setOptions);
        n(Fr[F],Gi,Fr[F][hd]);
        n(Fr[F],"setCustomErrorHandler",Fr[F].Tk);
        n(Fr[F],"sendAndDraw",Fr[F].sendAndDraw);
        n(Fr[F],"setCustomPostResponseHandler",Fr[F].setCustomPostResponseHandler);
        n(Fr[F],"setCustomResponseHandler",Fr[F].setCustomResponseHandler);
        n(Fr[F],rh,Fr[F][Ec]);
        m("google.visualization.arrayToDataTable",function(a,b){
            var c=new S,e,f,h;
            qn(a)||d(r("Not an array"));
            if(0==a[D])return c;
            qn(a[0])||d(r(Hg));
            var j=a[0][D];
            for(e=1;e<a[D];e++)(!qn(a[e])||a[e][D]!=j)&&d(r(Hg));
            var p=(e=!b)?a[0]:[],s=e?a[bb](1,a[D]):a,x=[];
            for(f=0;f<j;f++){
                var z=lm;
                for(e=0;e<s[D];e++)if(h=s[e][f],h!=k){
                    O(h)?z=lm:vn(h)?z=cl:qn(h)?z=zm:un(h)?z=Kh:(sn(h)&&d(r("Date and datetime column types are not supported")),d(r("Invalid value in "+e+ve+f)));
                    break
                }
                x[f]=z
            }
            for(f=0;f<j;f++)c[Ad](x[f],p[f]);
            c[jc](s);
            return c
        });
        m("google.visualization.datautils.compareValues",br);
        m("google.visualization.dataTableToCsv",function(a){
            for(var b=K,c=0;c<a[xc]();c++){
                for(var e=0;e<a[mb]();e++){
                    0<e&&(b+=ve);
                    var f=a[Dd](c,e),f=f[v](oa(Xd,Xi),$d),h=-1!=f[w](ve),j=-1!=f[w](Pd),p=-1!=f[w](Xd);
                    if(h||j||p)f=Xd+f+Xd;
                    b+=f
                }
                b+=Pd
            }
            return b
        });
        m("google.visualization.GadgetHelper",yr);
        n(yr[F],"createQueryFromPrefs",yr[F].createQueryFromPrefs);
        n(yr[F],"validateResponse",yr[F].validateResponse);
    })();
    google.loader.loaded({
        "module":"visualization",
        "version":"1.0",
        "components":["default","format"]
    });
    google.loader.eval.visualization = function() {
        eval(arguments[0]);
    };

    if (google.loader.eval.scripts && google.loader.eval.scripts['visualization']) {
        (function() {
            var scripts = google.loader.eval.scripts['visualization'];
            for (var i = 0; i < scripts.length; i++) {
                google.loader.eval.visualization(scripts[i]);
            }
        })();
        google.loader.eval.scripts['visualization'] = null;
    }
})();