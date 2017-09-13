window._mu = (function () {
    function validateFiles(uploadedFiles) {
        for (var x = 0; x < uploadedFiles.length; x++) {
            console.log(uploadedFiles[x])
        }
    }

    function fileInfo(file) {
        return `
            <span> ${file.name}</span>
            <span>Size:${file.size} MB</span>
        `
    }

    function convertImageStream(imagePreviewer, file) {
        var fileReader = new FileReader();
        fileReader.onload = function () {
            imagePreviewer.src = fileReader.result;
        }
        fileReader.readAsDataURL(file);
    }

    function preview (src) {
        var imageContainer = document.createElement('img')
        imageContainer.setAttribute('id', 'imgPreview')
        return imageContainer
    }

    function FSMediaUploader(els) {
        this.els = els;
    }



    FSMediaUploader.prototype = {
        allowedFiles: [
            '.jpg', '.png'
        ],

        show: function (uploadUrl) {
            // create our uploader widget
            this.uploadUrl = uploadUrl;
            this.els.innerHTML = this.html()
            this.els.querySelector('#uploadButton').addEventListener('click', this.processUpload)
            var uploaderInput = this.els.querySelector('#fileUpload')
            uploaderInput.addEventListener('change', this.renderFilesInfo)
            uploaderInput.addEventListener('dragover', this.dropOver);
            uploaderInput.addEventListener('drop', this.renderFilesInfo)

        },

        processUpload: function (event) {
            event.preventDefault();
            const uploadedFiles = document.getElementById('fileUpload');
            console.log('Files ', uploadedFiles.files)
            validateFiles(uploadedFiles.files);
            // const formData = new FormData(uploadedFiles);
            // console.log("Uploading Form Input is ", formData);
        },

        renderFilesInfo: function (event) {
            // console.log('This is processing', this.)
            var uploadedInputFiles = document.getElementById('fileUpload');
            console.log('Uploaded files ', uploadedInputFiles)
            var files = uploadedInputFiles.files;
            var infoElm = document.getElementById('fileInfos');
            var imageContainer = document.getElementById('imagesContainer');
            for (var i = 0; i < files.length; i++) {
                var infoDetails = document.createElement('div')
                infoDetails.innerHTML = fileInfo(files[i])
                infoElm.appendChild(infoDetails);
                // show the image container preview
                let imageToShow = preview()
                imageContainer.appendChild(imageToShow)
                convertImageStream(imageToShow, files[i])
            }
            // console.
            // show  the preview images 
            // var loadedImages = document.querySelectorAll('#imgPreview');
            // for (var li = 0; li < loadedImages.length; li++) {
            //     ;
            // }

        },


        html: function () {
            let htmlTemplate = `
            <div> 
                <input type="file" id="fileUpload" multiple/>
            </div>
            <div>
                <input type="text" placeholder="Album Name" />
            </div>
            <button id="uploadButton"> Upload </button>

            <div id="fileInfos">
                Files Info
            </div>

            <div id="imagesContainer">

            </div>
        `
            return htmlTemplate;
        },



        dropOver: function (event) {
            event.preventDefault()
            console.log('Drop over ')
        },

        drop: function (event) {
            event.preventDefault()
            console.log('Dropped file')
        },

        map: function (callback) {
            var results = [],
                i = 0;
            for (; i < this.length; i++) {
                results.push(callback.call(this, this[i], i));
            }
            return results;
        }
    }

    var mu = {
        init: function (selector) {
            var els;
            if (typeof selector === 'string') {
                els = document.getElementById(selector);
                console.log('FsMediaUpload() initialize');
            } else if (selector.length) {
                els = selector;
            } else {
                els = [selector];
            }
            return new FSMediaUploader(els);
        }
    }

    return mu;
}());