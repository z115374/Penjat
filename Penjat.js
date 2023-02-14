            var vides = 7;
            var Lletres = " ";
        
        
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
                case "ì":
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
            if (lletra >= "m"){
            /*la ç hauria de ser correcta peró al tenir un nombre més alt al codi 
            ASCII es incorrecte */  
                alert("Has fallat!");              
                vides = vides -1;
                if (vides === 0){
                    document.getElementById("penjat0").hidden = false;
                    document.getElementById("penjat1").hidden = true;
                    alert("Has perdut!");
                    AturaTot();
                    }
                Lletres = Lletres + lletra +" ";
                document.getElementById("lletres").innerHTML = Lletres;
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
                alert("Has encertat");               
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
        }
        function Amagar(){
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