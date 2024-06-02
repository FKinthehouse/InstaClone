import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
FilePond.registerPlugin(FilePondPluginFileValidateType,FilePondPluginImagePreview);
// FilePond.registerPlugin(FilePondPluginImagePreview);
document.addEventListener("turbo:load",LoadFilePond)
function LoadFilePond(){
const inputElement = document.querySelector('#post-images');
const pond = FilePond.create(inputElement,{
    credits:{},
    storeAsFile: false,
    allowMultiple: true,
    allowReorder: true,
    acceptedFileTypes: ['image/*']
});}