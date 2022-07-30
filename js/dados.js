let dice1 = document.querySelectorAll('#die-1');
let dice2 = document.querySelectorAll('#die-2');
let dice3 = document.querySelectorAll('#die-3');
let dice4 = document.querySelectorAll('#die-4');
let dice5 = document.querySelectorAll('#die-5');
let dice6 = document.querySelectorAll('#die-6');
let dice7 = document.querySelectorAll('#die-7');
let dice8 = document.querySelectorAll('#die-8');
let dice9 = document.querySelectorAll('#die-9');
let dice10 = document.querySelectorAll('#die-10');
let dice11 = document.querySelectorAll('#die-11');
let dice12 = document.querySelectorAll('#die-12');
let dice13 = document.querySelectorAll('#die-13');
let dice14 = document.querySelectorAll('#die-14');
let dice15 = document.querySelectorAll('#die-15');
let dice16 = document.querySelectorAll('#die-16');
let dice17 = document.querySelectorAll('#die-17');
let dice18 = document.querySelectorAll('#die-18');
let dice19 = document.querySelectorAll('#die-19');
let dice20 = document.querySelectorAll('#die-20');
let dice21 = document.querySelectorAll('#die-21');
let dice22 = document.querySelectorAll('#die-22');
let dice23 = document.querySelectorAll('#die-23');
let dice24 = document.querySelectorAll('#die-24');
let dice25 = document.querySelectorAll('#die-25');
let dice26 = document.querySelectorAll('#die-26');
let dice27 = document.querySelectorAll('#die-27');
let dice28 = document.querySelectorAll('#die-28');
let dice29 = document.querySelectorAll('#die-29');
let dice30 = document.querySelectorAll('#die-30');
let dice31 = document.querySelectorAll('#die-31');
let dice32 = document.querySelectorAll('#die-32');
let dice33 = document.querySelectorAll('#die-33');
let dice34 = document.querySelectorAll('#die-34');
let dice35 = document.querySelectorAll('#die-35');
let dice36 = document.querySelectorAll('#die-36');
let dice37 = document.querySelectorAll('#die-37');

document.getElementById("con-tp1").style.display = "none";
document.getElementById("con-tp2").style.display = "none";
document.getElementById("con-tp3").style.display = "none";
document.getElementById("con-tp4").style.display = "none";
document.getElementById("con-tp5").style.display = "none";
document.getElementById("con-tp6").style.display = "none";
document.getElementById("con-tp7").style.display = "none";
document.getElementById("con-tp8").style.display = "none";
document.getElementById("con-tp9").style.display = "none";
document.getElementById("con-tp10").style.display = "none";
document.getElementById("con-tp11").style.display = "none";
document.getElementById("con-tp12").style.display = "none";
document.getElementById("con-tp13").style.display = "none";
document.getElementById("con-tp14").style.display = "none";
document.getElementById("con-tp15").style.display = "none";
document.getElementById("con-tp16").style.display = "none";
document.getElementById("con-tp17").style.display = "none";
document.getElementById("con-tp18").style.display = "none";
document.getElementById("con-tp19").style.display = "none";
document.getElementById("con-tp20").style.display = "none";
document.getElementById("con-tp21").style.display = "none";
document.getElementById("con-tp22").style.display = "none";
document.getElementById("con-tp23").style.display = "none";
document.getElementById("con-tp24").style.display = "none";
document.getElementById("con-tp25").style.display = "none";
document.getElementById("con-tp26").style.display = "none";
document.getElementById("con-tp27").style.display = "none";
document.getElementById("con-tp28").style.display = "none";
document.getElementById("con-tp29").style.display = "none";
document.getElementById("con-tp30").style.display = "none";
document.getElementById("con-tp31").style.display = "none";
document.getElementById("con-tp32").style.display = "none";
document.getElementById("con-tp33").style.display = "none";
document.getElementById("con-tp34").style.display = "none";
document.getElementById("con-tp35").style.display = "none";
document.getElementById("con-tp36").style.display = "none";
document.getElementById("con-tp37").style.display = "none";

