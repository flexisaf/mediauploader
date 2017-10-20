var mediaUploader = new Mu('modal');


const assignmentId = encodeURIComponent('MTH1')
const armId = 'a'
var std = encodeURIComponent('3089')
var ses = encodeURIComponent('2017/2018')
var kls = encodeURIComponent('JSS1');
// var uploadUrl = `http://parent.safsms.cloud/api/v1/assignment-submissions/upload?assignment-id=MTH1&student-id=${std}&arm-id=CD&session-id=${ses}&term-id=FIRST&klass-id=${kls}&subject-code=101`
var uploadUrl = `http://127.0.0.1:8080/api/v1/photo-album/upload/Convocation`
document.getElementById('showUploader').addEventListener('click', function(event) {
    document.getElementById('modal').style.display = 'block';
    mediaUploader.initialize(uploadUrl);
});


mediaUploader.closeHandler(function(event) {
    document.getElementById('modal').style.display = 'none';
})