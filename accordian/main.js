const accordian = document.querySelector(".accordian");

accordian.addEventListener('click', (e) =>{
    const activePanel = e.target.closest('.accordian-panel');

    if(!activePanel) return;
    toggelAccordian(activePanel);
});

function toggelAccordian(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordian-content");


    buttons.forEach( button => { 
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach( content => { 
        content.setAttribute("aria-hidden", true);
    });
    panelToActivate.querySelector('button').setAttribute("aria-expanded", true)
    panelToActivate.querySelector('.accordian-content').setAttribute("aria-hidden", false)
}