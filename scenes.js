window.gameData = {
    'main': {
        type: 'initial',
        width: '150px',
        height: '150px',
        clickTarget: 'meadow'
    },
    'meadow': {
        type: 'expand',
        width: '1000px',
        height: '1000px',
        hotspots: [
            { top: '10.2%', left: '12.8%', width: '8%', height: '8%', target: 'redspots' },
            { top: '64.4%', left: '60.2%', width: '8%', height: '8%', target: 'alchemy' },
            { top: '13%', left: '70%', width: '8%', height: '8%', target: 'treehouse' },
            { top: '32.7%', left: '63.0%', width: '5.6%', height: '5.6%', target: 'twohouses' },
            { top: '6.5%', left: '63.2%', width: '7.2%', height: '7.2%', target: 'cave' }
        ]
    },
    'redspots': {
        type: 'cinematic',
        hotspots: [
            { top: '1.3%', left: '38.8%', width: '8.6%', height: '8.6%', target: 'chestnut' },
            { top: '30.0%', left: '43.8%', width: '10.2%', height: '10.2%', target: 'mushroomhouse' },
            { top: '32.7%', left: '53.2%', width: '6.7%', height: '6.7%', target: 'whitemush' },
            { top: '43.2%', left: '64.0%', width: '10.3%', height: '10.3%', target: 'plush' },
        ]
    },
    'chestnut': {
        type: 'cinematic',
        hotspots: []
    },
    'mushroomhouse': {
        type: 'cinematic',
        hotspots: []
    },
    'alchemy': {
        type: 'cinematic',
        hotspots: [
            { top: '11.7%', left: '55.5%', width: '5.4%', height: '5.4%', target: 'palace' },
            { top: '81.6%', left: '34.7%', width: '6.0%', height: '6.0%', target: 'lair' },
            { top: '18.3%', left: '83.0%', width: '10.8%', height: '10.8%', target: 'spaceship' },
        ]
    },
    'treehouse': {
        type: 'cinematic',
        hotspots: []
    },
    'twohouses': {
        type: 'cinematic',
        hotspots: [
            { top: '72.6%', left: '51.1%', width: '11.6%', height: '11.6%', target: 'ancient' },
            { top: '91.0%', left: '76.1%', width: '7.5%', height: '7.5%', target: 'pavilion' },
            { top: '9.4%', left: '32.0%', width: '8.4%', height: '8.4%', target: 'raft' },
            { top: '54.6%', left: '31.1%', width: '6.6%', height: '6.6%', target: 'teahouse' }
        ]
    },
    'palace': {
        type: 'cinematic',
        hotspots: []
    },
    'lair': {
        type: 'cinematic',
        hotspots: []
    },
    'ancient': {
        type: 'cinematic',
        hotspots: []
    },
    'cave': {
        type: 'cinematic',
        hotspots: []
    },
    'pavilion': {
        type: 'cinematic',
        hotspots: []
    },
    'raft': {
        type: 'cinematic',
        hotspots: []
    },
    'teahouse': {
        type: 'cinematic',
        hotspots: []
    },
    'spaceship': {
        type: 'cinematic',
        hotspots: []
    },
    'whitemush': {
        type: 'cinematic',
        hotspots: []
    },
    'plush': {
        type: 'cinematic',
        hotspots: []
    },
};
