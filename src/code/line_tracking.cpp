//IR Sensor ports
#define INFRA_RED_RIGHT !digitalRead(10)
#define INFRA_RED_MIDDLE !digitalRead(4)
#define INFRA_RED_LEFT !digitalRead(2)

//Steering ports
#define ENGINE_A 5
#define ENGINE_B 6
#define LEFT_FRONT 7
#define LEFT_BACK 8
#define RIGHT_BACK 9
#define RIGHT_FRONT 11

//Speed
#define carSpeed 130

void forward()
{
  analogWrite(ENGINE_A, carSpeed);
  analogWrite(ENGINE_B, carSpeed);
  digitalWrite(LEFT_FRONT, HIGH);
  digitalWrite(LEFT_BACK, LOW);
  digitalWrite(RIGHT_BACK, LOW);
  digitalWrite(RIGHT_FRONT, HIGH);
  Serial.println("{ENGINE_A: carSpeed, ENGINE_B: carSpeed, LEFT_FRONT: HIGH, LEFT_BACK: LOW, RIGHT_BACK, LOW, RIGHT_FRONT, HIGH}");
}

void back()
{
  analogWrite(ENGINE_A, carSpeed);
  analogWrite(ENGINE_B, carSpeed);
  digitalWrite(LEFT_FRONT, LOW);
  digitalWrite(LEFT_BACK, HIGH);
  digitalWrite(RIGHT_BACK, HIGH);
  digitalWrite(RIGHT_FRONT, LOW);
  Serial.println("{ENGINE_A: carSpeed, ENGINE_B: carSpeed, LEFT_FRONT: LOW, LEFT_BACK: HIGH, RIGHT_BACK, HIGH, RIGHT_FRONT, LOW}");
}

void left()
{
  analogWrite(ENGINE_A, carSpeed);
  analogWrite(ENGINE_B, carSpeed);
  digitalWrite(LEFT_FRONT, LOW);
  digitalWrite(LEFT_BACK, HIGH);
  digitalWrite(RIGHT_BACK, LOW);
  digitalWrite(RIGHT_FRONT, HIGH);
  Serial.println("{ENGINE_A: carSpeed, ENGINE_B: carSpeed, LEFT_FRONT: LOW, LEFT_BACK: HIGH, RIGHT_BACK, LOW, RIGHT_FRONT, HIGH}");
}

void right()
{
  analogWrite(ENGINE_A, carSpeed);
  analogWrite(ENGINE_B, carSpeed);
  digitalWrite(LEFT_FRONT, HIGH);
  digitalWrite(LEFT_BACK, LOW);
  digitalWrite(RIGHT_BACK, HIGH);
  digitalWrite(RIGHT_FRONT, LOW);
  Serial.println("{ENGINE_A: carSpeed, ENGINE_B: carSpeed, LEFT_FRONT: HIGH, LEFT_BACK: LOW, RIGHT_BACK, HIGH, RIGHT_FRONT, LOW}");
}

void stop()
{
  digitalWrite(ENGINE_A, LOW);
  digitalWrite(ENGINE_B, LOW);
  Serial.println("{ENGINE_A: LOW, ENGINE_B: LOW}");
}

void setup()
{
  Serial.begin(9600);
  pinMode(INFRA_RED_RIGHT, INPUT);
  pinMode(INFRA_RED_MIDDLE, INPUT);
  pinMode(INFRA_RED_LEFT, INPUT);
}

void loop()
{
  if (INFRA_RED_MIDDLE)
  {
    forward();
    while (INFRA_RED_MIDDLE)
      ;
  }
  else if (INFRA_RED_RIGHT)
  {
    right();
    while (INFRA_RED_RIGHT)
      ;
  }
  else if (INFRA_RED_LEFT)
  {
    left();
    while (INFRA_RED_LEFT)
      ;
  }
}
