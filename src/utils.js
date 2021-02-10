export const validSquareImage = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = (e) => {
      const image = new Image();

      image.src = e.target.result;

      image.onload = () => {
        const width = this.width;
        const height = this.height;

        if (width / height > 1.1) {
            reject("A imagem não é quadrada");
            return;
        }

        resolve();
      };
    };
  });
};
