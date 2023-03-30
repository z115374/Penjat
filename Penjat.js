            var paraules = ["fetge","forca","jutjes","jutjat","mengen","penjat","quinta","setze","cordes"];
            var vides = 7;
            var Lletres = [];
            var pistes = ["A la quinta forca!","A ca un penjat no hi anomenis cordes",
                "Setze jutjes d'un jutjat mengen fetge d'un penjat"]; 
            var paraulespistes = [2, 0, 2, 2, 2, 1, 0, 2, 1];
            var encerts = [];          
           var aleatori = Math.floor(Math.random() * paraules.length);
           var paraula = paraules[aleatori];
           var pista = pistes[paraulespistes[aleatori]];
            for (var i = 0; i < paraula.length ; i++) {
                encerts[i] = '_';
            };          
        function hint(){
           window.alert(pista);
        }
        function Verificar(){
            var lletra = document.getElementById("lletra").value;           
            lletra = lletra.toLowerCase(); 
            switch (lletra){
                case "à":
                case "á":
                    lletra = "a";
                    break;
                case "é":
                case "è":
                    lletra = "e";
                    break;
                case "í":              
                case "ï":
                    lletra = "i";
                    break;
                case "ó":
                case "ò":
                    lletra = "o";
                    break;
                case "ú":
                case "ü":
                    lletra = "u";
                    break;
                }
            var pos = paraula.indexOf(lletra);            
            if (pos === -1){
                alert("Has fallat!");              
                vides = vides -1;
                if (vides === 0){
                    document.getElementById("penjat0").hidden = false;
                    document.getElementById("penjat1").hidden = true;
                    alert("Has perdut!");
                    document.getElementById("catfight").play();
                    AturaTot();
                    }
                Lletres = Lletres + lletra + " ";
                document.getElementById("lletres").innerHTML = Lletres;
                document.getElementById("boom").play();
                document.getElementById("clock").play();
                switch (vides) {
                    case 6:
                        document.getElementById("penjat6").hidden = false; 
                        break;
                    case 5:
                        document.getElementById("penjat5").hidden = false;   
                        document.getElementById("penjat6").hidden = true;
                        break;
                    case 4:
                        document.getElementById("penjat4").hidden = false;  
                        document.getElementById("penjat5").hidden = true;
                        break;
                    case 3:
                        document.getElementById("penjat3").hidden = false;    
                        document.getElementById("penjat4").hidden = true;
                        break;
                    case 2:
                        document.getElementById("penjat2").hidden = false;    
                        document.getElementById("penjat3").hidden = true;
                        break;
                    case 1:
                        document.getElementById("penjat1").hidden = false;    
                        document.getElementById("penjat2").hidden = true;
                        break;
                    case 0:
                        document.getElementById("penjat0").hidden= false;
                        document.getElementById("penjat1").hidden = true;
                }
            } else {                
                 { alert("Has encertat");                
                document.getElementById("miau").play();
                for (var i = 0; i < paraula.length ; i++ ) {
                    if (paraula[i] === lletra) {
                    encerts[i] = lletra;                     
                    }
                }
                if (encerts.indexOf("_") === -1 ){
                    alert("Has guanyat!");
                    document.body.style.backgroundImage = "url('img/Party.png')";
                    document.getElementById("cheer").play();
                    AturaTot();}
                }            
            document.getElementById("encertades").innerHTML = encerts;
            }
            document.getElementById("vides").innerHTML ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
        }
        function AturaTot() {
            document.getElementById("lletra").disabled = true;
            document.getElementById("boto").disabled = true;
            document.getElementById("botofons").disabled = true;
            document.getElementById("botocastell").disabled = true;
            document.getElementById("botodesert").disabled = true;
            document.getElementById("botofesta").disabled = true;
            document.getElementById("botopista").disabled = true;
        }
        function Inici(){
            document.getElementById("encertades").innerHTML = encerts;
            document.getElementById("penjat0").hidden = true;
            document.getElementById("penjat1").hidden = true;
            document.getElementById("penjat2").hidden = true;
            document.getElementById("penjat3").hidden = true;
            document.getElementById("penjat4").hidden = true;
            document.getElementById("penjat5").hidden = true;
            document.getElementById("penjat6").hidden = true;
            document.getElementById("disfressa1").hidden = true;
            document.getElementById("disfressa2").hidden = true;           
        }
        function fons(){
            document.body.style.backgroundImage = "url('img/fondo1.png')";
        }
        function castell(){
            document.body.style.backgroundImage = "url('img/Castle2.png')";
        }
        function desert(){
            document.body.style.backgroundImage = "url('img/Desert.png')";
        }
        function festa(){
            document.body.style.backgroundImage = "url('img/Party.png')";
        }