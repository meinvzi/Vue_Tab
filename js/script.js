class Tab{
    constructor(){
        this.init();
    }
    init(){
        this.addEvent()
    }

    //添加点击事件做Tab切换
    addEvent(){
        let ul=document.querySelectorAll('ul li');
        let ol=document.querySelectorAll('ol li');
        for(let i=0;i<ul.length;i++){
            ul[i].onclick=function(){
                for(let j=0;j<ol.length;j++){
                   ol[j].style.display="none";
                }
                ol[i].style.display="block";
            }
        }
    }
}

new Tab();