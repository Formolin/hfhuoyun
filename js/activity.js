/**
 * Created by Administrator on 2017/2/6 0006.
 */
/**
 * Created by Administrator on 2017/2/6 0006.
 */
$(function () {
    function activity(img,title,data,content,link){
        this.img = img;
        this.title = title;
        this.data = data;
        this.content = content;
        this.link = link;
    }

    activity.prototype = {
        bindDom: function () {
            var str='';
            str+='<div class="box">';
            str+='    <div class="ll">';
            str+='        <img src="image/news/'+this.img+'.jpg" alt="" width="275" height="160"/>';
            str+='    </div>';
            str+='    <div class="rr">';
            str+='        <div class="t">';
            str+='            <a href="">'+this.title+'<span>【'+this.data+'】</span>  </a>';
            str+='        </div>';
            str+='        <div class="c">';
            str+='            <a href="">'+this.content+'</a>';
            str+='        </div>';
            str+='        <div class="b">';
            str+='            <a href="">'+this.link+'</a>';
            str+='        </div>';
            str+='    </div>';
            str+='</div>';

            return str;
        }
    }

    var activity1 = new activity('01','走近自然、磨砺意志、培养毅力、锻炼体魄、快 ','2015-10-07','为了增强团队的凝聚力和战斗力，磨练员工的一直，锻炼体魄，公司定期举行徒步活动，活动地点主要有九站公园、音乐公园、阳明滩大桥等地。...','查看全文>>');
    var activity2 = new activity('02','拔河活动 ','2015-09-30','适逢“五●一”节后，气候温和，春气盎然，公司组织了一次拔河比赛活动。通过大家在一起拔河，可以让大家享受团队合作的快乐，让大家在轻松的氛围中增进同事间的友谊，并真正...','查看全文>>');
    var activity3 = new activity('03','健身活动','2015-09-30','随着工作和生活节奏的加快，很多人都缺乏体育锻炼，为了增加全体员工的运动量，促进身心健康，公司特别建造了健身室，共员工锻炼身体。健身室为员工提供各类运动器械，有杠铃...','查看全文>>');
    var activity4 = new activity('04','让职工更深刻地认识到体育锻炼 ','2015-09-30','为了让职工更深刻地认识到体育锻炼、身体健康与工作效率之间的密切关系，公司决定开展做操这项活动。由于很多管理人员运动量少，组织职工做操活动身骨，将对保持身体健康和调...','查看全文>>');
    var activity5 = new activity('05','消防知识讲座','2015-09-30','增强企业消防安全意识和提高自防自救能力，努力营造企业良好的消防安全环境，近日，公司举办了1场消防安全知识讲座，特别邀请黑龙江省消防安全宣教中心主任侯博宇进行消防安全...','查看全文>>');


    var activitys = [activity1,activity2,activity3,activity4,activity5];
    var str ='';
    for(var i=0 ; i<activitys.length;i++){
        str+=activitys[i].bindDom();
    }

    $('.r-con').html(str);
})