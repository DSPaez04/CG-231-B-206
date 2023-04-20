/*
Hola profe intente usar las siguientes funciones pero no logre 
implementarlas pero igual las dejo para que vea que intente hacerlo*/

function Escalado(obj,Sx,Sy,Sz){ //funcion de escalado
    var matrizS = new THREE.Matrix4(); 
    matrizS.set(Sx, 0, 0, 0,
                0, Sy, 0, 0,
                0, 0, Sz, 0,
                0, 0, 0, 1);

                return matrizS;
               // obj.applyMatrix(matrizS);
                //scene.add(obj); 
}
function Translacionx(obj,Tx,Ty,Tz){ //Funcion de traslacion 
    var matrizT = new THREE.Matrix4(); 
    matrizT.set(1, 0, 0, Tx,
                0, 1, 0, Ty,
                0, 0, 1, Tz,
                0, 0, 0, 1);

            //obj.applyMatrix(matrizT);
           // scene.add(obj); 
}