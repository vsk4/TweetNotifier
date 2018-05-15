

### A chrome extension(Notifier)


## Steps for installaton :
  - [x] Download the notifer folder.
  - [x] In Chrome Browse Goto Right side to Click  on the threeDots icon then goto --> More Tools-->Extensions.
  - [x] In Extensions please check the Developers Mode.
  - [x] Load the downloaded unpacked extension (Notifier).
  - [x] Reload the Extension. You will get a starting popup.
  - [x] Extension is ready to use.
  ## Working :
  
   ##### please log into your twitter account as this extension uses ajax request from the notificationURLpage('https://twitter.com/i/notifications') of twitter.  It also grabs information form that html tags of that page to popup the notifications.
   ###### After logging into your account, even if you close your Browser Popup of the notifications will be displayed.
   
   Only notifications of **logged in persons** will be poppedup.
   

### Modifications That are needed

1.Storing the data of persons to be tracked.<br/>
2.Filtering the notifications data so that only tweets are notified.<br/>
3.checking if person has tweeted , and show its notificaions.
(checking the Messages array ,if it contains the text **persons name and tweeted** notification must show up)
