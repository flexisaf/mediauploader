/**
 * Created by abbatykori on 9/14/17.
 */


export const htmlContainer = `
    <div class="content">
     <div class="columns is-centered">
        <div class="column is-12-desktop">
            <div class="content">
                <div class="columns has-text-centered">
                    <div class="column is-3">
                        <div class="file has-name is-boxed">
                            <label class="file-label">
                                <input class="file-input" type="file" id="fileUpload" multiple>
                                <span class="file-cta" id="">
                                              <span class="file-icon">
                                                <i class="fa fa-upload"></i>
                                              </span>
                                              <span class="file-label">
                                                Choose a file…
                                              </span>
                                            </span>
                                <span class="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
                                </span>
                            </input>
                        </div>
                    </div>
                    <div class="column is-9" id="fileInfos">
                        Files Info
                    </div>
                </div>
                
                <div class="columns is-multiline is-mobile" id="imagesContainer">
                </div>
                
                <div class="columns is-multiline is-mobile">
                    <div class="column is-12">
                        <p class="field">                        
                            <label class="checkbox">
                                <input type="checkbox" checked="checked">
                                Save as an Album?
                            </label>
                            <input class="input" type="text" placeholder="Album Name"/>
                        </p>
                        <p class="field has-text-centered">
                            <button class="button">
                                    <span class="icon">
                                      <i class="fa fa-times"></i>
                                    </span>
                                <span>Cancel</span>
                            </button>
                            <button class="button is-success" id="uploadButton">
                                    <span class="icon is-small">
                                      <i class="fa fa-check"></i>
                                    </span>
                                <span>Upload</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;