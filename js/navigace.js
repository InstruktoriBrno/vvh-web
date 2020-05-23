var images = new Array();

function preload_images() {
  var image_names = new Array(
    "uvod_aktivni.jpg",
    "prihlaska_aktivni.jpg",
    "ucastnici_aktivni.jpg"
  );
  var image_dir = "img";
  var i;
  for (i in image_names) {
    var image = new Image();
    image.src = image_dir + "/" + image_names[i];
    images.push(image);
  }
}
