var suma = 0;
//suma = suma +1;
//suma = suma +2;
//suma = suma +3;
//suma = suma +4;

//console.log(suma);

//for (var i=0; i<10; i++){
 //   suma = suma +1;
  //  console.log("variable de iteracion", i);
//}
//console.log("variable suma", suma);


//while (suma <3){
 //   suma = suma + 1;
 //   console.log(suma);
//}


//function comprobarBreak(x) {
  //  var i = 0;
   // while (i < 6) {
    //   if (i == 3)
     //     break;
     //  i++;
   // }
  //  return i * x;
 //}

 switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");

