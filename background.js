$(function(){
	$.get('https://twitter.com/i/notifications',function(data){
		var htmldata=data;
		$data= $(htmldata).find('#stream-items-id').eq(0);
		$data.find('.ActivityItem-quoteTweetContainer').remove();
		$data.find('.QuoteTweet').remove();
		$data.find('.ActivityItem-facepileContainer').remove();
		$data.find('.ActivityItem-activityTimestamp').remove();
		$data.find('.ActivityItem-dismissMenu').remove();
		$data.find('.ActivityItem-icon').remove();
		$('body').append($data);
	})
});  