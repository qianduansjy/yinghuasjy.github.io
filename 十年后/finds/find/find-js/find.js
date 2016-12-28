/**
 * Created by Administrator on 2016/10/21.
 */


//顶部导航开始

var find = document.getElementById("find");
var topNav = find.children[0];
var navLeft = topNav.children[0];
var ul = navLeft.children[0];
var lis = ul.children;
//给导航li注册鼠标经过事件
var pic = 0;//记录导航的背景样式位置
for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.index = i
    li.onmouseover = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        this.className = "current";
    }
    //注册点击事件，改变pic的值
    li.onclick = function () {
        pic = this.index;
    }
    //鼠标离开事件
    li.onmouseout = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[pic].className = "current";
    }
}

var loginRight = topNav.children[2];
var links = loginRight.children;
//给注册登录按钮注册鼠标经过事件
for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
        this.className = "current";
    }
    links[i].onmouseout = function () {
        this.className = "";
    }
}

//顶部导航结束

//主体部分开始

var main = find.children[1];
//版心W对象
var banx = main.children[0];
//主体部分所有的div盒子对象
var divs = banx.children;
//给所有div注册鼠标移入移出事件
for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    div.onmouseover = function () {
        var publicBox = this.children[0];
        var h2 = publicBox.children[0];
        var btmBox = publicBox.children[1];
        animate(h2, {top: 55});
        animate(btmBox, {top: 80});
    }
    div.onmouseout = function () {
        var publicBox = this.children[0];
        var h2 = publicBox.children[0];
        var btmBox = publicBox.children[1];
        animate(h2, {top: 65});
        animate(btmBox, {top: 130});
    }

}

//主体部分结束

//内容展示开始

