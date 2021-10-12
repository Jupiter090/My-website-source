var project = document.querySelectorAll(".project-container")

project.forEach(project => {
    project.addEventListener("click", () => {
        var id =project.getAttribute("data-")
        console.log(id)
        document.location.href = "my-projects/projects/" + id + ".html";
    })
})