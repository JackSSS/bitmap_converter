# Bitmap Converter

This code reads a bitmap in from disk, performs a color transform on the bitmap and then write it out to a new file. This project will requires the use of node buffers in order to manipulate binary data .

##The process:

+ Open file using fs and read it into a buffer
+ Convert buffer into a Javascript Object
+ Run a transform on that Javascript Object.
+ Turn the transformed object back into a buffer.
+ Write that buffer to a new file.
