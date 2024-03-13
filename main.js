function copyText() {
   var copyText = document.getElementById("copyText");
   var clipboard = new ClipboardJS('.btn', {
      text: function () {
         return copyText.textContent;
      }
   });

   clipboard.on('success', function (e) {
      alert("Text copied successfully!");
      e.clearSelection();
   });

   clipboard.on('error', function (e) {
      alert("Failed to copy text!");
   });
}