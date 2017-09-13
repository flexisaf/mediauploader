window._mu = (function () {
    function validateFiles (uploadedFiles) {
        for (var x = 0; x <  uploadedFiles.length; x++) {
            console.log(uploadedFiles[x])
        }
    }

    function fileInfo(file) {
        return `
            <span> ${file.name}</span>
            <span>Size:${file.size} MB</span>
        `
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
            this.els.querySelector('#fileUpload').addEventListener('change', this.renderFilesInfo)

        },

        processUpload: function (event) {
            event.preventDefault();
            const uploadedFiles = document.getElementById('fileUpload');
            console.log('Files ', uploadedFiles.files)
            validateFiles(uploadedFiles.files);
            // const formData = new FormData(uploadedFiles);
            // console.log("Uploading Form Input is ", formData);
        },

        renderFilesInfo: function(event) {
            // console.log('This is processing', this.)
            var uploadedInputFiles = document.getElementById('fileUpload');
            console.log('Uploaded files ', uploadedInputFiles)
            var files = uploadedInputFiles.files;
            var infoElm = document.getElementById('fileInfos');
            for(var i = 0; i < files.length; i++) {
                var infoDetails = document.createElement('div')
                infoDetails.innerHTML = fileInfo(files[i])
                infoElm.appendChild(infoDetails);            
            }
        },


        html: function () {
            let htmlTemplate = `
            <div> 
                <input type="file" id="fileUpload"/>
            </div>
            <div>
                <input type="text" placeholder="Album Name" />
            </div>
            <button id="uploadButton"> Upload </button>

            <div id="fileInfos">
                Files Info
            </div>
        `
            return htmlTemplate;
        },

        dropFileZone: function(event) {

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