//1tab栏切换，让三个tabBox显示与隐藏
//内容盒子id
var content = find.children[2];
//顶部导航id
var contNav = content.children[0];
//Tab切换id
var contTab = content.children[1]
var navUl = contNav.children[0];
var navLis = navUl.children;
//tab下面三个盒子的ID tab1 tab2 tab3
var divs = contTab.children;
var tab_column = content.children[1];
//tab1ID
var tab1 = tab_column.children[0];
tab1.className = "tab1";
loading(divs[0]);
var data = [
    {
        title: "成功考进香港大学",
        time: "2018年06月07日",
        status: "进行中",
        conttent: "香港大学。死也要死进去",
        trends: 77,
        admire: 8,
        attention: 44
    },

    {
        title: "生活日常",
        time: "2017年06月10日",
        status: "进行中",
        conttent: "一点一滴地记录生活，一点一滴地进步。",
        trends: 81,
        admire: 0,
        attention: 7
    },

    {
        title: "考研∪?ω?∪",
        time: "2017年04月01日",
        status: "进行中",
        conttent: "人大，学硕，专业待定",
        trends: 34,
        admire: 1,
        attention: 8
    },

    {
        title: "司考小婊砸",
        time: "2015年11月30日",
        status: "已实现",
        conttent: "最后110天，不考过400+我就不回家",
        trends: 155,
        admire: 9,
        attention: 145
    },

    {
        title: "318",
        time: "2016年11月01日",
        status: "进行中",
        conttent: "7月初从上海出发，骑行318全线",
        trends: 54,
        admire: 7,
        attention: 10
    },

    {
        title: "早起读书笔记",
        time: "2016年07月31日",
        status: "已实现",
        conttent: "知识是厚重的，为了提升的文化修养，做个有内涵的人！",
        trends: 157,
        admire: 12,
        attention: 377
    },

    {
        title: "生活还在继续你千万不要死去",
        time: "2017年06月20日",
        status: "进行中",
        conttent: "我会重新开始爱生活爱自己爱家人爱朋友",
        trends: 76,
        admire: 4,
        attention: 26
    },

    {
        title: "成为最好的自己",
        time: "2030年06月23日",
        status: "进行中",
        conttent: "你不需要太完美，只要开心，快乐就好",
        trends: 19,
        admire: 3,
        attention: 6
    },

    {
        title: "变成一个更好的平台",
        time: "2016年07月02日",
        status: "延滞中",
        conttent: "再用半年的时间，实现更多的功能",
        trends: 80,
        admire: 1,
        attention: 59
    },

    {
        title: "学会漫画",
        time: "2018年04月06日 ",
        status: "进行中",
        conttent: "大概是有爱",
        trends: 118,
        admire: 17,
        attention: 190
    },

    {
        title: "硬实力",
        time: "2018年12月26日",
        status: "进行中",
        conttent: "超越梦想",
        trends: 54,
        admire: 1,
        attention: 21
    },

    {
        title: "CUGer毕业啦?(?????)?",
        time: "2016年07月01日",
        status: "已实现",
        conttent: "大学毕业，再见ヾ(￣▽￣)Bye~Bye~",
        trends: 312,
        admire: 5,
        attention: 40
    },

    {
        title: "你是年少的欢喜",
        time: "2023年04月22日",
        status: "进行中",
        conttent: "喜欢你是我这辈子做过最美好的事情。",
        trends: 176,
        admire: 1,
        attention: 24
    },

    {
        title: "复旦大学",
        time: "2016年07月25日",
        status: "延滞中",
        conttent: "只为自己，不后悔",
        trends: 39,
        admire: 20,
        attention: 301
    },

    {
        title: "生活还在继续",
        time: "2026年10月10日",
        status: "进行中",
        conttent: "愿 我的笑容始終溫暖如太陽！",
        trends: 5,
        admire: 1,
        attention: 1
    },

    {
        title: "每一天",
        time: "2017年06月30日",
        status: "进行中",
        conttent: "每天和自己聊聊天，伴随我有过并坚持走过最后八个月！",
        trends: 85,
        admire: 4,
        attention: 24
    },

    {
        title: "让自己膨胀起来！",
        time: "2020年10月11日",
        status: "进行中",
        conttent: "4年可以做很多事，比如自己从20岁长到24岁，比如父母可能已经退休，比如大学的室友已经结婚生子。",
        trends: 13,
        admire: 0,
        attention: 3
    },

    {
        title: "唯你最深得我意",
        time: "2019年02月12日",
        status: "进行中",
        conttent: "也只你最不识抬举。",
        trends: 186,
        admire: 6,
        attention: 33
    },

    {
        title: "新生与希望",
        time: "2016年12月31日",
        status: "进行中",
        conttent: "认真过好每一天: 不看影视剧、动漫、杂志、新闻，不玩游戏；每天要有明确的计划，写到邮箱中的事项中，坚决执行，做计划有预期留余地；办公室每天插话少于3次，不是必需说的话不说；每天玩手机时间最多30min。",
        trends: 42,
        admire: 9,
        attention: 9
    },

    {
        title: "充实的超级暑假",
        time: "2016年09月12日",
        status: "已实现",
        conttent: "中考完了??",
        trends: 55,
        admire: 1,
        attention: 14
    },

    {
        title: "用满满的爱陪伴自己成长",
        time: "2017年09月11日",
        status: "进行中",
        conttent: "为自己负全责，学习用全部的爱陪伴自己成长，帮自己实现梦想，陪自己去体验喜怒哀乐，体验世间的一切。你要知道这世界只有一个你，而你也只有一个人生，只做心欢喜的事。。",
        trends: 44,
        admire: 0,
        attention: 5
    },

    {
        title: "我一直都在流浪",
        time: "2021年11月19日",
        status: "进行中",
        conttent: "我有孤独和酒 你跟不跟我走。",
        trends: 200,
        admire: 2,
        attention: 9
    },

    {
        title: "等你腿毛长齐再和我谈人生",
        time: "2021年02月12日",
        status: "进行中",
        conttent: "我知道我已经变成了你希望的样子",
        trends: 125,
        admire: 2,
        attention: 8
    },

    {
        title: "做一个写字好看的人",
        time: "2016年12月31日",
        status: "进行中",
        conttent: "给自己一年时间练好字，每天坚持。",
        trends: 136,
        admire: 2,
        attention: 47
    },

    {
        title: "写作",
        time: "2017年04月02日",
        status: "进行中",
        conttent: "与时间为友，我思故我在。",
        trends: 54,
        admire: 2,
        attention: 31
    },

    {
        title: "因为喜欢?",
        time: "2022年05月20日",
        status: "进行中",
        conttent: "自己喜欢的东西别问别人好不好看 你爱的人就别问别人他好不好 他好不好只有你自己知道 别人体会不到他曾给你的爱 只有你自己懂。",
        trends: 23,
        admire: 1,
        attention: 1
    },

    {
        title: "考研，加油→_→",
        time: "2017年04月30日",
        status: "进行中",
        conttent: "距离2017年考研，从初试到复试 记录这段时间的点点滴滴*^_^* 每一次的坚持，每一个进步，都是对！自己最好的回报！。",
        trends: 28,
        admire: 1,
        attention: 20
    },

    {
        title: "一箫一剑走江湖",
        time: "2026年10月12日",
        status: "进行中",
        conttent: "1.每天尽量保证30MIN练习2.箫友交流3·拜师。",
        trends: 5,
        admire: 0,
        attention: 0
    },

    {
        title: "每日总结",
        time: "2016年04月20日",
        status: "已实现",
        conttent: "吾日三省吾身",
        trends: 59,
        admire: 3,
        attention: 139
    },

    {
        title: "掌握AI",
        time: "2016年08月06日",
        status: "已实现",
        conttent: "get这项设计基础技能",
        trends: 32,
        admire: 2,
        attention: 13
    }


];
var dataDream = [
    {
        username: "海胆啊啊啊",
        now: "略焦虑，略努力，略胖",
        become: "译得好心仪作品的Pro",
        dream: 0,
        admire: 409,
        attention: 832
    },
    {
        username: "柑橘与柠檬啊",
        now: "女神经",
        become: "女超人",
        dream: 15,
        admire: 631,
        attention: 760
    },
    {
        username: "龘",
        now: "学生",
        become: "有钱人",
        dream: 3,
        admire: 713,
        attention: 952
    },
    {
        username: "iamming",
        now: "画画新手",
        become: "漫画人",
        dream: 1,
        admire: 655,
        attention: 4728
    },
    {
        username: "时光荏苒",
        now: "普普通通的高中生",
        become: "名校毕业生",
        dream: 3,
        admire: 490,
        attention: 195
    },
    {
        username: "Ada (Caroline)",
        now: "Game Player",
        become: "Game Changer",
        dream: 17,
        admire: 1974,
        attention: 4899
    },
    {
        username: "木木",
        now: "女神经",
        become: "症状自我调节",
        dream: 4,
        admire: 108,
        attention: 160
    },
    {
        username: "小白蘑菇君",
        now: "处于水深火热之中",
        become: "无拘无束的人",
        dream: 11,
        admire: 560,
        attention: 259
    },
    {
        username: "King_Du",
        now: "研一新生",
        become: "A better man.",
        dream: 0,
        admire: 899,
        attention: 4588
    },
    {
        username: "未知_",
        now: "无所事事的人",
        become: "随心而活的人",
        dream: 5,
        admire: 213,
        attention: 735
    },
    {
        username: "Mrs多苦樂",
        now: "在学原画",
        become: "一座高山",
        dream: 4,
        admire: 152,
        attention: 93
    },
    {
        username: "Star_",
        now: "One of Crew",
        become: "The Captain",
        dream: 8,
        admire: 799,
        attention: 4441
    },
    {
        username: "旸夜",
        now: "准毕业生",
        become: "广告人",
        dream: 31,
        admire: 1490,
        attention: 4847
    },
    {
        username: "allen_xda",
        now: "创业者",
        become: "企业家",
        dream: 8,
        admire: 972,
        attention: 1015
    },
    {
        username: "WANYU",
        now: "师范生一名",
        become: "淡然乐观积极的妹纸～",
        dream: 2,
        admire: 336,
        attention: 760
    },
    {
        username: "十年后精选",
        now: "十年后精选推荐",
        become: "更好的十年后精选推荐",
        dream: 4,
        admire: 293,
        attention: 144
    },
    {
        username: "十年后",
        now: "关于未来的社交网络",
        become: "The next BIG thing",
        dream: 8,
        admire: 2988,
        attention: 90
    },
    {
        username: "Diaries_",
        now: "学生",
        become: "心灵手巧的菇凉",
        dream: 14,
        admire: 1115,
        attention: 1184
    },
    {
        username: "lrx",
        now: "在校学生",
        become: "社会主义好青年QAQ",
        dream: 4,
        admire: 93,
        attention: 1029
    },
    {
        username: "赳赳",
        now: "屌丝一只",
        become: "实现自我追求的人",
        dream: 8,
        admire: 769,
        attention: 893
    },
    {
        username: "Resiro_月西如",
        now: "学生",
        become: "为自己而活的自由人",
        dream: 9,
        admire: 943,
        attention: 4805
    },
    {
        username: "玄泽霂",
        now: "学生",
        become: "平安喜乐",
        dream: 9,
        admire: 631,
        attention: 760
    },
    {
        username: "影印版",
        now: "国关路上前行的菇凉",
        become: "国关学者并进入实践",
        dream: 6,
        admire: 101,
        attention: 146
    },
    {
        username: "木荷",
        now: "天马行空的妄想家",
        become: "旅者和实干家",
        dream: 6,
        admire: 282,
        attention: 95
    },
    {
        username: "姑娘",
        now: "言哥哥的宝宝",
        become: "言哥哥的支柱",
        dream: 0,
        admire: 15,
        attention: 29
    },
    {
        username: "居无所处",
        now: "大一新生",
        become: "幸福的人",
        dream: 9,
        admire: 350,
        attention: 106
    },
    {
        username: "Echo",
        now: "爱文学的高三理科女",
        become: "自制力强的生活梦想者",
        dream: 6,
        admire: 127,
        attention: 53
    },
    {
        username: "黄沙百战穿金甲",
        now: "xxx",
        become: "zzz",
        dream: 10,
        admire: 530,
        attention: 69
    },
    {
        username: "不只是个看客",
        now: "一事无成的咸鱼",
        become: "理想主义的现实者",
        dream: 6,
        admire: 165,
        attention: 112
    },
    {
        username: "浅浅",
        now: "自卑而不甘",
        become: "聪明能干",
        dream: 3,
        admire: 220,
        attention: 31
    },
];
navLis[0].clickNum = 1;
//给tab栏注册里面的所有li注册鼠标移动事件
var pic = 0;//记录tab切换栏的标签位置
var flag = true;
var tabNum = 0;
for (var i = 0; i < navLis.length; i++) {
    var li = navLis[i];
    li.index = i;
    divs[i].index = i;
    //鼠标经过事件
    li.onmouseover = function () {
        for (var i = 0; i < navLis.length; i++) {
            navLis[i].className = "";
        }
        this.className = "current";
//            //加载刷新盒子
//            loading(divs[i]);
    }
    //鼠标离开事件
    li.onmouseout = function () {
        for (var i = 0; i < navLis.length; i++) {
            navLis[i].className = "";
        }
        navLis[this.index].className = "current";
    }
    //鼠标点击事件
    li.onclick = function () {
        tabNum = this.index;
        //确定该li标签是否是第一次点击。如果是第一次，就让点击次数=1；
        if (this.clickNum) {
            this.clickNum++;
        } else {
            this.clickNum = 1;
        }
        //2切换的时候，首先出现加载，加载完成后，再加载后面的图片
        //加载刷新盒子
        //动态加载盒子
        //如果是第一次点击盒子，就让小盒子第一次加载
        if (this.clickNum == 1) {
            loading(divs[this.index]);
            for (var i = 0; i < divs.length - 1; i++) {
                divs[i].className = "tab" + (i + 1) + " clearfix";
            }

        } else {//不是第一次点击盒子，让内容显示即可,即改变tab栏的显示状态
            for (var i = 0; i < divs.length - 1; i++) {
                divs[i].className = "tab" + (i + 1);
            }
            divs[this.index].className = "tab" + (this.index + 1) + " clearfix" + " current";
        }

//setTab1Box(divs[pic], data);
    }

}

