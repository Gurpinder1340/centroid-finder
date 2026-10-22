ImageSummaryApp.java Notes:

- This is the main file that runs the program. It loads an a image, finds the pixels close to a target color. 

What the code does:
- Takes image path and target color.
- Provides three arguments
- Loads the image:UsesinputImage = ImageIO.read(new File(inputImagePath));
- black and white image: Uses code: DistanceImageBinarizer to turn the image black and white. 

