# RecraftControls

**Category**: api node/image/Recraft

**Display Name**: Recraft Controls

## Description

> This documentation was AI-generated. If you find any errors or have suggestions for improvement, please feel free to contribute! [Edit on GitHub](https://github.com/hanzoui/embedded-docs/blob/main/hanzo_studio_embedded_docs/docs/RecraftControls/en.md)

Creates Recraft Controls for customizing Recraft generation. This node allows you to configure color settings that will be used during the Recraft image generation process.

## Inputs

| Parameter | Data Type | Required | Range | Description |
|-----------|-----------|----------|-------|-------------|
| `colors` | COLOR | No | - | Color settings for the main elements |
| `background_color` | COLOR | No | - | Background color setting |

## Outputs

| Output Name | Data Type | Description |
|-------------|-----------|-------------|
| `recraft_controls` | CONTROLS | The configured Recraft controls containing color settings |

**Source**: `comfy_api_nodes/nodes_recraft.py`

**Used in 3 template(s)**
