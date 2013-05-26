var filename;



var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';
      

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
      largeImage.src = imageData;
     
      uploadPhoto(imageData);
      
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
       console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');
      var deleteImage = document.getElementById('deleteImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';
      deleteImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
  
   
      uploadPhoto(imageURI);
     

    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI, targetWidth: 500, targetHeight: 500 });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source, targetWidth: 500, targetHeight: 500});
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
     // alert('Failed because: ' + message);
    }
    
    
    /*
     * 
     * upload photo
     * 
     */
    
    function uploadPhoto(imageURI) {
    
    	 	genFilename = new Date().getTime() + "." + "jpg";
    	 	$("#newName").val(genFilename);
			
    	
    	//var mobileimage = new FileUploadOptions();
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName="image";
            options.mimeType="image/jpeg";

            var params = {};
            params.userImageContentType = "jpg";
            //params.userImageFileName = "param.jpg";
            params.imagename = genFilename;

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI("http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/sendPicture.action"), win, fail, options);
            //console.log(options);
            
            
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
     
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
    
      //  alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    

	
function generateImageName(){

	 
}
	
	$("#resetBtn").click(function(){
		$("#name").val('');
		$("#number").val('');
		$("#description").val('');
		$("#company").val($("#company option:first").val());
		//$("#company").val(1);
		//$("#date").val($.datepicker.formatDate('dd.mm.yy', new Date()));
		$('#addPicture').prop('src','/HMS_odfjell/pictures/camera_take.png');
		$("#picText").html("Add picture");
	});
	
	function removePhoto(){
	      var largeImage = document.getElementById('largeImage');
	      var deleteImage = document.getElementById('deleteImage');
	      largeImage.style.display = 'none';
	      deleteImage.style.display = 'none';
	      $("#newName").val("");
	      
	}
	
