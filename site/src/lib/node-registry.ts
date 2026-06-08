/**
 * Registry of Hanzo Studio custom nodes and their package information.
 * Used to identify which custom nodes a workflow requires and provide
 * installation links via Hanzo Manager.
 */

export interface CustomNodeInfo {
  package: string;
  url: string;
  description?: string;
}

/**
 * Hanzo Manager base URL for installing custom nodes
 */
export const COMFYUI_MANAGER_INSTALL_URL = 'https://github.com/ltdrdata/ComfyUI-Manager#how-to-use';

/**
 * Built-in Hanzo Studio node types that don't require custom node installation.
 * These are included in the base Hanzo Studio installation.
 */
export const BUILTIN_NODE_TYPES = new Set([
  // Core nodes
  'KSampler',
  'KSamplerAdvanced',
  'KSamplerSelect',
  'SamplerCustomAdvanced',
  'CheckpointLoaderSimple',
  'CLIPLoader',
  'CLIPTextEncode',
  'CLIPVisionLoader',
  'CLIPVisionEncode',
  'VAELoader',
  'VAEDecode',
  'VAEDecodeTiled',
  'VAEEncode',
  'UNETLoader',
  'DualCLIPLoader',
  'LoraLoader',
  'LoraLoaderModelOnly',
  'LoadImage',
  'SaveImage',
  'PreviewImage',
  'LoadVideo',
  'SaveVideo',
  'CreateVideo',
  'LoadAudio',
  'EmptyLatentImage',
  'EmptySD3LatentImage',
  'LatentUpscale',
  'ImageScale',
  'ImageScaleToTotalPixels',
  'ImageCrop',
  'ImageBatch',
  'ImageFromBatch',
  'ConditioningCombine',
  'ConditioningZeroOut',
  'ConditioningSetMask',
  'ControlNetLoader',
  'ControlNetApply',
  'CFGGuider',
  'BasicGuider',
  'BasicScheduler',
  'RandomNoise',
  'FluxGuidance',
  'ModelSamplingSD3',
  'ModelSamplingAuraFlow',
  'Canny',
  'MaskToImage',
  'ImageToMask',
  'SolidMask',
  'InvertMask',
  'CropMask',
  'FeatherMask',
  'GrowMask',

  // Utility/UI nodes
  'Note',
  'MarkdownNote',
  'Reroute',
  'PrimitiveNode',
  'PrimitiveInt',
  'PrimitiveFloat',
  'PrimitiveStringMultiline',
  'PreviewAny',
  'Preview3D',

  // Data types (not actual nodes, but type identifiers)
  'CLIP',
  'VAE',
  'MODEL',
  'LATENT',
  'IMAGE',
  'VIDEO',
  'AUDIO',
  'CONDITIONING',
  'CONTROL_NET',
  'STRING',
  'INT',
  'FLOAT',
  'BOOLEAN',
  'MASK',
  'SIGMAS',
  'SAMPLER',
  'NOISE',
  'GUIDER',
  'COMBO',
  'INT,FLOAT',
  'CLIP_VISION',
  'CLIP_VISION_OUTPUT',
  'MESH',
  'VOXEL',

  // Wan/Video nodes (built-in with Hanzo Studio video support)
  'WanImageToVideo',
  'WanFirstLastFrameToVideo',

  // LTX nodes (built-in)
  'LTXVConditioning',
  'LTXVImgToVideoInplace',
  'LTXVSeparateAVLatent',
  'LTXVConcatAVLatent',
  'LTXVLatentUpsampler',
  'LTXVEmptyLatentAudio',
  'LTXVAudioVAELoader',
  'LTXVAudioVAEDecode',
  'LTXAVTextEncoderLoader',
  'EmptyLTXVLatentVideo',

  // Flux nodes (built-in)
  'Flux2Scheduler',
  'EmptyFlux2LatentImage',

  // API nodes (built-in cloud API integrations)
  'GeminiImage2Node',
  'GeminiNode',
  'KlingStartEndFrameNode',
]);

