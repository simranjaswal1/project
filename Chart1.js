const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'WhatsApp','Snapchat'],
    datasets: [{
      label: 'Social Media Downloads by Users',
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