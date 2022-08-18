 //input
    var texto = document.querySelector("#textos");
    var resultado=document.querySelector("#resultado")

    //botão
    var btnCriptografar = document.querySelector("#criptografar");
    var btnDescriptografar= document.querySelector("#descriptografar");
    var btnCopiar=document.querySelector("#copiar")

    //regex
    var pattern= /[^a-z ,.?!\n]/g;
    
    var novoTexto;



    function verificaCaracter(){

		    var naoPermitido= texto.value.match(pattern);

		    if (naoPermitido!=null){
		        return false;

		    }else{
		        return true;
		    
		    }
    
	 	}



    function ocultar(){
    	
	    	document.getElementById("naoEncontrado").style.display = "none"
	    }

    function visivel(){
	    	
	    	document.getElementById("divResultado").style.display = "block"
	   }


    function exibeTexto() {

               
	      resultado.value=novoTexto;
	      ocultar();
	      visivel();
	      console.log(resultado.value)


	   }





    function criptografia(){
	    	if (verificaCaracter()){
	    		
	    		novoTexto= texto.value.replace(/e|i|a|o|u/g,function criptografar(letra){
	        
		            if(letra=="e"){
		                return "enter";


		            }else if(letra=="i"){
		                return"imes";


		            }else if(letra=="a"){
		                return"ai";


		            }else if(letra=="o"){
		                return"ober";


		            }else if(letra=="u"){
		                return"ufat";

		            }

	        	})
			
				exibeTexto();

	    	}else{

	    		alert("Texto nao permitido")
	    	}

	        

	   }



    function descriptografia(){

	    	if (verificaCaracter()){
	    		novoTexto=texto.value.replace(/enter|imes|ai|ober|ufat/g, function descriptografar(codigo){

		            if(codigo=="enter"){
		                return "e";


		            }else if(codigo=="imes"){
		                return "i";


		            }else if(codigo=="ai"){
		                return "a";
		                

		            }else if(codigo=="ober"){
		                return "o";
		                

		            }else if(codigo=="ufat"){
		                return "u";
		                
		            }
	        	})

	       		exibeTexto();


	    	}else{

	    		alert("Texto nao permitido")
	    	}

	       

	   }

    
    function copiar(){
    	
	    	resultado.select();
	    	document.execCommand("copy");
	   }




    
    /* Botoes de criptografar, descriptografar e copiar*/
    btnCriptografar.onclick = criptografia;
    btnDescriptografar.onclick= descriptografia;

    btnCopiar.addEventListener('click', ()=> {
	      resultado.select();
	      document.execCommand('copy');
	      location.reload()
	    });

    

   