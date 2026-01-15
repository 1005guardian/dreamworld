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
            { top: '10.2%', left: '12.8%', width: '8%', height: '8%', target: 'scene-A' },
            { top: '64%', left: '60%', width: '8%', height: '8%', target: 'scene-B' },
            { top: '13%', left: '70%', width: '8%', height: '8%', target: 'treehouse' },
            { top: '32.7%', left: '63.0%', width: '5.6%', height: '5.6%', target: 'twohouses' },
            { top: '6.5%', left: '63.2%', width: '7.2%', height: '7.2%', target: 'cave' }
        ]
    },
    'scene-A': {
        image: './thumbnail2_l.png',
        type: 'cinematic',
        hotspots: [
            // A smaller nested hotspot
            { top: '1.3%', left: '38.8%', width: '8.6%', height: '8.6%', target: 'chestnut' },
            { top: '30.0%', left: '43.8%', width: '10.2%', height: '10.2%', target: 'mushroom' }
        ]
    },
    'chestnut': {
        image: './chestnut.png',
        type: 'cinematic',
        hotspots: []
    },
    'mushroom': {
        image: './mushroomhouse.png',
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
    'treehouse': {
        image: './treehouse.png',
        type: 'cinematic',
        hotspots: []
    },
    'twohouses': {
        image: './twohouses.png',
        type: 'cinematic',
        hotspots: [
            { top: '72.6%', left: '51.1%', width: '11.6%', height: '11.6%', target: 'ancient' },
            { top: '91.0%', left: '76.1%', width: '7.5%', height: '7.5%', target: 'pavilion' },
            { top: '9.4%', left: '32.0%', width: '8.4%', height: '8.4%', target: 'raft' },
            { top: '54.6%', left: '31.1%', width: '6.6%', height: '6.6%', target: 'teahouse' }
        ]
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
    'ancient': {
        image: './ancient.png',
        type: 'cinematic',
        hotspots: []
    },
    'cave': {
        image: './cave.png',
        type: 'cinematic',
        hotspots: []
    },
    'pavilion': {
        image: './pavilion.png',
        type: 'cinematic',
        hotspots: []
    },
    'raft': {
        image: './raft.png',
        type: 'cinematic',
        hotspots: []
    },
    'teahouse': {
        image: './teahouse.png',
        type: 'cinematic',
        hotspots: []
    },
};
