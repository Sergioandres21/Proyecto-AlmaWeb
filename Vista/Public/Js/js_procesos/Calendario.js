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

      events : [
        {
            title  : 'Cita limpieza fácial',
            start  : '2021-07-14 11:00:00',
            allDay : false
        },
        {
            title  : 'Cita depilación con cera',
            start  : '2021-07-10 10:30:00',
            allDay: false,
        },
        {
            title  : 'Cita masaje de relajación',
            start  : '2021-07-09 12:30:00',
            allDay : false // will make the time show
        }
    ]

    });
    calendar.render();
  });