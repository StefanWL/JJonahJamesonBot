const submitBtn = document.getElementById('give-button');

const fileInput = document.getElementById('file-upload');
const imageContainer = document.getElementById('file-upload-label');
const fileInputText = document.getElementById('file-upload-text');

fileInput.onchange = () => {
    const file = fileInput.files[0];
    const img = document.createElement("img");

    fileURL = window.URL.createObjectURL(file);

    fileInputText.innerHTML = '';
    imageContainer.style.backgroundImage = `url(${fileURL})`;
}

submitBtn.onclick = () => {
    const theMan = document.getElementById('the-man-container');
    const loadSpinner = document.getElementById('load-spinner');
    const file = fileInput.files[0];

    loadSpinner.style.display = "inline";
    var reader = new FileReader();

    reader.onload = () => {
        $.post("api/JJonahJameson", { imageBase64: reader.result.split(',')[1] }, (data) => {
            if (data == "spiderman") {
                theMan.innerHTML = '<iframe id="the-man" style="height:432px;" class="mb-4" src="https://www.youtube.com/embed/b5G9reMt5FE?start=87&end=97&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            } else {
                theMan.innerHTML = '<iframe id="the-man" style="height:432px;" class="mb-4" src="https://www.youtube.com/embed/b5G9reMt5FE?start=98&end=104&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
            loadSpinner.style.display = "none";
        })
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}