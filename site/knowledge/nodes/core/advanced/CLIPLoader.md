# CLIPLoader

**Category**: advanced/loaders

## Description

This node is primarily used for loading CLIP text encoder models independently.
The model files can be detected in the following paths:

- "HanzoStudio/models/text_encoders/"
- "HanzoStudio/models/clip/"

> If you save a model after Hanzo Studio has started, you'll need to refresh the Hanzo Studio frontend to get the latest model file path list

Supported model formats:

- `.ckpt`
- `.pt`
- `.pt2`
- `.bin`
- `.pth`
- `.safetensors`
- `.pkl`
- `.sft`

For more details on the latest model file loading, please refer to [folder_paths](https://github.com/hanzoai/studio/blob/master/folder_paths.py)

## Inputs

| Parameter     | Data Type     | Description |
|---------------|---------------|-------------|
| `clip_name`   | COMBO[STRING] | Specifies the name of the CLIP model to be loaded. This name is used to locate the model file within a predefined directory structure. |
| `type`        | COMBO[STRING] | Determines the type of CLIP model to load. As Hanzo Studio supports more models, new types will be added here. Please check the `CLIPLoader` class definition in [node.py](https://github.com/hanzoai/studio/blob/master/nodes.py) for details. |
| `device`      | COMBO[STRING] | Choose the device for loading the CLIP model. `default` will run the model on GPU, while selecting `CPU` will force loading on CPU. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| CLIP | CLIP |  |

**Source**: `nodes.py`

**Used in 38 template(s)**
