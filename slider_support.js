const sliderSupport = function () {
  const sliderTimer = 5000;
  const slideImages = [...document.querySelectorAll('.slide-images')]
  const slider = document.getElementById("main-slider");
  const previousArrow = document.getElementById("previous-arrow");
  const nextArrow = document.getElementById("next-arrow")

  let startSliderLoop = setInterval(function() {
    sliderLoop('left');
  }, sliderTimer);

  function sliderLoop(direction) {
    slideImages.forEach(function(image) {
      const old_position = parseInt(image.style.right);
      const new_position = (direction === 'left') ? old_position + 100 : old_position - 100;

      if (new_position === 0) {
        image.style.zIndex = "500";
        image.style.right = "0";
      } else if (new_position > 100 || new_position < -100) {
        image.style.zIndex = "100";
        image.style.right = -old_position + "%";
      } else {
        image.style.zIndex = "100";
        image.style.right = new_position + "%";
      }
    })
  }

  const bindEvents = function () {
    previousArrow.addEventListener('click', function() {
      sliderLoop('left')
    })

    nextArrow.addEventListener('click', function() {
      sliderLoop('right');
    })

    slider.addEventListener('mouseover', function() {
      console.log('da')
      clearInterval(startSliderLoop);
    })

    slider.addEventListener('mouseout', function() {
      startSliderLoop = setInterval(function() {
        sliderLoop('left');
      }, sliderTimer)
    })
  }

  bindEvents();
}

window.onload = function() {
  sliderSupport()
}
