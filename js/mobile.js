//change image size due to page size change
function mobileImg() {
    var width = window.innerWidth; // No need for jQuery here, raw JS can do this
    var obj=$("#logoimage23");
    if(width < 361) {
        obj.src='images/pageico_mobile.png';
    }
    else
        obj.src='images/pageico.png';
        
    alert(obj.src);
    
}