function rolla1() {

    dice1.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp1").style.display = "none";
    document.getElementById("msgdesastre1").innerHTML = "";
    document.getElementById("msgmtboa1").innerHTML = "";
    document.getElementById("ag1").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice1.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp1").style.display = "";
        document.getElementById("ag1").style.marginBottom = "1em";

        var randomNum = [];
        var total = 0;
        var modf = document.getElementById("ag1").value;

        function random() {
            randomNum.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum) {
            total += randomNum[j];
        }


        var suma =  +total + +modf;
        var sub =  +total - +modf.substring(2);
        var sum =  +total + +modf.substring(2);


        if(modf == 0) { 
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "+";
            document.getElementById("modf1").innerHTML = modf;
            document.getElementById("total1").innerHTML = randomNum;
            document.getElementById("infs1").innerHTML = 
            "d20" + " + " + modf;
        } else if (modf.substring(0, 1) >= 1) {
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "+";
            document.getElementById("modf1").innerHTML = modf;
            document.getElementById("total1").innerHTML = suma;
            document.getElementById("infs1").innerHTML = 
            "d20" +
            " + " + 
            modf;
        } else if (modf.substring(0, 1) == "+" && modf.substring(2) >= 1) {
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "+";
            document.getElementById("modf1").innerHTML = modf.substring(2);
            document.getElementById("total1").innerHTML = sum;
            document.getElementById("infs1").innerHTML = 
            "d20" +
            " + " + 
            modf.substring(2);
        }  else if (modf.substring(0, 1) == "+" && modf.substring(1) >= 1) {
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "+";
            document.getElementById("modf1").innerHTML = modf.substring(1);
            document.getElementById("total1").innerHTML = suma;
            document.getElementById("infs1").innerHTML = 
            "d20" +
            " + " + 
            modf.substring(1);
        }   else if (modf.substring(0,2) <= -1) {
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "-";
            document.getElementById("modf1").innerHTML = modf.substring(1);
            document.getElementById("total1").innerHTML = suma;
            document.getElementById("infs1").innerHTML = 
            "d20" +
            " - " + 
            modf.substring(1);
        } else if (modf.substring(0, 1) == "-") {
            document.getElementById("random1").innerHTML = randomNum;
            document.getElementById("sinal1").innerHTML = "-";
            document.getElementById("modf1").innerHTML = modf.substring(1);
            document.getElementById("total1").innerHTML = sub;
            document.getElementById("infs1").innerHTML = 
            "d20" +
            " - " + 
            modf.substring(1);
        } 
        
        if (randomNum == 1) {
            document.getElementById("msgdesastre1").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre1").style.color =
            "#B93131"; 
        } else if (randomNum == 20) {
            document.getElementById("msgmtboa1").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa1").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla2() {

    dice2.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp2").style.display = "none";
    document.getElementById("msgdesastre2").innerHTML = "";
    document.getElementById("msgmtboa2").innerHTML = "";
    document.getElementById("ag2").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice2.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp2").style.display = "";
        document.getElementById("ag2").style.marginBottom = "1em";

        var randomNum2 = [];
        var total2 = 0;
        var modf2 = document.getElementById("ag2").value;

        function random() {
            randomNum2.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum2) {
            total2 += randomNum2[j];
        }


        var suma2 =  +total2 + +modf2;
        var sub2 =  +total2 - +modf2.substring(2);
        var sum2 =  +total2 + +modf2.substring(2);


        if(modf2 == 0) { 
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "+";
            document.getElementById("modf2").innerHTML = modf2;
            document.getElementById("total2").innerHTML = randomNum2;
            document.getElementById("infs2").innerHTML = 
            "d20" + " + " + modf2;
        } else if (modf2.substring(0, 1) >= 1) {
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "+";
            document.getElementById("modf2").innerHTML = modf2;
            document.getElementById("total2").innerHTML = suma2;
            document.getElementById("infs2").innerHTML = 
            "d20" +
            " + " + 
            modf2;
        } else if (modf2.substring(0, 1) == "+" && modf2.substring(2) >= 1) {
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "+";
            document.getElementById("modf2").innerHTML = modf2.substring(2);
            document.getElementById("total2").innerHTML = sum2;
            document.getElementById("infs2").innerHTML = 
            "d20" +
            " + " + 
            modf2.substring(2);
        }  else if (modf2.substring(0, 1) == "+" && modf2.substring(1) >= 1) {
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "+";
            document.getElementById("modf2").innerHTML = modf2.substring(1);
            document.getElementById("total2").innerHTML = suma2;
            document.getElementById("infs2").innerHTML = 
            "d20" +
            " + " + 
            modf2.substring(1);
        }   else if (modf2.substring(0,2) <= -1) {
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "-";
            document.getElementById("modf2").innerHTML = modf2.substring(1);
            document.getElementById("total2").innerHTML = suma2;
            document.getElementById("infs2").innerHTML = 
            "d20" +
            " - " + 
            modf2.substring(1);
        } else if (modf2.substring(0, 1) == "-") {
            document.getElementById("random2").innerHTML = randomNum2;
            document.getElementById("sinal2").innerHTML = "-";
            document.getElementById("modf2").innerHTML = modf2.substring(1);
            document.getElementById("total2").innerHTML = sub2;
            document.getElementById("infs2").innerHTML = 
            "d20" +
            " - " + 
            modf2.substring(1);
        } 
        
        if (randomNum2 == 1) {
            document.getElementById("msgdesastre2").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre2").style.color =
            "#B93131"; 
        } else if (randomNum2 == 20) {
            document.getElementById("msgmtboa2").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa2").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla3() {

    dice3.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp3").style.display = "none";
    document.getElementById("msgdesastre3").innerHTML = "";
    document.getElementById("msgmtboa3").innerHTML = "";
    document.getElementById("ag3").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice3.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp3").style.display = "";
        document.getElementById("ag3").style.marginBottom = "1em";

        var randomNum3 = [];
        var total3 = 0;
        var modf3 = document.getElementById("ag3").value;

        function random() {
            randomNum3.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum3) {
            total3 += randomNum3[j];
        }


        var suma3 =  +total3 + +modf3;
        var sub3 =  +total3 - +modf3.substring(2);
        var sum3 =  +total3 + +modf3.substring(2);


        if(modf3 == 0) { 
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "+";
            document.getElementById("modf3").innerHTML = modf3;
            document.getElementById("total3").innerHTML = randomNum3;
            document.getElementById("infs3").innerHTML = 
            "d20" + " + " + modf3;
        } else if (modf3.substring(0, 1) >= 1) {
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "+";
            document.getElementById("modf3").innerHTML = modf3;
            document.getElementById("total3").innerHTML = suma3;
            document.getElementById("infs3").innerHTML = 
            "d20" +
            " + " + 
            modf3;
        } else if (modf3.substring(0, 1) == "+" && modf3.substring(2) >= 1) {
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "+";
            document.getElementById("modf3").innerHTML = modf3.substring(2);
            document.getElementById("total3").innerHTML = sum3;
            document.getElementById("infs3").innerHTML = 
            "d20" +
            " + " + 
            modf3.substring(2);
        }  else if (modf3.substring(0, 1) == "+" && modf3.substring(1) >= 1) {
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "+";
            document.getElementById("modf3").innerHTML = modf3.substring(1);
            document.getElementById("total3").innerHTML = suma3;
            document.getElementById("infs3").innerHTML = 
            "d20" +
            " + " + 
            modf3.substring(1);
        }   else if (modf3.substring(0,2) <= -1) {
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "-";
            document.getElementById("modf3").innerHTML = modf3.substring(1);
            document.getElementById("total3").innerHTML = suma3;
            document.getElementById("infs3").innerHTML = 
            "d20" +
            " - " + 
            modf3.substring(1);
        } else if (modf3.substring(0, 1) == "-") {
            document.getElementById("random3").innerHTML = randomNum3;
            document.getElementById("sinal3").innerHTML = "-";
            document.getElementById("modf3").innerHTML = modf3.substring(1);
            document.getElementById("total3").innerHTML = sub3;
            document.getElementById("infs3").innerHTML = 
            "d20" +
            " - " + 
            modf3.substring(1);
        } 
        
        if (randomNum3 == 1) {
            document.getElementById("msgdesastre3").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre3").style.color =
            "#B93131"; 
        } else if (randomNum3 == 20) {
            document.getElementById("msgmtboa3").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa3").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla4() {

    dice4.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp4").style.display = "none";
    document.getElementById("msgdesastre4").innerHTML = "";
    document.getElementById("msgmtboa4").innerHTML = "";
    document.getElementById("ag4").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice4.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp4").style.display = "";
        document.getElementById("ag4").style.marginBottom = "1em";

        var randomNum4 = [];
        var total4 = 0;
        var modf4 = document.getElementById("ag4").value;

        function random() {
            randomNum4.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum4) {
            total4 += randomNum4[j];
        }


        var suma4 =  +total4 + +modf4;
        var sub4 =  +total4 - +modf4.substring(2);
        var sum4 =  +total4 + +modf4.substring(2);


        if(modf4 == 0) { 
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "+";
            document.getElementById("modf4").innerHTML = modf4;
            document.getElementById("total4").innerHTML = randomNum4;
            document.getElementById("infs4").innerHTML = 
            "d20" + " + " + modf4;
        } else if (modf4.substring(0, 1) >= 1) {
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "+";
            document.getElementById("modf4").innerHTML = modf4;
            document.getElementById("total4").innerHTML = suma4;
            document.getElementById("infs4").innerHTML = 
            "d20" +
            " + " + 
            modf4;
        } else if (modf4.substring(0, 1) == "+" && modf4.substring(2) >= 1) {
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "+";
            document.getElementById("modf4").innerHTML = modf4.substring(2);
            document.getElementById("total4").innerHTML = sum4;
            document.getElementById("infs4").innerHTML = 
            "d20" +
            " + " + 
            modf4.substring(2);
        }  else if (modf4.substring(0, 1) == "+" && modf4.substring(1) >= 1) {
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "+";
            document.getElementById("modf4").innerHTML = modf4.substring(1);
            document.getElementById("total4").innerHTML = suma4;
            document.getElementById("infs4").innerHTML = 
            "d20" +
            " + " + 
            modf4.substring(1);
        }   else if (modf4.substring(0,2) <= -1) {
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "-";
            document.getElementById("modf4").innerHTML = modf4.substring(1);
            document.getElementById("total4").innerHTML = suma4;
            document.getElementById("infs4").innerHTML = 
            "d20" +
            " - " + 
            modf4.substring(1);
        } else if (modf4.substring(0, 1) == "-") {
            document.getElementById("random4").innerHTML = randomNum4;
            document.getElementById("sinal4").innerHTML = "-";
            document.getElementById("modf4").innerHTML = modf4.substring(1);
            document.getElementById("total4").innerHTML = sub4;
            document.getElementById("infs4").innerHTML = 
            "d20" +
            " - " + 
            modf4.substring(1);
        } 
        
        if (randomNum4 == 1) {
            document.getElementById("msgdesastre4").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre4").style.color =
            "#B93131"; 
        } else if (randomNum4 == 20) {
            document.getElementById("msgmtboa4").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa4").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla5() {

    dice5.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp5").style.display = "none";
    document.getElementById("msgdesastre5").innerHTML = "";
    document.getElementById("msgmtboa5").innerHTML = "";
    document.getElementById("ag5").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice5.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp5").style.display = "";
        document.getElementById("ag5").style.marginBottom = "1em";

        var randomNum5 = [];
        var total5 = 0;
        var modf5 = document.getElementById("ag5").value;

        function random() {
            randomNum5.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum5) {
            total5 += randomNum5[j];
        }


        var suma5 =  +total5 + +modf5;
        var sub5 =  +total5 - +modf5.substring(2);
        var sum5 =  +total5 + +modf5.substring(2);


        if(modf5 == 0) { 
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "+";
            document.getElementById("modf5").innerHTML = modf5;
            document.getElementById("total5").innerHTML = randomNum5;
            document.getElementById("infs5").innerHTML = 
            "d20" + " + " + modf5;
        } else if (modf5.substring(0, 1) >= 1) {
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "+";
            document.getElementById("modf5").innerHTML = modf5;
            document.getElementById("total5").innerHTML = suma5;
            document.getElementById("infs5").innerHTML = 
            "d20" +
            " + " + 
            modf5;
        } else if (modf5.substring(0, 1) == "+" && modf5.substring(2) >= 1) {
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "+";
            document.getElementById("modf5").innerHTML = modf5.substring(2);
            document.getElementById("total5").innerHTML = sum5;
            document.getElementById("infs5").innerHTML = 
            "d20" +
            " + " + 
            modf5.substring(2);
        }  else if (modf5.substring(0, 1) == "+" && modf5.substring(1) >= 1) {
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "+";
            document.getElementById("modf5").innerHTML = modf5.substring(1);
            document.getElementById("total5").innerHTML = suma5;
            document.getElementById("infs5").innerHTML = 
            "d20" +
            " + " + 
            modf5.substring(1);
        }   else if (modf5.substring(0,2) <= -1) {
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "-";
            document.getElementById("modf5").innerHTML = modf5.substring(1);
            document.getElementById("total5").innerHTML = suma5;
            document.getElementById("infs5").innerHTML = 
            "d20" +
            " - " + 
            modf5.substring(1);
        } else if (modf5.substring(0, 1) == "-") {
            document.getElementById("random5").innerHTML = randomNum5;
            document.getElementById("sinal5").innerHTML = "-";
            document.getElementById("modf5").innerHTML = modf5.substring(1);
            document.getElementById("total5").innerHTML = sub5;
            document.getElementById("infs5").innerHTML = 
            "d20" +
            " - " + 
            modf5.substring(1);
        } 
        
        if (randomNum5 == 1) {
            document.getElementById("msgdesastre5").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre5").style.color =
            "#B93131"; 
        } else if (randomNum5 == 20) {
            document.getElementById("msgmtboa5").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa5").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla6() {

    dice6.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp6").style.display = "none";
    document.getElementById("msgdesastre6").innerHTML = "";
    document.getElementById("msgmtboa6").innerHTML = "";
    document.getElementById("ag6").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice6.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp6").style.display = "";
        document.getElementById("ag6").style.marginBottom = "1em";

        var randomNum6 = [];
        var total6 = 0;
        var modf6 = document.getElementById("ag6").value;

        function random() {
            randomNum6.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum6) {
            total6 += randomNum6[j];
        }


        var suma6 =  +total6 + +modf6;
        var sub6 =  +total6 - +modf6.substring(2);
        var sum6 =  +total6 + +modf6.substring(2);


        if(modf6 == 0) { 
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "+";
            document.getElementById("modf6").innerHTML = modf6;
            document.getElementById("total6").innerHTML = randomNum6;
            document.getElementById("infs6").innerHTML = 
            "d20" + " + " + modf6;
        } else if (modf6.substring(0, 1) >= 1) {
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "+";
            document.getElementById("modf6").innerHTML = modf6;
            document.getElementById("total6").innerHTML = suma6;
            document.getElementById("infs6").innerHTML = 
            "d20" +
            " + " + 
            modf6;
        } else if (modf6.substring(0, 1) == "+" && modf6.substring(2) >= 1) {
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "+";
            document.getElementById("modf6").innerHTML = modf6.substring(2);
            document.getElementById("total6").innerHTML = sum6;
            document.getElementById("infs6").innerHTML = 
            "d20" +
            " + " + 
            modf6.substring(2);
        }  else if (modf6.substring(0, 1) == "+" && modf6.substring(1) >= 1) {
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "+";
            document.getElementById("modf6").innerHTML = modf6.substring(1);
            document.getElementById("total6").innerHTML = suma6;
            document.getElementById("infs6").innerHTML = 
            "d20" +
            " + " + 
            modf6.substring(1);
        }   else if (modf6.substring(0,2) <= -1) {
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "-";
            document.getElementById("modf6").innerHTML = modf6.substring(1);
            document.getElementById("total6").innerHTML = suma6;
            document.getElementById("infs6").innerHTML = 
            "d20" +
            " - " + 
            modf6.substring(1);
        } else if (modf6.substring(0, 1) == "-") {
            document.getElementById("random6").innerHTML = randomNum6;
            document.getElementById("sinal6").innerHTML = "-";
            document.getElementById("modf6").innerHTML = modf6.substring(1);
            document.getElementById("total6").innerHTML = sub6;
            document.getElementById("infs6").innerHTML = 
            "d20" +
            " - " + 
            modf6.substring(1);
        } 
        
        if (randomNum6 == 1) {
            document.getElementById("msgdesastre6").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre6").style.color =
            "#B93131"; 
        } else if (randomNum6 == 20) {
            document.getElementById("msgmtboa6").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa6").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla7() {

    dice7.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp7").style.display = "none";
    document.getElementById("msgdesastre7").innerHTML = "";
    document.getElementById("msgmtboa7").innerHTML = "";
    document.getElementById("ag7").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice7.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp7").style.display = "";
        document.getElementById("ag7").style.marginBottom = "1em";

        var randomNum7 = [];
        var total7 = 0;
        var modf7 = document.getElementById("ag7").value;

        function random() {
            randomNum7.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum7) {
            total7 += randomNum7[j];
        }


        var suma7 =  +total7 + +modf7;
        var sub7 =  +total7 - +modf7.substring(2);
        var sum7 =  +total7 + +modf7.substring(2);


        if(modf7 == 0) { 
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "+";
            document.getElementById("modf7").innerHTML = modf7;
            document.getElementById("total7").innerHTML = randomNum7;
            document.getElementById("infs7").innerHTML = 
            "d20" + " + " + modf7;
        } else if (modf7.substring(0, 1) >= 1) {
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "+";
            document.getElementById("modf7").innerHTML = modf7;
            document.getElementById("total7").innerHTML = suma7;
            document.getElementById("infs7").innerHTML = 
            "d20" +
            " + " + 
            modf7;
        } else if (modf7.substring(0, 1) == "+" && modf7.substring(2) >= 1) {
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "+";
            document.getElementById("modf7").innerHTML = modf7.substring(2);
            document.getElementById("total7").innerHTML = sum7;
            document.getElementById("infs7").innerHTML = 
            "d20" +
            " + " + 
            modf7.substring(2);
        }  else if (modf7.substring(0, 1) == "+" && modf7.substring(1) >= 1) {
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "+";
            document.getElementById("modf7").innerHTML = modf7.substring(1);
            document.getElementById("total7").innerHTML = suma7;
            document.getElementById("infs7").innerHTML = 
            "d20" +
            " + " + 
            modf7.substring(1);
        }   else if (modf7.substring(0,2) <= -1) {
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "-";
            document.getElementById("modf7").innerHTML = modf7.substring(1);
            document.getElementById("total7").innerHTML = suma7;
            document.getElementById("infs7").innerHTML = 
            "d20" +
            " - " + 
            modf7.substring(1);
        } else if (modf7.substring(0, 1) == "-") {
            document.getElementById("random7").innerHTML = randomNum7;
            document.getElementById("sinal7").innerHTML = "-";
            document.getElementById("modf7").innerHTML = modf7.substring(1);
            document.getElementById("total7").innerHTML = sub7;
            document.getElementById("infs7").innerHTML = 
            "d20" +
            " - " + 
            modf7.substring(1);
        } 
        
        if (randomNum7 == 1) {
            document.getElementById("msgdesastre7").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre7").style.color =
            "#B93131"; 
        } else if (randomNum7 == 20) {
            document.getElementById("msgmtboa7").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa7").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla8() {

    dice8.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp8").style.display = "none";
    document.getElementById("msgdesastre8").innerHTML = "";
    document.getElementById("msgmtboa8").innerHTML = "";
    document.getElementById("ag8").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice8.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp8").style.display = "";
        document.getElementById("ag8").style.marginBottom = "1em";

        var randomNum8 = [];
        var total8 = 0;
        var modf8 = document.getElementById("ag8").value;

        function random() {
            randomNum8.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum8) {
            total8 += randomNum8[j];
        }


        var suma8 =  +total8 + +modf8;
        var sub8 =  +total8 - +modf8.substring(2);
        var sum8 =  +total8 + +modf8.substring(2);


        if(modf8 == 0) { 
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "+";
            document.getElementById("modf8").innerHTML = modf8;
            document.getElementById("total8").innerHTML = randomNum8;
            document.getElementById("infs8").innerHTML = 
            "d20" + " + " + modf8;
        } else if (modf8.substring(0, 1) >= 1) {
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "+";
            document.getElementById("modf8").innerHTML = modf8;
            document.getElementById("total8").innerHTML = suma8;
            document.getElementById("infs8").innerHTML = 
            "d20" +
            " + " + 
            modf8;
        } else if (modf8.substring(0, 1) == "+" && modf8.substring(2) >= 1) {
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "+";
            document.getElementById("modf8").innerHTML = modf8.substring(2);
            document.getElementById("total8").innerHTML = sum8;
            document.getElementById("infs8").innerHTML = 
            "d20" +
            " + " + 
            modf8.substring(2);
        }  else if (modf8.substring(0, 1) == "+" && modf8.substring(1) >= 1) {
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "+";
            document.getElementById("modf8").innerHTML = modf8.substring(1);
            document.getElementById("total8").innerHTML = suma8;
            document.getElementById("infs8").innerHTML = 
            "d20" +
            " + " + 
            modf8.substring(1);
        }   else if (modf8.substring(0,2) <= -1) {
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "-";
            document.getElementById("modf8").innerHTML = modf8.substring(1);
            document.getElementById("total8").innerHTML = suma8;
            document.getElementById("infs8").innerHTML = 
            "d20" +
            " - " + 
            modf8.substring(1);
        } else if (modf8.substring(0, 1) == "-") {
            document.getElementById("random8").innerHTML = randomNum8;
            document.getElementById("sinal8").innerHTML = "-";
            document.getElementById("modf8").innerHTML = modf8.substring(1);
            document.getElementById("total8").innerHTML = sub8;
            document.getElementById("infs8").innerHTML = 
            "d20" +
            " - " + 
            modf8.substring(1);
        } 
        
        if (randomNum8 == 1) {
            document.getElementById("msgdesastre8").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre8").style.color =
            "#B93131"; 
        } else if (randomNum8 == 20) {
            document.getElementById("msgmtboa8").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa8").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla9() {

    dice9.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp9").style.display = "none";
    document.getElementById("msgdesastre9").innerHTML = "";
    document.getElementById("msgmtboa9").innerHTML = "";
    document.getElementById("ag9").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice9.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp9").style.display = "";
        document.getElementById("ag9").style.marginBottom = "1em";

        var randomNum9 = [];
        var total9 = 0;
        var modf9 = document.getElementById("ag9").value;

        function random() {
            randomNum9.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum9) {
            total9 += randomNum9[j];
        }


        var suma9 =  +total9 + +modf9;
        var sub9 =  +total9 - +modf9.substring(2);
        var sum9 =  +total9 + +modf9.substring(2);


        if(modf9 == 0) { 
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "+";
            document.getElementById("modf9").innerHTML = modf9;
            document.getElementById("total9").innerHTML = randomNum9;
            document.getElementById("infs9").innerHTML = 
            "d20" + " + " + modf9;
        } else if (modf9.substring(0, 1) >= 1) {
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "+";
            document.getElementById("modf9").innerHTML = modf9;
            document.getElementById("total9").innerHTML = suma9;
            document.getElementById("infs9").innerHTML = 
            "d20" +
            " + " + 
            modf9;
        } else if (modf9.substring(0, 1) == "+" && modf9.substring(2) >= 1) {
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "+";
            document.getElementById("modf9").innerHTML = modf9.substring(2);
            document.getElementById("total9").innerHTML = sum9;
            document.getElementById("infs9").innerHTML = 
            "d20" +
            " + " + 
            modf9.substring(2);
        }  else if (modf9.substring(0, 1) == "+" && modf9.substring(1) >= 1) {
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "+";
            document.getElementById("modf9").innerHTML = modf9.substring(1);
            document.getElementById("total9").innerHTML = suma9;
            document.getElementById("infs9").innerHTML = 
            "d20" +
            " + " + 
            modf9.substring(1);
        }   else if (modf9.substring(0,2) <= -1) {
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "-";
            document.getElementById("modf9").innerHTML = modf9.substring(1);
            document.getElementById("total9").innerHTML = suma9;
            document.getElementById("infs9").innerHTML = 
            "d20" +
            " - " + 
            modf9.substring(1);
        } else if (modf9.substring(0, 1) == "-") {
            document.getElementById("random9").innerHTML = randomNum9;
            document.getElementById("sinal9").innerHTML = "-";
            document.getElementById("modf9").innerHTML = modf9.substring(1);
            document.getElementById("total9").innerHTML = sub9;
            document.getElementById("infs9").innerHTML = 
            "d20" +
            " - " + 
            modf9.substring(1);
        } 
        
        if (randomNum9 == 1) {
            document.getElementById("msgdesastre9").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre9").style.color =
            "#B93131"; 
        } else if (randomNum9 == 20) {
            document.getElementById("msgmtboa9").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa9").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla10() {

    dice10.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp10").style.display = "none";
    document.getElementById("msgdesastre10").innerHTML = "";
    document.getElementById("msgmtboa10").innerHTML = "";
    document.getElementById("ag10").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice10.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp10").style.display = "";
        document.getElementById("ag10").style.marginBottom = "1em";

        var randomNum10 = [];
        var total10 = 0;
        var modf10 = document.getElementById("ag10").value;

        function random() {
            randomNum10.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum10) {
            total10 += randomNum10[j];
        }


        var suma10 =  +total10 + +modf10;
        var sub10 =  +total10 - +modf10.substring(2);
        var sum10 =  +total10 + +modf10.substring(2);


        if(modf10 == 0) { 
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "+";
            document.getElementById("modf10").innerHTML = modf10;
            document.getElementById("total10").innerHTML = randomNum10;
            document.getElementById("infs10").innerHTML = 
            "d20" + " + " + modf10;
        } else if (modf10.substring(0, 1) >= 1) {
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "+";
            document.getElementById("modf10").innerHTML = modf10;
            document.getElementById("total10").innerHTML = suma10;
            document.getElementById("infs10").innerHTML = 
            "d20" +
            " + " + 
            modf10;
        } else if (modf10.substring(0, 1) == "+" && modf10.substring(2) >= 1) {
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "+";
            document.getElementById("modf10").innerHTML = modf10.substring(2);
            document.getElementById("total10").innerHTML = sum10;
            document.getElementById("infs10").innerHTML = 
            "d20" +
            " + " + 
            modf10.substring(2);
        }  else if (modf10.substring(0, 1) == "+" && modf10.substring(1) >= 1) {
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "+";
            document.getElementById("modf10").innerHTML = modf10.substring(1);
            document.getElementById("total10").innerHTML = suma10;
            document.getElementById("infs10").innerHTML = 
            "d20" +
            " + " + 
            modf10.substring(1);
        }   else if (modf10.substring(0,2) <= -1) {
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "-";
            document.getElementById("modf10").innerHTML = modf10.substring(1);
            document.getElementById("total10").innerHTML = suma10;
            document.getElementById("infs10").innerHTML = 
            "d20" +
            " - " + 
            modf10.substring(1);
        } else if (modf10.substring(0, 1) == "-") {
            document.getElementById("random10").innerHTML = randomNum10;
            document.getElementById("sinal10").innerHTML = "-";
            document.getElementById("modf10").innerHTML = modf10.substring(1);
            document.getElementById("total10").innerHTML = sub10;
            document.getElementById("infs10").innerHTML = 
            "d20" +
            " - " + 
            modf10.substring(1);
        } 
        
        if (randomNum10 == 1) {
            document.getElementById("msgdesastre10").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre10").style.color =
            "#B93131"; 
        } else if (randomNum10 == 20) {
            document.getElementById("msgmtboa10").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa10").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla11() {

    dice11.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp11").style.display = "none";
    document.getElementById("msgdesastre11").innerHTML = "";
    document.getElementById("msgmtboa11").innerHTML = "";
    document.getElementById("ag11").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice11.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp11").style.display = "";
        document.getElementById("ag11").style.marginBottom = "1em";

        var randomNum11 = [];
        var total11 = 0;
        var modf11 = document.getElementById("ag11").value;

        function random() {
            randomNum11.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum11) {
            total11 += randomNum11[j];
        }


        var suma11 =  +total11 + +modf11;
        var sub11 =  +total11 - +modf11.substring(2);
        var sum11 =  +total11 + +modf11.substring(2);


        if(modf11 == 0) { 
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "+";
            document.getElementById("modf11").innerHTML = modf11;
            document.getElementById("total11").innerHTML = randomNum11;
            document.getElementById("infs11").innerHTML = 
            "d20" + " + " + modf11;
        } else if (modf11.substring(0, 1) >= 1) {
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "+";
            document.getElementById("modf11").innerHTML = modf11;
            document.getElementById("total11").innerHTML = suma11;
            document.getElementById("infs11").innerHTML = 
            "d20" +
            " + " + 
            modf11;
        } else if (modf11.substring(0, 1) == "+" && modf11.substring(2) >= 1) {
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "+";
            document.getElementById("modf11").innerHTML = modf11.substring(2);
            document.getElementById("total11").innerHTML = sum11;
            document.getElementById("infs11").innerHTML = 
            "d20" +
            " + " + 
            modf11.substring(2);
        }  else if (modf11.substring(0, 1) == "+" && modf11.substring(1) >= 1) {
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "+";
            document.getElementById("modf11").innerHTML = modf11.substring(1);
            document.getElementById("total11").innerHTML = suma11;
            document.getElementById("infs11").innerHTML = 
            "d20" +
            " + " + 
            modf11.substring(1);
        }   else if (modf11.substring(0,2) <= -1) {
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "-";
            document.getElementById("modf11").innerHTML = modf11.substring(1);
            document.getElementById("total11").innerHTML = suma11;
            document.getElementById("infs11").innerHTML = 
            "d20" +
            " - " + 
            modf11.substring(1);
        } else if (modf11.substring(0, 1) == "-") {
            document.getElementById("random11").innerHTML = randomNum11;
            document.getElementById("sinal11").innerHTML = "-";
            document.getElementById("modf11").innerHTML = modf11.substring(1);
            document.getElementById("total11").innerHTML = sub11;
            document.getElementById("infs11").innerHTML = 
            "d20" +
            " - " + 
            modf11.substring(1);
        } 
        
        if (randomNum11 == 1) {
            document.getElementById("msgdesastre11").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre11").style.color =
            "#B93131"; 
        } else if (randomNum11 == 20) {
            document.getElementById("msgmtboa11").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa11").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla12() {

    dice12.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp12").style.display = "none";
    document.getElementById("msgdesastre12").innerHTML = "";
    document.getElementById("msgmtboa12").innerHTML = "";
    document.getElementById("ag12").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice12.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp12").style.display = "";
        document.getElementById("ag12").style.marginBottom = "1em";

        var randomNum12 = [];
        var total12 = 0;
        var modf12 = document.getElementById("ag12").value;

        function random() {
            randomNum12.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum12) {
            total12 += randomNum12[j];
        }


        var suma12 =  +total12 + +modf12;
        var sub12 =  +total12 - +modf12.substring(2);
        var sum12 =  +total12 + +modf12.substring(2);


        if(modf12 == 0) { 
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "+";
            document.getElementById("modf12").innerHTML = modf12;
            document.getElementById("total12").innerHTML = randomNum12;
            document.getElementById("infs12").innerHTML = 
            "d20" + " + " + modf12;
        } else if (modf12.substring(0, 1) >= 1) {
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "+";
            document.getElementById("modf12").innerHTML = modf12;
            document.getElementById("total12").innerHTML = suma12;
            document.getElementById("infs12").innerHTML = 
            "d20" +
            " + " + 
            modf12;
        } else if (modf12.substring(0, 1) == "+" && modf12.substring(2) >= 1) {
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "+";
            document.getElementById("modf12").innerHTML = modf12.substring(2);
            document.getElementById("total12").innerHTML = sum12;
            document.getElementById("infs12").innerHTML = 
            "d20" +
            " + " + 
            modf12.substring(2);
        }  else if (modf12.substring(0, 1) == "+" && modf12.substring(1) >= 1) {
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "+";
            document.getElementById("modf12").innerHTML = modf12.substring(1);
            document.getElementById("total12").innerHTML = suma12;
            document.getElementById("infs12").innerHTML = 
            "d20" +
            " + " + 
            modf12.substring(1);
        }   else if (modf12.substring(0,2) <= -1) {
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "-";
            document.getElementById("modf12").innerHTML = modf12.substring(1);
            document.getElementById("total12").innerHTML = suma12;
            document.getElementById("infs12").innerHTML = 
            "d20" +
            " - " + 
            modf12.substring(1);
        } else if (modf12.substring(0, 1) == "-") {
            document.getElementById("random12").innerHTML = randomNum12;
            document.getElementById("sinal12").innerHTML = "-";
            document.getElementById("modf12").innerHTML = modf12.substring(1);
            document.getElementById("total12").innerHTML = sub12;
            document.getElementById("infs12").innerHTML = 
            "d20" +
            " - " + 
            modf12.substring(1);
        } 
        
        if (randomNum12 == 1) {
            document.getElementById("msgdesastre12").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre12").style.color =
            "#B93131"; 
        } else if (randomNum12 == 20) {
            document.getElementById("msgmtboa12").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa12").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla13() {

    dice13.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp13").style.display = "none";
    document.getElementById("msgdesastre13").innerHTML = "";
    document.getElementById("msgmtboa13").innerHTML = "";
    document.getElementById("ag13").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice13.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp13").style.display = "";
        document.getElementById("ag13").style.marginBottom = "1em";

        var randomNum13 = [];
        var total13 = 0;
        var modf13 = document.getElementById("ag13").value;

        function random() {
            randomNum13.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum13) {
            total13 += randomNum13[j];
        }


        var suma13 =  +total13 + +modf13;
        var sub13 =  +total13 - +modf13.substring(2);
        var sum13 =  +total13 + +modf13.substring(2);


        if(modf13 == 0) { 
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "+";
            document.getElementById("modf13").innerHTML = modf13;
            document.getElementById("total13").innerHTML = randomNum13;
            document.getElementById("infs13").innerHTML = 
            "d20" + " + " + modf13;
        } else if (modf13.substring(0, 1) >= 1) {
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "+";
            document.getElementById("modf13").innerHTML = modf13;
            document.getElementById("total13").innerHTML = suma13;
            document.getElementById("infs13").innerHTML = 
            "d20" +
            " + " + 
            modf13;
        } else if (modf13.substring(0, 1) == "+" && modf13.substring(2) >= 1) {
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "+";
            document.getElementById("modf13").innerHTML = modf13.substring(2);
            document.getElementById("total13").innerHTML = sum13;
            document.getElementById("infs13").innerHTML = 
            "d20" +
            " + " + 
            modf13.substring(2);
        }  else if (modf13.substring(0, 1) == "+" && modf13.substring(1) >= 1) {
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "+";
            document.getElementById("modf13").innerHTML = modf13.substring(1);
            document.getElementById("total13").innerHTML = suma13;
            document.getElementById("infs13").innerHTML = 
            "d20" +
            " + " + 
            modf13.substring(1);
        }   else if (modf13.substring(0,2) <= -1) {
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "-";
            document.getElementById("modf13").innerHTML = modf13.substring(1);
            document.getElementById("total13").innerHTML = suma13;
            document.getElementById("infs13").innerHTML = 
            "d20" +
            " - " + 
            modf13.substring(1);
        } else if (modf13.substring(0, 1) == "-") {
            document.getElementById("random13").innerHTML = randomNum13;
            document.getElementById("sinal13").innerHTML = "-";
            document.getElementById("modf13").innerHTML = modf13.substring(1);
            document.getElementById("total13").innerHTML = sub13;
            document.getElementById("infs13").innerHTML = 
            "d20" +
            " - " + 
            modf13.substring(1);
        } 
        
        if (randomNum13 == 1) {
            document.getElementById("msgdesastre13").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre13").style.color =
            "#B93131"; 
        } else if (randomNum13 == 20) {
            document.getElementById("msgmtboa13").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa13").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla14() {

    dice14.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp14").style.display = "none";
    document.getElementById("msgdesastre14").innerHTML = "";
    document.getElementById("msgmtboa14").innerHTML = "";
    document.getElementById("ag14").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice14.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp14").style.display = "";
        document.getElementById("ag14").style.marginBottom = "1em";

        var randomNum14 = [];
        var total14 = 0;
        var modf14 = document.getElementById("ag14").value;

        function random() {
            randomNum14.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum14) {
            total14 += randomNum14[j];
        }


        var suma14 =  +total14 + +modf14;
        var sub14 =  +total14 - +modf14.substring(2);
        var sum14 =  +total14 + +modf14.substring(2);


        if(modf14 == 0) { 
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "+";
            document.getElementById("modf14").innerHTML = modf14;
            document.getElementById("total14").innerHTML = randomNum14;
            document.getElementById("infs14").innerHTML = 
            "d20" + " + " + modf14;
        } else if (modf14.substring(0, 1) >= 1) {
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "+";
            document.getElementById("modf14").innerHTML = modf14;
            document.getElementById("total14").innerHTML = suma14;
            document.getElementById("infs14").innerHTML = 
            "d20" +
            " + " + 
            modf14;
        } else if (modf14.substring(0, 1) == "+" && modf14.substring(2) >= 1) {
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "+";
            document.getElementById("modf14").innerHTML = modf14.substring(2);
            document.getElementById("total14").innerHTML = sum14;
            document.getElementById("infs14").innerHTML = 
            "d20" +
            " + " + 
            modf14.substring(2);
        }  else if (modf14.substring(0, 1) == "+" && modf14.substring(1) >= 1) {
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "+";
            document.getElementById("modf14").innerHTML = modf14.substring(1);
            document.getElementById("total14").innerHTML = suma14;
            document.getElementById("infs14").innerHTML = 
            "d20" +
            " + " + 
            modf14.substring(1);
        }   else if (modf14.substring(0,2) <= -1) {
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "-";
            document.getElementById("modf14").innerHTML = modf14.substring(1);
            document.getElementById("total14").innerHTML = suma14;
            document.getElementById("infs14").innerHTML = 
            "d20" +
            " - " + 
            modf14.substring(1);
        } else if (modf14.substring(0, 1) == "-") {
            document.getElementById("random14").innerHTML = randomNum14;
            document.getElementById("sinal14").innerHTML = "-";
            document.getElementById("modf14").innerHTML = modf14.substring(1);
            document.getElementById("total14").innerHTML = sub14;
            document.getElementById("infs14").innerHTML = 
            "d20" +
            " - " + 
            modf14.substring(1);
        } 
        
        if (randomNum14 == 1) {
            document.getElementById("msgdesastre14").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre14").style.color =
            "#B93131"; 
        } else if (randomNum14 == 20) {
            document.getElementById("msgmtboa14").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa14").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla15() {

    dice15.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp15").style.display = "none";
    document.getElementById("msgdesastre15").innerHTML = "";
    document.getElementById("msgmtboa15").innerHTML = "";
    document.getElementById("ag15").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice15.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp15").style.display = "";
        document.getElementById("ag15").style.marginBottom = "1em";

        var randomNum15 = [];
        var total15 = 0;
        var modf15 = document.getElementById("ag15").value;

        function random() {
            randomNum15.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum15) {
            total15 += randomNum15[j];
        }


        var suma15 =  +total15 + +modf15;
        var sub15 =  +total15 - +modf15.substring(2);
        var sum15 =  +total15 + +modf15.substring(2);


        if(modf15 == 0) { 
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "+";
            document.getElementById("modf15").innerHTML = modf15;
            document.getElementById("total15").innerHTML = randomNum15;
            document.getElementById("infs15").innerHTML = 
            "d20" + " + " + modf15;
        } else if (modf15.substring(0, 1) >= 1) {
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "+";
            document.getElementById("modf15").innerHTML = modf15;
            document.getElementById("total15").innerHTML = suma15;
            document.getElementById("infs15").innerHTML = 
            "d20" +
            " + " + 
            modf15;
        } else if (modf15.substring(0, 1) == "+" && modf15.substring(2) >= 1) {
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "+";
            document.getElementById("modf15").innerHTML = modf15.substring(2);
            document.getElementById("total15").innerHTML = sum15;
            document.getElementById("infs15").innerHTML = 
            "d20" +
            " + " + 
            modf15.substring(2);
        }  else if (modf15.substring(0, 1) == "+" && modf15.substring(1) >= 1) {
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "+";
            document.getElementById("modf15").innerHTML = modf15.substring(1);
            document.getElementById("total15").innerHTML = suma15;
            document.getElementById("infs15").innerHTML = 
            "d20" +
            " + " + 
            modf15.substring(1);
        }   else if (modf15.substring(0,2) <= -1) {
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "-";
            document.getElementById("modf15").innerHTML = modf15.substring(1);
            document.getElementById("total15").innerHTML = suma15;
            document.getElementById("infs15").innerHTML = 
            "d20" +
            " - " + 
            modf15.substring(1);
        } else if (modf15.substring(0, 1) == "-") {
            document.getElementById("random15").innerHTML = randomNum15;
            document.getElementById("sinal15").innerHTML = "-";
            document.getElementById("modf15").innerHTML = modf15.substring(1);
            document.getElementById("total15").innerHTML = sub15;
            document.getElementById("infs15").innerHTML = 
            "d20" +
            " - " + 
            modf15.substring(1);
        } 
        
        if (randomNum15 == 1) {
            document.getElementById("msgdesastre15").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre15").style.color =
            "#B93131"; 
        } else if (randomNum15 == 20) {
            document.getElementById("msgmtboa15").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa15").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla16() {

    dice16.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp16").style.display = "none";
    document.getElementById("msgdesastre16").innerHTML = "";
    document.getElementById("msgmtboa16").innerHTML = "";
    document.getElementById("ag16").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice16.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp16").style.display = "";
        document.getElementById("ag16").style.marginBottom = "1em";

        var randomNum16 = [];
        var total16 = 0;
        var modf16 = document.getElementById("ag16").value;

        function random() {
            randomNum16.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum16) {
            total16 += randomNum16[j];
        }


        var suma16 =  +total16 + +modf16;
        var sub16 =  +total16 - +modf16.substring(2);
        var sum16 =  +total16 + +modf16.substring(2);


        if(modf16 == 0) { 
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "+";
            document.getElementById("modf16").innerHTML = modf16;
            document.getElementById("total16").innerHTML = randomNum16;
            document.getElementById("infs16").innerHTML = 
            "d20" + " + " + modf16;
        } else if (modf16.substring(0, 1) >= 1) {
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "+";
            document.getElementById("modf16").innerHTML = modf16;
            document.getElementById("total16").innerHTML = suma16;
            document.getElementById("infs16").innerHTML = 
            "d20" +
            " + " + 
            modf16;
        } else if (modf16.substring(0, 1) == "+" && modf16.substring(2) >= 1) {
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "+";
            document.getElementById("modf16").innerHTML = modf16.substring(2);
            document.getElementById("total16").innerHTML = sum16;
            document.getElementById("infs16").innerHTML = 
            "d20" +
            " + " + 
            modf16.substring(2);
        }  else if (modf16.substring(0, 1) == "+" && modf16.substring(1) >= 1) {
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "+";
            document.getElementById("modf16").innerHTML = modf16.substring(1);
            document.getElementById("total16").innerHTML = suma16;
            document.getElementById("infs16").innerHTML = 
            "d20" +
            " + " + 
            modf16.substring(1);
        }   else if (modf16.substring(0,2) <= -1) {
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "-";
            document.getElementById("modf16").innerHTML = modf16.substring(1);
            document.getElementById("total16").innerHTML = suma16;
            document.getElementById("infs16").innerHTML = 
            "d20" +
            " - " + 
            modf16.substring(1);
        } else if (modf16.substring(0, 1) == "-") {
            document.getElementById("random16").innerHTML = randomNum16;
            document.getElementById("sinal16").innerHTML = "-";
            document.getElementById("modf16").innerHTML = modf16.substring(1);
            document.getElementById("total16").innerHTML = sub16;
            document.getElementById("infs16").innerHTML = 
            "d20" +
            " - " + 
            modf16.substring(1);
        } 
        
        if (randomNum16 == 1) {
            document.getElementById("msgdesastre16").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre16").style.color =
            "#B93131"; 
        } else if (randomNum16 == 20) {
            document.getElementById("msgmtboa16").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa16").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla17() {

    dice17.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp17").style.display = "none";
    document.getElementById("msgdesastre17").innerHTML = "";
    document.getElementById("msgmtboa17").innerHTML = "";
    document.getElementById("ag17").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice17.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp17").style.display = "";
        document.getElementById("ag17").style.marginBottom = "1em";

        var randomNum17 = [];
        var total17 = 0;
        var modf17 = document.getElementById("ag17").value;

        function random() {
            randomNum17.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum17) {
            total17 += randomNum17[j];
        }


        var suma17 =  +total17 + +modf17;
        var sub17 =  +total17 - +modf17.substring(2);
        var sum17 =  +total17 + +modf17.substring(2);


        if(modf17 == 0) { 
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "+";
            document.getElementById("modf17").innerHTML = modf17;
            document.getElementById("total17").innerHTML = randomNum17;
            document.getElementById("infs17").innerHTML = 
            "d20" + " + " + modf17;
        } else if (modf17.substring(0, 1) >= 1) {
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "+";
            document.getElementById("modf17").innerHTML = modf17;
            document.getElementById("total17").innerHTML = suma17;
            document.getElementById("infs17").innerHTML = 
            "d20" +
            " + " + 
            modf17;
        } else if (modf17.substring(0, 1) == "+" && modf17.substring(2) >= 1) {
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "+";
            document.getElementById("modf17").innerHTML = modf17.substring(2);
            document.getElementById("total17").innerHTML = sum17;
            document.getElementById("infs17").innerHTML = 
            "d20" +
            " + " + 
            modf17.substring(2);
        }  else if (modf17.substring(0, 1) == "+" && modf17.substring(1) >= 1) {
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "+";
            document.getElementById("modf17").innerHTML = modf17.substring(1);
            document.getElementById("total17").innerHTML = suma17;
            document.getElementById("infs17").innerHTML = 
            "d20" +
            " + " + 
            modf17.substring(1);
        }   else if (modf17.substring(0,2) <= -1) {
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "-";
            document.getElementById("modf17").innerHTML = modf17.substring(1);
            document.getElementById("total17").innerHTML = suma17;
            document.getElementById("infs17").innerHTML = 
            "d20" +
            " - " + 
            modf17.substring(1);
        } else if (modf17.substring(0, 1) == "-") {
            document.getElementById("random17").innerHTML = randomNum17;
            document.getElementById("sinal17").innerHTML = "-";
            document.getElementById("modf17").innerHTML = modf17.substring(1);
            document.getElementById("total17").innerHTML = sub17;
            document.getElementById("infs17").innerHTML = 
            "d20" +
            " - " + 
            modf17.substring(1);
        } 
        
        if (randomNum17 == 1) {
            document.getElementById("msgdesastre17").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre17").style.color =
            "#B93131"; 
        } else if (randomNum17 == 20) {
            document.getElementById("msgmtboa17").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa17").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla18() {

    dice18.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp18").style.display = "none";
    document.getElementById("msgdesastre18").innerHTML = "";
    document.getElementById("msgmtboa18").innerHTML = "";
    document.getElementById("ag18").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice18.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp18").style.display = "";
        document.getElementById("ag18").style.marginBottom = "1em";

        var randomNum18 = [];
        var total18 = 0;
        var modf18 = document.getElementById("ag18").value;

        function random() {
            randomNum18.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum18) {
            total18 += randomNum18[j];
        }


        var suma18 =  +total18 + +modf18;
        var sub18 =  +total18 - +modf18.substring(2);
        var sum18 =  +total18 + +modf18.substring(2);


        if(modf18 == 0) { 
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "+";
            document.getElementById("modf18").innerHTML = modf18;
            document.getElementById("total18").innerHTML = randomNum18;
            document.getElementById("infs18").innerHTML = 
            "d20" + " + " + modf18;
        } else if (modf18.substring(0, 1) >= 1) {
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "+";
            document.getElementById("modf18").innerHTML = modf18;
            document.getElementById("total18").innerHTML = suma18;
            document.getElementById("infs18").innerHTML = 
            "d20" +
            " + " + 
            modf18;
        } else if (modf18.substring(0, 1) == "+" && modf18.substring(2) >= 1) {
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "+";
            document.getElementById("modf18").innerHTML = modf18.substring(2);
            document.getElementById("total18").innerHTML = sum18;
            document.getElementById("infs18").innerHTML = 
            "d20" +
            " + " + 
            modf18.substring(2);
        }  else if (modf18.substring(0, 1) == "+" && modf18.substring(1) >= 1) {
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "+";
            document.getElementById("modf18").innerHTML = modf18.substring(1);
            document.getElementById("total18").innerHTML = suma18;
            document.getElementById("infs18").innerHTML = 
            "d20" +
            " + " + 
            modf18.substring(1);
        }   else if (modf18.substring(0,2) <= -1) {
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "-";
            document.getElementById("modf18").innerHTML = modf18.substring(1);
            document.getElementById("total18").innerHTML = suma18;
            document.getElementById("infs18").innerHTML = 
            "d20" +
            " - " + 
            modf18.substring(1);
        } else if (modf18.substring(0, 1) == "-") {
            document.getElementById("random18").innerHTML = randomNum18;
            document.getElementById("sinal18").innerHTML = "-";
            document.getElementById("modf18").innerHTML = modf18.substring(1);
            document.getElementById("total18").innerHTML = sub18;
            document.getElementById("infs18").innerHTML = 
            "d20" +
            " - " + 
            modf18.substring(1);
        } 
        
        if (randomNum18 == 1) {
            document.getElementById("msgdesastre18").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre18").style.color =
            "#B93131"; 
        } else if (randomNum18 == 20) {
            document.getElementById("msgmtboa18").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa18").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla19() {

    dice19.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp19").style.display = "none";
    document.getElementById("msgdesastre19").innerHTML = "";
    document.getElementById("msgmtboa19").innerHTML = "";
    document.getElementById("ag19").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice19.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp19").style.display = "";
        document.getElementById("ag19").style.marginBottom = "1em";

        var randomNum19 = [];
        var total19 = 0;
        var modf19 = document.getElementById("ag19").value;

        function random() {
            randomNum19.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum19) {
            total19 += randomNum19[j];
        }


        var suma19 =  +total19 + +modf19;
        var sub19 =  +total19 - +modf19.substring(2);
        var sum19 =  +total19 + +modf19.substring(2);


        if(modf19 == 0) { 
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "+";
            document.getElementById("modf19").innerHTML = modf19;
            document.getElementById("total19").innerHTML = randomNum19;
            document.getElementById("infs19").innerHTML = 
            "d20" + " + " + modf19;
        } else if (modf19.substring(0, 1) >= 1) {
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "+";
            document.getElementById("modf19").innerHTML = modf19;
            document.getElementById("total19").innerHTML = suma19;
            document.getElementById("infs19").innerHTML = 
            "d20" +
            " + " + 
            modf19;
        } else if (modf19.substring(0, 1) == "+" && modf19.substring(2) >= 1) {
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "+";
            document.getElementById("modf19").innerHTML = modf19.substring(2);
            document.getElementById("total19").innerHTML = sum19;
            document.getElementById("infs19").innerHTML = 
            "d20" +
            " + " + 
            modf19.substring(2);
        }  else if (modf19.substring(0, 1) == "+" && modf19.substring(1) >= 1) {
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "+";
            document.getElementById("modf19").innerHTML = modf19.substring(1);
            document.getElementById("total19").innerHTML = suma19;
            document.getElementById("infs19").innerHTML = 
            "d20" +
            " + " + 
            modf19.substring(1);
        }   else if (modf19.substring(0,2) <= -1) {
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "-";
            document.getElementById("modf19").innerHTML = modf19.substring(1);
            document.getElementById("total19").innerHTML = suma19;
            document.getElementById("infs19").innerHTML = 
            "d20" +
            " - " + 
            modf19.substring(1);
        } else if (modf19.substring(0, 1) == "-") {
            document.getElementById("random19").innerHTML = randomNum19;
            document.getElementById("sinal19").innerHTML = "-";
            document.getElementById("modf19").innerHTML = modf19.substring(1);
            document.getElementById("total19").innerHTML = sub19;
            document.getElementById("infs19").innerHTML = 
            "d20" +
            " - " + 
            modf19.substring(1);
        } 
        
        if (randomNum19 == 1) {
            document.getElementById("msgdesastre19").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre19").style.color =
            "#B93131"; 
        } else if (randomNum19 == 20) {
            document.getElementById("msgmtboa19").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa19").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla20() {

    dice20.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp20").style.display = "none";
    document.getElementById("msgdesastre20").innerHTML = "";
    document.getElementById("msgmtboa20").innerHTML = "";
    document.getElementById("ag20").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice20.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp20").style.display = "";
        document.getElementById("ag20").style.marginBottom = "1em";

        var randomNum20 = [];
        var total20 = 0;
        var modf20 = document.getElementById("ag20").value;

        function random() {
            randomNum20.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum20) {
            total20 += randomNum20[j];
        }


        var suma20 =  +total20 + +modf20;
        var sub20 =  +total20 - +modf20.substring(2);
        var sum20 =  +total20 + +modf20.substring(2);


        if(modf20 == 0) { 
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "+";
            document.getElementById("modf20").innerHTML = modf20;
            document.getElementById("total20").innerHTML = randomNum20;
            document.getElementById("infs20").innerHTML = 
            "d20" + " + " + modf20;
        } else if (modf20.substring(0, 1) >= 1) {
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "+";
            document.getElementById("modf20").innerHTML = modf20;
            document.getElementById("total20").innerHTML = suma20;
            document.getElementById("infs20").innerHTML = 
            "d20" +
            " + " + 
            modf20;
        } else if (modf20.substring(0, 1) == "+" && modf20.substring(2) >= 1) {
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "+";
            document.getElementById("modf20").innerHTML = modf20.substring(2);
            document.getElementById("total20").innerHTML = sum20;
            document.getElementById("infs20").innerHTML = 
            "d20" +
            " + " + 
            modf20.substring(2);
        }  else if (modf20.substring(0, 1) == "+" && modf20.substring(1) >= 1) {
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "+";
            document.getElementById("modf20").innerHTML = modf20.substring(1);
            document.getElementById("total20").innerHTML = suma20;
            document.getElementById("infs20").innerHTML = 
            "d20" +
            " + " + 
            modf20.substring(1);
        }   else if (modf20.substring(0,2) <= -1) {
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "-";
            document.getElementById("modf20").innerHTML = modf20.substring(1);
            document.getElementById("total20").innerHTML = suma20;
            document.getElementById("infs20").innerHTML = 
            "d20" +
            " - " + 
            modf20.substring(1);
        } else if (modf20.substring(0, 1) == "-") {
            document.getElementById("random20").innerHTML = randomNum20;
            document.getElementById("sinal20").innerHTML = "-";
            document.getElementById("modf20").innerHTML = modf20.substring(1);
            document.getElementById("total20").innerHTML = sub20;
            document.getElementById("infs20").innerHTML = 
            "d20" +
            " - " + 
            modf20.substring(1);
        } 
        
        if (randomNum20 == 1) {
            document.getElementById("msgdesastre20").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre20").style.color =
            "#B93131"; 
        } else if (randomNum20 == 20) {
            document.getElementById("msgmtboa20").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa20").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla21() {

    dice21.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp21").style.display = "none";
    document.getElementById("msgdesastre21").innerHTML = "";
    document.getElementById("msgmtboa21").innerHTML = "";
    document.getElementById("ag21").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice21.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp21").style.display = "";
        document.getElementById("ag21").style.marginBottom = "1em";

        var randomNum21 = [];
        var total21 = 0;
        var modf21 = document.getElementById("ag21").value;

        function random() {
            randomNum21.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum21) {
            total21 += randomNum21[j];
        }


        var suma21 =  +total21 + +modf21;
        var sub21 =  +total21 - +modf21.substring(2);
        var sum21 =  +total21 + +modf21.substring(2);


        if(modf21 == 0) { 
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "+";
            document.getElementById("modf21").innerHTML = modf21;
            document.getElementById("total21").innerHTML = randomNum21;
            document.getElementById("infs21").innerHTML = 
            "d20" + " + " + modf21;
        } else if (modf21.substring(0, 1) >= 1) {
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "+";
            document.getElementById("modf21").innerHTML = modf21;
            document.getElementById("total21").innerHTML = suma21;
            document.getElementById("infs21").innerHTML = 
            "d20" +
            " + " + 
            modf21;
        } else if (modf21.substring(0, 1) == "+" && modf21.substring(2) >= 1) {
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "+";
            document.getElementById("modf21").innerHTML = modf21.substring(2);
            document.getElementById("total21").innerHTML = sum21;
            document.getElementById("infs21").innerHTML = 
            "d20" +
            " + " + 
            modf21.substring(2);
        }  else if (modf21.substring(0, 1) == "+" && modf21.substring(1) >= 1) {
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "+";
            document.getElementById("modf21").innerHTML = modf21.substring(1);
            document.getElementById("total21").innerHTML = suma21;
            document.getElementById("infs21").innerHTML = 
            "d20" +
            " + " + 
            modf21.substring(1);
        }   else if (modf21.substring(0,2) <= -1) {
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "-";
            document.getElementById("modf21").innerHTML = modf21.substring(1);
            document.getElementById("total21").innerHTML = suma21;
            document.getElementById("infs21").innerHTML = 
            "d20" +
            " - " + 
            modf21.substring(1);
        } else if (modf21.substring(0, 1) == "-") {
            document.getElementById("random21").innerHTML = randomNum21;
            document.getElementById("sinal21").innerHTML = "-";
            document.getElementById("modf21").innerHTML = modf21.substring(1);
            document.getElementById("total21").innerHTML = sub21;
            document.getElementById("infs21").innerHTML = 
            "d20" +
            " - " + 
            modf21.substring(1);
        } 
        
        if (randomNum21 == 1) {
            document.getElementById("msgdesastre21").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre21").style.color =
            "#B93131"; 
        } else if (randomNum21 == 20) {
            document.getElementById("msgmtboa21").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa21").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla22() {

    dice22.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp22").style.display = "none";
    document.getElementById("msgdesastre22").innerHTML = "";
    document.getElementById("msgmtboa22").innerHTML = "";
    document.getElementById("ag22").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice22.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp22").style.display = "";
        document.getElementById("ag22").style.marginBottom = "1em";

        var randomNum22 = [];
        var total22 = 0;
        var modf22 = document.getElementById("ag22").value;

        function random() {
            randomNum22.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum22) {
            total22 += randomNum22[j];
        }


        var suma22 =  +total22 + +modf22;
        var sub22 =  +total22 - +modf22.substring(2);
        var sum22 =  +total22 + +modf22.substring(2);


        if(modf22 == 0) { 
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "+";
            document.getElementById("modf22").innerHTML = modf22;
            document.getElementById("total22").innerHTML = randomNum22;
            document.getElementById("infs22").innerHTML = 
            "d20" + " + " + modf22;
        } else if (modf22.substring(0, 1) >= 1) {
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "+";
            document.getElementById("modf22").innerHTML = modf22;
            document.getElementById("total22").innerHTML = suma22;
            document.getElementById("infs22").innerHTML = 
            "d20" +
            " + " + 
            modf22;
        } else if (modf22.substring(0, 1) == "+" && modf22.substring(2) >= 1) {
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "+";
            document.getElementById("modf22").innerHTML = modf22.substring(2);
            document.getElementById("total22").innerHTML = sum22;
            document.getElementById("infs22").innerHTML = 
            "d20" +
            " + " + 
            modf22.substring(2);
        }  else if (modf22.substring(0, 1) == "+" && modf22.substring(1) >= 1) {
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "+";
            document.getElementById("modf22").innerHTML = modf22.substring(1);
            document.getElementById("total22").innerHTML = suma22;
            document.getElementById("infs22").innerHTML = 
            "d20" +
            " + " + 
            modf22.substring(1);
        }   else if (modf22.substring(0,2) <= -1) {
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "-";
            document.getElementById("modf22").innerHTML = modf22.substring(1);
            document.getElementById("total22").innerHTML = suma22;
            document.getElementById("infs22").innerHTML = 
            "d20" +
            " - " + 
            modf22.substring(1);
        } else if (modf22.substring(0, 1) == "-") {
            document.getElementById("random22").innerHTML = randomNum22;
            document.getElementById("sinal22").innerHTML = "-";
            document.getElementById("modf22").innerHTML = modf22.substring(1);
            document.getElementById("total22").innerHTML = sub22;
            document.getElementById("infs22").innerHTML = 
            "d20" +
            " - " + 
            modf22.substring(1);
        } 
        
        if (randomNum22 == 1) {
            document.getElementById("msgdesastre22").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre22").style.color =
            "#B93131"; 
        } else if (randomNum22 == 20) {
            document.getElementById("msgmtboa22").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa22").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla23() {

    dice23.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp23").style.display = "none";
    document.getElementById("msgdesastre23").innerHTML = "";
    document.getElementById("msgmtboa23").innerHTML = "";
    document.getElementById("ag23").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice23.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp23").style.display = "";
        document.getElementById("ag23").style.marginBottom = "1em";

        var randomNum23 = [];
        var total23 = 0;
        var modf23 = document.getElementById("ag23").value;

        function random() {
            randomNum23.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum23) {
            total23 += randomNum23[j];
        }


        var suma23 =  +total23 + +modf23;
        var sub23 =  +total23 - +modf23.substring(2);
        var sum23 =  +total23 + +modf23.substring(2);


        if(modf23 == 0) { 
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "+";
            document.getElementById("modf23").innerHTML = modf23;
            document.getElementById("total23").innerHTML = randomNum23;
            document.getElementById("infs23").innerHTML = 
            "d20" + " + " + modf23;
        } else if (modf23.substring(0, 1) >= 1) {
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "+";
            document.getElementById("modf23").innerHTML = modf23;
            document.getElementById("total23").innerHTML = suma23;
            document.getElementById("infs23").innerHTML = 
            "d20" +
            " + " + 
            modf23;
        } else if (modf23.substring(0, 1) == "+" && modf23.substring(2) >= 1) {
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "+";
            document.getElementById("modf23").innerHTML = modf23.substring(2);
            document.getElementById("total23").innerHTML = sum23;
            document.getElementById("infs23").innerHTML = 
            "d20" +
            " + " + 
            modf23.substring(2);
        }  else if (modf23.substring(0, 1) == "+" && modf23.substring(1) >= 1) {
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "+";
            document.getElementById("modf23").innerHTML = modf23.substring(1);
            document.getElementById("total23").innerHTML = suma23;
            document.getElementById("infs23").innerHTML = 
            "d20" +
            " + " + 
            modf23.substring(1);
        }   else if (modf23.substring(0,2) <= -1) {
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "-";
            document.getElementById("modf23").innerHTML = modf23.substring(1);
            document.getElementById("total23").innerHTML = suma23;
            document.getElementById("infs23").innerHTML = 
            "d20" +
            " - " + 
            modf23.substring(1);
        } else if (modf23.substring(0, 1) == "-") {
            document.getElementById("random23").innerHTML = randomNum23;
            document.getElementById("sinal23").innerHTML = "-";
            document.getElementById("modf23").innerHTML = modf23.substring(1);
            document.getElementById("total23").innerHTML = sub23;
            document.getElementById("infs23").innerHTML = 
            "d20" +
            " - " + 
            modf23.substring(1);
        } 
        
        if (randomNum23 == 1) {
            document.getElementById("msgdesastre23").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre23").style.color =
            "#B93131"; 
        } else if (randomNum23 == 20) {
            document.getElementById("msgmtboa23").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa23").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla24() {

    dice24.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp24").style.display = "none";
    document.getElementById("msgdesastre24").innerHTML = "";
    document.getElementById("msgmtboa24").innerHTML = "";
    document.getElementById("ag24").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice24.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp24").style.display = "";
        document.getElementById("ag24").style.marginBottom = "1em";

        var randomNum24 = [];
        var total24 = 0;
        var modf24 = document.getElementById("ag24").value;

        function random() {
            randomNum24.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum24) {
            total24 += randomNum24[j];
        }


        var suma24 =  +total24 + +modf24;
        var sub24 =  +total24 - +modf24.substring(2);
        var sum24 =  +total24 + +modf24.substring(2);


        if(modf24 == 0) { 
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "+";
            document.getElementById("modf24").innerHTML = modf24;
            document.getElementById("total24").innerHTML = randomNum24;
            document.getElementById("infs24").innerHTML = 
            "d20" + " + " + modf24;
        } else if (modf24.substring(0, 1) >= 1) {
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "+";
            document.getElementById("modf24").innerHTML = modf24;
            document.getElementById("total24").innerHTML = suma24;
            document.getElementById("infs24").innerHTML = 
            "d20" +
            " + " + 
            modf24;
        } else if (modf24.substring(0, 1) == "+" && modf24.substring(2) >= 1) {
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "+";
            document.getElementById("modf24").innerHTML = modf24.substring(2);
            document.getElementById("total24").innerHTML = sum24;
            document.getElementById("infs24").innerHTML = 
            "d20" +
            " + " + 
            modf24.substring(2);
        }  else if (modf24.substring(0, 1) == "+" && modf24.substring(1) >= 1) {
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "+";
            document.getElementById("modf24").innerHTML = modf24.substring(1);
            document.getElementById("total24").innerHTML = suma24;
            document.getElementById("infs24").innerHTML = 
            "d20" +
            " + " + 
            modf24.substring(1);
        }   else if (modf24.substring(0,2) <= -1) {
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "-";
            document.getElementById("modf24").innerHTML = modf24.substring(1);
            document.getElementById("total24").innerHTML = suma24;
            document.getElementById("infs24").innerHTML = 
            "d20" +
            " - " + 
            modf24.substring(1);
        } else if (modf24.substring(0, 1) == "-") {
            document.getElementById("random24").innerHTML = randomNum24;
            document.getElementById("sinal24").innerHTML = "-";
            document.getElementById("modf24").innerHTML = modf24.substring(1);
            document.getElementById("total24").innerHTML = sub24;
            document.getElementById("infs24").innerHTML = 
            "d20" +
            " - " + 
            modf24.substring(1);
        } 
        
        if (randomNum24 == 1) {
            document.getElementById("msgdesastre24").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre24").style.color =
            "#B93131"; 
        } else if (randomNum24 == 20) {
            document.getElementById("msgmtboa24").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa24").style.color =
            "#3183B9"; 
        }
    }, 1500);
}
function rolla25() {

    dice25.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp25").style.display = "none";
    document.getElementById("msgdesastre25").innerHTML = "";
    document.getElementById("msgmtboa25").innerHTML = "";
    document.getElementById("ag25").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice25.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp25").style.display = "";
        document.getElementById("ag25").style.marginBottom = "1em";

        var randomNum25 = [];
        var total25 = 0;
        var modf25 = document.getElementById("ag25").value;

        function random() {
            randomNum25.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum25) {
            total25 += randomNum25[j];
        }


        var suma25 =  +total25 + +modf25;
        var sub25 =  +total25 - +modf25.substring(2);
        var sum25 =  +total25 + +modf25.substring(2);


        if(modf25 == 0) { 
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "+";
            document.getElementById("modf25").innerHTML = modf25;
            document.getElementById("total25").innerHTML = randomNum25;
            document.getElementById("infs25").innerHTML = 
            "d20" + " + " + modf25;
        } else if (modf25.substring(0, 1) >= 1) {
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "+";
            document.getElementById("modf25").innerHTML = modf25;
            document.getElementById("total25").innerHTML = suma25;
            document.getElementById("infs25").innerHTML = 
            "d20" +
            " + " + 
            modf25;
        } else if (modf25.substring(0, 1) == "+" && modf25.substring(2) >= 1) {
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "+";
            document.getElementById("modf25").innerHTML = modf25.substring(2);
            document.getElementById("total25").innerHTML = sum25;
            document.getElementById("infs25").innerHTML = 
            "d20" +
            " + " + 
            modf25.substring(2);
        }  else if (modf25.substring(0, 1) == "+" && modf25.substring(1) >= 1) {
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "+";
            document.getElementById("modf25").innerHTML = modf25.substring(1);
            document.getElementById("total25").innerHTML = suma25;
            document.getElementById("infs25").innerHTML = 
            "d20" +
            " + " + 
            modf25.substring(1);
        }   else if (modf25.substring(0,2) <= -1) {
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "-";
            document.getElementById("modf25").innerHTML = modf25.substring(1);
            document.getElementById("total25").innerHTML = suma25;
            document.getElementById("infs25").innerHTML = 
            "d20" +
            " - " + 
            modf25.substring(1);
        } else if (modf25.substring(0, 1) == "-") {
            document.getElementById("random25").innerHTML = randomNum25;
            document.getElementById("sinal25").innerHTML = "-";
            document.getElementById("modf25").innerHTML = modf25.substring(1);
            document.getElementById("total25").innerHTML = sub25;
            document.getElementById("infs25").innerHTML = 
            "d20" +
            " - " + 
            modf25.substring(1);
        } 
        
        if (randomNum25 == 1) {
            document.getElementById("msgdesastre25").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre25").style.color =
            "#B93131"; 
        } else if (randomNum25 == 20) {
            document.getElementById("msgmtboa25").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa25").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla26() {

    dice26.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp26").style.display = "none";
    document.getElementById("msgdesastre26").innerHTML = "";
    document.getElementById("msgmtboa26").innerHTML = "";
    document.getElementById("ag26").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice26.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp26").style.display = "";
        document.getElementById("ag26").style.marginBottom = "1em";

        var randomNum26 = [];
        var total26 = 0;
        var modf26 = document.getElementById("ag26").value;

        function random() {
            randomNum26.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum26) {
            total26 += randomNum26[j];
        }


        var suma26 =  +total26 + +modf26;
        var sub26 =  +total26 - +modf26.substring(2);
        var sum26 =  +total26 + +modf26.substring(2);


        if(modf26 == 0) { 
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "+";
            document.getElementById("modf26").innerHTML = modf26;
            document.getElementById("total26").innerHTML = randomNum26;
            document.getElementById("infs26").innerHTML = 
            "d20" + " + " + modf26;
        } else if (modf26.substring(0, 1) >= 1) {
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "+";
            document.getElementById("modf26").innerHTML = modf26;
            document.getElementById("total26").innerHTML = suma26;
            document.getElementById("infs26").innerHTML = 
            "d20" +
            " + " + 
            modf26;
        } else if (modf26.substring(0, 1) == "+" && modf26.substring(2) >= 1) {
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "+";
            document.getElementById("modf26").innerHTML = modf26.substring(2);
            document.getElementById("total26").innerHTML = sum26;
            document.getElementById("infs26").innerHTML = 
            "d20" +
            " + " + 
            modf26.substring(2);
        }  else if (modf26.substring(0, 1) == "+" && modf26.substring(1) >= 1) {
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "+";
            document.getElementById("modf26").innerHTML = modf26.substring(1);
            document.getElementById("total26").innerHTML = suma26;
            document.getElementById("infs26").innerHTML = 
            "d20" +
            " + " + 
            modf26.substring(1);
        }   else if (modf26.substring(0,2) <= -1) {
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "-";
            document.getElementById("modf26").innerHTML = modf26.substring(1);
            document.getElementById("total26").innerHTML = suma26;
            document.getElementById("infs26").innerHTML = 
            "d20" +
            " - " + 
            modf26.substring(1);
        } else if (modf26.substring(0, 1) == "-") {
            document.getElementById("random26").innerHTML = randomNum26;
            document.getElementById("sinal26").innerHTML = "-";
            document.getElementById("modf26").innerHTML = modf26.substring(1);
            document.getElementById("total26").innerHTML = sub26;
            document.getElementById("infs26").innerHTML = 
            "d20" +
            " - " + 
            modf26.substring(1);
        } 
        
        if (randomNum26 == 1) {
            document.getElementById("msgdesastre26").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre26").style.color =
            "#B93131"; 
        } else if (randomNum26 == 20) {
            document.getElementById("msgmtboa26").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa26").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla27() {

    dice27.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp27").style.display = "none";
    document.getElementById("msgdesastre27").innerHTML = "";
    document.getElementById("msgmtboa27").innerHTML = "";
    document.getElementById("ag27").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice27.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp27").style.display = "";
        document.getElementById("ag27").style.marginBottom = "1em";

        var randomNum27 = [];
        var total27 = 0;
        var modf27 = document.getElementById("ag27").value;

        function random() {
            randomNum27.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum27) {
            total27 += randomNum27[j];
        }


        var suma27 =  +total27 + +modf27;
        var sub27 =  +total27 - +modf27.substring(2);
        var sum27 =  +total27 + +modf27.substring(2);


        if(modf27 == 0) { 
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "+";
            document.getElementById("modf27").innerHTML = modf27;
            document.getElementById("total27").innerHTML = randomNum27;
            document.getElementById("infs27").innerHTML = 
            "d20" + " + " + modf27;
        } else if (modf27.substring(0, 1) >= 1) {
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "+";
            document.getElementById("modf27").innerHTML = modf27;
            document.getElementById("total27").innerHTML = suma27;
            document.getElementById("infs27").innerHTML = 
            "d20" +
            " + " + 
            modf27;
        } else if (modf27.substring(0, 1) == "+" && modf27.substring(2) >= 1) {
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "+";
            document.getElementById("modf27").innerHTML = modf27.substring(2);
            document.getElementById("total27").innerHTML = sum27;
            document.getElementById("infs27").innerHTML = 
            "d20" +
            " + " + 
            modf27.substring(2);
        }  else if (modf27.substring(0, 1) == "+" && modf27.substring(1) >= 1) {
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "+";
            document.getElementById("modf27").innerHTML = modf27.substring(1);
            document.getElementById("total27").innerHTML = suma27;
            document.getElementById("infs27").innerHTML = 
            "d20" +
            " + " + 
            modf27.substring(1);
        }   else if (modf27.substring(0,2) <= -1) {
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "-";
            document.getElementById("modf27").innerHTML = modf27.substring(1);
            document.getElementById("total27").innerHTML = suma27;
            document.getElementById("infs27").innerHTML = 
            "d20" +
            " - " + 
            modf27.substring(1);
        } else if (modf27.substring(0, 1) == "-") {
            document.getElementById("random27").innerHTML = randomNum27;
            document.getElementById("sinal27").innerHTML = "-";
            document.getElementById("modf27").innerHTML = modf27.substring(1);
            document.getElementById("total27").innerHTML = sub27;
            document.getElementById("infs27").innerHTML = 
            "d20" +
            " - " + 
            modf27.substring(1);
        } 
        
        if (randomNum27 == 1) {
            document.getElementById("msgdesastre27").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre27").style.color =
            "#B93131"; 
        } else if (randomNum27 == 20) {
            document.getElementById("msgmtboa27").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa27").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla28() {

    dice28.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp28").style.display = "none";
    document.getElementById("msgdesastre28").innerHTML = "";
    document.getElementById("msgmtboa28").innerHTML = "";
    document.getElementById("ag28").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice28.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp28").style.display = "";
        document.getElementById("ag28").style.marginBottom = "1em";

        var randomNum28 = [];
        var total28 = 0;
        var modf28 = document.getElementById("ag28").value;

        function random() {
            randomNum28.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum28) {
            total28 += randomNum28[j];
        }


        var suma28 =  +total28 + +modf28;
        var sub28 =  +total28 - +modf28.substring(2);
        var sum28 =  +total28 + +modf28.substring(2);


        if(modf28 == 0) { 
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "+";
            document.getElementById("modf28").innerHTML = modf28;
            document.getElementById("total28").innerHTML = randomNum28;
            document.getElementById("infs28").innerHTML = 
            "d20" + " + " + modf28;
        } else if (modf28.substring(0, 1) >= 1) {
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "+";
            document.getElementById("modf28").innerHTML = modf28;
            document.getElementById("total28").innerHTML = suma28;
            document.getElementById("infs28").innerHTML = 
            "d20" +
            " + " + 
            modf28;
        } else if (modf28.substring(0, 1) == "+" && modf28.substring(2) >= 1) {
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "+";
            document.getElementById("modf28").innerHTML = modf28.substring(2);
            document.getElementById("total28").innerHTML = sum28;
            document.getElementById("infs28").innerHTML = 
            "d20" +
            " + " + 
            modf28.substring(2);
        }  else if (modf28.substring(0, 1) == "+" && modf28.substring(1) >= 1) {
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "+";
            document.getElementById("modf28").innerHTML = modf28.substring(1);
            document.getElementById("total28").innerHTML = suma28;
            document.getElementById("infs28").innerHTML = 
            "d20" +
            " + " + 
            modf28.substring(1);
        }   else if (modf28.substring(0,2) <= -1) {
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "-";
            document.getElementById("modf28").innerHTML = modf28.substring(1);
            document.getElementById("total28").innerHTML = suma28;
            document.getElementById("infs28").innerHTML = 
            "d20" +
            " - " + 
            modf28.substring(1);
        } else if (modf28.substring(0, 1) == "-") {
            document.getElementById("random28").innerHTML = randomNum28;
            document.getElementById("sinal28").innerHTML = "-";
            document.getElementById("modf28").innerHTML = modf28.substring(1);
            document.getElementById("total28").innerHTML = sub28;
            document.getElementById("infs28").innerHTML = 
            "d20" +
            " - " + 
            modf28.substring(1);
        } 
        
        if (randomNum28 == 1) {
            document.getElementById("msgdesastre28").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre28").style.color =
            "#B93131"; 
        } else if (randomNum28 == 20) {
            document.getElementById("msgmtboa28").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa28").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla29() {

    dice29.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp29").style.display = "none";
    document.getElementById("msgdesastre29").innerHTML = "";
    document.getElementById("msgmtboa29").innerHTML = "";
    document.getElementById("ag29").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice29.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp29").style.display = "";
        document.getElementById("ag29").style.marginBottom = "1em";

        var randomNum29 = [];
        var total29 = 0;
        var modf29 = document.getElementById("ag29").value;

        function random() {
            randomNum29.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum29) {
            total29 += randomNum29[j];
        }


        var suma29 =  +total29 + +modf29;
        var sub29 =  +total29 - +modf29.substring(2);
        var sum29 =  +total29 + +modf29.substring(2);


        if(modf29 == 0) { 
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "+";
            document.getElementById("modf29").innerHTML = modf29;
            document.getElementById("total29").innerHTML = randomNum29;
            document.getElementById("infs29").innerHTML = 
            "d20" + " + " + modf29;
        } else if (modf29.substring(0, 1) >= 1) {
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "+";
            document.getElementById("modf29").innerHTML = modf29;
            document.getElementById("total29").innerHTML = suma29;
            document.getElementById("infs29").innerHTML = 
            "d20" +
            " + " + 
            modf29;
        } else if (modf29.substring(0, 1) == "+" && modf29.substring(2) >= 1) {
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "+";
            document.getElementById("modf29").innerHTML = modf29.substring(2);
            document.getElementById("total29").innerHTML = sum29;
            document.getElementById("infs29").innerHTML = 
            "d20" +
            " + " + 
            modf29.substring(2);
        }  else if (modf29.substring(0, 1) == "+" && modf29.substring(1) >= 1) {
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "+";
            document.getElementById("modf29").innerHTML = modf29.substring(1);
            document.getElementById("total29").innerHTML = suma29;
            document.getElementById("infs29").innerHTML = 
            "d20" +
            " + " + 
            modf29.substring(1);
        }   else if (modf29.substring(0,2) <= -1) {
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "-";
            document.getElementById("modf29").innerHTML = modf29.substring(1);
            document.getElementById("total29").innerHTML = suma29;
            document.getElementById("infs29").innerHTML = 
            "d20" +
            " - " + 
            modf29.substring(1);
        } else if (modf29.substring(0, 1) == "-") {
            document.getElementById("random29").innerHTML = randomNum29;
            document.getElementById("sinal29").innerHTML = "-";
            document.getElementById("modf29").innerHTML = modf29.substring(1);
            document.getElementById("total29").innerHTML = sub29;
            document.getElementById("infs29").innerHTML = 
            "d20" +
            " - " + 
            modf29.substring(1);
        } 
        
        if (randomNum29 == 1) {
            document.getElementById("msgdesastre29").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre29").style.color =
            "#B93131"; 
        } else if (randomNum29 == 20) {
            document.getElementById("msgmtboa29").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa29").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla30() {

    dice30.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp30").style.display = "none";
    document.getElementById("msgdesastre30").innerHTML = "";
    document.getElementById("msgmtboa30").innerHTML = "";
    document.getElementById("ag30").style.marginBottom = "2.5em";

    setTimeout(

        function(){
            dice30.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp30").style.display = "";
        document.getElementById("ag30").style.marginBottom = "1em";

        var randomNum30 = [];
        var total30 = 0;
        var modf30 = document.getElementById("ag30").value;

        function random() {
            randomNum30.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum30) {
            total30 += randomNum30[j];
        }


        var suma30 =  +total30 + +modf30;
        var sub30 =  +total30 - +modf30.substring(2);
        var sum30 =  +total30 + +modf30.substring(2);


        if(modf30 == 0) { 
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "+";
            document.getElementById("modf30").innerHTML = modf30;
            document.getElementById("total30").innerHTML = randomNum30;
            document.getElementById("infs30").innerHTML = 
            "d20" + " + " + modf30;
        } else if (modf30.substring(0, 1) >= 1) {
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "+";
            document.getElementById("modf30").innerHTML = modf30;
            document.getElementById("total30").innerHTML = suma30;
            document.getElementById("infs30").innerHTML = 
            "d20" +
            " + " + 
            modf30;
        } else if (modf30.substring(0, 1) == "+" && modf30.substring(2) >= 1) {
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "+";
            document.getElementById("modf30").innerHTML = modf30.substring(2);
            document.getElementById("total30").innerHTML = sum30;
            document.getElementById("infs30").innerHTML = 
            "d20" +
            " + " + 
            modf30.substring(2);
        }  else if (modf30.substring(0, 1) == "+" && modf30.substring(1) >= 1) {
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "+";
            document.getElementById("modf30").innerHTML = modf30.substring(1);
            document.getElementById("total30").innerHTML = suma30;
            document.getElementById("infs30").innerHTML = 
            "d20" +
            " + " + 
            modf30.substring(1);
        }   else if (modf30.substring(0,2) <= -1) {
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "-";
            document.getElementById("modf30").innerHTML = modf30.substring(1);
            document.getElementById("total30").innerHTML = suma30;
            document.getElementById("infs30").innerHTML = 
            "d20" +
            " - " + 
            modf30.substring(1);
        } else if (modf30.substring(0, 1) == "-") {
            document.getElementById("random30").innerHTML = randomNum30;
            document.getElementById("sinal30").innerHTML = "-";
            document.getElementById("modf30").innerHTML = modf30.substring(1);
            document.getElementById("total30").innerHTML = sub30;
            document.getElementById("infs30").innerHTML = 
            "d20" +
            " - " + 
            modf30.substring(1);
        } 
        
        if (randomNum30 == 1) {
            document.getElementById("msgdesastre30").innerHTML =
            "Desastre"; 
            document.getElementById("msgdesastre30").style.color =
            "#B93131"; 
        } else if (randomNum30 == 20) {
            document.getElementById("msgmtboa30").innerHTML =
            "Extremo";
            document.getElementById("msgmtboa30").style.color =
            "#3183B9"; 
        }
    }, 1500);
}

function rolla31() {

    dice31.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp31").style.display = "none";

    setTimeout(

        function(){
            dice31.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp31").style.display = "";

        var randomNum31 = [];
        var total31 = 0;

        function random() {
            randomNum31.push(Math.floor(Math.random() * 4) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum31) {
            total31 += randomNum31[j];
        }

        document.getElementById("random31").innerHTML = randomNum31;
        document.getElementById("infs31").innerHTML = "d4";

    }, 1500);
}

function rolla32() {

    dice32.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp32").style.display = "none";

    setTimeout(

        function(){
            dice32.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp32").style.display = "";

        var randomNum32 = [];
        var total32 = 0;

        function random() {
            randomNum32.push(Math.floor(Math.random() * 6) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum32) {
            total32 += randomNum32[j];
        }

        document.getElementById("random32").innerHTML = randomNum32;
        document.getElementById("infs32").innerHTML = "d6";

    }, 1500);
}

function rolla33() {

    dice33.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp33").style.display = "none";

    setTimeout(

        function(){
            dice33.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp33").style.display = "";

        var randomNum33 = [];
        var total33 = 0;

        function random() {
            randomNum33.push(Math.floor(Math.random() * 8) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum33) {
            total33 += randomNum33[j];
        }

        document.getElementById("random33").innerHTML = randomNum33;
        document.getElementById("infs33").innerHTML = "d8";

    }, 1500);
}

function rolla34() {

    dice34.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp34").style.display = "none";

    setTimeout(

        function(){
            dice34.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp34").style.display = "";

        var randomNum34 = [];
        var total34 = 0;

        function random() {
            randomNum34.push(Math.floor(Math.random() * 10) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum34) {
            total34 += randomNum34[j];
        }

        document.getElementById("random34").innerHTML = randomNum34;
        document.getElementById("infs34").innerHTML = "d10";

    }, 1500);
}

function rolla35() {

    dice35.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp35").style.display = "none";

    setTimeout(

        function(){
            dice35.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp35").style.display = "";

        var randomNum35 = [];
        var total35 = 0;

        function random() {
            randomNum35.push(Math.floor(Math.random() * 12) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum35) {
            total35 += randomNum35[j];
        }

        document.getElementById("random35").innerHTML = randomNum35;
        document.getElementById("infs35").innerHTML = "d12";

    }, 1500);
}

function rolla36() {

    dice36.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp36").style.display = "none";
    document.getElementById("msgdesastre36").innerHTML = "";
    document.getElementById("msgmtboa36").innerHTML = "";

    setTimeout(

        function(){
            dice36.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp36").style.display = "";

        var randomNum36 = [];
        var total36 = 0;

        function random() {
            randomNum36.push(Math.floor(Math.random() * 20) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum36) {
            total36 += randomNum36[j];
        }

        document.getElementById("random36").innerHTML = randomNum36;
        document.getElementById("infs36").innerHTML = "d20";

        if(randomNum36 == 1) {
            document.getElementById("msgdesastre36").innerHTML = "Desastre";
            document.getElementById("msgdesastre36").style.color =
            "#B93131";
        } else if(randomNum36 == 20) {
            document.getElementById("msgmtboa36").innerHTML = "Extremo";
            document.getElementById("msgmtboa36").style.color =
            "#3183B9"; 
        }

    }, 1500);
}

function rolla37() {

    dice37.forEach(function(die) {
        die.classList.add("shake");
    });

    document.getElementById("con-tp37").style.display = "none";

    setTimeout(

        function(){
            dice37.forEach(function(die) {
                die.classList.remove("shake");
            });

        document.getElementById("con-tp37").style.display = "";

        var randomNum37 = [];
        var total37 = 0;

        function random() {
            randomNum37.push(Math.floor(Math.random() * 100) + 1);
        }

        for (let i = 0; i < 1; i++) {
            random();
        }

        for (let j in randomNum37) {
            total37 += randomNum37[j];
        }

        document.getElementById("random37").innerHTML = randomNum37;
        document.getElementById("infs37").innerHTML = "d100";

    }, 1500);
}



