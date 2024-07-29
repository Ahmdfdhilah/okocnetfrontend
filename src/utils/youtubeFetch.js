const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export const fetchLatestVideoUrl = async (channelId) => {
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
    
    try {
        const response = await fetch(reqURL, requestOptions);
        const result = await response.json();
        console.log(result);
        const latestVideo = result.items[0];
        const link = latestVideo.link;
        const videoId = link.split('v=')[1];
        console.log(`https://youtube.com/embed/${videoId}`);
        return `https://youtube.com/embed/${videoId}`;
    } catch (error) {
        console.error('Error fetching latest video:', error);
        return null;
    }
};