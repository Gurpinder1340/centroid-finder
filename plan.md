
# Plan

## Goal
Our goal is to make our Centroid Finder work with MP4 videos. The program will read video frames, find the largest centroid, and save the time and x, y coordinates in a CSV file. If no centroid is found, we will use (-1, -1).

## Our Plan
We will create some new classes:
- **VideoProcessorOptions:** Read the command-line arguments.
- **VideoFrameExtractor:** Get frames from the video.
- **VideoProcessor:** Use our existing code to find the largest centroid in each frame.
- **CsvWriter:** Save the results in a CSV file.
- **VideoProcessorApp:** Connect everything and run the program.

## Existing Code
We will reuse our existing classes like `DistanceImageBinarizer`, `DfsBinaryGroupFinder`, and `BinarizingImageGroupFinder`. We will not change them unless we find bugs.

## Architecture

```text
VideoProcessorApp
    v
VideoProcessorOptions
    v
VideoFrameExtractor
    v
VideoProcessor
    v
Existing Centroid Finder
    v
CsvWriter
    v
output.csv
```

## Testing
We will test the command-line arguments, video frames, centroid results, and CSV output. We will also check if the program uses (-1, -1) when no centroid is found.