/**
 * Mapping of custom node types to their package information.
 * Key: node type as it appears in workflow JSON
 * Value: package info with GitHub repo URL
 */
export const CUSTOM_NODE_REGISTRY: Record<string, CustomNodeInfo> = {
  // Hanzo Studio Essentials
  'SimpleMath+': {
    package: 'HanzoStudio_essentials',
    url: 'https://github.com/cubiq/HanzoStudio_essentials',
    description: 'Essential utility nodes including math operations',
  },
  GetImageSize: {
    package: 'HanzoStudio_essentials',
    url: 'https://github.com/cubiq/HanzoStudio_essentials',
    description: 'Essential utility nodes missing from Hanzo Studio core',
  },
  ResizeAndPadImage: {
    package: 'HanzoStudio_essentials',
    url: 'https://github.com/cubiq/HanzoStudio_essentials',
    description: 'Essential utility nodes missing from Hanzo Studio core',
  },
  ImageBatchMulti: {
    package: 'HanzoStudio_essentials',
    url: 'https://github.com/cubiq/HanzoStudio_essentials',
    description: 'Essential utility nodes missing from Hanzo Studio core',
  },
  BatchImagesNode: {
    package: 'HanzoStudio_essentials',
    url: 'https://github.com/cubiq/HanzoStudio_essentials',
    description: 'Essential utility nodes missing from Hanzo Studio core',
  },

  // Qwen Image nodes
  TextEncodeQwenImageEditPlus: {
    package: 'HanzoStudio-QwenVL-Nodes',
    url: 'https://github.com/ZHO-ZHO-ZHO/HanzoStudio-QwenVL-Nodes',
    description: 'Qwen Vision-Language model integration',
  },

  // Reference/Style nodes
  ReferenceLatent: {
    package: 'HanzoStudio-Reference-Latent',
    url: 'https://github.com/Clybius/HanzoStudio-Reference-Latent',
    description: 'Reference latent conditioning for style transfer',
  },

  // CFG utilities
  CFGNorm: {
    package: 'HanzoStudio-CFGNorm',
    url: 'https://github.com/Clybius/HanzoStudio-CFGNorm',
    description: 'CFG normalization for improved generation quality',
  },

  // Regex utilities
  RegexReplace: {
    package: 'HanzoStudio-Custom-Scripts',
    url: 'https://github.com/pythongosssss/HanzoStudio-Custom-Scripts',
    description: 'UI enhancements and utility scripts for Hanzo Studio',
  },
  RegexExtract: {
    package: 'HanzoStudio-Custom-Scripts',
    url: 'https://github.com/pythongosssss/HanzoStudio-Custom-Scripts',
    description: 'UI enhancements and utility scripts for Hanzo Studio',
  },

  // Video helpers
  GetVideoComponents: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },
  VHS_BatchManager: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },
  VHS_VIDEOINFO: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },
  VHS_LoadVideo: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },
  VHS_VideoCombine: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },
  VHS_VideoInfo: {
    package: 'HanzoStudio-VideoHelperSuite',
    url: 'https://github.com/Kosinkadink/HanzoStudio-VideoHelperSuite',
    description: 'Video loading, combining, and processing nodes',
  },

  // Audio nodes
  SaveAudioMP3: {
    package: 'HanzoStudio-AudioScheduler',
    url: 'https://github.com/a1lazydog/HanzoStudio-AudioScheduler',
    description: 'Audio processing and scheduling nodes for animation control',
  },

  // Manual sigmas
  ManualSigmas: {
    package: 'HanzoStudio-sampler-scheduler-transforms',
    url: 'https://github.com/WASasquatch/ComfyUI-sampler-scheduler-transforms',
    description: 'Custom sampler and scheduler transform utilities',
  },

  // Latent upscale
  LatentUpscaleModelLoader: {
    package: 'HanzoStudio-LatentUpscaler',
    url: 'https://github.com/city96/HanzoStudio-LatentUpscaler',
    description: 'Neural network-based latent space upscaling',
  },

  // Ultimate SD Upscale
  UltimateSDUpscale: {
    package: 'HanzoStudio_UltimateSDUpscale',
    url: 'https://github.com/ssitu/HanzoStudio_UltimateSDUpscale',
    description: 'Tiled upscaling with SD models',
  },

  // Impact Pack nodes
  SAMLoader: {
    package: 'HanzoStudio-Impact-Pack',
    url: 'https://github.com/ltdrdata/ComfyUI-Impact-Pack',
    description: 'Detector and detailer nodes for automatic facial enhancement and iterative upscaling',
  },
  SAMDetectorCombined: {
    package: 'HanzoStudio-Impact-Pack',
    url: 'https://github.com/ltdrdata/ComfyUI-Impact-Pack',
    description: 'Detector and detailer nodes for automatic facial enhancement and iterative upscaling',
  },
  FaceDetailer: {
    package: 'HanzoStudio-Impact-Pack',
    url: 'https://github.com/ltdrdata/ComfyUI-Impact-Pack',
    description: 'Detector and detailer nodes for automatic facial enhancement and iterative upscaling',
  },
  DetailerForEach: {
    package: 'HanzoStudio-Impact-Pack',
    url: 'https://github.com/ltdrdata/ComfyUI-Impact-Pack',
    description: 'Detector and detailer nodes for automatic facial enhancement and iterative upscaling',
  },

  // ControlNet Aux
  CannyEdgePreprocessor: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },
  DepthAnythingPreprocessor: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },
  OpenPosePreprocessor: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },
  LineArtPreprocessor: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },
  DWPreprocessor: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },
  PixelPerfectResolution: {
    package: 'hanzo_studio_controlnet_aux',
    url: 'https://github.com/Fannovel16/hanzo_studio_controlnet_aux',
    description: 'Plug-and-play preprocessors for generating ControlNet hint images',
  },

  // IP-Adapter
  IPAdapterUnifiedLoader: {
    package: 'HanzoStudio_IPAdapter_plus',
    url: 'https://github.com/cubiq/HanzoStudio_IPAdapter_plus',
    description: 'Image conditioning via IPAdapter models for style and composition transfer',
  },
  IPAdapterApply: {
    package: 'HanzoStudio_IPAdapter_plus',
    url: 'https://github.com/cubiq/HanzoStudio_IPAdapter_plus',
    description: 'Image conditioning via IPAdapter models for style and composition transfer',
  },

  // AnimateDiff
  AnimateDiffLoader: {
    package: 'HanzoStudio-AnimateDiff-Evolved',
    url: 'https://github.com/Kosinkadink/HanzoStudio-AnimateDiff-Evolved',
    description: 'AnimateDiff motion module integration for video generation',
  },
  AnimateDiffModuleLoader: {
    package: 'HanzoStudio-AnimateDiff-Evolved',
    url: 'https://github.com/Kosinkadink/HanzoStudio-AnimateDiff-Evolved',
    description: 'AnimateDiff motion module integration for video generation',
  },

  // Florence2
  Florence2: {
    package: 'HanzoStudio-Florence2',
    url: 'https://github.com/kijai/HanzoStudio-Florence2',
    description: 'Florence2 vision-language model for object detection, captioning, segmentation, and OCR',
  },

  // InstantID
  InstantIDFaceAnalysis: {
    package: 'HanzoStudio_InstantID',
    url: 'https://github.com/cubiq/HanzoStudio_InstantID',
    description: 'Native InstantID face identity preservation for consistent character generation',
  },
  ApplyInstantID: {
    package: 'HanzoStudio_InstantID',
    url: 'https://github.com/cubiq/HanzoStudio_InstantID',
    description: 'Native InstantID face identity preservation for consistent character generation',
  },

  // Segment Anything
  GroundingDinoSAMSegment: {
    package: 'hanzo_studio_segment_anything',
    url: 'https://github.com/storyicon/hanzo_studio_segment_anything',
    description: 'Text-prompted image segmentation using GroundingDINO and SAM',
  },

  // Frame Interpolation
  'FILM VFI': {
    package: 'HanzoStudio-Frame-Interpolation',
    url: 'https://github.com/Fannovel16/ComfyUI-Frame-Interpolation',
    description: 'Video frame interpolation for smooth slow-motion and frame rate conversion',
  },

  // Depth Anything V2
  DepthAnything_V2: {
    package: 'HanzoStudio-DepthAnythingV2',
    url: 'https://github.com/kijai/HanzoStudio-DepthAnythingV2',
    description: 'Depth Anything V2 monocular depth estimation',
  },
  DownloadAndLoadDepthAnythingV2Model: {
    package: 'HanzoStudio-DepthAnythingV2',
    url: 'https://github.com/kijai/HanzoStudio-DepthAnythingV2',
    description: 'Depth Anything V2 monocular depth estimation',
  },

  // Segment Anything 2
  Sam2Segmentation: {
    package: 'HanzoStudio-segment-anything-2',
    url: 'https://github.com/kijai/HanzoStudio-segment-anything-2',
    description: 'SAM 2 segmentation for images and video with point and box prompts',
  },
  DownloadAndLoadSAM2Model: {
    package: 'HanzoStudio-segment-anything-2',
    url: 'https://github.com/kijai/HanzoStudio-segment-anything-2',
    description: 'SAM 2 segmentation for images and video with point and box prompts',
  },
};

