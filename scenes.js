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
            { top: '33.0%', left: '62.8%', width: '5.6%', height: '5.6%', target: 'scene-D' }
        ]
    },
    'scene-A': {
        image: './thumbnail2_l1.png',
        type: 'cinematic',
        hotspots: [
            // A smaller nested hotspot
            { top: '30%', left: '30%', width: '8%', height: '8%', target: 'scene-A-depth' }
        ]
    },
    'scene-A-depth': {
        image: './thumbnail1_l.png',
        type: 'cinematic',
        hotspots: []
    },
    'scene-B': {
        image: './thumbnail3_l.png',
        type: 'cinematic',
        hotspots: []
    },
    'scene-C': {
        image: './thumbnail4_l.png',
        type: 'cinematic',
        hotspots: []
    }
    'scene-D': {
        image: './thumbnail5_l.png',
        type: 'cinematic',
        hotspots: []
    }
};
