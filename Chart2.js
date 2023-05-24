const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'WhatsApp','Snapchat'],
    datasets: [{
      label: 'Social Media Downloads By Users',
      data: [413, 400, 308, 922, 2240, 383],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});