/**
 * Checks if a node type is a built-in Hanzo Studio node
 */
export function isBuiltinNode(nodeType: string): boolean {
  if (BUILTIN_NODE_TYPES.has(nodeType)) {
    return true;
  }

  // UUID-style types are subgraphs, not custom nodes
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(nodeType)) {
    return true;
  }

  // Pure type identifiers (all caps with optional underscores)
  if (/^[A-Z_]+$/.test(nodeType)) {
    return true;
  }

  return false;
}

/**
 * Gets custom node info for a node type, or undefined if it's built-in or unknown
 */
export function getCustomNodeInfo(nodeType: string): CustomNodeInfo | undefined {
  if (isBuiltinNode(nodeType)) {
    return undefined;
  }
  return CUSTOM_NODE_REGISTRY[nodeType];
}

/**
 * Extracts all node types from a Hanzo Studio workflow JSON
 */
export function extractNodeTypes(workflowJson: unknown): string[] {
  const nodeTypes = new Set<string>();

  if (typeof workflowJson !== 'object' || workflowJson === null) {
    return [];
  }

  const workflow = workflowJson as { nodes?: Array<{ type?: string }> };

  if (Array.isArray(workflow.nodes)) {
    for (const node of workflow.nodes) {
      if (typeof node.type === 'string' && node.type) {
        nodeTypes.add(node.type);
      }
    }
  }

  return Array.from(nodeTypes).sort();
}

/**
 * Identifies required custom nodes from a workflow
 */
export function identifyRequiredNodes(
  workflowJson: unknown
): Array<{ nodeType: string; info: CustomNodeInfo }> {
  const nodeTypes = extractNodeTypes(workflowJson);
  const requiredNodes: Array<{ nodeType: string; info: CustomNodeInfo }> = [];
  const seenPackages = new Set<string>();

  for (const nodeType of nodeTypes) {
    const info = getCustomNodeInfo(nodeType);
    if (info && !seenPackages.has(info.package)) {
      seenPackages.add(info.package);
      requiredNodes.push({ nodeType, info });
    }
  }

  return requiredNodes;
}
