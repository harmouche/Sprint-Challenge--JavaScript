// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakerClasses {
    constructor (attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }
    volume = function (){
    return this.length * this.width * this.height;
    };
    surfaceArea = function (){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
    }

  const cuboidClasses = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5,
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidClasses.volume()); // 100
  console.log(cuboidClasses.surfaceArea()); // 130
  
  
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClasses {
    constructor(cubeAttrs){
        super(cubeAttrs);
    }

    volume = function (){ //volune = side ^3 (side * side *side)
        return this.length * this.width * this.height;
        };
    surfaceArea = function (){ //surface area = 6 * side ^2
        return 6 * (this.length * this.width) ;
        };
}

const cube = new CubeMaker({
    'length': 5,
    'width': 5,
    'height': 5,
  })
  console.log(cube.volume()); // 125
  console.log(cube.surfaceArea()); // 150