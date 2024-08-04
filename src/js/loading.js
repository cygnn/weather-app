export function loading(status){
    const dialogBox = document.querySelector('.loadingDialogBox');

    if(status === 'load'){
        dialogBox.textContent = 'Loading...'
    }
    else if(status === ""){
        dialogBox.textContent = ''
    }
    else if (status === 'failed'){
        dialogBox.textContent = `Can't fetch data.`
    }
    
}