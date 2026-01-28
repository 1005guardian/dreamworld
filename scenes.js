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
            { top: '10.3%', left: '12.9%', width: '7.8%', height: '7.8%', target: 'redspots' },
            { top: '64.2%', left: '60%', width: '8.3%', height: '8.3%', target: 'alchemy' },
            { top: '14.9%', left: '72%', width: '6.5%', height: '6.5%', target: 'treehouse' },
            { top: '32.4%', left: '62.7%', width: '6.2%', height: '6.2%', target: 'twohouses' },
            { top: '6.5%', left: '63.2%', width: '7.2%', height: '7.2%', target: 'cave' },
            { top: '60.7%', left: '44.0%', width: '6.9%', height: '6.9%', target: 'greenmon' },
            { top: '33.3%', left: '92.3%', width: '5.1%', height: '5.1%', target: 'branch' },
            { top: '40.9%', left: '88.0%', width: '5.8%', height: '5.8%', target: 'gummy' },
            { top: '17.5%', left: '28.0%', width: '4.8%', height: '4.8%', target: 'factory' },
            { top: '49.3%', left: '85.9%', width: '5.1%', height: '5.1%', target: 'plushie' },
            { top: '52.0%', left: '27.5%', width: '5.7%', height: '5.7%', target: 'croco' },
            { top: '80.5%', left: '54.8%', width: '6.9%', height: '6.9%', target: 'pandas' },
        ]
    },
    'redspots': {
        type: 'cinematic',
        hotspots: [
            { top: '1.3%', left: '38.8%', width: '8.6%', height: '8.6%', target: 'chestnut' },
            { top: '30.0%', left: '43.8%', width: '10.2%', height: '10.2%', target: 'mushroomhouse' },
            { top: '32.7%', left: '53.2%', width: '6.7%', height: '6.7%', target: 'whitemush' },
            { top: '43.2%', left: '64.0%', width: '10.3%', height: '10.3%', target: 'plush' },
            { top: '64.1%', left: '12.4%', width: '11.1%', height: '11.1%', target: 'lotus' },
            { top: '43.1%', left: '86.6%', width: '10.7%', height: '10.7%', target: 'jellyfish' },
            { top: '10.0%', left: '74.7%', width: '5.6%', height: '5.6%', target: 'shipwreck' },
            { top: '45.3%', left: '36.9%', width: '8.0%', height: '8.0%', target: 'brownmush' },
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
            { top: '70.5%', left: '45.8%', width: '4.9%', height: '4.9%', target: 'greentube' },
        ]
    },
    'treehouse': {
        type: 'cinematic',
        hotspots: [
           { top: '51%', left: '59.8%', width: '6.2%', height: '6.2%', target: 'train' },
           { top: '49.9%', left: '33%', width: '7.6%', height: '7.6%', target: 'electronic' },
                   ]
    },
    'twohouses': {
        type: 'cinematic',
        hotspots: [
            { top: '72.6%', left: '51.1%', width: '11.6%', height: '11.6%', target: 'ancient' },
            { top: '91.0%', left: '76.1%', width: '7.5%', height: '7.5%', target: 'pavilion' },
            { top: '9.4%', left: '32.0%', width: '8.4%', height: '8.4%', target: 'raft' },
            { top: '54.6%', left: '31.1%', width: '6.6%', height: '6.6%', target: 'teahouse' },
            { top: '62.3%', left: '34.4%', width: '7.8%', height: '7.8%', target: 'boat' },
            { top: '61.0%', left: '57.6%', width: '8.5%', height: '8.5%', target: 'creek' },
            { top: '59.4%', left: '78.9%', width: '5.1%', height: '5.1%', target: 'fishtank' },
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
        hotspots: [
           { top: '33.3%', left: '49.2%', width: '5.4%', height: '5.4%', target: 'desert' },
           { top: '77.5%', left: '25.9%', width: '4.6%', height: '4.6%', target: 'moai' },
        ]
    },
    'pavilion': {
        type: 'cinematic',
        hotspots: []
    },
    'raft': {
        type: 'cinematic',
        hotspots: [
           { top: '65.3%', left: '30.9%', width: '5.5%', height: '5.5%', target: 'war' },
        ]
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
    'greenmon': {
        type: 'cinematic',
        hotspots: []
    },
    'lotus': {
        type: 'cinematic',
        hotspots: []
    },
    'branch': {
        type: 'cinematic',
        hotspots: [
            { top: '36.5%', left: '7.3%', width: '6.8%', height: '6.8%', target: 'flower' }
        ]
    },
    'train': {
        type: 'cinematic',
        hotspots: []
    },
    'gummy': {
        type: 'cinematic',
        hotspots: []
    },
    'jellyfish': {
        type: 'cinematic',
        hotspots: []
    },
    'shipwreck': {
        type: 'cinematic',
        hotspots: []
    },
    'brownmush': {
        type: 'cinematic',
        hotspots: []
    },
    'desert': {
        type: 'cinematic',
        hotspots: [
           { top: '21.3%', left: '17.1%', width: '5.2%', height: '5.2%', target: 'desert' },
        ]
    },
    'moai': {
        type: 'cinematic',
        hotspots: []
    },
    'greentube': {
        type: 'cinematic',
        hotspots: []
    },
    'war': {
        type: 'cinematic',
        hotspots: []
    },
    'boat': {
        type: 'cinematic',
        hotspots: []
    },
    'creek': {
        type: 'cinematic',
        hotspots: []
    },
    'factory': {
        type: 'cinematic',
        hotspots: []
    },
    'electronic': {
        type: 'cinematic',
        hotspots: []
    },
    'plushie': {
        type: 'cinematic',
        hotspots: []
    },
    'croco': {
        type: 'cinematic',
        hotspots: [
           { top: '53.8%', left: '17.5%', width: '8.2%', height: '8.2%', target: 'future' }
        ]
    },
    'fishtank': {
        type: 'cinematic',
        hotspots: []
    },
    'pandas': {
        type: 'cinematic',
        hotspots: []
    },
    'future': {
        type: 'cinematic',
        hotspots: []
    },
    'flower': {
        type: 'cinematic',
        hotspots: []
    },
};
