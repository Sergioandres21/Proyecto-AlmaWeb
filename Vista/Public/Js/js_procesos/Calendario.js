 /*Inicializar calendario */
 document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      
      /* Cambiar de idioma a español */
      locale:"es",

      /* Agregar botónes */
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },

      dateClick:function(info){
        $("#evento").modal("show");
      },

    });
    calendar.render();
  });
