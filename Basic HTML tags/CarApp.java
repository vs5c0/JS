class Car
{
String Brand;
String Color;
int Price;
void accelerate()
{
System.out.println("Your Car Acclarate is So good");
}
}
class CarApp
{
public static void main(String[] args)
{
 Car r = new Car();
r.Brand ="Range Rover";
r.Color = "white";
r. Price = 9000000;
System.out.println("Brand of Car :" +r.Brand);
System.out.println("Color of Car :" +r.Color);
System.out.println("Price of Car :" +r.Price);
r.accelerate();
}
}


