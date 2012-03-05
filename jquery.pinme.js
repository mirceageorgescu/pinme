/*!
 * pinme
 * Copyright (c) 2012 Mircea Georgescu <mircea.georgescu@gmail.com>
 * MIT Licensed
 */

(function ($) {
  $.fn.pinme = function(className) {
    var self = this,
      top = this.offset().top-2,
      addPh = true,
      ph = $('<div>'),
      win = $(window);

    win.on('scroll', function(){
      if(win.scrollTop() > top){
        if (!addPh) return;
        ph.css({ height: self.height() + 'px' });
        self.parent().prepend(ph).end().addClass(className);
        addPh = false;
      } else {
        ph.remove();
        self.removeClass(className);
        addPh = true;
      }
    });
    return this;
  };
})(jQuery);