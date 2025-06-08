
document.addEventListener("DOMContentLoaded", function () {
    const github = document.getElementById("github");
    github.innerHTML = `
        <a href="https://github.com/siddhantkore" target="_blank">siddhantkore-GitHub</a>`;
    
    const leetcode = document.getElementById("leetcode");
    leetcode.innerHTML = `
        <a href="https://leetcode.com/u/siddhantkore/" target="_blank"> siddhantkore-leetcode </a>`;
    
    const linkedin = document.getElementById("linkedin");
    linkedin.innerHTML = `
        <a href="https://linkedin.com/in/siddhantkore0bb" target="_blank"> siddhantkore-LinkedIn </a>`;
    
    const project1GitHub = document.querySelector("#project1 .github-repository-link");
    project1GitHub.innerHTML = `
        <a href="https://github.com/siddhantkore/college-event-management-system" target="_blank"> GitHub Repo </a>`;
});
