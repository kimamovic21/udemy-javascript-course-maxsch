// 281. Starting with the "Switch Project" Logic

class Tooltip {};

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    };

    connectMoreInfoButton() {};

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        // switchBtn.addEventListener('click', )
    };
};

class ProjectList {
    projects = [];

    constructor(type) {
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // console.log(projectItems);
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id));
        };
        console.log(this.projects);
    };

    addProject() {}

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex((project) => project.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.projects = this.projects.filter((project) => project.id !== projectId);
    };
};

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finihed');
    };
};

App.init();