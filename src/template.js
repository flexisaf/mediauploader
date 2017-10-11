/**
 * Created by abbatykori on 9/14/17.
 */


export const htmlContainer = `
    <div class="media-uploader card">
    
    <div class="progress-wrap progress" data-progress-percent="25">
      <div class="progress-bar progress"></div>
    </div>
    
    <div id="fileInfos" class="card show-dialog">    
	    <a id="close" onclick="closeDialog">&#x2715;</a>
        <h3>Files Info</h3>
    </div>
                
     <div class="">
        <div class="">
            <header class="">
                <section class="header-right">
                    <button class="button" id="cancleButton">
                            <span class="icon">
                              <i class="fa fa-times"></i>
                            </span>
                        <span>Cancel</span>
                    </button>
                    <button class="button button-primary" id="uploadButton">
                            <span class="icon is-small">
                              <i class="fa fa-check"></i>
                            </span>
                        <span>Upload</span>
                    </button>
                </section>
                <section class="header-left">
                    <div class="">
                            <input class="file-input button" type="file" id="fileUpload" multiple />
                            <button id="showFileInfos" class="button-no-outline">Show details</button>
                    </div>
                </section>                
            </header>
            <section class="">
                <div class="" id="uploadError">
                    <div>
                    </div>
            
                    <div class="" id="imagesContainer">
                    </div>
            </section>
            <div class="">
                <div class="">
                    <p class="field" style="display:none;">                        
                        <label class="checkbox">
                            <input type="checkbox" checked="checked">
                            Save as an Album?
                        </label>
                        <input class="input" type="text" placeholder="Album Name"/>
                    </p>
                </div>
            </div>
    </div>
</div>
`;