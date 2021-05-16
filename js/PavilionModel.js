class PavilionModel {
    static types = [ 'cafe', 'clothes', 'sport', 'macdonalds', 'kfc', 'burger-king' ];

    static fontColors = [
        { type: 'cafe', color: 'black' },
        { type: 'clothes', color: 'black' },
        { type: 'sport', color: 'black' },
        { type: 'macdonalds', color: 'rgb(255, 224, 88)' },
        { type: 'kfc', color: 'white' },
        { type: 'burger-king', color: 'rgb(218, 153, 33)'}
    ];
    
    static backGroundFloorColors = [
        'rgb(200, 200, 200)',
        'rgba(255, 200, 200)'
    ];
    
    static backGroundHoverColors = [
        { type: 'cafe', color: 'rgb(189, 163, 132)' },
        { type: 'clothes', color: 'rgb(230, 168, 216)' },
        { type: 'sport', color: ' rgb(157, 240, 255)' },
        { type: 'macdonalds', color: 'rgb(218, 54, 33)' },
        { type: 'kfc', color: 'rgb(218, 54, 33)' },
        { type: 'burger-king', color: 'rgb(65, 67, 230)' }
    ]
    
    static texts = [
        { type: 'cafe', text: 'Cafe. Here you can drink some tea or coffee.' },
        { type: 'clothes', text: 'Clothes. Here you can buy any stylish staff you need.' },
        { type: 'sport', text: 'Sport. Basketball, Volleyball, Football - nevermind. We hate everything! Let\'s just get drunk together!' },
        { type: 'macdonalds', text: 'Macdonalds We hate chickens. That\'s why we cook them for you. Bless you before the big lunch!' },
        { type: 'kfc', text: 'KFC. Sanders already here! Get prepared for our uber-mega-spicy fresh chicken-meet!' },
        { type: 'burger-king', text: 'Burger King. English, friend. Do you speak it? I dare, I double dare you!' }
    ]
    
    static switchButton = document.querySelector('.switch-button');
    
    static floorTable = document.querySelector('.floor-table');
    static currentFloorNumber = 0;
    
    static floors = [
        document.querySelector('.first-floor'),
        document.querySelector('.second-floor')
    ]
}
