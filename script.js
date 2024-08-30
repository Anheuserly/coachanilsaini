// script.js (updated)
// Function to fetch YouTube video data
async function fetchYouTubeVideos() {
    const apiKey = 'YAIzaSyCfJ31gE271TFpNy1uNUZ8qfGfuYb_VmiE'; // Replace with your YouTube API key
    const channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Replace with your YouTube channel ID
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=10&key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const videoList = document.getElementById('video-list');
        videoList.innerHTML = '';
        data.items.forEach((item) => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.default.url;
            const videoItem = document.createElement('li');
            videoItem.innerHTML = `
                <img src="${thumbnail}" alt="${title}">
                <h3>${title}</h3>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch on YouTube</a>
            `;
            videoList.appendChild(videoItem);
        });
    } catch (error) {
        console.error(error);
    }
}

// Call the function to fetch YouTube videos on page load
document.addEventListener('DOMContentLoaded', fetchYouTubeVideos);

// Auto-update website every 1 hour
setInterval(fetchYouTubeVideos, 3600000);