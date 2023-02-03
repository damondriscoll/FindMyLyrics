const ACCESS_TOKEN = '';

chrome.storage.local.get(['selection'], async function (result) {
    fetch("http://api.genius.com/search?q=" + encodeURIComponent(result.selection) + "&access_token=" + ACCESS_TOKEN)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const songs = data.response.hits;
        if (songs.length > 0) {
            document.getElementById(`h1`).innerHTML = `Lyrics found for "${result.selection}"`;
            for (let i = 0; i < songs.length; i++) {
                document.getElementById(`i${i}`).src = songs[i].result.song_art_image_thumbnail_url;
                document.getElementById(`p${i}`).innerHTML = songs[i].result.full_title + '\n____________________________________________________________';
            }
        } else {
            document.getElementById(`h1`).innerHTML = "No lyrics found from given text!";
        };
    })
    .catch(err => console.log(err));
})
