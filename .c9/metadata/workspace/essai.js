{"filter":false,"title":"essai.js","tooltip":"/essai.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["this.Videos = new FilesCollection({","  /* .. other options .. */","  collectionName: 'Videos',","  onAfterUpload: function(fileRaf) {","    var formats, sourceFile;","    sourceFile = ffmpeg(fileRef.path).noProfile();","    formats = {","      ogg: true,","      mp4: true,","      webm: true","    };","    _.each(formats, function(convert, format) {","      var file, upd, version;","      if (convert) {","        file = _.clone(sourceFile);","        version = file.someHowConvertVideoAndReturnFileData(format);","        upd = {","          $set: {}","        };","        upd['$set']['versions.' + format] = {","          path: version.path,","          size: version.size,","          type: version.type,","          extension: version.extension","        };","        return Videos.update(fileRef._id, upd);","      }","    });","  }","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":8},"end":{"row":15,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1469620273325,"hash":"01f7ea1190b03d8873a3bd689ef59e29d4dd9300"}