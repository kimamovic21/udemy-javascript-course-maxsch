Section 10: Classes & Object-oriented Programming (OOP)

239. Module Introduction


240. What is "Object-oriented Programming" (OOP) ?


241. Getting Started with OOP Code
-kreiramo objekt productLists
-kreiramo niz products
-kreiramo metodu render()
-u metodi render() kreiramo varijable render Hook, productList
-varijabli productList dodajemo metodu className
-kreiramo petlju for - of 
-u petlji for - of kreiramo varijablu productElement
-varijabli productElement dodajemo metodu className
-varijabli productElement dodajemo metodu innerHTML
-varijabli productList dodajemo metodu append()
-varijabli renderHook dodajemo metodu append()
-varijabli productsList dodajemo metodu render()


242. Defining & Using a First Class
-kreiramo klasu Product
-u klasu Product dodajemo polja


243. Working with Constructor Methods
-u klasu Product dodajemo kljucnu rijec funkciju constructor
-funkciji constructor dodajemo parametre
-u productsList objekt, u products niz, dodajemo klase new Product( ... )


244. Fields vs Properties


245. Using & "Connecting" Multiple Classes
-kreiramo klasu ProductList
-u klasi ProductList kreiramo niz products
-kreiramo funkciju constructor()
-kreiramo funkciju render()
-kreiramo productList varijablu
-kreiramo klasu ProductItem
-u klasi ProductItem kreiramo funkciju constructor()
-u klasi ProductItem kreiramo funkciju render()
-u metodi render() kreiramo varijablu productElement
-varijabli productElement dodajemo metodu classname
-varijabli productElement dodajemo metodu innerHTML
-u metodi render() return productElement
-u klasi ProductList, unutar petlje for kreiramo varijablu productItem
-kreiramo varijablu productElement


246. Binding Class Methods & Working with "this"
-u klasi ProductItem kreiramo metodu addToCart()
-u klasi ProductItem kreiramo varijablu addCartButton
-varijabli addCartButton dodajemo addEventListener()
-u addEventListener proslijedujemo funkciju this.addToCart


247. Adding a Cart and Shop Class
-kreiramo klasu ShoppingCart
-u klasi ShoppingCart kreiramo niz items
-kreiramo metodu render()
-u metodi render() kreiramo varijablu cartElement
-varijabli cartElement dodajemo metodu innerHTML
-varijabli cartElement dodajemo metodu className
-kreiramo klasu Shop
-u klasi Shop kreiramo metodu render()
-u metodi render() kreiramo varijable renderHook, cart, cartElement, productList, productListElement
-varijabli renderHook dodajemo metodu append()
-kreiramo varijablu shop
-varijabli shop dodajemo metodu render()


248. Communicating Can Be Challenging!


249. Static Methods & Properties
-kreiramo klasu App
-kreiramo metodu static init()
-kreiramo metodu static addProductToCart sa parametrom product
-klasi App dodajemo metodu init()
-u klasi ProductItem, u metodi addToCart(), klasi App dodajemo addProductToCart
-u klasi App kreiramo varijablu static cart


250. First Summary & Classes vs Object Literals


251. Getters & Setters
-u klasi Shopping Cart kreiramo metodu get totalAmount()
-u metodi totalAmount() kreiramo varijablu sum
-kreiramo metodu set cartItems() sa prametrom value
-u metodi addProduct kreiramo varijablu updatedItems


252. Introducing Inheritance


253. Implementing Inheritance
-kreiramo klasu Component
-u klasi Component kreiramo metodu createRootElement sa tri parametra
-kreiramo varijablu rootElement
-dodajemo uslov if
-dodajemo jos jedan uslov if
-unutar drugog uslova if dodajemo petlju for
-kreiramo klasu ElementAttribute
-u klasi ElementAttribute kreiramo funkciju constructor
-u klasi Component kreiramo funkciju constructor
-klasi ShoppingCart dodajemo kljucnu rijec extends Component
-u metodi render() dodajemo this.createRootElement()
-u klasi ShoppingCart dodajemo funkciju constructor
-u funkciji constructor dodajemo funkciju super()


254. Using Inheritance Everywhere
-klasi ProductItem dodajemo extends Component
-u metodi render() kreiramo varijablu productElement
-klasi ProductItem dodajemo metodu super()
-klasi ProductList dodajemo extends Component
-u metodi render() kreiramo productList varijablu
-u metodi constructor() dodajemo metodu super()


255. Overriding Methods and the super() Constructor
-u klasi Component, unutar metode constructor() dodajemo this.render()
-u klasi Shop kreiramo metodu constructor()
-u metodi constructor() kreiramo metodu super()


256. super() Constructor Execution, Order & "this"


257. Different Ways of Adding Methods
-kreiramo varijablu orderButton
-kreiramo metodu orderProducts()


258. Private Fields, Properties & Methods
-u klasi ProductList dodajemo #products


259. "Pseudo-Private" properties


Assignment 7
-kreiramo klasu Course
-kreiramo funkciju constructor()
-funkciji constructor() dodajemo parametre
-kreiramo varijablu jsCourse
-u klasi Course kreiramo metodu calculateValue()
-u return izjavu dodajemo this.length/this.price
-kreiramo metodu printSummary()
-kreiramo varijable jsCourse i reactCourse
-kreiramo novu klasu PracticalCourse
-klasi PracticalCourse dodajemo extends Course
-kreiramo constructor() funkciju
-funkciji constructor() dodajemo parametre
-dodajemo funkciju super()
-kreiramo novu varijablu angularCourse
-kreiramo klasu TheoreticalCourse 
-klasi TheoreticalCourse dodajemo extends Course
-kreiramo metodu publish()
-kreiramo varijablu flutterCourse
-varijabli price dodajemo _price
-u klasi Course kreiramo metodu get price()
-u klasi Course kreiramo metodu set price() sa parametrom value
-u metodu set price() dodajemo uslov if
-kreiramo varijablu #price
-varijable _price preimenujemo u #price


260. The "instanceoff" Operator


261. Built-in Classes


262. Understanding Object Descriptors
-metoda Object.getOwnPropertyDescriptors
-metoda Object.defineProperty


263. Wrap Up


264. Useful Resources & Links