Section 7: Working with the DOM

145. Module Introduction


146. What's the "DOM"?


147. Document and Window Object
-dodajemo console.dir(document);


148. Understanding the DOM and how it's created


149. Nodes & Elements - Querying the DOM Overview


150. Selecting Elements in the DOM
-varijablama dodajemo metodu querySelector(), querySelectorAll()
-varijablama dodajemo metode getElementById() i getElementsByClassName()


151. Summary: Node Query Methods


152. Exploring and Changing DOM Properties
-varijablama dodajemo metode textContent


153. Attributes vs Properties
-varijablama dodajemo setAttribute() i getAttribute()


154. Selecting Multiple Elements & Summary
-metoda .getElementById('');
-metoda textContent
-metoda style
-metoda querySelectorAll()
-metoda getElementsByTagName()


Assignment 5
-kreiramo varijable const task1Element1 i const task1Element2 
-varijablama dodajemo metode
-stiliziramo varijable preko style metode
-kreiramo varijablu const documentTitle
-varijable const documentTitle dodajemo metodu textContent


155. Traversing the DOM


156. Traversing Child Nodes


157. Using parentNode & parentElement


158. Selecting Sibling Elements


159. DOM Traversal vs Query Methods


160. Styling DOM Elements
-stiliziranje elemenata
-u style.css fajlu stiliziramo klase
-kreiramo varijable section i button
-varijable button dodajemo addEventListener()


161. Creating & Inserting Elements


162. Adding Elements via HTML in Code
-dodavanje metode insertAdjacentHTML() varijablama


163. Adding Elements via createElement()
-objektu document dodajemo metodu createElement()
-varijabli dodajemo metodu createElement()


164. Inserting DOM Elements
-varijablama dodajemo metode .append() i prepend()
-varijablama dodajemo metodu .insertAdjacentElement()


165. Cloning DOM Nodes
-varijablama dodajemo metodu .cloneNode()


166. Live Node Lists vs Static Node Lists
-NodeList i HTMLCollection


167. Removing Elements
-varijablama dodajemo metodu .remove()


168. Insertion & Removal Method Summary


169. Summary: Insert, Replace, Remove


170. Setting Up the Practice Project


171. Selecting the Modal and "Add" Button
-kreiramo varijablu const addMovieModal
-kreiramo varijablu const startAddMovieButton


172. Opening a Modal by Changing CSS Classes
-kreiramo funkciju toggleMovieModal()
-u funkciju toggleMovieModal() dodajemo varijablu addMovieModal 
-varijabli addMovieModal dodajemo metode classListi i toggle()


173. Controlling the Backdrop
-kreiramo varijablu const backdrop
-kreiramo funkciju toggleBackdrop()
-varijabli startAddMovieButton dodajemo addEventListener()
-u funkciju toggleMovieModal() dodajemo funkciju toggleBackdrop()
-kreiramo funkciju backdropClickHandler()
-u funkciju backdropClickHandler() dodajemo funkciju toggleMovieModal()
-varijabli backdrop dodajemo addEventListener()
-kreiramo varijablu const cancelAddMovieButton
-kreiramo funkciju cancelAddMovie()
-u funkciju cancelAddMovie() dodajemo funkciju toggleMovieModal()
-varijabli cancelAddMovieButton dodajemo addEventListener


174. Fetching and Validating User Input
-kreiramo varijablu const confirmAddMovieButton
-kreiramo funkciju addMovieHandler() 
-varijabli confirmAddMovieButton dodajemo addEventListener
-kreiramo varijablu const userInputs
-u funkciji addMovieHandler() kreiramo varijable
-dodajemo uslov if
-dodajemo funkciju alert()


175. Creating a Movie in Javascript & Clearing the Input
-kreiramo varijablu const movies
-u funkciji addMovieHandler() kreiramo varijablu const newMovie
-dodajemo movies.push(newMovie)
-dodajemo funkciju toggleMovieModal()
-kreiramo funkciju clearMovieInput()
-u funkciju cancelAddMovieHandler() dodajemo funkciju clearMovieInput()
-u funkciju addMovieHandler() dodajemo funkciju clearMovieInput()


176. Rendering Movie Items on the Screen
-kreiramo funkciju updateUI()
-kreiramo varijablu const entryTextSection
-u funkciju updateUI dodajemo uslov if - else za prikazivanje elementa
-u funkciju addMovieHandler() dodajemo funkciju updateUI()
-kreiramo funkciju renderNewMovieElement() sa tri parametra
-u funkciji renderNewMovieElement() kreiramo varijablu const newMovieElement
-varijabli newMovieElement dodajemo metodu className
-varijabli newMovieElement dodajemo metodu innerHTML
-unutar metode innerHTML pisemo HTML kod
-u funkciji renderNewMovieElement() kreiramo varijablu const listRoot
-varijabli listRoot dodajemo metodu .append()
-u funkciji addMovieHandler dodajemo funkciju renderNewMovieElement()


177. Deleting Movie Elements
-u funkciji renderNewMovieElement(), varijabli newMovieElement dodajemo addEventListener
-kreiramo funkciju deleteMovieHandler()
-objekt varijabli const newMovie dodajemo id
-u funkciju deleteMovieHandler() dodajemo petlju for
-kreiramo varijalbu let movieIndex
-u petlji for dodajemo uslov if
-inkrementiramo varijablu movieIndex
-varijabli movies dodajemo splice() metodu
-kreiramo varijablu const listRoor



178. Showing & Hiding the "Are you sure?" Dialog
-kreiramo funkciju deleteMovie()
-u funkciji deleteMovieHandler() kreiramo varijablu const deleteMovieModal
-varijabli deleteMovieModal dodajemo metode classList i add
-dodajemo funkciju toggleBackdrop()
-kreiramo funkcije closeMovieModal() i showMovieModal()
-kreiramo funkciju cancelMovieDeletionModal()
-u funkciju backdropClickHandler() dodajemo cancelMovieDeletionModal()
-u funkciju addMovieHandler() dodajemo funkciju toggleBackdrop()
