function validaNome(dado) {
    var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    
    if(dado.match(regex))
        return true;
    else 
    	return false;
 }

 function validaData(dado){
 	if(dado == '')
 		return false;
 	else
 		return true;
 }

 