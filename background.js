var messages=[];
var ids=[];
var latestid;


$(function(){
	engine();
	setInterval(engine,2000);
});  
function engine(){
		var newtweets=[];
		$.get('https://twitter.com/i/notifications',function(data){ //getting data from "https://twitter.com/i/notifications"
		var htmldata=data;
		$data= $(htmldata).find('#stream-items-id').eq(0);
		$data.find('.ActivityItem-quoteTweetContainer').remove();
		$data.find('.QuoteTweet').remove();
		$data.find('.ActivityItem-facepileContainer').remove();
		//$data.find('.activity-timestamp').remove();			//filtering the unwanted data
		$data.find('.ActivityItem-dismissMenu').remove();
		$data.find('.ActivityItem-icon').remove();
		//$data.find('.QuoteTweet').remove();
		$data.find('.ActivityItem-activityTimestamp').remove();



		$('body').append($data);  // appending the data to th html body
			for(i=0;i<$data.find('li.stream-item').length;i++)  // filtering every li item.
			{
			ids[i]=$data.find('li.stream-item').eq(i).attr('data-item-id');
	                messages[i]= ($($data).find('li.stream-item').eq(i).find('div.ActivityItem-displayText').text()).replace(/\n/g,'      ').trim();
		         }
		     //console.log(messages);
			if(latestid==ids[0]){
					//do noting;
			}
			else if(latestid === undefined)
			{
			  var first={
                          type: "basic",
                          title:"rich_notifier",
                          message:"you may have some other notifications please check your twitter account ",
                          iconUrl :"git.png",
                             };

                               	chrome.notifications.create(first);  //google api for notifying the first popup
                             	latestid=ids[0];

			}
			else if(latestid != ids[0] )
			{
		    	for(j=0;j<ids.length;j++)  
			    {
			  	    if(latestid==ids[j])
			  	    {
			  	    	break;
			  	    }
			  	    else
			  	    {
			  	    	if(messages[j]!=""){
			  	           newtweets[j]=messages[j];
			  	          }
			  	    }
           	            }
                  
				latestid=ids[0];
			 } 
		
				if(newtweets.length == 0)
				{
					//do nothing
				}
				else{
					for(i=0;i<newtweets.length;i++)
					{
					  var tweet={
                                              type: "basic",
                   			      title:"New notifications",
                    			      message: newtweets[i],
                      			      contextMessage:"Rich Notifier",
                    			      buttons:[{
                       				   	title:"open link"      //link in the notification panel
                        			    }],
                       			      iconUrl :"icon.png",
                      			    };
                          		       chrome.notifications.onButtonClicked.addListener(function(){  // google api for  notifying the notifications
                          			window.open('https://twitter.com/i/notifications');   //function to open the link on clicking the button
                          			});
                                  	 chrome.notifications.create(tweet);

					}
				     }
						console.log(newtweets);  // shows new tweets on the console
			
						console.log(latestid);
	});
}
