package knowledge.transfer.withoutVisitor;

interface Graphic {
    public void draw();
}

class Shape implements Graphic {
    private String id;

    @Override
    public void draw() {
        System.out.println("Drawing Shape");
    }
}

class Dot extends Shape {
    private int x;
    private int y;

    @Override
    public void draw() {
        System.out.println("Drawing Dot");
    }
}

class Circle extends Dot {
    private int radius;

    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

class Rectangle extends Shape {
    private int width;
    private int height;

    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

class Elipse extends Shape {

}

class Exporter {
    public void export(Shape s) {
        System.out.println("Exporting Shape");
    }

    public void export(Dot d) {
        System.out.println("Exporting Dot");
    }

    public void export(Circle c) {
        System.out.println("Exporting Circle");
    }

    public void export(Rectangle r) {
        System.out.println("Exporting Rectangle");
    }
}

class MainWithoutVisitor {
    //Early Binding
    //overload
    public static void export(Shape shape) {
        Exporter exporter = new Exporter();
        exporter.export(shape);
    }

    //Late Binding
    //overwrite
    public static void draw(Shape shape) {
        shape.draw();
    }

    public static void main(String[] args) {
        MainWithoutVisitor.export(new Circle());
        MainWithoutVisitor.draw(new Circle());
    }
}
