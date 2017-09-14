var mediaUploader = new window.Mu('modal');
var uploadUrl = 'http://192.168.100.46:8080/distinction-2.0-alpha2/api/orgs/1/candidates/bulk'
mediaUploader.show(uploadUrl);
mediaUploader.registerEvents();