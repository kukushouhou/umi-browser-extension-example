window.onload = () => {
    function insert() {
        const ul = document.querySelector("footer ul");
        if (ul instanceof HTMLUListElement) {
            console.log("example: insert to ", ul);
            ul.insertAdjacentHTML("beforeend", `<li class="mx-2"><a href="https://github.com/kukushouhou/umi-plugin-browser-extension" target="_blank">umi-plugin-browser-extension</a></li>`);
        } else {
            setTimeout(insert, 100);
        }
    }

    insert();
}
