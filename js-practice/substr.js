function combi(append,str){
if(str.length==0){
    console.log(append);
}else{

    combi(append+str.charAt(0),str.substring(1,str.length));
    combi(append,str.substring(1,str.length));
}

}

combi("","abc");