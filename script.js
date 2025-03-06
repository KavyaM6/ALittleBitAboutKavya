function openTab(event, tabName) {
    //hides content for all the tabs (so that eventually only one can be showed at a time)
    let tabcontent = document.getElementsByClassName("content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; //action that hides
    }

    //fixes the issue so that the tabs can appear the intended way but also have naming conventions that work in code
    let tabIdMap = {
        "Home": "home",
        "Projects": "projects",
        "Experiences": "experiences",
        "Contact Me": "contact"
    };

    //blocks all tabs from showing up
    let selectedTabId = tabIdMap[tabName];
    if (selectedTabId) {
        document.getElementById(selectedTabId).style.display = "block";
    }

    event.currentTarget.classList.add("active");
}
