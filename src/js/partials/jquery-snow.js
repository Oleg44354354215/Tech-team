(function ($) {
  $.fn.snow = function (options) {
    // Налаштування за замовчуванням
    var defaults = {
      flakeChar: '&#10052;', // Символ сніжинки
      minSize: 10, // Мінімальний розмір сніжинки
      maxSize: 20, // Максимальний розмір сніжинки
      newOn: 800, // Інтервал створення нової сніжинки (мс)
      flakeColor: ['#ffffff'], // Кольори сніжинок
    };

    var settings = $.extend({}, defaults, options);

    // Шаблон для сніжинки
    var $flake = $('<div class="flake" />').css({
      position: 'fixed', // Фіксоване положення, щоб сніг не рухався зі скролом
      top: '-50px',
      zIndex: 9999,
      pointerEvents: 'none', // Не заважають взаємодії з іншими елементами
    });

    $flake.html(settings.flakeChar);

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    // Інтервал створення сніжинок
    var interval = setInterval(function () {
      var startPositionLeft = Math.random() * windowWidth,
        startOpacity = 0.6 + Math.random() * 0.4,
        sizeFlake =
          settings.minSize +
          Math.random() * (settings.maxSize - settings.minSize),
        endPositionTop = windowHeight + 50,
        endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
        durationFall = 13000 + Math.random() * 5000; // Плавне падіння (10-15 секунд)

      $flake
        .clone()
        .appendTo('body')
        .css({
          left: startPositionLeft,
          opacity: startOpacity,
          'font-size': sizeFlake,
          color:
            settings.flakeColor[
              Math.floor(Math.random() * settings.flakeColor.length)
            ],
        })
        .animate(
          {
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.2,
          },
          durationFall,
          'linear',
          function () {
            $(this).remove();
          }
        );
    }, settings.newOn);
  };
})(jQuery);

// Запускаємо анімацію
$(document).ready(function () {
  $(document).snow({
    flakeChar: '&#10052;', // Символ сніжинки
    maxSize: 20, // Максимальний розмір сніжинок
    newOn: 1000, // Інтервал створення нової сніжинки
    flakeColor: ['#ffffff', '#cce6ff', '#f0f0f0'], // Вибір кольорів
  });
});
