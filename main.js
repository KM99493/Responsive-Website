/*-------------For Tab in CURRICULUM SECTION-----------------*/
const tabButton = document.querySelectorAll('.tabLinks');
for(var i=0; i<tabButton.length; i++){
    tabButton[i].addEventListener('click',function(){
    var tabName=this.dataset.tab;
    var tabContentt=document.getElementById(tabName);

    var allTabContent=document.querySelectorAll('.tabContent');
    var allTabButton=document.querySelectorAll('.tabLinks');

    for(var j=0; j<allTabContent.length; j++){
        allTabContent[j].style.display='none';
    }
    for(var k=0; k<allTabButton.length; k++){
        allTabButton[k].classList.remove('active');
    }

    tabContentt.style.display="block";
    this.classList.add('active')
    });
}
document.querySelector('.tabLinks').click();


/*-------------For FAQ SECTION-----------------*/
const faqButton = document.querySelectorAll('.faqLink');
for(var l=0; l<faqButton.length; l++){
    faqButton[l].addEventListener('click',function(){
        var faqName = this.dataset.faq;
        var faqContentt=document.getElementById(faqName)

        var allFaqContent=document.querySelectorAll('.faqContent');
        for(var m=0; m<allFaqContent.length; m++){
            allFaqContent[m].style.display='none';
        }

        faqContentt.style.display="block";
    })
    document.querySelector('.faqLink').click();
}