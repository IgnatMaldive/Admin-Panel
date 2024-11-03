// DOM Elements
const body = document.querySelector("body");
const modeToggle = document.querySelector(".mode-toggle");
const sidebar = document.querySelector("nav");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const dashContent = document.querySelector(".dash-content");

// Pages content
const pages = {
    dashboard: `
        <div class="overview">
            <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
                <div class="box box1">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="text">Total Likes</span>
                    <span class="number">50,120</span>
                </div>
                <div class="box box2">
                    <i class="uil uil-comments"></i>
                    <span class="text">Comments</span>
                    <span class="number">20,120</span>
                </div>
                <div class="box box3">
                    <i class="uil uil-share"></i>
                    <span class="text">Total Share</span>
                    <span class="number">10,120</span>
                </div>
            </div>
        </div>

        <div class="activity">
            <div class="title">
                <i class="uil uil-clock-three"></i>
                <span class="text">Recent Activity</span>
            </div>

            <div class="activity-data">
                <div class="data names">
                    <span class="data-title">Name</span>
                    <span class="data-list">Prem Shahi</span>
                    <span class="data-list">Deepa Chand</span>
                    <span class="data-list">Manisha Chand</span>
                    <span class="data-list">Pratima Shahi</span>
                </div>
                <div class="data email">
                    <span class="data-title">Email</span>
                    <span class="data-list">premshahi@gmail.com</span>
                    <span class="data-list">deepachand@gmail.com</span>
                    <span class="data-list">prakashhai@gmail.com</span>
                    <span class="data-list">manishachand@gmail.com</span>
                </div>
                <div class="data joined">
                    <span class="data-title">Joined</span>
                    <span class="data-list">2022-02-12</span>
                    <span class="data-list">2022-02-12</span>
                    <span class="data-list">2022-02-13</span>
                    <span class="data-list">2022-02-13</span>
                </div>
                <div class="data type">
                    <span class="data-title">Type</span>
                    <span class="data-list">New</span>
                    <span class="data-list">Member</span>
                    <span class="data-list">Member</span>
                    <span class="data-list">New</span>
                </div>
                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                </div>
            </div>
        </div>
    `,
    chat: `
        <div class="chat">
            <div class="title">
                <i class="uil uil-chat-bubble-user"></i>
                <span class="text">Chat</span>
            </div>
            <div class="chat-container">
                <p>Chat interface will be displayed here</p>
            </div>
        </div>
    `,
    images: `
        <div class="images">
            <div class="title">
                <i class="uil uil-image"></i>
                <span class="text">Images</span>
            </div>
            <div class="images-container">
                <p>Image gallery will be displayed here</p>
            </div>
        </div>
    `,
    tasks: `
        <div class="tasks">
            <div class="title">
                <i class="uil uil-check-circle"></i>
                <span class="text">Tasks</span>
            </div>
            <div class="tasks-container">
                <p>Task management interface will be displayed here</p>
            </div>
        </div>
    `,
    playground: `
        <div class="playground">
            <div class="title">
                <i class="uil uil-rocket"></i>
                <span class="text">Playground</span>
            </div>
            <div class="playground-container">
                <p>Playground interface will be displayed here</p>
            </div>
        </div>
    `,
    share: `
        <div class="share">
            <div class="title">
                <i class="uil uil-share-alt"></i>
                <span class="text">Share</span>
            </div>
            <div class="share-container">
                <p>Sharing options will be displayed here</p>
            </div>
        </div>
    `
};

// Load page content
function loadPage(pageName) {
    dashContent.innerHTML = pages[pageName] || pages.dashboard;
}

// Initialize dark mode by default
body.classList.add("dark");
let getMode = localStorage.getItem("mode");
if (getMode === "light") {
    body.classList.remove("dark");
}

// Initialize sidebar state from localStorage
let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

// Event Listeners
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains("dark") ? "dark" : "light");
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
});

// Navigation handling
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove("active"));
        
        // Add active class to clicked link
        link.classList.add("active");
        
        // Load the corresponding page
        const page = link.dataset.page;
        loadPage(page);
    });
});

// Load initial page
loadPage("dashboard");