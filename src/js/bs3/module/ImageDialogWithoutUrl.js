define([
  'summernote/base/core/key',
  'summernote/bs3/module/ImageDialog'
], function (key, ImageDialog) {
  var ImageDialogWithoutUrl = function (context) {
      var dialogBody = '<div class="form-group note-group-select-from-files">' +
                       '<label>' +  '</label>' +
                       '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' +
                     '</div>';
      ImageDialog.call(this, context, dialogBody);
  };
  
  return ImageDialogWithoutUrl;
});
