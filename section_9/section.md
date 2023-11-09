Section 9: More on Objects

212. Module Introduction


213. What's an Object ?


214. Objects & Primitive Values


215. Objects - Recap


216. Adding, Modifying & Deleting Properties


217. Special Key Names & Square Bracket Property Access


218. Property Types & Property Order


219. Dynamic Property Access & Setting Properties Dynamically


220. Demo App & Shorthand Property Syntax 
-kreiramo varijale addMovieButton, searchButton i movies
-kreiramo funkciju addMovieHandler()
-unutar funkcije addMovieHandler() kreiramo varijable title, extraName i extraValue 
-dodajemo uslov if 
-kreiramo objekt newMovie
-varijabli addMovieButton dodajemo addEventListener
-varijabli movies dodajemo metodu push


221. Rendering Elements based on Objects
-kreiramo funkciju renderMovies()
-u funkciji renderMovies() kreiramo varijablu movieList
-varijabli movieList dodajemo metodu innerHTML
-u funkciji renderMovies() dodajemo uslov if - else
-varijabli movies dodajemo metodu forEach()
-u metodi movies.forEach, u callback funkciji, kreiramo varijablu movieEl
-varijabli movieEl dodajemo metodu textContent
-varijabli movieList dodajemo metodu append()
-u funkciju addMovieHandler() dodajemo funkciju renderMovies()


222. for-in Loops & Outputting Dynamic Properties
-u metodi movies.forEach, unutar callback funkcije, kreiramo varijablu text
-dodajemo petlju for - in
-u petlju for - in dodajemo if uslov
-varijabli movieElement dodajemo metodu textContent


223. Adding the Filter Functionality
-kreiramo funkciju searchMovieHandler()
-u funkciji searchMovieHandler() kreiramo varijablu filterTerm
-varijabli searchButton dodajemo addEventListener
-funkciji renderMovies() dodajemo parametar
-kreiramo varijablu filteredMovies
-varijabli filteredMovies dodajemo metodu forEach()


224. Understanding "Chaining" (Property & Method Chaining)
-u objektu newMovie, dodajemo id:Math.random().toString()


225. The Object Spread Operator (...)


226. Understanding Object.assing()


227. Object Destructuring


228. Checking for Property Existance


229. Introducing "this"
-u objektu newMovie dodajemo getFormattedTitle: function() { ... }
-u metodi filteredMovies.forEach() kreiramo onst { getFormattedTitle } = movie


230. The Method Shorthand Syntax
-u objektu newMovie mijenjano ime funkcije


231. The "this" Keyword And Its Strange Behaviour
-u metodi filteredMovies.forEach dodajemo getFormattedTitle = getFormattedTitle.bind(movie)


232. call() and apply()


233. What the Browser (Sometimes) Does to "this"


234. "this" and Arrow Functions


235. "this" - Summary


236. Getters & Setters
-u objekt newMovie dodajemo  set title(value) i get title()
-nakon objekta newMovie dodajemo newMovie.info.title = title
-uredujemo uslov if (key !== 'title' && key !== '_title')


237. Wrap Up


238. Useful Resources & Links