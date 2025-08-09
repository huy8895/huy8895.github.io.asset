// Phần 1: Script điều khiển YouTube Player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {}
    });
}

function jumpToTime(seconds) {
    if (player && typeof player.seekTo === 'function') {
        player.seekTo(seconds, true);
        player.playVideo();
    }
}

// Phần 2: Script chức năng của trang (chào mừng, tooltip, v.v.)
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon!";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    document.getElementById("greeting").innerText = greeting;

    const circles = document.querySelectorAll('.social div');
    let index = 0;

    function showTooltipSequentially() {
        const current = circles[index];
        current.classList.add('show-tooltip');

        setTimeout(() => {
            current.classList.remove('show-tooltip');
            index = (index + 1) % circles.length;
        }, 3000);
    }

    showTooltipSequentially();
    setInterval(showTooltipSequentially, 10000);

    document.querySelector('.youtube').addEventListener('click', function () {
        window.open('https://www.youtube.com/@ChineseDailyPodcast', '_blank');
    });

    document.querySelector('.coffe').addEventListener('click', function () {
        window.open('https://buymeacoffee.com/chinesedailypodcast', '_blank');
    });

    document.querySelector('.spotify-channel').addEventListener('click', function () {
        window.open('https://open.spotify.com/show/0hzr17Qx90pgV0PcfXOyrd', '_blank');
    });
}

// Gọi hàm greetUser khi trang tải xong
window.onload = greetUser;