            var vides = 7;
            var Lletres = " "

        function Verificar(){
            var lletra = document.getElementById("lletra").value;            
            if (vides == 0){

                alert("Has perdut!");
            }
            else if (lletra >= "m"){
            /*la ç hauria de ser correcta peró al tenir un nombre més alt al codi 
            ASCII es incorrecte */  
                alert("Has fallat!");              
                vides = vides -1;
                Lletres = Lletres + lletra +" "
                document.getElementById("lletres").innerHTML = Lletres
            } else {
                alert("Has encertat");               
            }
            document.getElementById("vides").innerHTML ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
        }
        
        function Amagar()
        {
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
            document.getElementById("castell").hidden = true
        }    