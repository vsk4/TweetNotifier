

### A chrome extension(Notifier)



## Steps for installaton :
  - [x] Download the notifer folder.
  - [x] In Chrome Browse Goto Right side to Click  on the threeDots icon then goto --> More Tools-->Extensions.
  - [x] In Extensions please check the Developers Mode.
  - [x] Load the downloaded unpacked extension (Notifier).
  - [x] Reload the Extension. You will get a starting popup.
   
   -- Extension is ready to use.
  ## Working :
  
   ##### please log into your twitter account as this extension uses ajax request from the notificationURLpage('https://twitter.com/i/notifications') of twitter.  It also grabs information form that html tags of that page to popup the notifications.
   ###### After logging into your account, even if you close your Browser Popup of the notifications will be displayed.
   
   Only notifications of **logged in persons** will be poppedup.
   
## Algorithm
I have set an interval which runs for every two seconds ,it checks for new notificaions i.e engine function in background.js <br/>
**get** request grabs information from https://twitter.com/i/notifications  
Filtering the data using jquery  Remove();<br/>
Appending the data to the body of the HTML page.<br/>
Using FOR loop to search for required  **li** element and storing the data items-id and text displayed in respective arrays of **ids** and **messages**
 
 
 if(latestid== ids[0])
            do nothing
     else if (latestid === undefined)
     
              shows the staring popup
               
                else if(latest id not equal to first element in ids array)
         {
                for(j=0;j<ids.length;j++)  
			      {
			  	    if(latestid==ids[j])
			  	    	break;
			  	     else
			  	      {
			  	       	if(messages[j]!="")
			  	           newtweets[j]=messages[j];
			  	          
			  	     }
            }end for
                  
			       	latestid=ids[0];
                
         } end if
         
         if(newtweets.length=0)
          do nothing
          else
           for i=0--->newtweets.length
             print the message in newtweets array
           end for
         end if



### Modifications That are needed

1.Storing the data of persons to be tracked.<br/>
2.Filtering the notifications data so that only tweets are notified.<br/>
3.checking if person has tweeted , and show its notificaions.
(checking the Messages array ,if it contains the text **persons name and tweeted** notification must show up)
