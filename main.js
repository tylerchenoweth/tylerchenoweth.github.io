let churchill = document.getElementById('churchill');

let angle = document.getElementById('angle-display');

let deg0 = document.getElementById('button-0');
let deg90 = document.getElementById('button-90');
let deg180 = document.getElementById('button-180');
let deg270 = document.getElementById('button-270');

let freezeButton = document.getElementById('freeze-button');
let unfreezeButton = document.getElementById('unfreeze-button');

let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let centerButton = document.getElementById('center-button');


// Script specific variables
let deg = 0;
let mouseRotateAngle = 15;

let pos = 0;
let posMove = 10;

let applyAngle = () => {
    //churchill.style.rotate = `${deg}deg`;
    churchill.style.webkitTransform = `rotate(${deg}deg)`//`${deg}deg`;
    //churchill.style.backgroundColor = 'blue';
    displayAngle();
}

let displayAngle = () => {
    angle.innerHTML = deg+'&#176';
}

let rotate = (event) => { 
    if( event.deltaY < 0 ){
        deg -= mouseRotateAngle;
    } else {
        deg += mouseRotateAngle;
    }

    deg %= 360;

    // this is to avoid negative numbers
    if( deg < 0 ) {
        deg += 360;
    }

    applyAngle();  
}

let rotate0 = () => {
    deg = 0;
    applyAngle();
}

let rotate90 = () => {
    deg = 90;
    applyAngle();
}

let rotate180 = () => {
    deg = 180;
    applyAngle();
}

let rotate270 = () => {
    deg = 270;
    applyAngle();
}


// freeze and unfreeze
let freezeChurchill = () => {
    churchill.removeEventListener('wheel', rotate);
    deg0.removeEventListener('click', rotate0 );
    deg90.removeEventListener('click', rotate90 );
    deg180.removeEventListener('click', rotate180 );
    deg270.removeEventListener('click', rotate270 );
    leftButton.removeEventListener('click', moveLeft);
    rightButton.removeEventListener('click', moveRight);
    centerButton.removeEventListener('click', moveCenter);
}

// this is also used to declare all the events
let unfreezeChurchill = () => {
    churchill.addEventListener('wheel', rotate);
    deg0.addEventListener('click', rotate0 );
    deg90.addEventListener('click', rotate90 );
    deg180.addEventListener('click', rotate180 );
    deg270.addEventListener('click', rotate270 );
    leftButton.addEventListener('click', moveLeft);
    rightButton.addEventListener('click', moveRight);
    centerButton.addEventListener('click', moveCenter);
}


// for the left right buttons
let applyPos = () => {
    churchill.style.left = `${pos}px`;
}

let moveLeft = () => {
    pos -= posMove;
    applyPos();
}

let moveRight = () => {
    pos += posMove;
    applyPos();
}

let moveCenter = () => {
    pos = 0;
    applyPos();
}

displayAngle();

unfreezeChurchill();

freezeButton.addEventListener('click', freezeChurchill);
unfreezeButton.addEventListener('click', unfreezeChurchill);

