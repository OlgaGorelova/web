class Pavilion {
    fontColor;    
    type;
    hoverBackGroundColor;
    borderWidth = 3;
    positionX; positionY; width; height;
    floorNumber;
    entryDirection; //  'top', 'left', 'right', 'bottom'
    xmlns = "http://www.w3.org/2000/svg";

    constructor(type, flofloorNumberor, positionX, positionY, width, height, entryDirection) {
        this.type = type;
        this.floorNumber = flofloorNumberor;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.hoverBackGroundColor = this.determineHoverBgColor();
        this.fontColor = this.determineFontColor();
        this.text = this.determineInnerText();
        this.entryDirection = entryDirection;
    }

    determineFontColor() {
        let currentColor;
        PavilionModel.fontColors.forEach(pair => {
            if (this.type === pair.type) {
                currentColor = pair.color;
            }
        });
        return currentColor;
    }

    determineHoverBgColor() {
        let currentBgColor;
        PavilionModel.backGroundHoverColors.forEach(pair => {
            if (this.type === pair.type) {
                currentBgColor = pair.color;
            }
        });
        return currentBgColor;
    }
    determineBgColor() {
        return PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
    }
    determineInnerText() {
        let currentInnerText;
        PavilionModel.texts.forEach(pair => {
            if (this.type === pair.type) {
                currentInnerText = pair.text;
            }
        });
        return currentInnerText;
    }

    formDOMElement() {
        var pavilion = document.createElementNS(this.xmlns, 'svg');
        pavilion.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);
        pavilion.setAttribute('width', this.width);
        pavilion.setAttribute('height', this.height);
        pavilion.classList.add('pavilion');
        pavilion.style.left = (PavilionModel.floors[this.floorNumber].offsetLeft + this.positionX) + 'px';
        pavilion.style.top = (PavilionModel.floors[this.floorNumber].offsetTop + this.positionY) + 'px';
     
        pavilion.append(this.formRect(0, 0, this.width, this.height, 'black', this.determineBgColor(), this.borderWidth));        
        return pavilion;                
    }
    
    formRect(top, left, width, height, borderColor, bgColor, strokeWidth) {
        var rect = document.createElementNS(this.xmlns, 'rect');
        rect.setAttribute('x', left);
        rect.setAttribute('y', top);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('stroke', borderColor);
        rect.style.fill = bgColor;
        rect.style.strokeWidth = strokeWidth;
        return rect;
    }

    formText(element) {
        wrapText(this, element, this.determineInnerText(), 30, 30, this.width / 12, 25);

        function wrapText(context, domElement, text, marginLeft, marginTop, maxSymbolsInLine, lineHeight)
        {
            var words = text.split(" ");
            var countWords = words.length;
            var line = "";
            var textWidth = 0;
            for (var n = 0; n < countWords; n++) {
                var testLine = line + words[n] + " ";
                textWidth = testLine.length;
                if (textWidth > maxSymbolsInLine || n === countWords - 1) {
                    if (n === countWords - 1) {
                        line += words[countWords - 1];
                    }
                    domElement.append(createText(context, line, marginTop, marginLeft));
                    line = words[n] + " ";
                    marginTop += lineHeight;
                    textWidth = 0;
                }
                else {
                    line = testLine;
                }
            }
            
        }
        function createText(context, text, top, left) {
            var newtext = document.createElementNS(context.xmlns, 'text');
            newtext.setAttribute('x', left);
            newtext.setAttribute('y', top);
            newtext.setAttribute('font-size', 20);
            newtext.setAttribute('stroke', context.determineFontColor());
            newtext.setAttribute('fill', context.determineFontColor());
            newtext.innerHTML = text;
            return newtext;
        }
    }
}

function contains(string, subString) {
    return (string.indexOf(subString) > -1);
}

shops = [
    new Pavilion('cafe', 0, 0, 0, 150, 150, 'bottom'),
    new Pavilion('sport', 0, 0, 200, 150, 370, 'right'),
    new Pavilion('clothes', 0, 200, 420, 150, 150, 'top'),
    new Pavilion('macdonalds', 0, 200, 000, 300, 300, 'bottom right'),
    new Pavilion('kfc', 0, 549, 000, 300, 300, 'bottom left'),
    new Pavilion('clothes', 0, 649, 370, 200, 200, 'top'),
    new Pavilion('cafe', 0, 400, 370, 220, 200, 'top'),

    new Pavilion('sport', 1, 0, 0, 150, 370, 'right'),
    new Pavilion('cafe', 1, 0, 420, 150, 150, 'top'),
    new Pavilion('clothes', 1, 699, 0, 150, 200, 'left'),
    new Pavilion('macdonalds', 1, 200, 270, 300, 300, 'top right'),
    new Pavilion('kfc', 1, 549, 270, 300, 300, 'top'),
    new Pavilion('cafe', 1, 200, 0, 350, 100, 'bottom')
];