const submitBtn = document.getElementById('give-button');

const fileInput = document.getElementById('file-upload');
const imageContainer = document.getElementById('file-upload-label');

fileInput.onchange = () => {
    const file = fileInput.files[0];
    const img = document.createElement("img");

    fileURL = window.URL.createObjectURL(file);

    imageContainer.innerHTML = "";
    imageContainer.style.backgroundImage = `url(${fileURL})`;
}

submitBtn.onclick = () => {
    const body = document.getElementsByTagName('body')[0];
    const loadSpinner = document.getElementById('load-spinner');
    const file = fileInput.files[0];

    loadSpinner.style.display = "inline";
    var reader = new FileReader();

    reader.onload = () => {
        $.post("api/JJonahJameson", { imageBase64: reader.result.split(',')[1] }, (data) => {
            if (data == "spiderman") {
                body.innerHTML = '<iframe id="response-video" src="https://www.youtube.com/embed/b5G9reMt5FE?start=87&end=97&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            } else {
                body.innerHTML = '<iframe id="response-video" src="https://www.youtube.com/embed/b5G9reMt5FE?start=98&end=117&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        })
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}