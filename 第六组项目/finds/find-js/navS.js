/**
 * Created by Administrator on 2016/10/26.
 */
$(function () {
    var timer = null;
    var flag = true;
    $("body").animate({opacity:1},2000);
    setTimeout(function () {
        //$(".bgcboxR").animate({opacity: 1}, 2000);
        $(".bgcboxR").animate({opacity: 1}, 2000, function () {
            //让线条1秒后显示出来
            //x方向的线条
            $(".xbox").children().animate({height: 604}, 2000);
            //y方向的线条
            //$(".ybox").children().animate({width: 1204}, 2000);
            $(".ybox").children().animate({width: 1204}, 2000, function () {
                //$(".imgbox .public").animate({opacity:1});
                //显示所有的public盒子 然后逐一显示 顺序1 2 3 6 9 8 7 5回转效果
                $(".imgbox .public").fadeIn(200, function () {
                    $(".imgbox .public").stop();
                    //设置透明度 先高亮显示，再逐一熄灭到 .8
                    $(".imgbox .public").fadeTo(0, 0, function () {
                        //停止所有动画队列
                        $(".imgbox .public").stop();
                        //逐一高亮每一个一个public盒子
                        //第一个
                        $(".imgbox .public").eq(0).fadeTo(300, 1, function () {
                            //第二个
                            $(".imgbox .public").eq(1).fadeTo(300, 1, function () {
                                //第三个
                                $(".imgbox .public").eq(2).fadeTo(300, 1, function () {
                                    //第六个
                                    $(".imgbox .public").eq(5).fadeTo(300, 1, function () {
                                        //第九个
                                        $(".imgbox .public").eq(8).fadeTo(300, 1, function () {
                                            //第八个
                                            $(".imgbox .public").eq(7).fadeTo(300, 1, function () {
                                                //第七个
                                                $(".imgbox .public").eq(6).fadeTo(300, 1, function () {
                                                    //第四个
                                                    $(".imgbox .public").eq(3).fadeTo(300, 1, function () {
                                                        //第五个
                                                        $(".imgbox .public").eq(4).fadeTo(300, 1, function () {

                                                            //熄灭每个盒子
                                                            $(".imgbox .public").eq(0).fadeTo(300, 0, function () {
                                                                //第二个
                                                                $(".imgbox .public").eq(1).fadeTo(300, 0, function () {
                                                                    //第三个
                                                                    $(".imgbox .public").eq(2).fadeTo(300, 0, function () {
                                                                        //第六个
                                                                        $(".imgbox .public").eq(5).fadeTo(300, 0, function () {
                                                                            //第九个
                                                                            $(".imgbox .public").eq(8).fadeTo(300, 0, function () {
                                                                                //第八个
                                                                                $(".imgbox .public").eq(7).fadeTo(300, 0, function () {
                                                                                    //第七个
                                                                                    $(".imgbox .public").eq(6).fadeTo(300, 0, function () {
                                                                                        //第四个
                                                                                        $(".imgbox .public").eq(3).fadeTo(300, 0, function () {
                                                                                            //第五个
                                                                                            $(".imgbox .public").eq(4).fadeTo(300, 0, function () {

                                                                                                $(".imgbox .public").addClass("pub");
                                                                                                $(".imgbox").addClass("lve");
                                                                                                for(var i=0;i<9;i++){
                                                                                                    $($(".imgbox .public")[i]).find("a").attr("href","find/find-2.html");
                                                                                                }
                                                                                                //结束后调用设置动画
                                                                                                setAimate();

                                                                                            });

                                                                                        });

                                                                                    });

                                                                                });
                                                                            });

                                                                        });

                                                                    });
                                                                });
                                                            });


                                                            ////结束后调用设置动画
                                                            //setAimate();

                                                        });

                                                    });

                                                });

                                            });
                                        });

                                    });

                                });
                            });
                        });
                    });
                });
            });
        });

    }, 1000);

    //设置一个循环定时器让其自动轮转高亮盒子

    function setAimate() {
        timer = setInterval(function () {
            if (flag) {
                //1 3 5 7 9
                //先灭四个
                $(".imgbox .public").eq(1).stop();
                $(".imgbox .public").eq(3).stop();
                $(".imgbox .public").eq(5).stop();
                $(".imgbox .public").eq(7).stop();
                $(".imgbox .public").eq(1).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public").eq(3).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public").eq(5).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public").eq(7).fadeTo(1000, 1, function () {


                //再亮5个
                $(".imgbox .public ").eq(4).fadeTo(1000, 0, function () {});
                    $(".imgbox .public ").eq(0).stop();
                    $(".imgbox .public ").eq(2).stop();
                    $(".imgbox .public ").eq(6).stop();
                    $(".imgbox .public ").eq(8).stop();
                    $(".imgbox .public ").eq(0).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public ").eq(2).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public ").eq(6).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public ").eq(8).fadeTo(1000, 0, function () {
                        flag = false;
                    });


                });
            } else {
                //2 4 6 8
                //先灭5个
                $(".imgbox .public ").eq(0).stop();
                $(".imgbox .public ").eq(2).stop();
                $(".imgbox .public ").eq(6).stop();
                $(".imgbox .public ").eq(8).stop();
                $(".imgbox .public ").eq(0).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public ").eq(2).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public ").eq(6).fadeTo(1000, 1, function () {
                });
                $(".imgbox .public ").eq(8).fadeTo(1000, 1, function () {

                });

                $(".imgbox .public ").eq(4).fadeTo(1000, 1, function () {
                    $(".imgbox .public").eq(1).stop();
                    $(".imgbox .public").eq(3).stop();
                    $(".imgbox .public").eq(5).stop();
                    $(".imgbox .public").eq(7).stop();
                    $(".imgbox .public").eq(1).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public").eq(3).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public").eq(5).fadeTo(1000, 0, function () {
                    });
                    $(".imgbox .public").eq(7).fadeTo(1000, 0, function () {
                        flag = true;
                    });

                });
            }


        }, 2000);
    }



    //给每个public盒子注册鼠标移入事件 让文字自动弹上来
    $(".imgbox").on("mouseenter",".pub",function () {

        //先停止当前动画
        clearInterval(timer);//停止定时器 并让所有的等全部关闭


        $(".imgbox .public ").stop(true,false);
        $(".imgbox .public").fadeTo(0, 1);
        $(this).find("h2").stop();
        $(this).find(".btm-box").stop();
        //开启后面的动画
        //var idx=$(this).index();
        $(this).find(".screen").fadeTo(0,0.2);
        $(this).siblings().find(".screen").fadeTo(0,.8);
        $(this).find("h2").animate({top: 70}, 200);
        $(this).find(".btm-box").animate({top: 120}, 200);

    });
    $(".imgbox").on("mouseleave",".pub",function () {

        //var idx=$(this).index();

        $(this).find("h2").stop();
        $(this).find(".btm-box").stop();
        //开启后面的动画
        //$(this).find(".screen").fadeTo(500, 0.6);
        //$(".a"+idx).fadeTo(500, 0);
        $(this).find("h2").animate({top: 100}, 200);
        $(this).find(".btm-box").animate({top: 200}, 200);
    });

    $("body").on("mouseleave",".lve",function () {
        //先停止当前动画
        setAimate();//开启定时器
        $(".imgbox .public").fadeTo(500, 0);
        $(this).find(".screen").fadeTo(500, 0.6);
    });


});