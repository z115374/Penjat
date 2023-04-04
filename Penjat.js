            const Idiomes = [
                {
                    "IdIdioma": "ca",
                    "Titol": "Versió amb Estructures de Dades Joc del Penjat",
                    "Versio": "Versió β Joc del Penjat",
                    "Input": "Escriu una lletra minúscula",
                    "Pregunta": "Anam a la quinta forca?",
                    "Comprovar": "Comprovar",
                    "Paraula": "Paraula:",
                    "Sopes": "Demanes sopes?",
                    "Pista": "Pista",
                    "Vides": "Vides:",
                    "Moix": "Un moix en té set?",
                    "Lletres": "Lletres:",
                    "Ets": "Ets de lletres?",
                    "URLpistes": "URLpistes:",
                    "Dita": "Dita",
                    "Dita1": "A la quinta forca, ",
                    "Dita2": "A ca un penjat, no hi anomenis cordes, ",
                    "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
                    "Credits": "Crèdits:",
                    "YouTube": "Joc Penjat on Scratch",
                    "Wikis": "Penjat",
                    "Idioma": "en Català",
                    "Diccionari": "Diccionari",
                    "Teclat": "Mostra o Amaga",
                    "Incorrecte": "Caràcter incorrecte!",
                    "Repetida": "Lletra repetida!",
                    "Encertat": "Has encertat!",
                    "Guanyat": "i has guanyat!",
                    "Fallat": "Has fallat!",
                    "Perdut": "i has perdut!",
                    "Descansi": "En pau descansi – RIP!",
                    "Puntuacio": "Puntuació:"
                },
                {
                    "IdIdioma": "es",
                    "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
                    "Versio": "Versión β Juego del Ahorcado",
                    "Input": "Escribe una letra minúscula",
                    "Pregunta": "Vamos al quinto pino?",
                    "Comprovar": "Comprobar",
                    "Paraula": "Palabra:",
                    "Sopes": "Te rindes?",
                    "Pista": "Pista",
                    "Vides": "Vidas:",
                    "Moix": "Un gato tiene siete?",
                    "Lletres": "Letras:",
                    "Ets": "Eres de letras?",
                    "URLpistes": "URLpistas:",
                    "Dita": "Dicho",
                    "Dita1": "Al quinto pino, ",
                    "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
                    "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
                    "Credits": "Crèditos:",
                    "YouTube": "Juego Ahorcado on Scratch",
                    "Wikis": "Ahorcado",
                    "Idioma": "en Español",
                    "Diccionari": "Diccionario",
                    "Teclat": "Muestra o Esconde",
                    "Incorrecte": "Carácter incorrecto!",
                    "Repetida": "Letra repetida!",
                    "Encertat": "Has acertado!",
                    "Guanyat": "y has ganado!",
                    "Fallat": "Has fallado!",
                    "Perdut": "y has perdido!",
                    "Descansi": "En paz descanse - RIP!",
                    "Puntuacio": "Puntuación:"
                },
                {
                    "IdIdioma": "en",
                    "Titol": "Hangman Game Images and Sounds Version",
                    "Versio": "Hangman Game β Versión",
                    "Input": "Write a lowercase letter",
                    "Pregunta": "Are we going to the boondocks?",
                    "Comprovar": "Check it",
                    "Paraula": "Word:",
                    "Sopes": "You give up?",
                    "Pista": "Clue",
                    "Vides": "Lives:",
                    "Moix": "A cat has seven?",
                    "Lletres": "Letters:",
                    "Ets": "Are you in liberal arts?",
                    "URLpistes": "URLclues:",
                    "Dita": "Saying",
                    "Dita1": "To the boondocks,",
                    "Dita2": "In a hanged man's home, don't talk about ropes,",
                    "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
                    "Credits": "Credits:",
                    "YouTube": "Hangman Game on Scratch",
                    "Wikis": "Hangman",
                    "Idioma": "in English",
                    "Diccionari": "Dictionary",
                    "Teclat": "Show or Hide",
                    "Incorrecte": "Wrong character!",
                    "Repetida": "Repeated letter!",
                    "Encertat": "You're right!",
                    "Guanyat": "and you have won!",
                    "Fallat": "You have failed!",
                    "Perdut": "and you have lost!",
                    "Descansi": "Rest in peace - RIP!",
                    "Puntuacio": "Score:"
                }
            ];
            var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma === "ca");
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
            var punts = 0;
            var seconds = 0;
            function timer() {
                seconds = seconds + 1;
                document.getElementById("counter").innerHTML = seconds;

            }
            setInterval(timer, 1000);
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
                    punts = paraula.length * vides * 10 - docomuent.getElementById("counter");
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