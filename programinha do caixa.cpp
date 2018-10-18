#include <stdio.h>

int main(){
  
  int quantidade;
  float valor;
  float dinheiros;
  float produto;
  float valorpago;
  float falta;
  float troco;
  
  printf("Voce tem moedas de que valor no caixa?\n");
    scanf("%f",&valor);
  
  while(valor!=1 && valor!=0.50 && valor!=0.25 && valor!=0.10 && valor!=0.05){ 
    if(valor!=1 && valor!=0.50 && valor!=0.25 && valor!=0.10 && valor!=0.05){
      printf("Insira uma quantidade valida de valor\n");
      scanf("%f",&valor);
    }
  }
 
  
  		printf("Quantas moedas de %.2f voce tem no caixa?\n",valor);
  			scanf("%d",&quantidade);
 
  while(quantidade<0){ 
    if(quantidade<0){
      printf("Insira uma quantidade valida de moedas\n");
      scanf("%d",&quantidade);
      
    }
  }
  
  dinheiros=quantidade*valor;
    printf("Voce tem %.2f dinheiros no caixa!\n",dinheiros);
  
  while(dinheiros>0){
    	printf("Qual o valor do produto que voce vai passar?\n");
    scanf("%f",&produto);
    	printf("Quanto de dinheiros o cliente te deu?\n");
    scanf("%f",&valorpago);
    
     troco=valorpago-produto;    
       
    	if(dinheiros>=troco && valorpago>produto){
        printf("O troco eh %.2f! \n",troco);
        
        dinheiros=dinheiros-troco;
      
				}   
      if(valorpago<produto){
        
       falta=produto-valorpago;
        
        printf("Nao eh possivel efetuar a compra. Faltam %.2f \n",falta);
      }
  
  }
  
  
  
  
  return 0;
}
