var h = 0;
var r = 0;
function pitagoras (h,r) {
var angulo = 0;
angulo=(Math.atan(r/h));
return angulo;
}

function Escalado(Sx,Sy,Sz){ //funcion de escalado
    var matrizS = new THREE.Matrix4(); 
    matrizS.set(Sx, 0, 0, 0,
                0, Sy, 0, 0,
                0, 0, Sz, 0,
                0, 0, 0, 1);

               return matrizS;
}
function Translacionx(Tx,Ty,Tz){ //Funcion de traslacion 
    var matrizT = new THREE.Matrix4(); 
    matrizT.set(1, 0, 0, Tx,
                0, 1, 0, Ty,
                0, 0, 1, Tz,
                0, 0, 0, 1);

            //cubo.applyMatrix(matrizT);
           // scene.add(cubo); 
}