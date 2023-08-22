Debouncing 
it is useless to call API for every keystroke

typing slow = diff bw key stroke = 200ms
typing fast = diff bw key stroke = 30ms


Performance:
iphone pro max = 14 letters = 14API Calls
with debouncing 3 API calls

debouncing with 200ms means =>if diiff bw two key stroke is less than 200ms =>decline the api call 
                  >200ms => make a api call



we can break the reversed api call using redux 


cache : time complexity to search in array = 0(n)
cache : time complexity to search in map = 0(1)
new map() is even  more optimised than map()

array.indexOf


/*key i -
it will render the whole component
useEffect();
start timmr to make an api call after 200 ms 


key - ip 
destroy the component (useEffcet return)
it will re-render the whole component
useEffect();
*/



  // make an api call after every key press 
  // but if the diffrenece between 2 api call is < 200ms 
  // decline the api call 



  optimised search bar = 
            live api 
            debouncing 
            caching => in the search bar if we apply keystroke to be back than it will decline the api call 


n level nested comment 
debouncing 
caching



live chat in youtube
learn about prevent default in js