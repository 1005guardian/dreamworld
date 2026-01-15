// scenes.js
window.gameData = {
    'root': {
        image: './thumbnail1.png',
        type: 'initial',
        width: '150px',
        height: '150px',
        clickTarget: 'main-hub'
    },
    'main-hub': {
        image: './thumbnail1_l.png',
        type: 'expand',
        width: '1000px',
        height: '1000px',
        hotspots: [
            { top: '10.2%', left: '12%', width: '8%', height: '8%', target: 'scene-A' },
            { top: '64%', left: '60%', width: '8%', height: '8%', target: 'scene-B' },
            { top: '13%', left: '70%', width: '8%', height: '8%', target: 'scene-C' },
            { top: '32.7%', left: '63.0%', width: '5.6%', height: '5.6%', target: 'scene-D' }
        ]
    },
    'scene-A': {
        image: './thumbnail2_l.png',
        type: 'cinematic',
        hotspots: [
            // A smaller nested hotspot
            { top: '1.3%', left: '38.8%', width: '8.6%', height: '8.6%', target: 'house' }
        ]
    },
    'house': {
        image: './house.png',
        type: 'cinematic',
        hotspots: []
    },
    'scene-B': {
        image: './thumbnail3_l.png',
        type: 'cinematic',
        hotspots: [
            { top: '11.7%', left: '55.5%', width: '5.4%', height: '5.4%', target: 'palace' },
            { top: '81.6%', left: '34.7%', width: '6.0%', height: '6.0%', target: 'lair' }
        ]
    },
    'scene-C': {
        image: './thumbnail4_l.png',
        type: 'cinematic',
        hotspots: []
    },
    'scene-D': {
        image: './thumbnail5.png',
        type: 'cinematic',
        hotspots: []
    },
    'palace': {
        image: './palace.png',
        type: 'cinematic',
        hotspots: []
    },
    'lair': {
        image: './lair.png',
        type: 'cinematic',
        hotspots: []
    },
};
