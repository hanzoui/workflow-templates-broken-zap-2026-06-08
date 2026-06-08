# CLIPVisionLoader

**Category**: loaders

## Description

This node automatically detects models located in the `HanzoStudio/models/clip_vision` folder, as well as any additional model paths configured in the `extra_model_paths.yaml` file. If you add models after starting Hanzo Studio, please **refresh the Hanzo Studio interface** to ensure the latest model files are listed.

## Inputs

| Field       | Data Type      | Description |
|-------------|---------------|-------------|
| `clip_name` | COMBO[STRING]  | Lists all supported model files in the `HanzoStudio/models/clip_vision` folder. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| CLIP_VISION | CLIP_VISION |  |

**Source**: `nodes.py`

**Used in 11 template(s)**
