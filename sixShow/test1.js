/*
*嗯：现阶段的代码完善
*功能完善
*
*代码美化
*
*界面美化
*完工
*/
$(document).ready(function(){
  // $("number").fock();
  var type=$('.home').val();
  console.log(type);
  console.log("select * from json where url=\"http://www.w3dev.cn/json.asp\"");
  $("#ccc").click(function(){

    alert("csacs");
    var postid=$('#number').val();
    console.log(postid);
    // var data={
    //   "OrderCode": '',
    //   "ShipperCode": x,
    //    "LogisticCode": y
      // x: x,
      // y: y
    // }
    // var arm="http://www.kuaidi100.com/query?type="+type+"&postid="+postid;
    $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql',
            dataType: 'jsonp',
            data: {
                //  q: "select * from json where url=\"http://www.w3dev.cn/json.asp\"",
                // q:"select * from json where url=\"+"http://www.kuaidi100.com/query?type="+type+"&postid="+postid+"\"",
                // q: 'select * from json where url=\"http://www.kuaidi100.com/query?type=tiantian&postid=560764420686\"',
                // q:"select * from json where url=\"http://www.kuaidi100.com/api?id=e6284a5bc11ddb8d&com='+type+'&nu='+postid+'&show=0&muti=1&order=desc\"",
                q: 'select * from json where url=\"http://www.kuaidi100.com/query?type='+$('.home').val()+'&postid='+$('#number').val()+'\"',
                format: "json"
            },
            success: function (d) {
                console.log(d);
                console.log(d.query.results);
                console.log(d.query.results.json);
                console.log(d.query.results.json.data[0]);
                console.log(d.query.results.json.data[0].time);
                var temp=d.query.results.json;
                // var temp=JSON.stringify(d);
              //  alert(JSON.stringify(d))
               //远程json数据放在query.results下
              //  console.log(temp+'  '+temp.length);
              //  temp=JSON.parse(d.query.results);
              //  console.log(temp+'  '+temp.length);
               for (var i = 0; i <5; i++) {

                 $('ul').append('<li class="list-group-item list-group-item-success"><p>'+temp.data[i].time+'</p><p>'+temp.data[i].context+'</p></li>');
                //  console.log(temp.d[i]);
                // console.log(temp.data[i].time);
                // console.log(JSON.stringify(d.query.results));
                // var obj = eval('('+result+')');
               }
            },
              error: function(xhr, ajaxOptions, thrownError) {
                  //On error do this
                  console.info("error.");
                  if (xhr.status == 200) {

                      alert(ajaxOptions);
                  }
                  else {
                      alert(xhr.status);
                      alert(thrownError);
                  }
              }
        })
    // $.ajax({
    //   // url:"http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx",
    //   // url: "http://www.kuaidi100.com/query?type="+x+"&postid="+y,
    //   url: "http://www.kuaidi100.com/query?type=yuantong&postid=11111111111",
    //   // url: "http://api.kuaidi100.com/api?id=e6284a5bc11ddb8d&com="+$('.scom').attr('com')+"&nu="+$('.wl-search>input').val()+'&show=0'+"&order=asc"
    //   data: data,
    //   type: 'GET',
    //   // crossDomain：true,
    //   dataType: 'JSONP',
    //   jsonp: 'jsoncallback',
    //   success: function(result){
    //     console.log(result);
    //   },
    //   error: function(xhr, ajaxOptions, thrownError) {
    //       //On error do this
    //       console.info("error.");
    //       if (xhr.status == 200) {
    //
    //           alert(ajaxOptions);
    //       }
    //       else {
    //           alert(xhr.status);
    //           alert(thrownError);
    //       }
    //   }
    // })
  })
})
