fun main(args: Array<String>) {
   var x = 1;
   while(x<=100)
    {
      if(x%3==0 && x%5==0){ println("Linianos")}
        else if (x%3==0) {println("Linio")}
        else if (x%5==0) {println("IT")}
        else println(x)
        x++;
    }
}
