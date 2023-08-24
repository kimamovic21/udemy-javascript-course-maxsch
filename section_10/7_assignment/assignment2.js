
// 1
// class Course {
//     constructor(title, length, price) {
//       this.title = title;
//       this.length = length;
//       this.price = price;
//     }
//   }
  
//   // Instantiate two dummy courses
//   const course1 = new Course("Introduction to JavaScript", "4 weeks", 99);
//   const course2 = new Course("Web Development Fundamentals", "6 weeks", 149);
  
//   // Output the objects to the console
//   console.log("Course 1:", course1);
//   console.log("Course 2:", course2);
  

  // 2
  // Instantiate two dummy courses
//   class Course {
//     constructor(title, length, price) {
//       this.title = title;
//       this.length = length;
//       this.price = price;
//     }
  
//     calculateValue() {
//       const numericLength = parseFloat(this.length); // Convert length to a numeric value
//       return numericLength / this.price;
//     }
  
//     courseSummary() {
//       return `Course: ${this.title}\nLength: ${this.length}\nPrice: $${this.price}`;
//     }
//   }
  
//   // Instantiate two dummy courses
//   const course1 = new Course("Introduction to JavaScript", "4 weeks", 99);
//   const course2 = new Course("Web Development Fundamentals", "6 weeks", 149);
  
//   // Call the methods and output the results to the console
//   console.log("Course 1 Summary:");
//   console.log(course1.courseSummary());
//   console.log("Value:", course1.calculateValue());
  
//   console.log("\nCourse 2 Summary:");
//   console.log(course2.courseSummary());
//   console.log("Value:", course2.calculateValue());
  

// 3
//   class Course {
//     constructor(title, length, price) {
//       this.title = title;
//       this.length = length;
//       this.price = price;
//     }
  
//     calculateValue() {
//       const numericLength = parseFloat(this.length);
//       return numericLength / this.price;
//     }
  
//     courseSummary() {
//       return `Course: ${this.title}\nLength: ${this.length}\nPrice: $${this.price}`;
//     }
//   }
  
//   class PracticalCourse extends Course {
//     constructor(title, length, price, numOfExercises) {
//       super(title, length, price);
//       this.numOfExercises = numOfExercises;
//     }
//   }
  
//   class TheoreticalCourse extends Course {
//     publish() {
//       console.log(`Theoretical course "${this.title}" has been published.`);
//     }
//   }
  
//   // Instantiate a PracticalCourse and a TheoreticalCourse
//   const practicalCourse = new PracticalCourse("Practical JavaScript", "5 weeks", 129, 50);
//   const theoreticalCourse = new TheoreticalCourse("Theory of Programming", "3 weeks", 79);
  
//   // Call methods and output properties for PracticalCourse
//   console.log("Practical Course Summary:");
//   console.log(practicalCourse.courseSummary());
//   console.log("Value:", practicalCourse.calculateValue());
//   console.log("Number of Exercises:", practicalCourse.numOfExercises);
  
//   console.log("\n");
  
//   // Call methods and output properties for TheoreticalCourse
//   console.log("Theoretical Course Summary:");
//   console.log(theoreticalCourse.courseSummary());
//   console.log("Value:", theoreticalCourse.calculateValue());
//   theoreticalCourse.publish();



// 4
//   class Course {
//     constructor(title, length, price) {
//       this.title = title;
//       this.length = length;
//       this._price = price; // Using an underscore to indicate the private property
//     }
  
//     get price() {
//       return `$${this._price}`;
//     }
  
//     set price(newPrice) {
//       if (newPrice > 0) {
//         this._price = newPrice;
//       } else {
//         console.error("Price must be a positive value.");
//       }
//     }
  
//     calculateValue() {
//       const numericLength = parseFloat(this.length);
//       return numericLength / this._price;
//     }
  
//     courseSummary() {
//       return `Course: ${this.title}\nLength: ${this.length}\nPrice: ${this.price}`;
//     }
//   }
  
//   // Instantiate a course and set the price using the setter
//   const course = new Course("JavaScript Basics", "4 weeks", 0);
//   console.log(course.courseSummary()); // Price won't be set to 0
//   course.price = 149; // Set a positive price
//   console.log(course.courseSummary());
  


  // 5
  class Course {
    #price; // Private field for price
  
    constructor(title, length, price) {
      this.title = title;
      this.length = length;
      this.#price = price; // Using private field for price
    }
  
    get price() {
      return `$${this.#price}`;
    }
  
    set price(newPrice) {
      if (newPrice > 0) {
        this.#price = newPrice;
      } else {
        console.error("Price must be a positive value.");
      }
    }
  
    calculateValue() {
      const numericLength = parseFloat(this.length);
      return numericLength / this.#price;
    }
  
    courseSummary() {
      return `Course: ${this.title}\nLength: ${this.length}\nPrice: ${this.price}`;
    }
  }
  
  // Instantiate a course and set the price using the setter
  const course = new Course("JavaScript Basics", "4 weeks", 0);
  console.log(course.courseSummary()); // Price won't be set to 0
  course.price = 149; // Set a positive price
  console.log(course.courseSummary());