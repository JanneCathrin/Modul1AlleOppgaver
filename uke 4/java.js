function opp(detgåroppellerned){
    if (personer >= 0 && personer < 11){
        personer += detgåroppellerned;
     }
 view();
     if(personer == 11){
        return (alert('NÅ ER DET FULT, VENNLIGST VENT'));
             
}}

 function ned(detgåroppellerned){ 
    if (personer >= 1){
        personer -= detgåroppellerned;
     } 
 view();        
}

 function restart(){
    personer = 0;
    view();
}


