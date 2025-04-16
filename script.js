window.onload = function () {
    document.getElementById('themeToggle').addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  
    document.getElementById('downloadPDF').addEventListener('click', function () {
      const element = document.querySelector('.container');
      const options = {
        margin: 0.5,
        filename: 'ozgecmis.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
  
      html2pdf().set(options).from(element).save();
    });
  };
  