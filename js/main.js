 function downloadFile(filename, content) {

     const element = document.createElement('a');

     const blob = new Blob([content], { type: 'plain/text' });

     const fileUrl = URL.createObjectURL(blob);

     element.setAttribute('href', fileUrl);
     element.setAttribute('download', filename + '.txt');

     filename = document.getElementById('filename').value = '';


     element.click();
 };






 window.onload = () => {
     document.getElementById('download').
     addEventListener('click', ese => {

         const filename = document.getElementById('filename').value;

         const content = document.getElementById('text').value;

         if (filename && content) {
             downloadFile(filename, content);
         }
     });
 };

 let namee = document.getElementById('namee');
 let list = document.getElementById('list');

 function settings() {

     let check = list.style.display;

     if (check == 'block') {
         namee.style.display = 'block';
         list.style.display = 'none';
     } else {
         list.style.display = 'block';
         namee.style.display = 'none';
     }
 }

 let text = document.getElementById('text');

 function my_fonts(font) {
     if (font == 'Architects') {
         text.style.fontFamily = 'Architects Daughter', cursive;
     }
     if (font == 'Playball') {
         text.style.fontFamily = 'Playball', cursive;
     }
     if (font == 'Syne_Mono') {
         text.style.fontFamily = 'Syne Mono', monospace;
     }
 }

 function my_fonts_style(font_style) {
     if (font_style == 'italic') {
         text.style.fontStyle = 'italic';
     }
     if (font_style == 'normal') {
         text.style.fontStyle = 'normal';
     }
 }


 function my_fonts_weight(font_weight) {
     if (font_weight == 'light') {
         text.style.fontWeight = 'lighter';
     }
     if (font_weight == 'bold') {
         text.style.fontWeight = 'bold';
     }
 }