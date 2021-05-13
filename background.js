function reddenPage() {

  document.body.style.backgroundColor = 'green';


}



function notify(title, message){
    registration.showNotification(title, {
        body: message,
        data: "nott",
        icon: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
        message:"",

        actions: [
            { action: 'Close', title: 'Aww shit' },
        ]
    })
}


function check(){

    setTimeout(()=>{
        fetch("https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT")
            .then((res)=>res.json())
            .then((res)=>{

            chrome.storage.sync.get(['limit'],(data)=>{
                let stored = data?.limit
                if(stored && parseFloat(res.price) < stored)
                    notify("YOOOOO","Dogecoin down to " + res.price)
                else{
                    chrome.runtime.reload();
                    // check();

                }
            })

                    })
    }, 1000)
}

chrome.runtime.onInstalled.addListener(async()=>{


    chrome.check = check

    check();

})


chrome.action.onClicked.addListener(async (tab) => {




    // chrome.notifications.create({
    //     type:"basic",
    //     title:"yoyo",
    //     message:""
    // },()=>{});



});
