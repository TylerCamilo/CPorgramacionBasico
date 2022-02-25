int led  = 13; // habilitamos el puerto 13
int time = 500; // Tiempo de apagado en ms

void setup() {
  // put your setup code here, to run once:
  
  pinMode(led, OUTPUT); //Se configura como salida el PIN
}

void loop() {
  // put your main code here, to run repeatedly:
  
  digitalWrite(led,HIGH); // Enciende LED
  delay(time * 2);
  digitalWrite(led,LOW); // Apaga LED
  delay(time);
}
