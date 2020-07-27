const projects = [
    {
        "urlTag": "Pass-Gen",
        "imgRoute": "pass-gen-image.png",
        "altTag": "Password generator website screenshot"
    },
    {
        "urlTag": "morndusk-planner",
        "imgRoute": "morndusk-planner-image.png",
        "altTag": "Day planner website screenshot"
    },
    {
        "urlTag": "weather-today-or-tomorrow",
        "imgRoute": "weather-today-or-tomorrow-image.png",
        "altTag": "weather app screenshot"
    },
    {
        "urlTag": "Movie-Weather-Solutions",
        "imgRoute": "Movie-weather-solutions-image.png",
        "altTag": "Movie weather app screenshot"
    },
    {
        "urlTag": "Marvelous-Markdown-Generator",
        "imgRoute": "Marvelous-Markdown-Generator-image.png",
        "altTag": "Markdown generator app screenshot"
    },
    {
        "urlTag": "celeb-o-knowledge",
        "imgRoute": "celeb-o-knowledge-image.png",
        "altTag": "Celebration of knowledge app screenshot"
    }
];

console.log(projects);
for (project in projects) {
    const projectRender = projects[project]
    console.log(projectRender);
    $('.project-cards').append(`
        <div class="col-md-6 my-2">
            <a href="https://juanwithouttheotter.github.io/${projectRender.urlTag}/">
                <img src="../assets/images/${projectRender.imgRoute}" alt="${projectRender.altTag}"
                    class="img-fluid" />
            </a>
        </div>
    `);
}