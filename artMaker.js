window.onload = function(){
    let containertop = document.createElement('div');
    let gcolor;

    let colors = ['red','green','blue','white','black','yellow','purple','voilet','ornage','indigo'];

    let mouseDown;
    let mouseUp;

    window.addEventListener('mousedown', function(event){
        mouseDown = true;
        mouseUp = false;
      });

    window.addEventListener('mouseup', function(event){
        mouseDown = false;
        mouseUp = true;
      });

  // Set the hieght, width, and background color of our container
  // center it horizontally with margin = auto
  // and use grid layout to make the boxes nice. 
  containertop.style.height = '40px';
  containertop.style.width = '400px';
  containertop.style.backgroundColor = 'green';
  containertop.style.margin = 'auto';
  containertop.style.display = 'grid';
  containertop.style.gridTemplate = 'repeat(1, 1fr) / repeat(10, 1fr)';
  containertop.style.border = '5px dotted black';

  for(let i = 0; i < 10; i++) {
    let box = document.createElement('span');
    box.style.border = '2px solid black';
    box.style.backgroundColor = colors[i];
    box.addEventListener('click', function(event){
      gcolor = box.style.backgroundColor;
    });
    containertop.appendChild(box);
  }
  document.body.appendChild(containertop);
  let container = document.createElement('div');
  
  // Set the hieght, width, and background color of our container
  // center it horizontally with margin = auto
  // and use grid layout to make the boxes nice. 
  container.style.height = '500px';
  container.style.width = '500px';
  container.style.backgroundColor = 'green';
  container.style.margin = 'auto';
  container.style.display = 'grid';
  container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
  container.style.border = '5px dotted black';

  for(let i = 0; i < 100; i++) {
    let box = document.createElement('span');
    box.style.border = '2px solid black';
    box.style.backgroundColor = 'white';
    box.addEventListener('click', function(event){
      box.style.backgroundColor = gcolor;
    });
    box.addEventListener('mouseover', function(event){
        if(mouseDown){
        box.style.backgroundColor = gcolor;
        }
      });
    container.appendChild(box);
  }

  document.body.appendChild(container);
  }