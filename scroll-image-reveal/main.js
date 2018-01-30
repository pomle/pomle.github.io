async function main() {
    const images = await fetch('images.json').then(r => r.json());

    const imagesElement = document.getElementsByClassName('images')[0];
    console.log(imagesElement);

    window.addEventListener('scroll', event => {
        update();
    });

    function loadImageIntoContainer(container, url) {
        const image = new Image();
        image.height = 320;
        image.width = 320;
        image.src = url;
        image.addEventListener('load', () => {
            container.appendChild(image);
        });
    }

    function update() {
        const scrollBottom = document.body.scrollTop + document.body.clientHeight + 600;
        for (let i = last; i < containers.length; i++) {
            const container = containers[i];
            if (container.offsetTop > scrollBottom) {
                break;
            }

            loadImageIntoContainer(container, images[i]);

            last = i + 1;
        }
    }

    let last = 0;
    const containers = [];

    images.forEach(url => {
        const div = document.createElement('div');

        containers.push(div);

        imagesElement.appendChild(div);
    });
}

main();
