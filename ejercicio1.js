var lienzo1 = document.getElementById("lienzo");
var papel1 = lienzo1.getContext("2d");
var papel2 = lienzo2.getContext("2d");
var imagen1 = new Image();
imagen1.src =
data:image/jpeg;base64,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
imagen1.addEventListener("load", dibujar);

function dibyujar(){
  papel1.drawImage(imagen1, 200, 200, 100, 100);
  papel2.drawImage(imagen1, 600, 0, 100, 100);
}