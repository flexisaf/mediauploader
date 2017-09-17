var mediaUploader = new window.Mu('modal');
const assignmentId = encodeURIComponent('001')
const armId = 'a'
var std = encodeURIComponent('CSS/016/0010')
var ses = encodeURIComponent('2016/2017')
var kls = encodeURIComponent('GRD 1');
// var uploadUrl = `http://192.168.100.12:8080/api/v1/assignment-submissions/upload?assignment-id=001&student-id=${std}&arm-id=a&session-id=${ses}&term-id=THIRD&klass-id=${kls}&subject-code=MATHS`
var uploadUrl = `http://192.168.0.100:8080/api/v1/photo-album/upload/001`
mediaUploader.show(uploadUrl);
mediaUploader.registerEvents();