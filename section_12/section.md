Section 12: Practice: OOP & Classes

278. Module Introduction

279. First Project Steps & Planning
-kreiramo klase Tooltip, ProjectItem, ProjectList, App

280. Creating Project Lists & Parsin Element Data
-u klasi App dodajemo static init()
-u klasi ProjectList dodajemo metodu constructor(type)
-u metodi static init() kreiramo varijable activeProjectsList i finishedProjectsList
-u metodi constructor() kreiramo varijablueconst projectItems

281. Starting with the "Switch Project" Logic
-u metodi constructor dodajemo for petlju
-u komponentu ProjectItem dodajemo metodu constructor(id)
-u klasi ProjectItem kreiramo metodu connectSwitchButton()
-kreiramo metodu connectMoreInfoButton()
-u metodi connectSwitchButton() kreiramo varijablu const projectItemElement
-kreiramo varijablu const switchBtn
-varijabli switchBtn dodajemo addEventListener()
-u klasi ProjectList kreiramo metodu addProject() i switchProject()
-u metodi switchProject() kreiramo varijablu const projectIndex

282. Passing Method References Around
-u metodu constructor(type, swithcHandlerFunction) dodajemo this.switchHandler i this.type
-u metodu switchProject(projectId) dodajemo this.switchHandler()
-u klasi ProjectList dodajemo metodu setSwitchHanlderFunction()
-u metodu init() dodajemo activeProjectsList.setSwitchHanlderFunction()
-dodajemo finishedProjectsList.setSwitchHanlderFunction()
-u klasu ProjectItem dodajemo this.updateProjectListsHandler

283. Moving DOM Elements
-u metodu addProject(project) dodajemo this.projects.push(project)
-kreiramo novu klasu DOMHelper
-u klasu DOMHelper dodajemo metodu static moveElement()
-u metodi moveElement() kreiramo varijablue const element
-kreiramo varijablu const destinationElement
-varijabli destinationElement dodajemo metodu append(element)
-u metodu addProject() dodajemo DOMHelper.moveElement()
-u metodu addProject(project) dodajemo project.update()
-u klasi ProjectItem kreiramo metodu update()
-u metodu update() dodajemo this.updateProjectListsHandler 
-dodajemo this.connectSwitchButton()
-u klasu DOMHelper dodajemo metodu static clearEventListeners
-u metodu clearEventListeners kreiramo varijablu const clonedElement
-dodajemo metodu element.replaceWith()
-u metodi connectSwitchButton() kreiramo varijablu let switchBtn
-varijabli switchBtn dodajemo metodu textContent

284. Adding a Tooltip
-u metodu connectMoreInfoButton kreiramo varijablu const projectItemElemenet
-kreiramo varijablu const moreInfoBtn
-varijablu moreInforBtn dodajemo dogadaj addEventListener()
-u klasi ProjectItem kreiramo metodu showMoreInfoHandler()
-u metodu showMoreInfoHandler() kreiramo varijablu const tooltip
-u klasi Tooltip kreiramo metodu show()
-varijabli tooltip dodajemo metodu show()
-u metodi show() kreirmao varijablu const tooltipElement
-varijabli tooltipElement dodajemo metodu className
-varijablu tooltipElement dodajemo metodu textContent
-varijablu tooltipElement dodajemo dogadaj addEventListener()
-dodajemo document.body.append()
-u klasi Tooltip kreiramo metodu remove()
-varijablu show preimenujemo u attach()
-u metodu attach() dodajemo this.element
-u metodu detach() dodajemo this.element.remove()
-u klasu ProjectItem dodajemo hasActiveTooltip
-u metodu showMoreInfoHandler() dodajemo uslov if ()
-u klasi Tooltip dodajemo metodu closeTooltip()
-u klasi Tooltip kreiramo metodu constructor()
-u metodu constructor() dodjaemo this.closeNotifier
-u metodu closeTooltip() dodajemo this.detach() i this.closeNotifier

285. Adding Inheritance
-kreiramo klasu Component
-u klasu Component dodajemo metodu detach() i attach()
-u klasi Tooltip kreiramo metodu create()
-u metodi constructor() dodajemo this.create()
-dodajemo class Tooltip extends Component
-u klasu Tooltip dodajemo metodu super()
-u metodu detach() dodajemo uslov if (this.element)
-u klasu Component dodajemo metodu constructor()
-u metodu constructor() dodajemo uslov if - else
-u uslov if dodajemo this.hostElement
-u uslov else dodajemo this.hostElemenet = document.body
-dodajemo this.insertBefore
-u metodu attach() dodajemo this.hostElement.insertAdjacentElement

286. Wrap Up

287. Useful Resources & Links