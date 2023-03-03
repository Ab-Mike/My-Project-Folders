const fileContent = document.querySelector("#profile-picture")
var fileUploaded = '';

//todo: view file from fileContent to the width and height of fileBox

fileContent.addEventListener('change', function() {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    fileUploaded = reader.result;
    document.querySelector("#file").style.backgroundImage = `url(${fileUploaded})`
  })
  reader.readAsDataURL(this.files[0])
})