
const disableScroll=()=>{

    document.body.dataset.scrollY=window.scrollY;
    console.log(window.innerWidth);
    console.log(document.body.offsetWidth);
    const scrollWidth=window.innerWidth-document.body.offsetWidth;

    document.body.style.cssText = `
    position:fixed;
    top:-${window.scrollY}px;
    left:0;
    width:100%;
    overflow:hidden;

    padding-right:${scrollWidth}px;

    `
}

const enableScroll=()=>{
    document.body.style.cssText ="";
    window.scroll({top:document.body.dataset.scrollY})
}

