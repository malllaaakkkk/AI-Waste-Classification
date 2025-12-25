# Waste Classification AI - Computer Vision Project

## Project Overview
This project implements a computer vision system for automated waste classification. Using deep learning techniques, the model categorizes waste materials into three classes: metal, paper, and plastic. The system provides a complete pipeline from data preparation through model deployment with comprehensive testing capabilities.

## Key Features
- Multi-class classification of waste materials
- Complete machine learning pipeline (data augmentation, training, evaluation, testing)
- Visual reporting with confidence graphs and prediction visualizations
- Easy-to-use testing interface for new images
- Data augmentation to improve model generalization
- Transfer learning using MobileNetV2 architecture

## Project Structure
```
AI-Waste-Classification/
├── datasets/                    # Dataset directories
│   ├── original/              # Original waste dataset
│   ├── augmented/             # Augmented images
│   ├── merged/                # Combined datasets
│   └── split/                 # Train/validation/test splits
├── scripts/                   # Python scripts
│   ├── data_augmentation.py   # Data augmentation
│   ├── merge_datasets.py      # Dataset merging
│   ├── split_dataset.py       # Dataset splitting
│   ├── train_model.py         # Model training
│   └── test.py               # Model testing
├── models/                    # Saved models
│   └── best_model.h5         # Trained model
├── assets/                    # Test assets
│   ├── test_images/          # Test images directory
│   ├── predicted_images/     # Generated visualizations
│   └── test_results/         # Output reports
├── requirements.txt          # Dependencies
└── README.md                # Documentation
```

## Installation Requirements

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Install Dependencies
```bash
pip install -r requirements.txt
```

## Dataset Preparation

### 1. Organize Your Dataset
Create the following directory structure:
```
datasets/original/waste_dataset/
├── metal/
│   ├── metal1.jpg
│   ├── metal2.jpg
│   └── ...
├── paper/
│   ├── paper1.jpg
│   ├── paper2.jpg
│   └── ...
└── plastic/
    ├── plastic1.jpg
    ├── plastic2.jpg
    └── ...
```

### 2. Run the Data Pipeline
Execute the scripts in order:

```bash
# Step 1: Data Augmentation (Optional)
python scripts/data_augmentation.py

# Step 2: Merge Datasets
python scripts/merge_datasets.py

# Step 3: Split Dataset
python scripts/split_dataset.py

# Step 4: Train Model
python scripts/train_model.py

# Step 5: Test Model
python scripts/test.py
```

## Model Architecture

The classification model is built on MobileNetV2 with transfer learning:

- **Base Model**: MobileNetV2 (pre-trained on ImageNet)
- **Custom Layers**: 
  - GlobalAveragePooling2D
  - Dense(128, activation='relu')
  - Dense(3, activation='softmax')
- **Input Size**: 224x224 pixels
- **Optimizer**: Adam (learning rate: 1e-4)
- **Loss Function**: Categorical Crossentropy
- **Training Strategy**: 
  - 15 epochs with early stopping
  - 70% training, 15% validation, 15% test split
  - Data augmentation during training

## Testing the Model

### How to Test with Custom Images

1. Place your test images in the `assets/test_images/` folder
2. Supported formats: JPG, PNG, JPEG
3. Run the test script:
   ```bash
   python test.py
   ```

### Output Files

After testing, the following files are generated:

1. **Visual Predictions**: `assets/predicted_images/`
   - Images annotated with prediction labels and confidence bars
   
2. **Detailed Report**: `assets/test_results/predictions_details.csv`
   - CSV file with prediction details for each image
   - Includes class probabilities and confidence scores

3. **Summary Report**: `assets/test_results/summary_report.txt`
   - Statistical summary of predictions
   - Class distribution and confidence metrics

### Expected Output Format
```
Starting prediction on test images...
==================================================
Image 1: test_image.jpg
   Predicted: metal
   Confidence: 95.23%
   Probabilities: Metal=95.2%, Paper=3.1%, Plastic=1.7%
--------------------------------------------------
```

## Performance Metrics

Typical model performance:
- **Training Accuracy**: 95-98%
- **Validation Accuracy**: 92-95%
- **Test Accuracy**: 90-94%
- **Average Confidence**: 85-95%

## Dependencies

The project requires the following Python packages:

```
tensorflow>=2.8.0
numpy>=1.21.0
matplotlib>=3.5.0
pandas>=1.4.0
Pillow>=9.0.0
tabulate>=0.8.0
scikit-learn>=1.0.0
```

## Script Descriptions

### 1. data_augmentation.py
Applies data augmentation techniques to increase dataset size:
- Rotation, shifting, zooming
- Horizontal flipping
- Brightness adjustment
- Generates 20 augmented copies per original image

### 2. merge_datasets.py
Combines original and augmented datasets into a single dataset for training.

### 3. split_dataset.py
Splits the merged dataset into training (70%), validation (15%), and test (15%) sets.

### 4. train_model.py
Main training script:
- Loads and preprocesses data
- Builds MobileNetV2 model with custom layers
- Trains with early stopping and model checkpointing
- Evaluates on test set
- Saves best model as `models/best_model.h5`

### 5. test.py
Testing and evaluation script:
- Loads trained model
- Processes test images
- Generates predictions and visualizations
- Creates comprehensive reports

## Usage Instructions

### Training from Scratch
1. Prepare your dataset in the correct structure
2. Run the pipeline scripts in sequence
3. Monitor training progress in the console
4. Find the trained model in `models/best_model.h5`

### Using Pre-trained Model
1. Ensure `best_model.h5` exists in the models folder
2. Place test images in `assets/test_images/`
3. Run `python test.py`
4. Check results in the output folders

## File Requirements for Testing

To test the model, you need:
1. `best_model.h5` - Trained model file
2. `test.py` - Testing script
3. `test_images/` - Folder containing test images

## Troubleshooting

### Common Issues

1. **Model not found error**:
   - Ensure `best_model.h5` exists in the correct location
   - Run the training script first if the model file is missing

2. **Memory errors during training**:
   - Reduce batch size in `train_model.py`
   - Use fewer augmented images

3. **Import errors**:
   - Verify all dependencies are installed: `pip install -r requirements.txt`
   - Check Python version compatibility

4. **Image loading errors**:
   - Ensure images are in supported formats (JPG, PNG, JPEG)
   - Check file permissions and paths

## Model Limitations

1. **Classes**: Currently supports only three waste categories
2. **Image Quality**: Performance may degrade with low-quality or blurry images
3. **Background**: Complex backgrounds may affect classification accuracy
4. **Lighting**: Variations in lighting conditions can impact predictions

## Extending the Project

To add more waste categories:
1. Add new class folders to the dataset structure
2. Update the `classes` list in all scripts
3. Modify the final dense layer to output the new number of classes
4. Retrain the model with the expanded dataset

## Citation

If you use this project in your research or work, please cite:
```
Waste Classification AI - Computer Vision System

```



## Version History

- v1.0.0: Initial release with three-class waste classification
- Includes complete training and testing pipeline
- MobileNetV2-based model architecture
- Comprehensive reporting and visualization

---