//小火箭注册点击事件。让页面回到顶点
var arrow = find.children[3];
arrow.onclick = function () {
    var body = document.body;
    body.scrollTop = 200;
    var timer = setInterval(function () {
        var leader = body.scrollTop//
        leader = parseInt(leader) || 0;//如果没有这个样式，默认给0

        var step = (0 - leader) / 10;//最少跑1px
        if (step > 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        leader = leader + step;
        body.scrollTop = leader;
        if (leader == 0) {
            clearInterval(timer);
        }
    }, 15);


    //animate(body, {scrollTop: "0px"});


}

//3给window注册滚动事件，当快要触底的时候，动态加载内容
window.onscroll = function () {
    if (scroll().top > 0) {
        //固定导航栏
        topNav.classList.add("fixed");
        main.style.marginTop = "50px";
    } else {
        topNav.classList.remove("fixed");
        main.style.marginTop = "0";
        arrow.style.display = "none";
    }

    if (scroll().top > 1000) {
        //让下火箭显示
        arrow.style.display = "block";
        //判断触底，只要是知道最后一个盒子的top值就可以了，也就是loading盒子
        //也可以判断tab盒子的高度再加上头部高度，与底部加载盒子的高度
        var tabTop = divs[tabNum].offsetHeight;
        //卷去的高度+可视化区域的高度>loadingTop的高度就要加载了
        //那么问题来了，该加载那个top的盒子
        //所以必须要记录当前盒子的
        //在什么时候后获取与赋值了，开始时默然为1，点击li的时候记录
        //可视化高度
        var clientTop = client().height;
        console.log(scroll().top + "   " + clientTop + "   " + tabTop);
        if (scroll().top + clientTop > tabTop + 490) {
            //到底了，要执行添加元素了
            loading(divs[divs.length - 1]);
        }
    }


}


//根据后台数组，动态生成公共盒子
//动态加载盒子 tab1
var arrTab1 = [];
var arrTab2 = [];
var arrTab3 = [];
function setTabBox(parentObj, arr, tab) {
    for (var i = 0; i < arr.length; i++) {
        if (tab == "tab1") {
            var str = '<div class="public_box">'
                + '<div class="box_top">'
                + '<div class="box_screen">'
                + '<h2>' + arr[i].title + '</h2>'
                + '<span>' + arr[i].time + '</span><span>&nbsp;' + arr[i].status + '</span>'
                + '<i><s></s></i>'
                + '</div>'
                + '</div>'
                + '<div class="box_mid">'
                + '<p>' + data[i].conttent + '</p>'
                + '</div>'
                + '<div class="box_btm">'
                + '<div class="box_left">'
                + '<p class="strong">' + arr[i].trends + '</p>'
                + '<p>动态</p>'
                + '</div>'
                + '<div class="box_cent">'
                + '<p class="strong">' + arr[i].admire + '</p>'
                + '<p>钦佩</p>'
                + '</div>'
                + '<div class="box_right">'
                + '<p class="strong">' + arr[i].attention + '</p>'
                + '<p>关注</p>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>';
            arrTab1.push(str);
        } else if (tab == "tab2") {
            var random1 = Math.ceil(Math.random() * 15);
            var str = '<div class="public_box">'
                + '<div class="box_top">'
                + '<div class="box_screen">'
                + '<h3>' + arr[i].username + '</h3>'
                + '<em><img src="find-images/2-' + random1 + '.jpg" alt=""/></em>'
                + '<i><img src="find-images/icon2.png"width="20px"height="20px" alt=""/></i>'
                + '</div>'
                + '</div>'
                + '<div class="box_mid">'
                + '<i>现在是&nbsp;</i><s>' + arr[i].now + '</s></br>'
                + '<i>想成为&nbsp;</i><s>' + arr[i].become + '</s>'
                + '</div>'
                + '<div class="box_btm">'
                + '<div class="box_left">'
                + '<p class="strong">' + arr[i].dream + '</p>'
                + '<p>梦想</p>'
                + '</div>'
                + '<div class="box_cent">'
                + '<p class="strong">' + arr[i].admire + '</p>'
                + '<p>钦佩</p>'
                + '</div>'
                + '<div class="box_right">'
                + '<p class="strong">' + arr[i].attention + '</p>'
                + '<p>关注者</p>'
                + '</div>'
                + '</div>'
                + '</div>';
            arrTab2.push(str);
        } else if (tab == "tab3") {
            var random1 = Math.ceil(Math.random() * 35);
            var random2 = Math.ceil(Math.random() * 15);
            var random3 = Math.ceil(Math.random() * 2);
            var strImg = '<img src="find-images/1-' + random1 + '.jpg" alt=""/>';
            if (random3 <= 1) {
                strImg = "";
            }

            var str = '<div class="trends">'
                + '<div class="header">'
                + '<div class="header-left">'
                + '<div class="img" style="background: url(' + 'find-images/2-' + random2 + '.jpg) no-repeat center">'
                + '</div>'
                + '<div class="txt">'
                + '<h2>' + arr[i].username + '</h2>'
                + '<p>' + data[i].time + '</p>'
                + '</div>'
                + '</div>'
                + '<div class="header-right">'
                + '<i></i><em>' + data[i].title + '</em><s></s>'
                + '</div>'
                + '</div>'
                + '<div class="txtcont">'
                + strImg
                + '<p>' + data[i].conttent + '</p>'
                + '</div>'
                + '<div class="footer">'
                + '<i>' + arr[i].dream + '</i><em>' + arr[i].admire + '</em><s>' + arr[i].attention + '</s>'
                + '</div>'
                + '</div>'
                + '</div>';
            arrTab3.push(str);
        }


    }
    if (tab == "tab1") {
        parentObj.innerHTML = arrTab1.join("");
    } else if (tab == "tab2") {
        parentObj.innerHTML = arrTab2.join("");
    } else if (tab == "tab3") {
        parentObj.innerHTML = arrTab3.join("");
    }
    if (tab == "tab1" || tab == "tab2") {
        //tab盒子中所有的盒子数
        var tabDivs = parentObj.children;
        console.log(tabDivs);
        for (var i = 0; i < tabDivs.length; i++) {
            tabDivs[i].onmouseenter = function () {
                this.style.boxShadow = "10px 10px 10px #666";
            }
            tabDivs[i].onmouseleave = function () {
                this.style.boxShadow = "5px 5px 5px #666";
            }
            var box_Top = tabDivs[i].children[0];
            //循环数大于图片数的时候，取一个1-35的随机数代替即可
            if (i > 34) {
                var random = Math.ceil(Math.random() * 35);
                box_Top.style.backgroundImage = "url('find-images/1-" + random + ".jpg')";
            } else {
                box_Top.style.backgroundImage = "url('find-images/1-" + (i + 1 ) + ".jpg')";
            }
        }
    }
}
//动态加载盒子 tab2


//加载刷新盒子
function loading(obj) {
    divs[divs.length - 1].style.display = "block";
    divs[divs.length - 1].className = "loading";
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {
        if (obj.pic == 2) {
            obj.className = "tab" + ( obj.index + 1) + " clearfix" + "  current";
            obj.pic = 0;
            divs[divs.length - 1].style.display = "block";
            divs[divs.length - 1].className = "loading";
            //点击列表1，设置显示tab1
            if (tabNum == 0) {
                setTabBox(divs[tabNum], data, "tab1");
            } else if (tabNum == 1) {//点击列表2,设置tab2的内容
                setTabBox(divs[tabNum], dataDream, "tab2");
            } else if (tabNum == 2) {//这里是要设置tab3的内容了
                setTabBox(divs[tabNum], dataDream, "tab3");
            }

            clearInterval(obj.timer);
        }
        if (obj.pic) {
            obj.pic++;
        } else {
            obj.pic = 1;
        }
    }, 500);

}
//内容展示结束




