$(function(){
	$(document).on('click','.commentbtn',function(){

		 $(".commentbox").css({"height":"0px","margin-top":"-3px"});
		 //主页评论显示与隐藏
		 $(this).closest('.index_my_left_category').next().toggle();
		 //问题详情 评论显示与隐藏
		 $(this).closest('.question_my_left_category').next().toggle();
		 
		 //获取aid
		 var aid=$(this).closest('.index_my_left_category').find('.hide_answer_id').val();
		 var mythis=$(this);
		 arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
		 ++arguments.callee.num;
		 if((arguments.callee.num&1)!=0){
		   //加载评论
		  $.ajax({
				type:'post',
				dataType:'html',
				url:MODULE+'/Index/commentAjax',
				data:{'aid':aid,'p':0},
				beforeSend:function(){
					//显示正在加载
                   
				   mythis.closest('.index_my_left_category').next().find('.commentcon').find('.othercomment_info').html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
					
				},
				success:function(data){

					//关闭正在加载
					/*setTimeout(function(){
						  layer.closeAll('loading');
					}, 1000);*/
					
					 mythis.closest('.index_my_left_category').next().find('.commentcon').find('.othercomment_info').html(data);
				},
				error:function(){

					//关闭正在加载
					/*setTimeout(function(){
						  layer.closeAll('loading');
					}, 1000);*/
					layer.msg(AJAX_ERROR, {icon: 2,time:2000});
				}
			});
		 }
	});
});