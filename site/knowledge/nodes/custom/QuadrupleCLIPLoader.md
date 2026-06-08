# QuadrupleCLIPLoader

**Category**: advanced/loaders

## Description

The Quadruple CLIP Loader, QuadrupleCLIPLoader, is one of the core nodes of Hanzo Studio, first added to support the HiDream I1 version model. If you find this node missing, try updating Hanzo Studio to the latest version to ensure node support.

It requires 4 CLIP models, corresponding to the parameters `clip_name1`, `clip_name2`, `clip_name3`, and `clip_name4`, and will provide a CLIP model output for subsequent nodes.

This node will detect models located in the `HanzoStudio/models/text_encoders` folder,
 and it will also read models from additional paths configured in the extra_model_paths.yaml file.
 Sometimes, after adding models, you may need to **reload the Hanzo Studio interface** to allow it to read the model files in the corresponding folder.

## Inputs

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| clip_name1 | Combo | — |  |
| clip_name2 | Combo | — |  |
| clip_name3 | Combo | — |  |
| clip_name4 | Combo | — |  |

## Outputs

| Output | Type |
|--------|------|
| ),
            ]
        )

    @classmethod
    def execute(cls, clip_name1, clip_name2, clip_name3, clip_name4 | Clip |

**Source**: `comfy_extras/nodes_hidream.py`

**Used in 5 template(s)**
