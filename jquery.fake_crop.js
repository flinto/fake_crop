// Generated by CoffeeScript 1.6.3
(function() {
  jQuery.fn.fakeCrop = function() {
    var fakeCrop,
      _this = this;
    fakeCrop = function(wrap) {
      var dimension, final, img, initial, offset, offsetDirection, otherDimension, _ref, _ref1;
      wrap.css({
        overflow: 'hidden'
      });
      img = wrap.find('img');
      img.css({
        marginLeft: "",
        marginTop: "",
        width: "",
        height: ""
      });
      initial = {
        width: img[0].width,
        height: img[0].height
      };
      final = {
        width: wrap.width(),
        height: wrap.height()
      };
      initial.ratio = initial.width / initial.height;
      final.ratio = final.width / final.height;
      if (initial.ratio === final.ratio) {
        img.width(final.width);
      } else {
        if (initial.ratio < final.ratio) {
          _ref = ['width', 'height', 'top'], dimension = _ref[0], otherDimension = _ref[1], offsetDirection = _ref[2];
        } else {
          _ref1 = ['height', 'width', 'left'], dimension = _ref1[0], otherDimension = _ref1[1], offsetDirection = _ref1[2];
        }
        img[dimension](final[dimension]);
        offset = (img[otherDimension]() - final[otherDimension]) / -2;
        img.css("margin-" + offsetDirection, "" + offset + "px");
      }
      return img.show();
    };
    $(this).each(function(i, e) {
      return fakeCrop($(e));
    });
    return $(this);
  };

}).call(this);