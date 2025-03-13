function setup() {
  createCanvas(900, 700);
}

function draw() {
  //cielo
  background(55, 7, 63);

  //luna
  fill('white');
  noStroke();
  circle(650,140,200);
  fill(55, 7, 63);
  noStroke();
  circle(550,100,280);

  //estrellas
  stroke('white');
  strokeWeight(5);
  point(20,20);
  point(300,40);
  point(500,70);
  point(350,180);
  point(750,30);
  point(150,250);
  point(500,270);
  strokeWeight(1);
  //brillante1
  line(50,395,80,395);
  line(64,420,64,370);
  line(54,410,75,380);
  line(74,410,54,380);
  //brillante2
  line(750,300,750,350);
  line(725,325,775,325);
  line(738,342,764,310);
  line(740,310,766,345);
  

  //nubes
  //nube grande
  noStroke();
  fill('pink');
  circle(100,100,75);
  circle(150,100,100);
  circle(200,100,75);

  //nuve chica
  circle(750,200,70);
  circle(710,200,50);
  circle(790,200,50);

  //montañas
  fill(100, 37, 112);
  triangle(150,700,400,350,650,700);
  fill(147, 104, 156);
  triangle(550,700,400,350,650,700);







}
