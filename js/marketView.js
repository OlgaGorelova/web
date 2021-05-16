class MarketView {
    render() {
        PavilionModel.floorTable.innerHTML = 'Floor ' + (PavilionModel.currentFloorNumber+1);   

        clearField();

        shops.forEach(shop => {
            if (shop.floorNumber === PavilionModel.currentFloorNumber) {
                const pavilion = shop.formDOMElement();
                pavilion.addEventListener("mousedown", drawHoveredShop);
                pavilion.addEventListener("mouseup", drawUnhoveredShop);
                PavilionModel.floors[shop.floorNumber].append(pavilion);
            }
        });
    }
}

function clearField() {
    const pavilions = document.querySelectorAll('.pavilion');
    
    pavilions.forEach(pavilion => {
            PavilionModel.floors[PavilionModel.currentFloorNumber - 1 >= 0 
                ? PavilionModel.currentFloorNumber - 1 
                : PavilionModel.floors.length - 1].removeChild(pavilion);
    });
}

function drawHoveredShop(pavilion) {
    var currentPavilion = pavilion.currentTarget;
    var currentShop;
    shops.forEach(shop => {
        if (currentPavilion.style.left === (PavilionModel.floors[shop.floorNumber].offsetLeft + shop.positionX) + 'px' &&
        currentPavilion.style.top === (PavilionModel.floors[shop.floorNumber].offsetTop + shop.positionY) + 'px') {
            currentShop = shop;
        }
    });
    currentPavilion.removeChild(currentPavilion.lastChild);
    currentPavilion.append(currentShop.formRect(0, 0, currentShop.width, currentShop.height, 
        'black', currentShop.determineHoverBgColor(), currentShop.borderWidth));
    currentShop.formText(currentPavilion);
}

function drawUnhoveredShop(pavilion) {
    var currentPavilion = pavilion.currentTarget;
    var currentShop;
    shops.forEach(shop => {
        if (currentPavilion.style.left === (PavilionModel.floors[shop.floorNumber].offsetLeft + shop.positionX) + 'px' &&
        currentPavilion.style.top === (PavilionModel.floors[shop.floorNumber].offsetTop + shop.positionY) + 'px') {
            currentShop = shop;
        }
    });
    currentPavilion.removeChild(currentPavilion.lastChild);
    currentPavilion.append(currentShop.formRect(0, 0, currentShop.width, currentShop.height, 
        'black', currentShop.determineBgColor(), currentShop.borderWidth));
}

function changeFloor() {
    PavilionModel.floors[PavilionModel.currentFloorNumber].style.display = 'none';
    PavilionModel.currentFloorNumber = (PavilionModel.currentFloorNumber + 1) % PavilionModel.floors.length;
    PavilionModel.floors[PavilionModel.currentFloorNumber].style.display = 'block';
    marketView.render();
}

// var canvas = document.getElementById("floor-canvas");
// clearCanvas(canvas);
// canvas.addEventListener('mousemove', (event) => {
//     var x = event.pageX - event.target.offsetLeft,
//         y = event.pageY - event.target.offsetTop;
//     clearCanvas(canvas);
//     shops.forEach(shop => {
//         if (shop.floorNumber === PavilionModel.currentFloorNumber) {
//             shop.formDOMElement(canvas);
//         }
//     });
//     shops.forEach(shop => {
//         if (shop.floorNumber === PavilionModel.currentFloorNumber &&
//             x >= shop.positionX &&
//             x <= shop.positionX + shop.width &&
//             y >= shop.positionY &&
//             y <= shop.positionY + shop.height) {
//                 drawHoveredShop(canvas, shop);
//             }
//     });
// });
