async function setElementFullscreen(element = document.body) {
    try {
        if (element.requestFullscreen) {
            await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            await element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            await element.msRequestFullscreen();
        }
    } catch (error) {
        console.log(error);
    }
}

async function exitFullscreen() {
    try {
        if (document.exitFullscreen) {
            await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            await document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            await document.msExitFullscreen();
        }

        if (screen.orientation?.unlock) {
            screen.orientation.unlock();
        }
    } catch (error) {
        console.error(error);
    }
}

function isFullscreen() {
    return document.fullscreenElement;
}

function handleFullscreen() {
    if (isFullscreen()) {
        const $backButton = document.getElementById('btn-back')
        if ($backButton) $backButton.style.display = 'none'

        document.body.style.cursor = 'none'
    } else {
        const $backButton = document.getElementById('btn-back')
        if ($backButton) $backButton.style.display = 'block'

        document.body.style.cursor = 'auto'
    }
}

window.addEventListener("keydown", event => {
    if (event.key.toLowerCase() === "f") {
        const $canvas = document.querySelector('canvas')
        if (!$canvas) return;

        if (isFullscreen()) exitFullscreen()
        else setElementFullscreen($canvas)

        handleFullscreen()
    }
});

document.addEventListener("fullscreenchange", () => {
    handleFullscreen()
});