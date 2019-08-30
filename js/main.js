var app = new Vue({
    el: '#app',
    data: {
        departamento: '',
        municipio:0,
    },
    mounted() {
        axios.post('https://ws2v.tse.org.gt/api/tse/resultados', {
            PROCESO: '201902',
            TIPOELECCION: '1',
            DEP: '0',
            MUN: '0',
        })
            .then(function (response) {
                console.log(response.data.data['0']);

                var ctx = document.getElementById('myChart').getContext('2d');

                var une = response.data.data['0'].V2;
                var vamos = response.data.data['0'].V1;


                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['UNE', 'VAMOS'],
                        datasets: [{
                            label: 'Grafica Presidencial',
                            data: [une, vamos],
                            backgroundColor: [
                                'rgba(49, 199, 74, 0.9)',
                                'rgba(54, 162, 235, 0.9)',
                                
                            ],
                            borderColor: [
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            
            
          })
          .catch (function (error) {
    console.log(error);
});

    },
    methods: {
        Departamentos(){
            axios.post('https://ws2v.tse.org.gt/api/tse/resultados', {
            PROCESO: '201902',
            TIPOELECCION: '1',
            DEP: this.departamento,
            MUN: '0',
        })
            .then(function (response) {
                console.log(response.data.data['0']);

                var ctx = document.getElementById('myChart2').getContext('2d');

                var une = response.data.data['0'].V2;
                var vamos = response.data.data['0'].V1;


                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['UNE', 'VAMOS'],
                        datasets: [{
                            label: 'Grafica Presidencial',
                            data: [une, vamos],
                            backgroundColor: [
                                'rgba(49, 199, 74, 0.9)',
                                'rgba(54, 162, 235, 0.9)',
                                
                            ],
                            borderColor: [
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            
            
          })
          .catch (function (error) {
    console.log(error);
});

        }
    }
  });