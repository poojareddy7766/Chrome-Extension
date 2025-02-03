(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookmarks = [];

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });
    const newVideoLoaded = async () =>{
        const bookMarkBtnExists=document.getElementsByClassName("bookmark-btn")[0];
        if(! bookMarkBtnExists){
            const bookMarkBtn=document.createElemt("img");

            bookMarkBtn.src=chrome.runtime.getURL("assets/book.mark.png");
            bookMarkBtn.className="ytp-button "+"bookmarks-btn";
            bookMarkBtn.title="Click to bookmark current timestamp of the video";

            youtubeLeftControls=document.getElementByClassName("ytp-left-controls")[0];
            youtubePlayer=document.getElementByClassName("video-stream")[0];
            youtubeLeftControls.appendChild("bookMarkBtn");
            bookMarkBtn.addEventListener("click","addNewBookMarkEventHandler");

        }
    newVideoLoaded(); 
    }
})();
