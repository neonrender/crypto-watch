document.addEventListener('DOMContentLoaded', function() {
    console.log("content loaded")
    
    init();
    
    var saveButton = document.getElementById('save');
    // onClick's logic below:
    saveButton.addEventListener('click', function() {
        console.log("save clicked");
        save()
    });
});

function init() {
    var limit = document.getElementById('limit')

    chrome.storage.sync.get(['limit'],(data)=>{
        limit.value = data?.limit
    })
}

function save() {

    console.log("save function");

    var limit = document.getElementById('limit').value

    console.log(limit);
    if(limit){
        chrome.storage.sync.set({'limit':parseFloat(limit)},()=>{

chrome.storage.sync.get(['limit'],(data)=>{
    console.log("stored",data)
})
        })
        localStorage.setItem('limit',parseFloat(limit))
    }



    chrome.runtime.reload()

    window.close();
}