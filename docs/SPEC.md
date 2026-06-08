# Workflow Templates Specification

This document describes the formal specification for Hanzo Studio workflow templates.

## Overview

Workflow templates consist of:
1. A workflow JSON file (`template_name.json`)
2. One or more thumbnail images (`template_name-1.webp`, `template_name-2.webp`, etc.)
3. Metadata entry in `index.json`

## File Structure

```
templates/
├── index.json                 # Template metadata index
├── index.schema.json          # JSON schema for validation
├── template_name.json         # Workflow definition
├── template_name-1.webp       # Primary thumbnail
└── template_name-2.webp       # Optional secondary thumbnail
```

## index.json Schema

The `index.json` file is an array of category objects. See `templates/index.schema.json` for the formal schema.

### Category Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `moduleName` | string | ✅ | Module identifier (e.g., "default") |
| `title` | string | ✅ | Display name for the category |
| `type` | string | ❌ | Optional type hint: "image", "video", "audio", "3d" |
| `category` | string | ❌ | Category label (e.g., "GENERATION TYPE") |
| `icon` | string | ❌ | Icon class (e.g., "icon-[lucide--star]") |
| `isEssential` | boolean | ❌ | Whether this is a Getting Started category |
| `templates` | array | ✅ | Array of template objects |

### Template Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Workflow filename without .json extension |
| `title` | string | ❌ | Optional display title |
| `description` | string | ✅ | Brief description of the workflow |
| `mediaType` | string | ✅ | Output type: "image", "video", "audio", "3d" |
| `mediaSubtype` | string | ✅ | Thumbnail format: "webp", "mp3", "mp4", etc. |
| `thumbnailVariant` | string | ❌ | Hover effect: "compareSlider", "hoverDissolve", "hoverZoom", "zoomHover" |
| `tutorialUrl` | string | ❌ | Link to documentation |
| `tags` | array of strings | ❌ | Categorization tags for filtering |
| `models` | array of strings | ❌ | Model names used by the workflow |
| `date` | string | ❌ | Creation/update date (YYYY-MM-DD format) |
| `size` | number | ❌ | Size of the template in bytes |
| `vram` | number | ❌ | VRAM requirement in bytes |
| `openSource` | boolean | ❌ | Whether the template is open source |
| `status` | string | ❌ | Lifecycle status: "active", "archived", "deprecated" |
| `requiresCustomNodes` | array of strings | ❌ | Custom node package IDs from the Custom Node Registry |
| `usage` | number | ❌ | Usage count |
| `searchRank` | number | ❌ | Search ranking score (0-1000, higher = better ranking) |
| `includeOnDistributions` | array of strings | ❌ | Distribution targets: "cloud", "local", "desktop", "mac", "windows" |
| `logos` | array of logo objects | ❌ | Logo overlays to display on the template thumbnail |

### Logo Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider` | string or array | ✅ | Provider name(s) matching `index_logo.json`. String for single, array for stacked logos. |
| `label` | string | ❌ | Custom label text. Defaults to provider names joined with " & " |
| `gap` | number | ❌ | Gap between stacked logos in pixels. Negative for overlap. Default: -6 |
| `position` | string | ❌ | Tailwind positioning classes (e.g., "top-2 left-2", "bottom-2 right-2") |
| `opacity` | number | ❌ | Opacity 0-1, default 0.85 |

## Naming Conventions

- **Workflow files**: Must match pattern `^[a-zA-Z0-9._-]+$` (letters, digits, dots, hyphens, underscores)
- **Thumbnails**: Must follow pattern `{name}-{number}.{extension}`
  - Number starts at 1
  - Extension matches `mediaSubtype`

## Thumbnail Requirements

### Required Thumbnails
- Every template MUST have at least one thumbnail: `{name}-1.{mediaSubtype}`
- Additional thumbnails are optional: `{name}-2.{mediaSubtype}`, etc.
- The `compareSlider` and `hoverDissolve` variants REQUIRE both `-1` and `-2` thumbnails

### Thumbnail Variants
- `compareSlider`: Shows before/after comparison
- `hoverDissolve`: Dissolves between two images on hover
- `hoverZoom`: Zooms in on hover
- `zoomHover`: Same as hoverZoom (legacy)

### File Size Guidelines
- Compress thumbnails to under 1MB when possible
- Use WebP format for images (better compression)
- Recommended resolution: 512x512 or 768x768 pixels

## Workflow JSON Requirements

Each workflow file must include:
1. Valid Hanzo Studio workflow JSON structure
2. Embedded model metadata for automatic downloads
3. Optional node version requirements

### Model Metadata Format

```json
{
  "properties": {
    "models": [
      {
        "name": "model_filename.safetensors",
        "url": "https://huggingface.co/...",
        "hash": "sha256_hash",
        "hash_type": "SHA256",
        "directory": "models/checkpoints"
      }
    ]
  }
}
```

## Validation

Run validation before submitting PRs:

```bash
python scripts/validate_templates.py
```

This validates:
- ✅ **All index*.json files** - Main + 10 locale variants (11 total: `index.json`, `index.ar.json`, `index.es.json`, `index.fr.json`, `index.ja.json`, `index.ko.json`, `index.pt-BR.json`, `index.ru.json`, `index.tr.json`, `index.zh.json`, `index.zh-TW.json`)
- ✅ JSON schema compliance for all fields
- ✅ File consistency (all referenced files exist)
- ✅ No duplicate template names
- ✅ Required thumbnails present
- ✅ Model metadata format compliance

## Adding New Templates

1. Create workflow and thumbnails following naming conventions
2. Add entry to `index.json` in appropriate category
3. Add template ID to `bundles.json` (required — CI enforces this)
4. Run validation script
5. Bump version in `pyproject.toml`
6. Submit PR

## Categories

Categories are defined in `templates/index.json`. Each category has a `moduleName`, `title`, and optional `category`, `icon`, and `isEssential` fields. See the Category Object table above for the full schema.
