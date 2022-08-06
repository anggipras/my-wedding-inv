export const ClickHeader = (id) => {
    if (id != null) {      
        const elementId = document.getElementById(id);
        elementId.scrollIntoView(true, { behavior: "smooth" });
    }
}
