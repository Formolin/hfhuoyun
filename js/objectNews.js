/**
 * Created by Administrator on 2017/2/6 0006.
 */
$(function () {
    function news(img,title,data,content,link){
        this.img = img;
        this.title = title;
        this.data = data;
        this.content = content;
        this.link = link;
    }
    
    news.prototype = {
        bindDom: function () {
            var str = '';
            str+=' <div class="box">';
            str+='     <div class="ll">';
            str+='         <img src="image/news/'+this.img+'.jpg" alt="" width="275" height="160"/>';
            str+='     </div>';
            str+='     <div class="rr">';
            str+='         <div class="t">';
            str+='             <a href="">'+this.title+' <span>【'+this.data+'】</span>  </a>';
            str+='         </div>';
            str+='         <div class="c">';
            str+='             <a href="">'+this.content+'</a>';
            str+='         </div>';
            str+='         <div class="b">';
            str+='             <a href="">'+this.link+'</a>';
            str+='         </div>';
            str+='     </div>';
            str+=' </div>';
            return str;
        }
    }


    var xinwen1 = new news('1','物流行业现状分析 前8月物流运行企稳回升','2015-11-02','从中国物流与采购联合会获悉：1—8月，我国物流运行呈现企稳回升的态势，物流需求规模增速继续小幅回升，结构性变化较为明显;但物流服务价格低位震荡，企业效益整体偏弱。...','查看全文>>');

    var xinwen2 = new news('2','国务院关于印发物流业发展中长期规划的通知 ','2015-11-02','国务院9月12日印发《物流业发展中长期规划（2014—2020年）》。就降低物流成本问题，规划中提到，切实加大对公路乱收费、乱罚款的清理整顿力度，减少不必要的收费点，全面推进全国...','查看全文>>');
    var xinwen3 = new news('3','发改委发布加快配电网建设改造意见 现两大亮点 ','2015-11-02','国家发改委9月2日正式公布《关于加快配电网建设改造的指导意见》。意见提出，经过五年的努力，至2020年，中心城市（区）用户年均停电时间不超过1小时，综合电压合格率达到99.97%；...','查看全文>>');
    var xinwen4 = new news('4','新型风电装备制造的搬运方案——气垫车 ','2015-11-02','近年来，我国风电行业发展势头迅猛，有数据显示，2014年上半年，全国风电累计并网8277万千瓦，同比增长23%;风电上网电量767亿千瓦时，同比增长8.8%。随着风电的发展，风电装备制造也...','查看全文>>');


    var xinwens =[xinwen1,xinwen2,xinwen3,xinwen4];
    var str ='';
    for(var i=0;i<xinwens.length;i++){
        str+=xinwens[i].bindDom();
    }
    $('.r-con').html(str);

})