const audio = document.createElement('audio');
const source = document.createElement('source');
source.setAttribute('src', 'sound.mp3');
audio.appendChild(source);
audio.loop = true;
audio.autoplay = true;
document.body.appendChild(audio);

