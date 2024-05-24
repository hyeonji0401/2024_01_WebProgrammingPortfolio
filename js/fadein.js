function checkScroll() {
    var issueAboutMe = document.querySelector('.issue_aboutme');
    var contentPosition = issueAboutMe.getBoundingClientRect().top;
    var sectionHeight = issueAboutMe.offsetHeight;
    var screenPosition = window.innerHeight;

    // 스크롤을 내려서 섹션에 도달했을 때
    if (contentPosition - screenPosition < 0 && contentPosition - screenPosition > -sectionHeight) {
        issueAboutMe.classList.add('fadein');
    } else {
        // 스크롤을 내려서 섹션이 화면에서 사라졌을 때
        issueAboutMe.classList.remove('fadein');
    }
}

window.addEventListener('scroll', checkScroll);