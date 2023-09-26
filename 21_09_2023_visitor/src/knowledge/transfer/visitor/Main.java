package knowledge.transfer.visitor;


interface  Visitor {
    public void visit (Shape s);
    public void visit (Dot d);
    //circle, rectangle, etc
}

class VisitorSVG implements Visitor {
    public void visit(Shape s) {
        System.out.println("Exporting Shape to SVG");
    }
    public void visit(Dot d) {
        System.out.println("Exporting Dot to SVG");
    }
}

interface Graphic {
    public void accept(Visitor v);
}

class Shape implements Graphic {
    // Compiler knows for sure that `this` is a `Shape`.
    // Which means that the `visit(s: Shape)` can be safely called.
    @Override
    public void accept(Visitor v) {
        v.visit(this);
    }
}

class Dot extends Shape {
    // Compiler knows that `this` is a `Dot`.
    // Which means that the `visit(s: Dot)` can be safely called.
    @Override
    public void accept(Visitor v) {
        v.visit(this);
    }
}

public class Main {

    public static void main(String[] args) {
        Visitor visitor = new VisitorSVG();
        Graphic graphic = new Dot();

        graphic.accept(visitor);
    }
}
/*
In the code above, specifically explorer.visit(shape), there are 2 levels of dispatch calls:

Selection of which visitor to call (based on the receiver type)
Selection of which visit(shape) to call (based on the argument type)
*
* */