import java.util.Scanner;
class D
{
public static void main(String[] args)
{
Scanner sc = new Scanner(System.in);
System.out.println("Please Enter the Size of Array:");
int n =sc.nextInt();
int Marks[] = new int[n];
System.out.println("Enter the Marks:");
for(int i=0;i<Marks.length;i++)
{
 Marks[i] = sc.nextInt();
}
System.out.println("Marks of a Student:");
for(int i=0;i<Marks.length;i++)
{
System.out.println(Marks[i]);
}
}
}

