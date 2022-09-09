new Vivus(
    'my-svg',
    {
      type: 'delayed',
      duration: 100,
      animTimingFunction: Vivus.EASE
    }, function(obj){
      obj.el.classList.add("finished")
    }
  );